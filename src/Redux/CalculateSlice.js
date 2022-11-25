import { createSlice } from "@reduxjs/toolkit";

export const calculateSlice = createSlice({
    name: "calculate",
    initialState:{
        bmi: 0,
        result: "",
        history: JSON.parse(localStorage.getItem("bmi")) || [],
    },
    reducers:{
        calculateBMI: (state, action) => {
            state.bmi = action.payload.weight / (action.payload.height * action.payload.height).toFixed(2)
            state.history.push(state.bmi.toFixed(2))
            localStorage.setItem("bmi", JSON.stringify([...state.history]))
        },
        calculateResult: (state, action) => {
            state.bmi = action.payload
            if(state.bmi === 0){
                state.result = ""
            }else if(state.bmi < 18.5){
                state.result = `Underweight`
            }else if(state.bmi >= 18.5 && state.bmi <= 24.9){
                state.result = `Normal`
            }else if(state.bmi >= 25 && state.bmi <= 29.9){
                state.result = `Overweight`
            }else if(state.bmi >= 30){
                state.result = `Obese`
            }
        },
        clearHistory: (state) => {
            state.bmi = 0
            state.history = []
            localStorage.removeItem("bmi")
        }
    },
})

export const { calculateBMI, clearHistory, calculateResult } = calculateSlice.actions
export default calculateSlice.reducer