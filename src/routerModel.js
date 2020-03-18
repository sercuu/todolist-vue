import Home from './views/home'
import About from './views/about'
import Users from './views/users'
import Todo from './views/todolist'

const routeModel = {
     routes :[
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
        },
         {
            path: '/todolist',
            name: 'Todolist',
            component: Todo
        }
    ],
    mode: 'history'
 }

 export default routeModel