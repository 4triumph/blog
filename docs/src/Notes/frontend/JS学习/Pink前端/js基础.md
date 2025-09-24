---
updateTime: "2025-1-12 01:38"
desc: "很基础的js知识，但很重要"
tags: "JavaScript"
outline: 2
---
# Pink前端
## 基础

### 代码末尾加分号
#### 1. 正确加分号的代码
```javascript
let num1 = 10;  // 先声明并赋值
let num2 = 20;  // 然后声明并赋值

console.log(`num1=${num1}, num2=${num2}`);  // 输出：num1=10, num2=20

[num1, num2] = [num2, num1];  // 交换 num1 和 num2 的值

console.log(`num1=${num1}, num2=${num2}`);  // 输出：num1=20, num2=10
```

#### 2. 错误代码（没有加分号）
```javascript
let num1 = 10 let num2 = 20 // 没有加分号
console.log(`num1=${num1}, num2=${num2}`)  // 这里会报错
```
这段代码没有加分号，导致 let num2 = 20 语句被错误地和前一行合并，从而出现了 Cannot access 'num2' before initialization 错误。

`Uncaught ReferenceError: Cannot access 'num2' before initialization` 是由于 JavaScript 中 变量提升（hoisting）和 let/const 的块级作用域 引起的。在 JavaScript 中，当使用 let 和 const 声明变量时，它们会被提升，但不会在声明之前被访问。具体来说，它们会处于一个被称为 "暂时性死区"（Temporal Dead Zone，简称 TDZ）的区域，直到它们的声明语句执行为止。

#### 总结
加分号：let 和 const 在声明时如果没有正确分隔，就会出现问题。加分号可以确保代码的清晰和正确解析。
暂时性死区：let 和 const 变量在声明之前不能访问，它们会处于暂时性死区，直到执行到声明的那一行。
正确的做法：确保每个 let 或 const 声明后面有一个分号，避免将它们连在一起。

### 类型

- 控制台输出蓝色为 number 类型

- 控制台输出黑色为 string 类型

- NaN 也是Number类型，代表非数字

#### 显示转换

- +prompt("请输入数字")

将字符串转为数字

- console.log(parseInt("12px"))  
 // 12

- console.log(parseInt("12.3px"))
 // 12

- console.log(parseFloat("12.3px"))
 // 12.3

 - console.log(parseFloat("12px"))
 // 12

 ### 数组

 #### 增加

 arr.push() // 末尾添加

 arr.unshift() // 开头添加

 #### 删除

 arr.pop() // 末尾删除

 arr.shift() // 开头删除

 arr.splice(起始位置，删除几个元素) // 任意位置删除

 #### 查找

 arr.indexOf() // 查找元素下标

 arr.includes() // 查找元素是否存在

### 匿名函数

#### 立即执行函数

~~~javascript
(function(){ xxx  })();
(function(){xxxx}());
~~~

>无需调用，立即执行，其实本质已经调用了
>
>多个立即执行函数之间用分号隔开
>
>防止变量污染

### 布尔值

#### null undefined 0 NaN ""

> 都是假值

null == undefined // true

null === undefined // false

### 对象
#### 增加/修改
obj.xxx = xxx

#### 删除

delete obj.xxx

#### 查找

obj.xxx

obj[xxx]

### 生成随机数

Math.random() // 0-1

#### 生成N-M之间的随机数 
Math.floor(Math.random() * (M - N + 1)) + N

### script标签

#### alt
```javascript
<script>
let data = [
              {
                src: "images/course01.png",
                title: "Think PHP 5.0 博客系统实战项目演练",
                num: 1125,
              },
              {
                src: "images/course02.png",
                title: "Android 网络动态图片加载实战",
                num: 357,
              },
              {
                src: "images/course03.png",
                title: "Angular2 大前端商城实战项目演练",
                num: 22250,
              },
              {
                src: "images/course04.png",
                title: "Android APP 实战项目演练",
                num: 389,
              },
              {
                src: "images/course05.png",
                title: "UGUI 源码深度分析案例",
                num: 124,
              },
              {
                src: "images/course06.png",
                title: "Kami2首页界面切换效果实战演练",
                num: 432,
              },
              {
                src: "images/course07.png",
                title: "UNITY 从入门到精通实战案例",
                num: 888,
              },
              {
                src: "images/course08.png",
                title: "Cocos 深度学习你不会错过的实战",
                num: 590,
              },
            ];
for (let i = 0; i < data.length; i++) {
              document.write(`
                     <li>
                      <a href="#">
                        <img src=${data[i].src} title="${data[i].title}"" />
                        <h4>${data[i].title}</h4>
                        <div class="info">
                          <span>高级</span> • <span>${data[i].num}</span>人在学习
                        </div>
                      </a>
                    </li>
                     `);
            }
</script>
```
title要拿个大引号给它包一包是因为 ${}是变量，前面的单引号只是告诉${} 它是字符串，因此使用变量时根本不会编译单引号，而只是编译内容，而title本身就需要引号（加单/双都可）




