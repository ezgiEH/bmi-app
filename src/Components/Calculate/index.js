import { InputField, CalButton, Form } from "./style";
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { calculateBMI } from '../../Redux/CalculateSlice'

function Calculate() {
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)

    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        height > 0 && weight > 0 && dispatch(calculateBMI({weight, height}))
    }

    return (
        <div>
            <h1>Calculate BMI</h1>
            <Form >
                <InputField type="number" placeholder="Enter Height. Ex. 163" onChange={(e) => setHeight(e.target.value / 100)} />
                <br />
                <InputField type="number"  placeholder="Enter Weight. Ex. 55" onChange={(e) => setWeight(e.target.value)} />
                <br />
                <CalButton type="submit" onClick={handleClick}>Calculate</CalButton>
            </Form>
        </div>
    )
}

export default Calculate