const TARGET_SAMPLE_RATE = 16000;
const HISTORY_KEY = "putonghua_web_history_v1";
const SIMULATE_SECONDS = 180;

const TOPICS = [
  topic(1, "我的童年", "回忆你的童年生活、趣事和难忘的记忆", [
    "描述童年居住环境和生活状态",
    "分享一件印象深刻的童年趣事",
    "谈谈对你影响最深的童年经历",
    "比较童年与现在生活的变化",
  ]),
  topic(2, "难忘的旅行", "讲述一次令你印象深刻的旅行经历", [
    "说明旅行目的地、时间和同行人员",
    "描述旅途中最难忘的见闻和体验",
    "谈谈这次旅行带给你的感受和收获",
    "推荐这个地方并说明理由",
  ]),
  topic(3, "我尊敬的人", "介绍一位你尊敬的人及其原因", [
    "介绍这个人的基本情况",
    "描述他/她让你印象深刻的品质或事迹",
    "讲述他/她对你产生的影响",
    "表达你的敬意和学习之处",
  ]),
  topic(4, "谈谈卫生与健康", "就个人或社会的卫生健康问题发表看法", [
    "谈谈健康生活方式",
    "分析卫生健康问题",
    "介绍你的健康习惯",
    "提出改善公众卫生的建议",
  ]),
  topic(5, "我喜爱的文学艺术形式", "介绍你喜欢的一种文学或艺术形式", [
    "说明你喜欢的形式",
    "分享具体作品或作者",
    "描述它带给你的感受",
    "谈谈对生活或思想的影响",
  ]),
  topic(6, "谈谈个人修养", "就个人素质和道德修养发表看法", [
    "谈谈对个人修养的理解",
    "分析良好修养的重要性",
    "举例说明有修养的人",
    "分享提升自身修养的经验",
  ]),
  topic(7, "我的学习生活", "描述你的学习经历和日常学习状态", [
    "介绍学习阶段和内容",
    "分享学习方法和习惯",
    "谈谈困难及解决方法",
    "说说学习带来的乐趣和收获",
  ]),
  topic(8, "谈谈科技发展与社会生活", "讨论科技进步对人们日常生活的影响", [
    "举例说明科技改变生活",
    "分析便利与挑战",
    "谈谈人工智能、互联网影响",
    "展望未来科技趋势",
  ]),
  topic(9, "我的假日生活", "描述你在节假日的活动安排和休闲方式", [
    "介绍通常如何度过假期",
    "描述喜欢的假日活动",
    "谈谈放松的重要性",
    "分享愉快的假期经历",
  ]),
  topic(10, "谈谈体育运动", "就体育运动的意义和个人运动经历发表看法", [
    "介绍喜欢的运动项目",
    "谈谈运动的好处",
    "分享参与体育活动经历",
    "讨论中国体育事业发展",
  ]),
  topic(11, "我的朋友", "介绍你的一位好友及你们之间的情谊", [
    "描述朋友的性格特点",
    "回忆认识和相处故事",
    "谈谈友谊的重要性",
    "分享你对友谊的理解",
  ]),
  topic(12, "谈谈饮食文化", "就中国或地方饮食文化进行介绍和探讨", [
    "介绍家乡特色饮食",
    "谈谈中国饮食地域差异",
    "分享喜欢的食物和故事",
    "讨论健康饮食的重要性",
  ]),
  topic(13, "我向往的地方", "介绍一个你渴望去或已去过的地方", [
    "描述自然风光或人文特色",
    "说明向往原因",
    "想象或描述当地生活",
    "谈谈旅行的意义",
  ]),
  topic(14, "谈谈环境保护", "就当前环境问题和环保行动发表看法", [
    "分析主要环境问题",
    "谈谈环境问题影响",
    "分享日常环保行动",
    "提出解决建议",
  ]),
  topic(15, "童年的游戏", "回忆并介绍你童年时玩过的游戏", [
    "描述小时候喜欢的游戏",
    "介绍规则和玩法",
    "回忆玩耍的快乐时光",
    "比较传统游戏和电子游戏",
  ]),
  topic(16, "谈谈服饰", "就服装文化和穿着打扮发表看法", [
    "谈谈时尚和穿衣风格",
    "介绍传统服饰文化",
    "分享个人穿衣偏好",
    "讨论服饰与个人形象关系",
  ]),
  topic(17, "我的家庭", "介绍你的家庭成员和家庭生活", [
    "描述家庭成员和结构",
    "谈谈成员之间关系",
    "分享家庭故事",
    "谈谈家庭对成长的影响",
  ]),
  topic(18, "谈谈职业与理想", "就职业选择和人生理想发表看法", [
    "介绍职业或理想职业",
    "谈谈选择原因和规划",
    "分析工作与价值实现",
    "讨论职业发展趋势",
  ]),
  topic(19, "谈谈购物", "就购物方式和消费观念发表看法", [
    "比较传统购物和网购",
    "分享购物习惯和消费理念",
    "谈谈消费主义影响",
    "介绍特别的购物经历",
  ]),
  topic(20, "谈谈交通", "就交通出行方式和城市交通问题发表看法", [
    "介绍常用出行方式",
    "分析交通拥堵及方案",
    "谈谈交通工具变化",
    "讨论绿色出行意义",
  ]),
  topic(21, "谈谈节日与风俗", "介绍中国传统节日和民俗文化", [
    "介绍喜欢的节日及来历",
    "描述节日习俗",
    "谈谈传统节日现代意义",
    "分享家乡风俗",
  ]),
  topic(22, "谈谈科学与迷信", "就科学精神与迷信现象发表看法", [
    "分析迷信表现",
    "谈谈科学思维意义",
    "举例科学破除迷信",
    "讨论培养科学精神",
  ]),
  topic(23, "我的兴趣爱好", "介绍你的兴趣爱好及其对你的影响", [
    "描述喜欢的兴趣爱好",
    "说明如何培养",
    "分享乐趣和收获",
    "谈谈兴趣与生活工作的关系",
  ]),
  topic(24, "谈谈城市与乡村", "比较城市和乡村的生活方式和特点", [
    "描述城乡生活特点",
    "分析城乡差距和变化",
    "谈谈城镇化影响",
    "分享你的体验和感受",
  ]),
  topic(25, "谈谈社会公德", "就公民道德和社会文明行为发表看法", [
    "谈谈社会公德理解",
    "举例不文明行为及危害",
    "分析提升公民素质途径",
    "分享践行社会公德经历",
  ]),
  topic(26, "谈谈学习普通话", "分享学习和使用普通话的经历与体会", [
    "介绍学习普通话过程",
    "分享困难和解决方法",
    "谈谈普通话重要性",
    "讨论推广普通话与保护方言",
  ]),
  topic(27, "谈谈个人的愿望与追求", "就个人理想、目标和人生追求发表看法", [
    "说明重要人生目标",
    "谈谈为实现愿望的努力",
    "分享未来规划",
    "讨论个人追求与社会责任",
  ]),
  topic(28, "谈谈电视", "就电视媒体和视听内容发表看法", [
    "介绍喜欢的节目类型",
    "分析电视对文化影响",
    "比较电视与网络视频",
    "谈谈媒体素养重要性",
  ]),
  topic(29, "谈谈美食", "介绍你喜爱的美食和饮食体验", [
    "介绍喜欢的一道菜",
    "分享家乡特色美食",
    "谈谈美食与地域文化",
    "描述印象深刻的美食体验",
  ]),
  topic(30, "谈谈互联网", "就互联网对现代生活的影响发表看法", [
    "介绍互联网改变生活方式",
    "分析机遇与挑战",
    "谈谈健康使用互联网",
    "讨论网络安全和个人信息保护",
  ]),
];

