---
updateTime: "2025-04-10 09:38"
desc: "人人都有小猫娘"
tags: "JavaScript"
outline: 2
---
# 在vitepress使用live2d-render

## 准备
先准备一个 live2d 模型，一个 live2d 模型通常是一个包含了如下几类文件的文件夹：

- xxx.moc3
- xxx.model3.json (配置文件，live2d 最先读取的就是这个文件，可以认为它是 live2d 模型的入口文件，里面列举了所有模型需要使用的静态资源的相对路径)
- ...

::: warning
如果文件名有空格，请用 - 代替
:::

> 模型版权申明：Lenore莱诺尔（B站：一个ayabe）

> 原使用教程为[锦恢](https://document.kirigaya.cn/docs/live2d-render/vuepress-install.html),因为没有vitepress的教程所以我记录一下

将模型文件夹放到项目的 public 文件夹下，那么模型的基本路径为：./cat/sdwhite cat b.model3.json。

## 安装
在public文件夹下，创建 public/live2d.js，写入如下代码：

```js
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
    console.log("finish load");
  }
}

launch();
window.onload = launch;
```

修改.vitepress/config.mjs
```js
 head: [
    ['script', { src: '/live2d.js'}],
  ],
```

然后启动项目
```bash
pnpm run docs:dev
```

效果如下:
![效果图](./image.png)
