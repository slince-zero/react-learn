## 运行

    npm run dev

## 问题，为什么开发者工具下 console 里面会渲染两次

这个现象可能是因为你的 React 项目正在使用严格模式 (React.StrictMode)。在严格模式下，React 会为了找到可能的问题， intentionally double invoke 以下这些生命周期方法和函数组件（即调用两次）：

- 类组件的 constructor, render, 和 shouldComponentUpdate 方法
- 类组件的派生状态 (getDerivedStateFromProps)
- 函数组件
- useState 和 useReducer 的更新函数

## 问题，为什么我点击button之后，页面上的值却可以立即变化
```jsx
export default function App() {
  const [user, setUser] = useState("32423")
  function changeUser() {
    console.log("user:", user)
    /** setUser函数的作用是更新 user 的状态，但是 React 的状态是异步的，所以在调用 setUser 之后，user 的值不会立即更新 */
    setUser(Math.floor(Math.random() * 1000000))
  }
  console.log("currentUser:", user)
  return (
    <>
      <h1>dkfjshkj</h1>
      <User user={user} onChangeUser={changeUser} />
    </>
  )
}

function User({ user, onChangeUser }) {
  return (
    <>
      <h1 style={{ color: "yellowgreen" }}>User 组件--{user}</h1>
      <Button onClick={onChangeUser}>点击试试</Button>
    </>
  )
}

function Button({ children, onClick }) {　
  return <button onClick={onClick}>{children}</button>
}
```


当调用 setUser 来更新状态时，React 会重新渲染组件，但是在新的渲染中，React 会检查组件的 state 是否与上一次的 state 相同。如果 state 发生了变化，则 React 会重新渲染组件。

这是 React 状态更新和重新渲染的工作机制，setUser 调用不会立即改变 user 的值，但是会触发一个更新，然后 React 在更新过程中会使用新的状态值重新渲染组件。 这使得状态的变化能够反应到 UI　上，给你一种“立即更新”的感觉