import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getEmployees ,addEmployee,  editEmployee , deleteEmployee } from "../../services/employeeService";

export const fetchEmployees = createAsyncThunk(
    "employee/fetchEmployees",
    async () => {
        const response = await getEmployees();
        return response.data;
    }
);

export const addEmployeeAsync = createAsyncThunk(
    "employee/addEmployeeAsync",
    async (employee) => {
        const response = await addEmployee(employee);
        return response.data;
    }
);

export const editEmployeeAsync = createAsyncThunk(
    "employee/editEmployeeAsync",
    async ({ employeeId, employee }) => {
        const response = await editEmployee(employeeId, employee);
        return response.data;
    }
);

export const deleteEmployeeAsync = createAsyncThunk(
    "employee/deleteEmployeeAsync",
    async ({ employeeId }) => {
        await deleteEmployee(employeeId);
        return employeeId;
    }
);

const employeeSlice=createSlice({

    name:"employee",

    initialState:{
        employees:[],
        loading : false,
        error:"Server Error"
    },

    reducers:{},

    extraReducers:(builder)=>{
        builder.addCase(
            fetchEmployees.pending,
            (state)=>{
                state.loading =true;
            }
        )

        builder.addCase(
            fetchEmployees.fulfilled,
            (state,action)=>{
                state.loading =true;
                state.employees = action.payload;

            }
        )
        builder.addCase(
            fetchEmployees.rejected,
            (state,action)=>{
                state.loading =true;
                state.error=action.error.message;

            }
        )
    }
 
    


})


export default employeeSlice.reducer;