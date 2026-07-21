import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getEmployees ,addEmployee,  editEmployee , deleteEmployee } from "../../services/employeeService";

export const fetchEmployeesAsync = createAsyncThunk(
    "employee/fetchEmployeesAsync",
    async () => {
        const response = await getEmployees();
           console.log(response.data);
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

    extraReducers: (builder) => {

        // ================= FETCH =================

        builder
            .addCase(fetchEmployeesAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEmployeesAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.employees = action.payload;
            })
            .addCase(fetchEmployeesAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

        // ================= ADD =================

        builder
            .addCase(addEmployeeAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addEmployeeAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.employees.push(action.payload);
            })
            .addCase(addEmployeeAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

        // ================= EDIT =================

        builder
            .addCase(editEmployeeAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(editEmployeeAsync.fulfilled, (state, action) => {
                state.loading = false;

                const index = state.employees.findIndex(
                    employee => employee.id === action.payload.id
                );

                if (index !== -1) {
                    state.employees[index] = action.payload;
                }
            })
            .addCase(editEmployeeAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

        // ================= DELETE =================

        builder
            .addCase(deleteEmployeeAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteEmployeeAsync.fulfilled, (state, action) => {
                state.loading = false;

                state.employees = state.employees.filter(
                    employee => employee.id !== action.payload
                );
            })
            .addCase(deleteEmployeeAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

    }

})


export default employeeSlice.reducer;