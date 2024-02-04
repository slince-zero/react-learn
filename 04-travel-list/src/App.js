import { useState } from "react"

const initialItems = [
  { id: 1, description: "身份证", quantity: 2, packed: true },
  { id: 2, description: "护照", quantity: 2, packed: false },
  { id: 3, description: "行李", quantity: 1, packed: true },
  { id: 4, description: "手机", quantity: 2, packed: false },
  { id: 6, description: "笔记本电脑", quantity: 1, packed: false },
]

export default function App() {
  const [items, setItems] = useState([])
  function handleAddItems(item) {
    /**
     * 在React中，setState函数是异步的，这意味着在函数执行后，状态可能并没有立即更新。
     * 所以，为了保证状态的准确性，我们应该使用函数式的setState，即给setState提供一个
     * 函数而不是一个对象。这个函数接受之前的状态作为参数，返回新的状态。
     */
    setItems((items) => [...items, item])

    /**
     * setItems((items) => items.push(item))在这种情况下，可能会导致问题。
     * 因为push函数会直接修改原有的数组，并返回新数组的长度，而不是返回新数组。
     * 也就是说，你的新状态会变成一个整数（新数组的长度），而不是你想要的新数组
     */
    // setItems((items) => items.push(item))
  }

  return (
    <div className="app">
      <Logo />
      <Form onHandleAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  )
}

function Logo() {
  return <h1>🦼旅行清单🥗</h1>
}
function Form({ onHandleAddItems }) {
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(3)

  function handleSubmit(e) {
    e.preventDefault()
    if (!description) return
    const newItem = { description, quantity, packed: false, id: Date.now() }
    onHandleAddItems(newItem)
    setQuantity(6)
    setDescription("")
  }

  return (
    /**
     * 如果你希望按钮点击时不触发 "submit" 事件，
     * 你可以给 <button> 元素添加 type="button" 属性，这将使其成为一个纯按钮，点击时将不会触发表单提交。
     * button 的 type 属性默认为 "submit"
     */
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>你需要为你的旅行准备什么？👓</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        placeholder="请输入。。。"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>添加</button>
    </form>
  )
}
function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}

function Item({ item }) {
  return (
    <li>
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.quantity} - {item.description}
      </span>
      <button>❌</button>
    </li>
  )
}
// 底部统计数据
function Stats() {
  return (
    <footer className="stats">
      你已经有x件物品在清单中，有y(y%)件物品已经被打包
    </footer>
  )
}
