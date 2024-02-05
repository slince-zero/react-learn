import { useState } from "react"
const initialFriends = [
  {
    id: 118836,
    name: "小明",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "小红",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "小黑",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
]

function Button({ children, onClick }) {
  /**
   * 这个 children 属性是 React 中的一个特殊属性，它代表了被包裹在组件标签内部的所有内容
   * 注意，如果换成其他值，比如 Children2，就不会生效
   */
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  )
}

export default function App() {
  const [friends, setFriends] = useState(initialFriends)
  const [showFormAddFriend, setShowFormAddFriend] = useState(true)

  function handlwShowFormAddFriend() {
    setShowFormAddFriend((show) => !show)
  }
  function handlesAddFriend(newFriend) {
    setFriends((prevFriends) => [...prevFriends, newFriend])
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} key={friends.id} />
        {showFormAddFriend && (
          <FormAddFriend onHandleAddFriend={handlesAddFriend} />
        )}
        <Button onClick={handlwShowFormAddFriend}>添加朋友</Button>
      </div>
      <FormSplitBill />
    </div>
  )
}

function FriendsList({ friends }) {
  return friends.map((friend) => <Friend key={friend.id} friend={friend} />)
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          你欠{friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name}欠你 {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance === 0 && <p>你和{friend.name}两不相欠</p>}

      <Button>Select</Button>
    </li>
  )
}

function FormAddFriend({ onHandleAddFriend }) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("https://i.pravatar.cc/48")
  const id = Math.floor(Math.random() * 1000000)
  function handleSubmit(e) {
    e.preventDefault()
    if (!name || !image) return
    const newFriend = {
      name,
      image: `${image}?=${id}`,
      blance: 0,
      id,
    }
    onHandleAddFriend(newFriend)
    setName("")
    setImage("https://i.pravatar.cc/48")
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🤼‍♀️ 名字</label>
      {/* 如果没有 onChange ，你的 input 值将会被锁定，无法接收任何用户输入 */}
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <label>🎥头像地址</label>
      <input value={image} onChange={(e) => setImage(e.target.value)} />
      <Button>添加</Button>
    </form>
  )
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>和x分割账单</h2>

      <label>💴 账单金额</label>
      <input></input>

      <label>你的费用</label>
      <input />

      <label>X的费用</label>
      <input />

      <label>谁付了账单</label>
      <select>
        <option value="user">你</option>
        <option value="friend">X</option>
      </select>

      <Button>分割账单</Button>
    </form>
  )
}
