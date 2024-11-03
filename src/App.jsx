import { useState } from 'react'
import './App.css'

export const App = () => {
  const [height, setHeight] = useState("");
  const [Weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const CalculateBmi = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isVaildWeight = /^\d+$/.test(Weight);

    if (isValidHeight && isVaildWeight) {
      const heightInmeters = height / 100;
      const bmiValue = Weight / (heightInmeters * heightInmeters);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setBmiStatus("UnderWeight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiStatus("Normal Weight")
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBmiStatus("Overweight");
      } else {
        setBmiStatus("Obese");
      }
      setBmiStatus("");
    }
    else {
      setBmi(null);
      setBmiStatus("");
      setErrorMessage("Please enter valid numeric values for height and weight.")
    }
  }

  const clearAll = () => {
    setHeight("")
    setWeight("")
    setBmi(null);
    setBmiStatus("");
    setErrorMessage("")
  }

  return (
    <>
      <div className='bmi-calculator'>
        <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <div className="input-container">
            <label htmlFor='height'>Height (cm):</label>
            <input type="text" name="" value={height} id="height" onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div className="input-container">
            <label htmlFor='weight'>Weight (kg):</label>
            <input type="text" name="" value={Weight} id="weight" onChange={(e) => setWeight(e.target.value)} />
          </div>
          <button onClick={CalculateBmi}>Calculate BMI</button>
          <button onClick={clearAll}>Clear</button>

          {bmi !== null && (

            <div className="result">
              <p>Your BMI is :{bmi}</p>
              <p>Status:{bmiStatus}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
