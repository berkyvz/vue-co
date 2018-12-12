import Login from './components/Login.vue';
import About from './components/About.vue';
import Register from './components/Register.vue';
import Dashboard from './components/Dashboard/Dashboard.vue';
import CreateOpportunities from './components/Dashboard/CreateOpportunities.vue';
import MyOpportunities from './components/Dashboard/MyOpportunities.vue';
import MyQRCodes from './components/Dashboard/MyQRCodes.vue';
import Profile from './components/Dashboard/Profile.vue';




export default [
    { path: '/', component: About },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    {
        path: '/dashboard', component: Dashboard, children: [
            { path: '', redirect: 'myopportunities' },
            { path: 'myopportunities', component: MyOpportunities },
            { path: 'createopportunuties', component: CreateOpportunities },
            { path: 'qrcodes', component: MyQRCodes },
            { path: 'profile', component: Profile },
        ]
    },
]