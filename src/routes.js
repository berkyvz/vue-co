import Login from './components/Login.vue';
import About from './components/About.vue';
import Register from './components/Register.vue';
import Dashboard from './components/Dashboard.vue';

export default [
    {path : '/' , component : About},
    {path : '/register' , component : Register},
    {path : '/login' , component : Login},
    {path : '/dashboard' , component : Dashboard}
]