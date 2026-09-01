import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/employees',
    },
    {
      path: '/employees',
      name: 'employees-list',
      component: () => import('../views/employees/EmployeeList.vue'),
    },
    {
      path: '/employees/create',
      name: 'employees-create',
      component: () => import('../views/employees/EmployeeCreate.vue'),
    },
    {
      path: '/employees/:id/edit',
      name: 'employees-edit',
      component: () => import('../views/employees/EmployeeEdit.vue'),
      props: true,
    },
  ],
})

export default router
