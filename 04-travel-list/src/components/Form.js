import { useState } from "react"
export default function Form({ onHandleAddItems }) {
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
