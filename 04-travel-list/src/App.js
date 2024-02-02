const initialItems = [
  { id: 1, description: "身份证", quantity: 2, packed: true },
  { id: 2, description: "护照", quantity: 2, packed: false },
  { id: 3, description: "行李", quantity: 1, packed: true },
  { id: 4, description: "手机", quantity: 2, packed: false },
  { id: 6, description: "笔记本电脑", quantity: 1, packed: false },
]

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  )
}

function Logo() {
  return <h1>🦼旅行清单🥗</h1>
}
function Form() {
  return (
    <div className="add-form">
      <h3>你需要为你的旅行准备什么？👓</h3>
      <select>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <input></input>
      <button>添加</button>
    </div>
  )
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
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
