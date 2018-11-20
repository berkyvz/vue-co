import Login from './components/Login.vue';
import About from './components/About.vue';
import Register from './components/Register';

export default [
    {path : '/' , component : About},
    {path : '/register' , component : Register},
    {path : '/login' , component : Login}
]