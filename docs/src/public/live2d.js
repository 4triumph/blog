if (window.hasLaunchLive2d === undefined) {
  window.hasLaunchLive2d = false;
}



function load(src) {
  const script = document.createElement("script");
  script.src = src;

  return new Promise((resolve, reject) => {
    script.onload = () => {
      console.log("finish loading lib from " + src);
      resolve();
    };
    script.onerror = (error) => {
      console.error("Error loading lib from " + src, error);
      reject(error);
    };
    document.head.appendChild(script);
  });
}

async function launch() {
  if (!document.getElementById("live2d") && window.hasLaunchLive2d === false) {
    window.hasLaunchLive2d = true;
    await load("https://cdn.jsdelivr.net/npm/live2d-render@0.0.5/bundle.js");
    const config = {
      BackgroundRGBA: [0.0, 0.0, 0.0, 0.0],
      ResourcesPath: "/cat/sdwhite-cat-free.model3.json",
      CanvasSize: {
        height: 500,
        width: 400,
      },
      loadIndex: 2,
      LoadFromCache: true,
      ShowToolBox: true,
    };
    const screenWidth = Math.round(screen.width * window.devicePixelRatio);
    const scaleRatio = Math.max(0.76, screenWidth / 3840);
    const configSize = config.CanvasSize;
    config.CanvasSize.height = configSize.height * scaleRatio;
    config.CanvasSize.width = configSize.width * scaleRatio;

    await Live2dRender.initializeLive2D(config);
    createMessageBox(); // 添加对话框
    greetUser(); // 自动问候
    addClickInteraction(); // 点击互动
    console.log("finish load");
  }
}


const live2dThemes = {
  default: {
    background: "linear-gradient(to right, #a78bfa, #c4b5fd)",
    color: "#fff",
    font: "'Comic Sans MS', 'Arial Rounded MT Bold', sans-serif'",
    triangleColor: "#a78bfa"
  },
  sakura: {
    background: "linear-gradient(to right, #f9a8d4, #f472b6)",
    color: "#fff",
    font: "'ZCOOL KuaiLe', sans-serif",
    triangleColor: "#f472b6"
  },
  ocean: {
    background: "linear-gradient(to right, #60a5fa, #38bdf8)",
    color: "#fff",
    font: "'ZCOOL KuaiLe', sans-serif",
    triangleColor: "#38bdf8"
  }
};

function greetUser() {
  const now = new Date();
  const hour = now.getHours();
  const month = now.getMonth() + 1; // 月份从 0 开始
  const date = now.getDate();
  let msg = "";

  // 🎉 节日问候（可继续扩展）
  const festivalMap = {
    "1-1": "新年快乐！愿你在新的一年里平安喜乐✨",
    "2-10": "春节快乐！大吉大利，万事如意🧧", // 示例：2024年春节
    "4-4": "清明安康，愿逝者安息，生者安好🌸",
    "5-1": "劳动节快乐！放松一下也是很重要的哦～💼",
    "6-10": "端午安康！记得吃粽子和赛龙舟哦🥟", // 示例：2024年端午
    "9-17": "中秋快乐！月圆人团圆🌕",
    "10-1": "国庆节快乐！祖国繁荣昌盛🎉",
    "12-25": "圣诞节快乐~希望你收到喜欢的礼物🎄🎁",
  };

  const key = `${month}-${date}`;
  if (festivalMap[key]) {
    msg = festivalMap[key];
  } else {
    if (hour < 6) msg = "凌晨好呀~ 还不睡的话要变熊猫眼啦 🐼";
    else if (hour < 9) msg = "早上好~ 新的一天也要加油哦！☀️";
    else if (hour < 12) msg = "上午好呀~ 喝口水，保持状态💧";
    else if (hour < 14) msg = "中午好~ 午饭吃了没呀？🍱";
    else if (hour < 18) msg = "下午好~ 工作学习顺利嘛？📚";
    else if (hour < 22) msg = "晚上好呀~ 今天也辛苦啦🌙";
    else msg = "夜深啦，早点休息哦~ 明天见💤";
  }

  window.__live2dMessage && window.__live2dMessage(msg);
}

function addClickInteraction() {
  const canvas = document.getElementById("live2d");
  if (!canvas) return;

  const messages = [
    "你点我干嘛呀~",
    "不可以摸头啦喵~",
    "今天又是充满元气的一天！",
    "老攻我在呢~",
    "你在看什么好内容嘛~",
  ];

  canvas.addEventListener("click", () => {
    const msg = messages[Math.floor(Math.random() * messages.length)];
    window.__live2dMessage && window.__live2dMessage(msg);
  });
}

function createMessageBox(theme = "default") {
  if (document.getElementById("live2d-message-box")) return;

  const t = live2dThemes[theme];

  const box = document.createElement("div");
  box.id = "live2d-message-box";
  Object.assign(box.style, {
    position: "fixed",
    bottom: "400px",
    right: "130px",
    maxWidth: "260px",
    background: t.background,
    color: t.color,
    padding: "12px 16px",
    borderRadius: "20px",
    fontSize: "14px",
    zIndex: 10000,
    display: "none",
    opacity: "0",
    transition: "opacity 0.3s ease",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    fontFamily: t.font
  });

  const triangle = document.createElement("div");
  Object.assign(triangle.style, {
    position: "absolute",
    bottom: "-10px",
    right: "20px",
    width: "0",
    height: "0",
    borderLeft: "8px solid transparent",
    borderRight: "8px solid transparent",
    borderTop: `10px solid ${t.triangleColor}`,
    filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.1))"
  });

  box.appendChild(triangle);
  document.body.appendChild(box);

  window.__live2dMessage = function (text, duration = 4000) {
    if (!box) return;
    box.firstChild?.nodeType === 3
      ? (box.firstChild.textContent = text)
      : box.insertBefore(document.createTextNode(text), box.firstChild);
    box.style.display = "block";
    box.style.opacity = "1";

    clearTimeout(window.__live2dHideTimer);
    window.__live2dHideTimer = setTimeout(() => {
      box.style.opacity = "0";
      setTimeout(() => (box.style.display = "none"), 300);
    }, duration);
  };
}


createMessageBox("sakura"); // or "default", "ocean"
launch();
window.onload = launch;
