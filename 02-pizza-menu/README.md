## 运行

    npm run dev

## JSX 和 Props

- JSX：JSX 是一种 JavaScript 的语法扩展，非常类似于 XML。React 使用 JSX 来描述组件的 UI。通过 JSX，我们可以在 JavaScript 中写入 HTML 代码。

```jsx
//这是一个典型的JSX，表示一个h1元素
const element = <h1>Hello, world!</h1>
```

注意，React 并非必须要使用 JSX，但几乎所有 React 代码都会选择使用它，原因是它比纯 JavaScript 写法更加直观、简洁。

- Props：Props 是"properties"的缩写，意为"属性"。在 React 中，我们可以通过 props 传递数据给组件。组件接收的 props 就像函数接收的参数一样，它们可以是任何 JavaScript 数据类型，包括（但不限于）字符串、数字、对象、数组、甚至是其他 React 组件也可以！

```jsx
//这是一个使用 props 的例子
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

//使用 Welcome 组件，并传入 name 属性
const element = <Welcome name="Sara" />
ReactDOM.render(element, document.getElementById("root"))
```

在这个例子中，我们定义了一个 Welcome 组件，它接收一个名为 name 的 props，并在渲染时使用它。
