import { createSlice } from '@reduxjs/toolkit'

const employeeSlice = createSlice({
    name:"employee",
    initialState: {
        employees: [],
        loading: false,
    },
    reducers:{}
})


// interface EmployeeState {
//   employees: any[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: EmployeeState = {
//   employees: [],
//   loading: false,
//   error: null,
// };

// const employeeSlice = createSlice({
//   name: 'employee',
//   initialState,
//   reducers: {
//     // Define your reducers here
//   },
// });

export const { } = employeeSlice.actions;
export default employeeSlice.reducer;