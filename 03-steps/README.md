## 运行

    npm run dev

## useState

在 React 中，useState 是一个由 React 提供的 Hook，允许我们在函数组件中添加状态。在以前，只有类组件才可以使用状态，但是借助于 useState，函数组件也可以拥有状态了。

```jsx
const [count, setCount] = useState(0)

...

const increment = () => {
  setCount(count + 1)
}
```

每次你使用设置函数更新状态时，React都会重新渲染你的组件，并使用最新的状态。

一般来说，React的重新渲染会根据状态值的变化来决定是否需要发生，当新的状态值与旧的状态值不同，胡总和，使用了函数式更新，通常都会触发组建的重新渲染。

