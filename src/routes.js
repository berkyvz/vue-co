import Login from './components/Login.vue';
import About from './components/About.vue';
import Register from './components/Register.vue';


export default [
    {path : '/' , component : About},
    {path : '/register' , component : Register},
    {path : '/login' , component : Login},
    // {path: '/dashboard', component: Dashboard, children: [
    //     {path: '', redirect: 'MyOpportunities'},
    //     { path: 'myopportunities', component: MyOpportunities },
    //     { path: 'createopportunuties', component: CreateOpportunities },
    //     { path: 'qrcodes', component: MyQRCodes },
    // ]},

]