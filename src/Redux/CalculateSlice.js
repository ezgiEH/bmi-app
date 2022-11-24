import { createSlice } from "@reduxjs/toolkit";

export const calculateSlice = createSlice({
    name: "calculate",
    initialState:{
        bmi: 0,
        history: JSON.parse(localStorage.getItem("bmi")) || [],
    },
    reducers:{
        calculateBMI: (state, action) => {
            state.bmi = action.payload.weight / (action.payload.height * action.payload.height).toFixed(2)
            state.history.push(state.bmi)
            localStorage.setItem("bmi", JSON.stringify([...state.history]))
        },
        clearHistory: (state) => {
            state.bmi = 0
            state.history = []
            localStorage.removeItem("bmi")
        }
    },
})

export const { calculateBMI, clearHistory } = calculateSlice.actions
export default calculateSlice.reducer