# react-router
## Outlet
Outlet 是 React Router 中的一个组件，用于渲染嵌套路由的内容。

```js
<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="contact" element={<Contact />} />
</Route>;
```

在这个例子中，Layout 组件包含了 Outlet 组件，它会根据当前路由的路径渲染相应的子组件。

```js
function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;  
} 
function Contact() {
  return <h1>Contact</h1>;  
}

```

当访问 /about 时，Layout 组件会渲染 Header 和 Footer，然后 Outlet 组件会渲染 About 组件。

当访问 /contact 时，Layout 组件会渲染 Header 和 Footer，然后 Outlet 组件会渲染 Contact 组件。

当访问 / 时，Layout 组件会渲染 Header 和 Footer，然后 Outlet 组件会渲染 Home 组件。

## useParams 的作用

useParams 是 react-router-dom 提供的一个 Hook，用于获取 URL 路径中的动态参数。

```js
import { useParams } from "react-router-dom";
```

这行代码导入了 useParams，它可以获取当前 URL 路径中动态路由参数的值。

```js
const { memoId } = useParams();
```

这行代码使用 useParams 获取 URL 路径中的动态参数 memoId 的值，并将其存储在 memoId 变量中。

这里 useParams() 返回的是一个对象，对象中的键值对应 react-router-dom 路由定义中的参数。

```js
<Route path="/memo/:memoId" element={<MemoItem />} />
```

访问 /memo/3，则 useParams() 返回：

```js
{
  memoId: "3";
}
```

因此，memoId 变量的值就是 "3"（字符串）。

## useSearchParams 的作用

useSearchParams 是 React Router 提供的一个 Hook，用于获取 URL 中的查询参数。

```js
import { useSearchParams } from "react-router-dom";
const [searchParams, setSearchParams] = useSearchParams();
```

searchParams：获取当前 URL 中的查询参数（类似 window.location.search）。

setSearchParams：用于修改 URL 查询参数，不会刷新页面。

```js
const [searchItem, setSearchItem] = useState(searchParams.get("search") || "");
```

searchParams.get('search') 获取 URL 查询参数 search 的值。

searchItem 存储这个查询参数的初始值，如果 URL 没有 search 参数，则默认为 ''（空字符串）。

```js
function onChange(e) {
  const { value } = e.target;
  setSearchItem(value);
  setSearchParams({ search: value });
}
```

当用户输入内容时：
`setSearchItem(value)` 更新 searchItem 的状态。

`setSearchParams({ search: value })` 修改 URL 查询参数，例如：

```js
setSearchParams({ search: "hello" });
```

此时 URL 变为
`http://localhost:3000/?search=hello`
页面不会刷新，但 URL 会更新，方便在浏览器地址栏直接看到搜索内容。

useSearchParams 主要用于 管理 URL 查询参数，可以让 URL 直接反映用户的操作状态，使得页面支持刷新、分享、回溯等功能，而无需手动维护 useState 状态。

### 适用场景

- 搜索功能（保留用户输入）
- 筛选功能（URL 记录筛选条件）
- 分页功能（URL 记录当前页码）
- 分享特定状态的页面
- 浏览器前进/后退保持状态