const $ = (id) => document.getElementById(id);

let selectedTopic = TOPICS[0];
let currentMode = "practice";
let isRecording = false;
let recordStartedAt = 0;
let timerInterval = null;
let iatSocket = null;
let iatResolveFinal = null;
let iatText = "";
let pcmRecorder = null;
let pcmChunks = [];
let latestResult = null;
let deferredInstallPrompt = null;

let iatSendQueue = [];
let isReconnectingIat = false;
let currentAppId = "";

function topic(id, title, description, tips) {
  return { id, title, description, tips };
}

function showView(viewId) {
  document
    .querySelectorAll(".view")
    .forEach((view) => view.classList.toggle("active", view.id === viewId));
  document
    .querySelectorAll(".tab-bar button")
    .forEach((btn) =>
      btn.classList.toggle("active", btn.dataset.tab === viewId),
    );
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (viewId === "historyView") renderHistory();
}

function toast(message, duration = 2600) {
  const el = $("toast");
  el.textContent = message;
  el.classList.remove("hidden");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => el.classList.add("hidden"), duration);
}

function formatSeconds(total) {
  const m = Math.floor(total / 60)
    .toString()
    .padStart(2, "0");
  const s = Math.floor(total % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
  } catch {
    return [];
  }
}

function setHistory(records) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(records));
  refreshStats();
}

function refreshStats() {
  const records = getHistory();
  $("totalSessions").textContent = records.length.toString();
  const scored = records.filter((r) => Number(r.overallScore) > 0);
  if (!scored.length) {
    $("avgScore").textContent = "--";
    return;
  }
  const avg =
    scored.reduce((sum, r) => sum + Number(r.overallScore), 0) / scored.length;
  $("avgScore").textContent = Math.round(avg).toString();
}

function renderTopics() {
  $("topicList").innerHTML = TOPICS.map(
    (t) => `
    <button class="topic-item" data-topic-id="${t.id}" type="button">
      <span class="topic-badge">${t.id}</span>
      <span>
        <h3>${escapeHtml(t.title)}</h3>
        <p>${escapeHtml(t.description)}</p>
      </span>
    </button>
  `,
  ).join("");

  document.querySelectorAll("[data-topic-id]").forEach((button) => {
    button.addEventListener("click", () =>
      startTopic(Number(button.dataset.topicId), "practice"),
    );
  });
}

