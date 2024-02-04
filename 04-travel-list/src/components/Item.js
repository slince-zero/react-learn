export default function Item({ item, onhandleDelete, onhandleToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onhandleToggleItem(item.id)}
      />
      {/* onChange={onhandleToggleItem(item.id)} 这样写会存在问题，每次渲染组件都会调用该函数，*/}
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.quantity} - {item.description}
      </span>
      <button onClick={() => onhandleDelete(item.id)}>❌</button>
    </li>
  )
}
