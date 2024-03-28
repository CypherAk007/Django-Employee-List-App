import { createSlice } from "@reduxjs/toolkit";

const initialState = {employees:[]}
const employeesSlice = createSlice({
    name:'emps',
    initialState:initialState,
    reducers:{
        populateEmployees(state,action){
            state.employees = action.payload
        }
    }
})

export const employeesActions = employeesSlice.actions
export default employeesSlice.reducer