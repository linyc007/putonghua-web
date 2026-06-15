import crypto from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = Number(process.env.PORT || 3000);

const XF_APP_ID = process.env.XF_APP_ID || '';
const XF_API_KEY = process.env.XF_API_KEY || '';
const XF_API_SECRET = process.env.XF_API_SECRET || '';

const SERVICES = {
  iat: {
    host: 'iat-api.xfyun.cn',
    path: '/v2/iat',
    url: 'wss://iat-api.xfyun.cn/v2/iat'
  },
  ise: {
    host: 'ise-api.xfyun.cn',
    path: '/v2/open-ise',
    url: 'wss://ise-api.xfyun.cn/v2/open-ise'
  },
  spark: {
    host: 'spark-api.xf-yun.com',
    path: '/v4.0/chat',
    url: 'wss://spark-api.xf-yun.com/v4.0/chat'
  }
};

app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false
}));
app.use(express.json({ limit: '1mb' }));
app.use(express.static(__dirname, {
  extensions: ['html'],
  maxAge: '1h'
}));

function assertConfigured() {
  if (!XF_APP_ID || !XF_API_KEY || !XF_API_SECRET) {
    const error = new Error('服务端未配置讯飞 API 密钥，请复制 .env.example 为 .env 并填写 XF_APP_ID / XF_API_KEY / XF_API_SECRET');
    error.statusCode = 500;
    throw error;
  }
}

function buildAuthUrl(serviceName) {
  assertConfigured();
  const service = SERVICES[serviceName];
  if (!service) {
    const error = new Error(`不支持的服务：${serviceName}`);
    error.statusCode = 400;
    throw error;
  }

  const date = new Date().toUTCString();
  const signatureOrigin = `host: ${service.host}\ndate: ${date}\nGET ${service.path} HTTP/1.1`;
  const signature = crypto
    .createHmac('sha256', XF_API_SECRET)
    .update(signatureOrigin, 'utf8')
    .digest('base64');

  const authorizationOrigin = `api_key="${XF_API_KEY}", algorithm="hmac-sha256", headers="host date request-line", signature="${signature}"`;
  const authorization = Buffer.from(authorizationOrigin, 'utf8').toString('base64');

  const params = new URLSearchParams({
    authorization,
    date,
    host: service.host
  });

  return `${service.url}?${params.toString()}`;
}

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    configured: Boolean(XF_APP_ID && XF_API_KEY && XF_API_SECRET),
    services: Object.keys(SERVICES)
  });
});

app.post('/api/auth-url', (req, res, next) => {
  try {
    const { service } = req.body || {};
    const authUrl = buildAuthUrl(service);
    res.json({
      appId: XF_APP_ID,
      service,
      authUrl,
      expiresHintSeconds: 300
    });
  } catch (error) {
    next(error);
  }
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use((err, _req, res, _next) => {
  const status = err.statusCode || 500;
  res.status(status).json({
    error: err.message || '服务器内部错误'
  });
});

app.listen(port, () => {
  console.log(`普通话 PWA 服务已启动：http://localhost:${port}`);
  console.log(`讯飞密钥配置状态：${XF_APP_ID && XF_API_KEY && XF_API_SECRET ? '已配置' : '未配置'}`);
});
