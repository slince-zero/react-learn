import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "意大利橄榄油和迷迭香面包",
    price: 6,
    imgName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "番茄和马苏里拉奶酪",
    price: 10,
    imgName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "番茄、马苏里拉奶酪、菠菜和瑞可塔奶酪",
    price: 12,
    imgName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "番茄、马苏里拉奶酪、蘑菇和洋葱",
    price: 12,
    imgName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "番茄、马苏里拉奶酪和意大利辣香肠",
    price: 15,
    imgName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "番茄、马苏里拉奶酪、火腿、芝麻菜和布拉塔奶酪",
    price: 18,
    imgName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
]

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="header">
      <h1>快来吃披萨吧！！！</h1>
    </header>
  )
}

function Menu() {
  return (
    <main className="menu">
      <h2>我们的菜单</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza key={pizza.name} {...pizza} />
        ))}
      </ul>
      {/* <Pizza
        name="Pizza Prosciutto"
        imgName="pizzas/prosciutto.jpg"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        price={10}
      />
      <Pizza
        name="Pizza spinaci"
        imgName="pizzas/spinaci.jpg"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        price={12}
      /> */}
    </main>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="order">
        <>
          <button className="btn">订购</button>
          <p>© 2022 Pizza Menu</p>
        </>
      </div>
    </footer>
  )
  //   return React.createElement("footer", null, "© 2022 Pizza Menu")
}

function Pizza(props) {
  return (
    <div className={`pizza ${props.soldOut ? "sold-out" : ""}`}>
      <img src={props.imgName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.soldOut ? "SOLD OUT" : props.price + 3}</span>
      </div>
    </div>
  )
}

// React V18
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
