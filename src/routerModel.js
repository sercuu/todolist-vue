
import Login from './views/Login'
import Home from './views/Home'
import About from './views/About'
import Users from './views/Users'
import Todo from './views/Todo'


const ifNotAuthenticated = (to, from, next) => {

    const isAuth = localStorage.getItem('token')
    if (!isAuth) {
        next()
        return
    }
    next('/')
}

const ifAuthenticated = (to, from, next) => {
    const isAuth = localStorage.getItem('token')



    if (isAuth) {
        next()
        return
    }
    next('/login')
}

const routeModel = {
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login,
            isShow:false,
            beforeEnter:ifNotAuthenticated
        },
        {
            path: '/',
            name: 'Home',
            component: Home,
            isShow:true,

            beforeEnter: ifAuthenticated
        },
        {
            path: '/about',
            name: 'About',
            component: About,
            isShow:true,
            beforeEnter: ifAuthenticated

        },
        {
            path: '/users',
            name: 'Users',
            component: Users,
            isShow:true,
            beforeEnter: ifAuthenticated
            
        },
        {
            path: '/todo',
            name: 'Todo',
            component: Todo,
            isShow:true,
            beforeEnter: ifAuthenticated
            
        }
    ],
    mode: 'history'
 }

 export default routeModel