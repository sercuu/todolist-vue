import Home from './views/home'
import About from './views/about'

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
    }
 ]

 export default routeModel