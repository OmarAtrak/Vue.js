import { createRouter, createWebHistory } from 'vue-router'
import AddTAsk from '../Tache/view/AddTask.vue'
import DoneTasks from '../Tache/view/DoneTasks.vue'
import ListTasks from '../Tache/view/ListTasks.vue'
import TestStore from '../components/storeComponent.vue'
import Refs from '../components/refsComponent.vue'
import Validation from '../components/validationComponent.vue'
import simpleTypeAhead from '../components/simpleTypeAheadComponent.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ListTasks',
      component: ListTasks
    },
    {
      path: '/AddTAsk',
      name: 'AddTAsk',
      component: AddTAsk
    },
    {
      path: '/DoneTasks',
      name: 'DoneTasks',
      component: DoneTasks
    },
    {
      path: '/TestStore',
      name: 'TestStore',
      component: TestStore
    },
    {
      path: '/Refs',
      name: 'Refs',
      component: Refs
    },
    {
      path: '/Validation',
      name: 'Validation',
      component: Validation
    },
    {
      path: '/simpleTypeAhead',
      name: 'simpleTypeAhead',
      component: simpleTypeAhead
    }
  ]
})

export default router
