import api from "../api/axios";

export function getEmployees() {
    return api.get('/employees');
}
export function addEmployee(data){
    return api.post('/employees', data);
}
export function editEmployee(id, data){
    return api.put(`/employees/${id}`, data);
}
export function deleteEmployee(id){
    return api.delete(`/employees/${id}`);
}