function renderHistory() {
  const records = getHistory();
  if (!records.length) {
    $("historyList").innerHTML =
      '<div class="empty-state">暂无练习记录<br>完成一次练习后会出现在这里</div>';
    return;
  }

  $("historyList").innerHTML = records
    .map(
      (record) => `
    <article class="history-item">
      <span class="score-badge">${record.overallScore || "--"}</span>
      <div class="history-main">
        <h3>${escapeHtml(record.topicTitle)}</h3>
        <p>${new Date(record.timestamp).toLocaleString("zh-CN", { hour12: false })} · ${record.durationSeconds} 秒</p>
      </div>
      <button data-delete-record="${record.id}" type="button">删除</button>
    </article>
  `,
    )
    .join("");

  document.querySelectorAll("[data-delete-record]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.deleteRecord;
      setHistory(
        getHistory().filter((record) => String(record.id) !== String(id)),
      );
      renderHistory();
    });
  });
}

function startTopic(topicId, mode) {
  selectedTopic = TOPICS.find((t) => t.id === topicId) || TOPICS[0];
  currentMode = mode;
  latestResult = null;

  $("practiceMode").textContent =
    mode === "simulate" ? "模拟测试 · 3分钟倒计时" : "练习模式";
  $("practiceTopicNo").textContent = `第 ${selectedTopic.id} 题`;
  $("practiceTopicTitle").textContent = selectedTopic.title;
  $("practiceTopicDesc").textContent = selectedTopic.description;
  $("practiceTips").innerHTML = selectedTopic.tips
    .map((tip) => `<li>${escapeHtml(tip)}</li>`)
    .join("");
  $("timerText").textContent =
    mode === "simulate" ? formatSeconds(SIMULATE_SECONDS) : "00:00";
  $("timerHint").textContent =
    mode === "simulate" ? "模拟测试会在 3 分钟后自动结束" : "建议时长 3 分钟";
  $("transcriptionText").textContent = "";
  $("transcriptionCard").classList.add("hidden");
  $("analyzingCard").classList.add("hidden");
  $("recordBtn").textContent = "开始录音";
  $("recordBtn").classList.remove("recording");
  $("recordBtn").disabled = false;
  $("recordHint").textContent = "点击开始后，请允许麦克风权限。";

  showView("practiceView");
}

const STORAGE_KEYS = {
  APP_ID: "xf_app_id",
  API_KEY: "xf_api_key",
  API_SECRET: "xf_api_secret"
};

async function hmacSha256(key, message) {
  const encoder = new TextEncoder();
  const keyData = encoder.encode(key);
  const messageData = encoder.encode(message);
  
  const cryptoKey = await window.crypto.subtle.importKey(
    "raw",
    keyData,
    { name: "HMAC", hash: { name: "SHA-256" } },
    false,
    ["sign"]
  );
  
  const signature = await window.crypto.subtle.sign(
    "HMAC",
    cryptoKey,
    messageData
  );
  
  return btoa(String.fromCharCode(...new Uint8Array(signature)));
}

async function getAuthUrl(service) {
  const localAppId = localStorage.getItem(STORAGE_KEYS.APP_ID);
  const localApiKey = localStorage.getItem(STORAGE_KEYS.API_KEY);
  const localApiSecret = localStorage.getItem(STORAGE_KEYS.API_SECRET);

  if (localAppId && localApiKey && localApiSecret) {
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

    const s = SERVICES[service];
    if (!s) throw new Error(`不支持的服务：${service}`);

    const date = new Date().toUTCString();
    const signatureOrigin = `host: ${s.host}\ndate: ${date}\nGET ${s.path} HTTP/1.1`;
    const signature = await hmacSha256(localApiSecret, signatureOrigin);
    const authorizationOrigin = `api_key="${localApiKey}", algorithm="hmac-sha256", headers="host date request-line", signature="${signature}"`;
    const authorization = btoa(authorizationOrigin);

    const params = new URLSearchParams({
      authorization,
      date,
      host: s.host
    });

    return {
      appId: localAppId,
      authUrl: `${s.url}?${params.toString()}`
    };
  }

  try {
    const response = await fetch("/api/auth-url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ service }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "获取鉴权地址失败");
    }
    return data;
  } catch (error) {
    console.warn("Backend auth failed, client keys needed", error);
    throw new Error("检测到服务端不可用，请点击右上角【设置】配置您的讯飞 API 密钥以启动评测。");
  }
}

function createIatPayload(appId, status, audioBase64 = "") {
  if (status === 0) {
    return JSON.stringify({
      common: { app_id: appId },
      business: {
        language: "zh_cn",
        domain: "iat",
        accent: "mandarin",
        vad_eos: 5000,
      },
      data: {
        status,
        format: "audio/L16;rate=16000",
        encoding: "raw",
        audio: audioBase64,
      },
    });
  }

  return JSON.stringify({
    data: {
      status,
      format: "audio/L16;rate=16000",
      encoding: "raw",
      audio: audioBase64,
    },
  });
}

function createIsePayload(appId, status, audioBase64 = "", referenceText = "") {
  if (status === 0) {
    return JSON.stringify({
      common: { app_id: appId },
      business: {
        category: "read_chapter",
        ent: "cn_vip",
        tte: "utf-8",
        text: `\uFEFF${referenceText}`,
        rstcd: "utf8",
        extra_ability: "multi_dimension",
        ise_unite: "1",
        rst: "entirety",
      },
      data: {
        status,
        encoding: "raw",
        sample_rate: "audio/L16;rate=16000",
        data: audioBase64,
      },
    });
  }

  return JSON.stringify({
    data: {
      status,
      encoding: "raw",
      sample_rate: "audio/L16;rate=16000",
      data: audioBase64,
    },
  });
}

