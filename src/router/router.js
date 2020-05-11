
import Vue from 'vue'
import Router from 'vue-router'
import home from './home.js'

Vue.use(Router)

const createRouter = () => new Router({
    mode: "history",
    routes: [
        ...home,
    ]
})
const router = createRouter ()


export default router