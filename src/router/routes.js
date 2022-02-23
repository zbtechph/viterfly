const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/home.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/auth/login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../pages/auth/register.vue')
    },
    {
        path: '/protected',
        name: 'protected',
        component: () => import('../pages/protected.vue'),
        meta: {
            requiresAuth: true
        }
    }

]


export default routes