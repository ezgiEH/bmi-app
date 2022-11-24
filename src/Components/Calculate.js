import { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { calculateBMI, clearHistory } from '../Redux/CalculateSlice'

function Calculate() {
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)

    const dispatch = useDispatch()
    const bmi = useSelector(state => state.calculate.bmi)
    const history = useSelector(state => state.calculate.history)

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(calculateBMI({ height: height, weight: weight }));
    }

    const handleClear = (e) => {
        e.preventDefault()
        dispatch(clearHistory())
    }

    useEffect(() => {
        localStorage.getItem("bmi", JSON.stringify(history))
    }, [history])


  return (
    <div>
        <h1>Calculate BMI</h1>
        <form >
            <label>Weight</label>
            <input type="number"  placeholder="Enter your weight, ex: 60kg" onChange={(e) => setWeight(e.target.value)}/>
            <br/>
            <label>Height</label>
            <input type="number"  placeholder="Enter your height, ex: 160cm" onChange={(e) => setHeight(e.target.value / 100)}/>
            <br/>
            <button type="submit" onClick={handleClick}>Calculate</button>
        </form>
        {bmi > 1 && bmi < 18.5 && <p>Your BMI is {bmi.toFixed(2)} and you are underweight</p>}
        {bmi > 18.5 && bmi < 24.9 && <p>Your BMI is {bmi.toFixed(2)} and you are normal</p>}
        {bmi > 25 && bmi < 29.9 && <p>Your BMI is {bmi.toFixed(2)} and you are overweight</p>}
        {bmi > 30 && <p>Your BMI is {bmi.toFixed(2)} and you are obese</p>}
        <button onClick={handleClear}>Clear History</button>
        <h1>History</h1>
        <ul>
            {history.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Calculate