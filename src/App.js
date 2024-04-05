import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [steps, setSteps] = useState(1);
  const [isOpen, setisOpen] = useState(true);

  function handleNext() {
    if (steps < 3) {
      setSteps((s) => s + 1);
    }
  }

  function handlePrivous() {
    if (steps > 1) {
      setSteps((s) => s - 1);
    }
  }

  return (
    <>
      <button className="close" onClick={() => setisOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${steps >= 1 ? "active" : ""}`}>1</div>
            <div className={`${steps >= 2 ? "active" : ""}`}>2</div>
            <div className={`${steps >= 3 ? "active" : ""}`}>3</div>
          </div>
          <div className="message">
            Step {steps} : {messages[steps - 1]}
          </div>
          <div className="buttons">
            <Btn bgColor="#7950f2" color="#fff" handleClick={handlePrivous}>
              Privous
            </Btn>
            <Btn bgColor="#7950f2" color="#fff" handleClick={handleNext}>
              Next
            </Btn>
          </div>
        </div>
      )}
    </>
  );
}

function Btn({ bgColor, color, handleClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: color }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
