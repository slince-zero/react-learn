import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    {/* 使用严格模式，React会对某些函数组件的一些生命周期方法进行两次调用*/}
    <App />
  </React.StrictMode>
)
