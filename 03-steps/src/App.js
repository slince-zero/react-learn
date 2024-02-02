import { useState } from "react"

const messages = ["学习 React ⚛️", "申请工作 💼", "投资你的新收入 🤑"]

export default function App() {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)
  const handlePrevious = () => {
    if (step > 1) setStep((step) => step - 1)
  }
  const handleNext = () => {
    // if (step < 3) setStep(step + 1)
    // 在这个函数中，`setStep` 使用了当前的 `step` 值，并将其加 1。
    // 在这种情况下，如果 `step` 的值在这个函数调用之前和之后发生了改变，
    // 那么这个函数可能会使用过时的 `step` 值，这就可能引发问题。

    if (step < 3) setStep((step) => step + 1)
    // 在这个函数中，`setStep` 使用了一个更新函数，该函数接收当前的 `step`
    // 值（用 `s` 表示）并返回新的 `step` 值。这种方法确保了 `step` 的值总是最新的，
    // 因为更新函数总是接收最新的状态值为其参数。在并行更新的情况下，也即当多个状态更新
    // 可能同时发生时，这是一种更安全的更新状态的方法。
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step:{step}:{messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              前一个
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              后一个
            </button>
          </div>
        </div>
      )}
    </>
  )
}
