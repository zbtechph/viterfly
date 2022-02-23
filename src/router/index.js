import routes from './routes'
import guards from './guards'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(guards)

export default router