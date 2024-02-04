import { useState } from "react"
import Item from "./Item"

export default function PackingList({
  items,
  onhandleDelete,
  onhandleToggleItem,
  onhandleDeleteAll,
}) {
  const [sortBy, setSortBy] = useState("input")
  let sortedItems

  if (sortBy === "input") {
    sortedItems = items
  } else if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description))
  } else if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed))
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            onhandleDelete={onhandleDelete}
            onhandleToggleItem={onhandleToggleItem}
            key={item.id}
            item={item}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="description">按描述排序</option>
          <option value="input">按输入排序</option>
          <option value="packed">按装点完毕排序</option>
        </select>
        <button onClick={onhandleDeleteAll}>清除所有</button>
      </div>
    </div>
  )
}
