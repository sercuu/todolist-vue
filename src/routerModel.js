import Home from './views/Home'
import About from './views/About'
import Users from './views/Users'
import Todo from './views/Todo'

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
            path: '/todo',
            name: 'Todo',
            component: Todo
        }
    ],
    mode: 'history'
 }

 export default routeModel