/* Vendor Libs Begin */
import Vue from "vue";
import VueRouter from "vue-router";
/* Vendor Libs End  */

/* Custom Component Begin */
import Login from './pages/Login.vue';
import About from './pages/About.vue';
import Register from './pages/Register.vue';
import Profile from './pages/Dashboard/Profile.vue';
import Dashboard from './pages/Dashboard/Dashboard.vue';
import MyQRCodes from './pages/Dashboard/MyQRCodes.vue';
import MyOpportunities from './pages/Dashboard/MyOpportunities.vue';
import CreateOpportunities from './pages/Dashboard/CreateOpportunities.vue';
/* Custom Component End  */

const Routes = [
    { path: '/', component: About },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/dashboard', component: Dashboard, children: [
            { path: '', redirect: 'myopportunities' },
            { path: 'myopportunities', component: MyOpportunities },
            { path: 'createopportunuties', component: CreateOpportunities },
            { path: 'qrcodes', component: MyQRCodes },
            { path: 'profile', component: Profile },
        ]
    },
];

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
    mode: 'history',
    routes: Routes
});

export default router;