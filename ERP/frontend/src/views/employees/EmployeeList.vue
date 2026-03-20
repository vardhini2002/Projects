<script setup>
import { onMounted, ref } from "vue"
import api from "@/services/api"

const employees = ref([])

onMounted(async () => {
  const res = await api.get("/employees")
  employees.value = res.data.data
})
</script>

<template>
  <h2>Employees</h2>

  <table border="1">
    <tr>
      <th>Emp ID</th>
      <th>Name</th>
      <th>Department</th>
    </tr>

    <tr v-for="emp in employees" :key="emp.id">
      <td>{{ emp.empId }}</td>
      <td>{{ emp.name }}</td>
      <td>{{ emp.department?.name }}</td>
    </tr>
  </table>
</template>