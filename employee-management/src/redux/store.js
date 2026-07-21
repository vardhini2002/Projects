import {configureStore} from '@reduxjs/toolkit';
import employeeReducer from './slice/EmployeeSlice';  
// reducer - returns the state of the employee slice,
// slice - a part of the state, slice of the store

export const store = configureStore({

    reducer:{
        employee:employeeReducer
    }

});