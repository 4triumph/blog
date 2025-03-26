# react-use

## 概念

react-use 是一个用于 React 的 Hook 库，提供了许多常用的 Hook，如 useState、useEffect、useContext、useReducer 等。

## 核心概念

- useState：用于管理组件的状态。
- useEffect：用于执行副作用操作，如网络请求、订阅事件等。
- useContext：用于获取 Context 中的值。
- useReducer：用于管理复杂的状态逻辑。
- useCallback：用于缓存函数，避免不必要的渲染。
- useMemo：用于缓存计算结果，避免不必要的计算。
- useRef：用于获取 DOM 元素或保存可变值。
- useImperativeHandle：用于自定义暴露给父组件的实例值。
- useLayoutEffect：与 useEffect 类似，但在渲染前执行。
- useDebugValue：用于在 React DevTools 中显示自定义 Hook 的标签。
- useDeferredValue：用于延迟渲染，提高性能。
- useTransition：用于管理异步操作的状态。
- useId：用于生成唯一的 ID。

## 安装

```bash
pnpm add react-use
```
