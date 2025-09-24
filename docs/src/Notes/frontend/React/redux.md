---
updateTime: "2025-03-11 01:38"
desc: "状态管理库"
tags: "组件/工具"
outline: 2
---
# redux

## 概念

redux 是一个用于管理应用程序状态的 JavaScript 库。它提供了一种可预测的方式来管理应用程序中的状态，并支持异步操作。

- 三大原则
  - 单一数据源
  - 状态只读
  - 使用纯函数来执行修改
- 核心概念
  - Store
  - Action
  - Reducer
- 数据流
  - view -> action -> reducer -> store -> view
- 中间件
  - 作用：用于扩展 Redux 的功能
  - 原理：中间件

## 安装

```bash
pnpm add react-use
```

## 文档地址

[https://redux-toolkit.js.org/tutorials/quick-start]
