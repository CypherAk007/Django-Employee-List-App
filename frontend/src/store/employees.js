import { createSlice } from "@reduxjs/toolkit";

const initialState = {employees:[],singleEmployee:{}}
const employeesSlice = createSlice({
    name:'emps',
    initialState:initialState,
    reducers:{
        populateEmployees(state,action){
            state.employees = action.payload
        },
        populateIndividualEmployee(state,action){
            state.singleEmployee = action.payload
        }
    }
})

export const employeesActions = employeesSlice.actions
export default employeesSlice.reducer