async function reconnectIat() {
  if (isReconnectingIat || !isRecording) return;
  isReconnectingIat = true;
  console.log("IAT WebSocket closed unexpectedly. Reconnecting...");
  try {
    const iat = await openIatSocket();
    iatSocket = iat.ws;
    console.log("IAT WebSocket reconnected successfully!");
  } catch (error) {
    console.error("IAT WebSocket reconnection failed:", error);
  } finally {
    isReconnectingIat = false;
  }
}

async function openIatSocket() {
  const { appId, authUrl } = await getAuthUrl("iat");
  currentAppId = appId;

  return new Promise((resolve, reject) => {
    const ws = new WebSocket(authUrl);
    let opened = false;

    ws.addEventListener("open", () => {
      opened = true;
      ws.send(createIatPayload(appId, 0));
      resolve({ ws, appId });
    });

    ws.addEventListener("message", (event) => {
      try {
        const payload = JSON.parse(event.data);
        if (payload.code !== 0) {
          console.warn("IAT error", payload);
          if (isRecording && ws === iatSocket) {
            reconnectIat();
          }
          return;
        }
        const words = payload.data?.result?.ws || [];
        const text = words
          .flatMap((w) => w.cw || [])
          .map((cw) => cw.w || "")
          .join("");
        if (text) {
          iatText += text;
          $("transcriptionText").textContent = iatText;
          $("transcriptionCard").classList.remove("hidden");
        }
        if (payload.data?.status === 2 && iatResolveFinal) {
          iatResolveFinal(iatText);
          iatResolveFinal = null;
        }
      } catch (error) {
        console.warn("解析 IAT 消息失败", error);
      }
    });

    ws.addEventListener("error", (err) => {
      if (!opened) {
        reject(new Error("IAT WebSocket 连接失败"));
      } else {
        console.error("IAT WebSocket runtime error:", err);
        if (isRecording && ws === iatSocket) {
          reconnectIat();
        }
      }
    });

    ws.addEventListener("close", (event) => {
      console.warn(`IAT WebSocket closed: code=${event.code}, reason=${event.reason}`);
      if (isRecording && ws === iatSocket) {
        reconnectIat();
      }
    });
  });
}

async function startRecording() {
  if (!window.isSecureContext) {
    toast(
      "录音需要 HTTPS 或 localhost。iPhone 真机请用 HTTPS 地址访问。",
      5000,
    );
    return;
  }
  if (!navigator.mediaDevices?.getUserMedia) {
    toast("当前浏览器不支持麦克风录音，请升级 Safari 或 Chrome。", 5000);
    return;
  }

  try {
    $("recordBtn").disabled = true;
    $("recordHint").textContent = "正在连接讯飞语音服务…";

    iatText = "";
    pcmChunks = [];
    iatSendQueue = [];
    isReconnectingIat = false;
    
    const iat = await openIatSocket();
    iatSocket = iat.ws;

    pcmRecorder = new PcmRecorder();
    await pcmRecorder.start((pcmBytes) => {
      pcmChunks.push(pcmBytes);
      if (iatSocket?.readyState === WebSocket.OPEN) {
        while (iatSendQueue.length > 0) {
          const qBytes = iatSendQueue.shift();
          iatSocket.send(createIatPayload(currentAppId, 1, bytesToBase64(qBytes)));
        }
        iatSocket.send(createIatPayload(currentAppId, 1, bytesToBase64(pcmBytes)));
      } else {
        iatSendQueue.push(pcmBytes);
        if (isRecording) {
          reconnectIat();
        }
      }
    });

    isRecording = true;
    recordStartedAt = Date.now();
    $("recordBtn").disabled = false;
    $("recordBtn").textContent = "结束录音";
    $("recordBtn").classList.add("recording");
    $("recordHint").textContent = "正在录音，请围绕题目连续说话…";
    startTimer();
  } catch (error) {
    console.error(error);
    cleanupRecording();
    $("recordBtn").disabled = false;
    toast(error.message || "启动录音失败");
  }
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - recordStartedAt) / 1000);
    if (currentMode === "simulate") {
      const remaining = Math.max(0, SIMULATE_SECONDS - elapsed);
      $("timerText").textContent = formatSeconds(remaining);
      if (remaining <= 0) {
        stopRecording();
      }
    } else {
      $("timerText").textContent = formatSeconds(elapsed);
    }
  }, 250);
}

