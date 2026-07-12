import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  	{
	  path: "/employees",
	  component: () => import("../views/employees/EmployeeList.vue")
	}
  ],
})

export default router
