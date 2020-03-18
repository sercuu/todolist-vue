import Home from './views/home'
import About from './views/about'
import Users from './views/users'

 const routeModel  = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
     },
     {
        path: '/users',
        name: 'Users',
        component: Users
    }
 ]

 export default routeModel