async function stopRecording() {
  if (!isRecording) return;
  isRecording = false;
  clearInterval(timerInterval);
  $("recordBtn").disabled = true;
  $("recordBtn").classList.remove("recording");
  $("recordBtn").textContent = "分析中…";
  $("recordHint").textContent = "录音已结束，正在整理转写结果…";

  const durationSeconds = Math.max(
    1,
    Math.round((Date.now() - recordStartedAt) / 1000),
  );

  // 延迟 400ms 停止录音，以留出时间完整采集说话尾音
  await new Promise((resolve) => setTimeout(resolve, 400));
  pcmRecorder?.stop();

  const finalTextPromise = new Promise((resolve) => {
    iatResolveFinal = resolve;
    setTimeout(() => resolve(iatText), 2200);
  });

  try {
    const sendEndFrame = () => {
      while (iatSendQueue.length > 0) {
        const qBytes = iatSendQueue.shift();
        iatSocket.send(createIatPayload(currentAppId, 1, bytesToBase64(qBytes)));
      }
      iatSocket.send(createIatPayload("", 2));
    };

    if (iatSocket?.readyState === WebSocket.OPEN) {
      sendEndFrame();
    } else if (iatSendQueue.length > 0 || isReconnectingIat) {
      // 如果正在重新连接，等待最多 1.5 秒后发送
      let checkCount = 0;
      const checkInterval = setInterval(() => {
        if (iatSocket?.readyState === WebSocket.OPEN) {
          clearInterval(checkInterval);
          sendEndFrame();
        }
        checkCount++;
        if (checkCount > 15) {
          clearInterval(checkInterval);
        }
      }, 100);
    }
  } catch (error) {
    console.warn("发送 IAT 结束帧失败", error);
  }

  const finalText = ((await finalTextPromise) || iatText).trim();
  iatSocket?.close();
  iatSocket = null;

  if (!finalText) {
    $("recordBtn").disabled = false;
    $("recordBtn").textContent = "重新录音";
    $("recordHint").textContent = "未检测到有效语音内容，请重试。";
    toast("未检测到有效语音内容，请重试。");
    return;
  }

  $("analyzingCard").classList.remove("hidden");
  $("recordHint").textContent = "正在调用 AI 评测服务…";

  try {
    const [sparkResult, iseResult] = await Promise.allSettled([
      evaluateWithSpark(selectedTopic.title, finalText),
      evaluateWithIse(finalText, pcmChunks),
    ]);

    const feedback =
      sparkResult.status === "fulfilled"
        ? sparkResult.value.feedback
        : `AI 综合评测失败：${sparkResult.reason?.message || "未知错误"}`;
    const scores =
      sparkResult.status === "fulfilled"
        ? sparkResult.value.scores
        : fallbackScores(finalText, durationSeconds);
    const ise = iseResult.status === "fulfilled" ? iseResult.value : null;

    const result = {
      id: String(Date.now()),
      timestamp: Date.now(),
      topicId: selectedTopic.id,
      topicTitle: selectedTopic.title,
      durationSeconds,
      transcribedText: finalText,
      overallScore: scores.overall,
      pronunciationScore: scores.pronunciation,
      vocabularyScore: scores.vocabulary,
      fluencyScore: scores.fluency,
      pscLevel: scores.level,
      aiFeedback: feedback,
      ise,
    };

    latestResult = result;
    saveResult(result);
    renderResult(result);
    cleanupRecording();
    showView("resultView");
  } catch (error) {
    console.error(error);
    $("recordBtn").disabled = false;
    $("recordBtn").textContent = "重新录音";
    toast(error.message || "评测失败，请稍后重试");
  } finally {
    $("analyzingCard").classList.add("hidden");
  }
}

function cleanupRecording() {
  isRecording = false;
  clearInterval(timerInterval);
  pcmRecorder?.stop();
  pcmRecorder = null;
  iatSocket?.close();
  iatSocket = null;
}

async function evaluateWithSpark(topicTitle, speechText) {
  const { appId, authUrl } = await getAuthUrl("spark");
  const prompt = buildSparkPrompt(topicTitle, speechText);

  return new Promise((resolve, reject) => {
    const ws = new WebSocket(authUrl);
    let feedback = "";
    const timeout = setTimeout(() => {
      ws.close();
      reject(new Error("Spark 评测超时"));
    }, 45000);

    ws.addEventListener("open", () => {
      ws.send(
        JSON.stringify({
          header: {
            app_id: appId,
            uid: "pwa_user",
          },
          parameter: {
            chat: {
              domain: "4.0Ultra",
              temperature: 0.45,
              max_tokens: 1200,
            },
          },
          payload: {
            message: {
              text: [{ role: "user", content: prompt }],
            },
          },
        }),
      );
    });

    ws.addEventListener("message", (event) => {
      try {
        const payload = JSON.parse(event.data);
        const code = payload.header?.code;
        if (code !== 0) {
          clearTimeout(timeout);
          reject(
            new Error(payload.header?.message || `Spark 错误 code=${code}`),
          );
          ws.close();
          return;
        }
        const tokens = payload.payload?.choices?.text || [];
        for (const token of tokens) {
          feedback += token.content || "";
        }
        if (payload.header?.status === 2) {
          clearTimeout(timeout);
          ws.close();
          resolve({ feedback, scores: parseSparkScores(feedback) });
        }
      } catch (error) {
        clearTimeout(timeout);
        reject(error);
      }
    });

    ws.addEventListener("error", () => {
      clearTimeout(timeout);
      reject(new Error("Spark WebSocket 连接失败"));
    });
  });
}

