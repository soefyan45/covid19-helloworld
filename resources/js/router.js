//IMPORT SECTION
import Vue from 'vue'
import Router from 'vue-router'
import Home   from './pages/Home.vue'
import About   from './pages/TentangKami.vue'
import store from './store.js'

Vue.use(Router)

//DEFINE ROUTE
const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            //meta: { requiresAuth: true }
        },
        {
            path: '/tentang-kami',
            name: 'about',
            component: About,
            //meta: { requiresAuth: true }
        },
    ]
});

//Navigation Guards
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        let auth = store.getters.isAuth
        if (!auth) {
            next({ name: 'login' })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router