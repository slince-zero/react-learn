import { useState } from "react"
import Logo from "./components/Logo"
import Form from "./components/Form"
import PackingList from "./components/PackingList"
import Stats from "./components/Stats"

const initialItems = [
  { id: 1, description: "身份证", quantity: 2, packed: true },
  { id: 2, description: "护照", quantity: 2, packed: false },
  { id: 3, description: "行李", quantity: 1, packed: true },
  { id: 4, description: "手机", quantity: 2, packed: false },
  { id: 6, description: "笔记本电脑", quantity: 1, packed: false },
]

export default function App() {
  const [items, setItems] = useState(initialItems)
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

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function handleDeleteAll() {
    setItems([])
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed }
        } else {
          return item
        }
      })
    )
  }

  return (
    <div className="app">
      <Logo />
      <Form onHandleAddItems={handleAddItems} />
      <PackingList
        items={items}
        onhandleDelete={handleDelete}
        onhandleToggleItem={handleToggleItem}
        onhandleDeleteAll={handleDeleteAll}
      />
      <Stats items={items} />
    </div>
  )
}
