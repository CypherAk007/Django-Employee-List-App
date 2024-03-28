import {configureStore} from "@reduxjs/toolkit"
import employeesReducer from './employees'

const store = configureStore({
    reducer:{
        employeesReducer:employeesReducer
    }
})

export default store;