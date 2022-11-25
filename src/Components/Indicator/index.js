import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Circle, Cursor, Span } from './style'
import { calculateResult } from '../../Redux/CalculateSlice'

function Indicator() {
  const dispatch = useDispatch()
  const bmi = useSelector(state => state.calculate.bmi)
  const result = useSelector(state => state.calculate.result)

  useEffect(() => {
    dispatch(calculateResult(bmi))
  }, [dispatch, bmi])

  return (
    <div>
      <Circle>
        <Cursor />
      </Circle>
      <h1>Result</h1>
      {result === "" ? <h2>Enter your height and weight</h2>
        : <h2>Your BMI is {bmi.toFixed(2)} and you are <Span color={result}>{result}</Span></h2>}
    </div>
  )
}

export default Indicator