async function evaluateWithIse(referenceText, chunks) {
  if (!chunks.length) return null;
  const { appId, authUrl } = await getAuthUrl("ise");

  return new Promise((resolve, reject) => {
    const ws = new WebSocket(authUrl);
    let xmlResult = "";
    let index = 0;
    let sendTimer = null;
    const timeout = setTimeout(() => {
      clearTimeout(sendTimer);
      ws.close();
      reject(new Error("ISE 评测超时"));
    }, 50000);

    const sendNextChunk = () => {
      if (index < chunks.length) {
        const chunk = chunks[index];
        ws.send(createIsePayload(appId, 1, bytesToBase64(chunk)));
        index += 1;
        // 16kHz * 16bit = 32000 bytes/s，即每 32 字节约 1ms
        const chunkDurationMs = Math.max(40, Math.round(chunk.length / 32));
        sendTimer = setTimeout(sendNextChunk, chunkDurationMs);
        return;
      }
      ws.send(createIsePayload(appId, 2));
    };

    ws.addEventListener("open", () => {
      ws.send(createIsePayload(appId, 0, "", referenceText));
      sendTimer = setTimeout(sendNextChunk, 40);
    });

    ws.addEventListener("message", (event) => {
      try {
        const payload = JSON.parse(event.data);
        if (payload.code !== 0) {
          clearTimeout(timeout);
          clearTimeout(sendTimer);
          reject(new Error(payload.message || `ISE 错误 code=${payload.code}`));
          ws.close();
          return;
        }
        const encoded = payload.data?.data;
        if (encoded) {
          xmlResult += new TextDecoder("utf-8").decode(base64ToBytes(encoded));
        }
        if (payload.data?.status === 2) {
          clearTimeout(timeout);
          clearTimeout(sendTimer);
          ws.close();
          resolve(parseIseXml(xmlResult));
        }
      } catch (error) {
        clearTimeout(timeout);
        reject(error);
      }
    });

    ws.addEventListener("error", () => {
      clearTimeout(timeout);
      clearTimeout(sendTimer);
      reject(new Error("ISE WebSocket 连接失败"));
    });
  });
}

function buildSparkPrompt(topicTitle, speechText) {
  return `你是一位专业的普通话水平测试（PSC）评测专家。请根据命题说话考试标准，对以下练习进行评分。\n\n【题目】${topicTitle}\n\n【考生说话内容】\n${speechText}\n\n请严格输出以下结构，每项满分100分：\n1. 语音标准程度评分：数字\n- 问题：\n- 建议：\n2. 词汇语法规范评分：数字\n- 问题：\n- 建议：\n3. 自然流畅程度评分：数字\n- 问题：\n- 建议：\n4. 综合评级：一级甲等/一级乙等/二级甲等/二级乙等/三级甲等/三级乙等\n5. 总体建议：给出2-3条最关键建议。\n\n评分应结合内容完整度、是否偏题、语句连贯性和普通话表达规范性。`;
}

function parseSparkScores(text) {
  const numberAfter = (keywords) => {
    for (const keyword of keywords) {
      const regex = new RegExp(`${keyword}[^0-9]{0,12}(\\d{1,3})`, "i");
      const match = text.match(regex);
      if (match) return clampScore(Number(match[1]));
    }
    return 0;
  };

  const pronunciation = numberAfter(["语音标准程度评分", "语音标准", "发音"]);
  const vocabulary = numberAfter(["词汇语法规范评分", "词汇语法", "语法"]);
  const fluency = numberAfter(["自然流畅程度评分", "自然流畅", "流畅"]);
  const overall = Math.round(
    pronunciation * 0.4 + vocabulary * 0.3 + fluency * 0.3,
  );
  const level =
    [
      "一级甲等",
      "一级乙等",
      "二级甲等",
      "二级乙等",
      "三级甲等",
      "三级乙等",
    ].find((item) => text.includes(item)) || levelFromScore(overall);

  return {
    pronunciation,
    vocabulary,
    fluency,
    overall,
    level,
  };
}

function fallbackScores(text, durationSeconds) {
  const lengthScore = Math.min(
    100,
    Math.max(45, Math.round(text.length / 2.2)),
  );
  const fluency = Math.min(88, Math.max(50, Math.round(durationSeconds / 1.8)));
  const vocabulary = Math.min(90, Math.max(55, lengthScore));
  const pronunciation = 0;
  const overall = Math.round(vocabulary * 0.45 + fluency * 0.35);
  return {
    pronunciation,
    vocabulary,
    fluency,
    overall,
    level: levelFromScore(overall),
  };
}

function levelFromScore(score) {
  if (score >= 97) return "一级甲等";
  if (score >= 92) return "一级乙等";
  if (score >= 87) return "二级甲等";
  if (score >= 80) return "二级乙等";
  if (score >= 70) return "三级甲等";
  return "三级乙等";
}

function clampScore(value) {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(100, Math.round(value)));
}

function parseIseXml(xml) {
  if (!xml) return null;
  const doc = new DOMParser().parseFromString(xml, "application/xml");
  const readValue = (...names) => {
    for (const name of names) {
      const node = doc.querySelector(name);
      const value = node?.getAttribute("value");
      if (value && !Number.isNaN(Number(value))) return Number(value);
    }
    return 0;
  };

  const words = [];
  const wordNodes = doc.querySelectorAll("word");
  wordNodes.forEach((node) => {
    const char = node.getAttribute("content") || "";
    // 排除标点符号与空白字符
    if (!char || /[\s\p{P}]/u.test(char)) return;

    const syllable = node.querySelector("syllable");
    const pinyin = syllable?.getAttribute("content") || "";
    
    // dp_message: 0 = 正常, 16 = 漏读, 32 = 重复, 64 = 错读
    const dpMessage = Number(
      node.getAttribute("dp_message") || 
      syllable?.getAttribute("dp_message") || 
      0
    );
    
    const accuracy = Number(
      node.getAttribute("accuracy_score") || 
      syllable?.getAttribute("accuracy_score") || 
      0
    );

    words.push({ char, pinyin, dpMessage, accuracy });
  });

  return {
    total: readValue("total_score"),
    accuracy: readValue("accuracy_score"),
    fluency: readValue("fluency_score"),
    completeness: readValue("completeness_score"),
    words,
  };
}

