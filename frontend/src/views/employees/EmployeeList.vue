<script setup>
import { onMounted, ref } from "vue"
import api from "@/services/api"

const employees = ref([])
const isLoading = ref(false)
const errorMessage = ref("")

const getEmployeeDepartmentName = (employee) => {
  if (employee.department?.name) return employee.department.name
  if (employee.departmentName) return employee.departmentName
  if (employee.department_name) return employee.department_name
  return "-"
}

const loadEmployees = async () => {
  isLoading.value = true
  errorMessage.value = ""

  try {
    const res = await api.get("/employees")
    employees.value = Array.isArray(res.data?.data) ? res.data.data : []
  } catch (error) {
    errorMessage.value = error?.response?.data?.message || "Failed to load employees."
    employees.value = []
  } finally {
    isLoading.value = false
  }
}

onMounted(async () => {
  await loadEmployees()
})

const deleteEmployee = async (id) => {
  const confirmed = window.confirm("Are you sure you want to delete this employee?")
  if (!confirmed) return

  try {
    await api.delete(`/employees/${id}`)
    employees.value = employees.value.filter((employee) => employee.id !== id)
  } catch (error) {
    window.alert(error?.response?.data?.message || "Failed to delete employee.")
  }
}
</script>

<template>
  <div class="page-head">
    <h2>Employees</h2>
    <router-link to="/employees/create">Create Employee</router-link>
  </div>

  <p v-if="isLoading">Loading employees...</p>
  <p v-else-if="errorMessage" class="error">{{ errorMessage }}</p>

  <table v-else border="1">
    <tr>
      <th>Emp ID</th>
      <th>Name</th>
      <th>Department</th>
      <th>Actions</th>
    </tr>

    <tr v-for="emp in employees" :key="emp.id">
      <td>{{ emp.empId }}</td>
      <td>{{ emp.name }}</td>
      <td>{{ getEmployeeDepartmentName(emp) }}</td>
      <td>
        <router-link :to="`/employees/${emp.id}/edit`">Edit</router-link>
        |
        <button type="button" @click="deleteEmployee(emp.id)">Delete</button>
      </td>
    </tr>
  </table>
</template>

<style scoped>
.page-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.error {
  color: #c11717;
}
</style>