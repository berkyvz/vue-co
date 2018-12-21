<template>
<div>
    <nav class="navbar navbar-light bg-dark">
            <span class="navbar-brand brandd">Catch Opportunity</span>
            <ul>
                <router-link to="/" class="links">About Us</router-link>
                <router-link to="/login" class="links">Login</router-link>
                <router-link to="/register" class="links">Register</router-link>
            </ul>
    </nav>
    <div class="form">
        <div v-if="loggingError" class="alert alert-danger" role="alert">
            <strong>Oh no!</strong> Please check email, password and try submitting again.
        </div>
        <h3 class="login_title">Login</h3>
        <div class="form-group">
            <label>Email address</label>
            <input type="email" v-model="email" class="form-control" placeholder="Enter email">
            <small class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary" style="width : 100%;" v-on:click="submitLogin" >Submit</button>
        <div class="registeredyet"> <p>Not registered yet? <router-link to="/register" >Create Account</router-link></p> </div> </div>
        
    </div>
</template>

<script>
import Company from '../models/company'

import CompanyService from '@/services/company'

import { Authorization } from '@/services/config'

export default {
    name : 'Login',
    data(){
        return {
           email : "",
           password  : "",
           loggingError: false,
           name : ""
        }
    },
    methods : {
        submitLogin : function (){
            CompanyService.login(this.email, this.password)
                .then(res => res.data)
                .then(res => {
                    this.$store.dispatch('authorization/setToken', res.token);
                    Authorization.defaults.headers['AuthSession'] = res.token; // Burada tokeni basmak zorunda kaldım yoksa almıyor...
                    const company = new Company(res.coid , res.email, res.password, res.name, res.city, res.latitude, res.longitude, res.phone)
                    this.$store.dispatch('company/setCompany', company);
                    this.$router.push('/dashboard')
                }).catch(err => {
                this.loggingError = true;
            })
        } 
    }
}
</script>
<style scoped>

.form{
    height: 60%;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-top: 200px;
    margin-left: 30%;
    margin-right: 30%;
}


.login_title{
   text-align: center;
}

.registeredyet{
    text-align: center;
    font-size: 18px;
}

.registeredyet:hover{
    font-size: 20px;
}
  

.brandd {
   color: white;
}
.brandd:hover {
   color: gray;
 }
 .links {
   color : white;
   font-weight: 600;
   margin-right: 20px;
 }
 .links:hover {
   color: gray;
 }
 ul {
   display: inline; 
 }
</style>