function renderResult(result) {
  $("resultTopicTitle").textContent =
    `第${result.topicId}题：${result.topicTitle}`;
  $("overallScore").textContent = result.overallScore || "--";
  $("pscLevel").textContent = result.pscLevel
    ? `预估等级：${result.pscLevel}`
    : "";
  $("durationText").textContent = `说话时长：${result.durationSeconds} 秒`;

  setScore("pronunciation", result.pronunciationScore);
  setScore("vocabulary", result.vocabularyScore);
  setScore("fluency", result.fluencyScore);

  if (result.ise?.total) {
    $("iseCard").classList.remove("hidden");
    $("iseTotal").textContent = result.ise.total.toFixed(1);
    $("iseAccuracy").textContent = result.ise.accuracy.toFixed(1);
    $("iseFluency").textContent = result.ise.fluency.toFixed(1);

    // 渲染逐字发音评测
    const detailBlock = $("iseDetailBlock");
    const container = $("iseWordsContainer");
    container.innerHTML = "";

    if (result.ise.words && result.ise.words.length > 0) {
      result.ise.words.forEach((w) => {
        const card = document.createElement("div");
        card.className = "ise-word-card";

        let statusClass = "good";
        let statusText = "标准";
        if (w.dpMessage === 16) {
          statusClass = "miss";
          statusText = "漏读";
        } else if (w.dpMessage === 32) {
          statusClass = "repeat";
          statusText = "重复";
        } else if (w.dpMessage === 64) {
          statusClass = "error";
          statusText = "错读";
        } else if (w.accuracy < 80) {
          statusClass = "fair";
          statusText = "偏弱";
        }

        card.classList.add(statusClass);
        card.setAttribute(
          "data-tooltip",
          `${w.char} [${w.pinyin || "无"}] - ${statusText} (得分: ${Math.round(w.accuracy)})`
        );

        const pinyinSpan = document.createElement("span");
        pinyinSpan.className = "ise-word-pinyin";
        pinyinSpan.textContent = w.pinyin || " ";

        const charSpan = document.createElement("span");
        charSpan.className = "ise-word-char";
        charSpan.textContent = w.char || "";

        card.appendChild(pinyinSpan);
        card.appendChild(charSpan);
        container.appendChild(card);
      });
      detailBlock.classList.remove("hidden");
    } else {
      detailBlock.classList.add("hidden");
    }
  } else {
    $("iseCard").classList.add("hidden");
  }

  $("aiFeedback").textContent = result.aiFeedback || "暂无反馈";
  $("finalTranscription").textContent =
    result.transcribedText || "未识别到内容";
}

function setScore(name, value) {
  $(`${name}Score`).textContent = value > 0 ? String(value) : "--";
  $(`${name}Progress`).value = value || 0;
}

function saveResult(result) {
  const records = getHistory();
  records.unshift(result);
  setHistory(records.slice(0, 100));
}

class PcmRecorder {
  constructor() {
    this.stream = null;
    this.audioContext = null;
    this.source = null;
    this.processor = null;
    this.active = false;
  }

  async start(onPcmChunk) {
    const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
    this.stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        channelCount: 1,
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true,
      },
    });
    this.audioContext = new AudioContextCtor();
    await this.audioContext.resume();
    this.source = this.audioContext.createMediaStreamSource(this.stream);
    this.processor = this.audioContext.createScriptProcessor(4096, 1, 1);
    this.active = true;

    this.processor.onaudioprocess = (event) => {
      if (!this.active) return;
      const input = event.inputBuffer.getChannelData(0);
      const downsampled = downsampleTo16k(input, this.audioContext.sampleRate);
      if (!downsampled.length) return;
      onPcmChunk(floatTo16BitPcm(downsampled));
    };

    this.source.connect(this.processor);
    this.processor.connect(this.audioContext.destination);
  }

  stop() {
    this.active = false;
    try {
      this.processor?.disconnect();
    } catch {}
    try {
      this.source?.disconnect();
    } catch {}
    try {
      this.stream?.getTracks().forEach((track) => track.stop());
    } catch {}
    try {
      this.audioContext?.close();
    } catch {}
    this.processor = null;
    this.source = null;
    this.stream = null;
    this.audioContext = null;
  }
}

function downsampleTo16k(buffer, inputRate) {
  if (inputRate === TARGET_SAMPLE_RATE) return buffer;
  const ratio = inputRate / TARGET_SAMPLE_RATE;
  const newLength = Math.round(buffer.length / ratio);
  const result = new Float32Array(newLength);
  let offsetResult = 0;
  let offsetBuffer = 0;

  while (offsetResult < result.length) {
    const nextOffsetBuffer = Math.round((offsetResult + 1) * ratio);
    let accum = 0;
    let count = 0;
    for (
      let i = offsetBuffer;
      i < nextOffsetBuffer && i < buffer.length;
      i += 1
    ) {
      accum += buffer[i];
      count += 1;
    }
    result[offsetResult] = count ? accum / count : 0;
    offsetResult += 1;
    offsetBuffer = nextOffsetBuffer;
  }
  return result;
}

