import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1); // new: step control

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="container">
      <div className="card">
        <h1>COUNTERS</h1>

        <h2 className="count">{count}</h2>
        <p className="label">Current Value</p>

        {/* Step Input */}
        <input
          type="number"
          value={step}
          min="1"
          onChange={(e) => setStep(Number(e.target.value))}
          className="step-input"
        />

        <div className="btn-group">
          <button
            className="btn increase"
            onClick={() => setCount((prev) => prev + step)}
          >
            + Increase
          </button>

          <button
            className="btn decrease"
            onClick={() =>
              setCount((prev) => (prev - step < 0 ? 0 : prev - step))
            }
          >
            − Decrease
          </button>
        </div>

        <button className="reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
