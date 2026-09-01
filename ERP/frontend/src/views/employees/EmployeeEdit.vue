<script setup>
import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import api from "@/services/api"

const route = useRoute()
const router = useRouter()

const employeeId = route.params.id
const isLoading = ref(false)
const isSubmitting = ref(false)
const departments = ref([])
const formError = ref("")

const form = ref({
  empId: "",
  name: "",
  email: "",
  phone: "",
  department_id: "",
})

const loadDepartments = async () => {
  try {
    const res = await api.get("/departments")
    departments.value = Array.isArray(res.data?.data) ? res.data.data : []
  } catch (error) {
    departments.value = []
  }
}

const loadEmployee = async () => {
  isLoading.value = true
  formError.value = ""
  try {
    const res = await api.get(`/employees/${employeeId}`)
    const employee = res.data?.data
    if (!employee) {
      throw new Error("No employee data received.")
    }

    form.value = {
      empId: employee.empId || "",
      name: employee.name || "",
      email: employee.email || "",
      phone: employee.phone || "",
      department_id: employee.department_id || employee.department?.id || "",
    }
  } catch (error) {
    formError.value = error?.response?.data?.message || "Failed to load employee."
  } finally {
    isLoading.value = false
  }
}

onMounted(async () => {
  await Promise.all([loadDepartments(), loadEmployee()])
})

const updateEmployee = async () => {
  formError.value = ""

  if (!form.value.empId || !form.value.name || !form.value.department_id) {
    formError.value = "Emp ID, name, and department are required."
    return
  }

  isSubmitting.value = true
  try {
    await api.put(`/employees/${employeeId}`, form.value)
    await router.push("/employees")
  } catch (error) {
    formError.value = error?.response?.data?.message || "Failed to update employee."
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section>
    <h2>Edit Employee</h2>
    <p v-if="formError" class="error">{{ formError }}</p>
    <p v-if="isLoading">Loading employee...</p>

    <form v-else @submit.prevent="updateEmployee" class="form">
      <label>
        Emp ID
        <input v-model="form.empId" type="text" required />
      </label>

      <label>
        Name
        <input v-model="form.name" type="text" required />
      </label>

      <label>
        Email
        <input v-model="form.email" type="email" />
      </label>

      <label>
        Phone
        <input v-model="form.phone" type="text" />
      </label>

      <label>
        Department
        <select v-model="form.department_id" required>
          <option value="" disabled>Select a department</option>
          <option v-for="dep in departments" :key="dep.id" :value="dep.id">
            {{ dep.name }}
          </option>
        </select>
      </label>

      <div class="actions">
        <button type="submit" :disabled="isSubmitting">
          {{ isSubmitting ? "Saving..." : "Update" }}
        </button>
        <router-link to="/employees">Cancel</router-link>
      </div>
    </form>
  </section>
</template>

<style scoped>
.form {
  display: grid;
  gap: 10px;
  max-width: 460px;
}

label {
  display: grid;
  gap: 4px;
}

.actions {
  margin-top: 8px;
  display: flex;
  gap: 8px;
  align-items: center;
}

.error {
  color: #c11717;
}
</style>