function floatTo16BitPcm(float32Array) {
  const buffer = new ArrayBuffer(float32Array.length * 2);
  const view = new DataView(buffer);
  for (let i = 0; i < float32Array.length; i += 1) {
    const sample = Math.max(-1, Math.min(1, float32Array[i]));
    view.setInt16(i * 2, sample < 0 ? sample * 0x8000 : sample * 0x7fff, true);
  }
  return new Uint8Array(buffer);
}

function bytesToBase64(bytes) {
  let binary = "";
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    const chunk = bytes.subarray(i, i + chunkSize);
    binary += String.fromCharCode.apply(null, chunk);
  }
  return btoa(binary);
}

function base64ToBytes(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

function escapeHtml(str) {
  return String(str).replace(
    /[&<>'"]/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[char],
  );
}

function bindEvents() {
  $("practiceBtn").addEventListener("click", () => showView("topicsView"));
  $("simulateBtn").addEventListener("click", () => {
    const randomTopic = TOPICS[Math.floor(Math.random() * TOPICS.length)];
    startTopic(randomTopic.id, "simulate");
  });
  $("recordBtn").addEventListener("click", () =>
    isRecording ? stopRecording() : startRecording(),
  );
  $("againBtn").addEventListener("click", () =>
    startTopic(selectedTopic.id, "practice"),
  );
  $("practiceBackBtn").addEventListener("click", () => {
    if (isRecording && !confirm("正在录音，确定要退出吗？")) return;
    cleanupRecording();
    showView("topicsView");
  });
  $("clearHistoryBtn").addEventListener("click", () => {
    if (confirm("确定要清空所有练习记录吗？")) {
      setHistory([]);
      renderHistory();
    }
  });

  document.querySelectorAll("[data-back-home]").forEach((button) => {
    button.addEventListener("click", () => showView("homeView"));
  });
  document.querySelectorAll(".tab-bar button").forEach((button) => {
    button.addEventListener("click", () => showView(button.dataset.tab));
  });

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    $("installBtn").classList.remove("hidden");
  });
  $("installBtn").addEventListener("click", async () => {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
      $("installBtn").classList.add("hidden");
    } else {
      toast("iPhone 上可点击 Safari 分享按钮，然后选择“添加到主屏幕”。", 5000);
    }
  });

  const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const isStandalone =
    window.navigator.standalone === true ||
    window.matchMedia("(display-mode: standalone)").matches;
  if (isIos && !isStandalone) {
    $("installBtn").textContent = "添加到主屏幕";
    $("installBtn").classList.remove("hidden");
  }

  // Bind settings page events
  $("settingsBtn").addEventListener("click", () => {
    $("settingsAppId").value = localStorage.getItem(STORAGE_KEYS.APP_ID) || "";
    $("settingsApiKey").value = localStorage.getItem(STORAGE_KEYS.API_KEY) || "";
    $("settingsApiSecret").value = localStorage.getItem(STORAGE_KEYS.API_SECRET) || "";
    $("settingsModal").classList.remove("hidden");
  });

  $("closeSettingsBtn").addEventListener("click", () => {
    $("settingsModal").classList.add("hidden");
  });

  $("settingsModal").addEventListener("click", (event) => {
    if (event.target === $("settingsModal")) {
      $("settingsModal").classList.add("hidden");
    }
  });

  $("saveSettingsBtn").addEventListener("click", () => {
    const appId = $("settingsAppId").value.trim();
    const apiKey = $("settingsApiKey").value.trim();
    const apiSecret = $("settingsApiSecret").value.trim();

    if (!appId || !apiKey || !apiSecret) {
      toast("所有密钥字段均不能为空！");
      return;
    }

    localStorage.setItem(STORAGE_KEYS.APP_ID, appId);
    localStorage.setItem(STORAGE_KEYS.API_KEY, apiKey);
    localStorage.setItem(STORAGE_KEYS.API_SECRET, apiSecret);

    $("settingsModal").classList.add("hidden");
    toast("API 密钥配置已保存！");
  });
}

async function checkServerConfig() {
  const localAppId = localStorage.getItem(STORAGE_KEYS.APP_ID);
  const localApiKey = localStorage.getItem(STORAGE_KEYS.API_KEY);
  const localApiSecret = localStorage.getItem(STORAGE_KEYS.API_SECRET);

  if (localAppId && localApiKey && localApiSecret) {
    return; // Already configured client-side
  }

  try {
    const response = await fetch("/api/health");
    const data = await response.json();
    if (!data.configured) {
      toast("请点击右上角【设置】配置讯飞 API 密钥以启动评测功能。", 6000);
    }
  } catch {
    toast("请点击右上角【设置】配置讯飞 API 密钥以启动评测功能。", 6000);
  }
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").catch((error) => {
      console.warn("Service Worker 注册失败", error);
    });
  }
}

renderTopics();
renderHistory();
refreshStats();
bindEvents();
checkServerConfig();
registerServiceWorker();
