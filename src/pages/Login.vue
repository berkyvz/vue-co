<template>
<div class="container">
    <div class="form">
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
        <div v-if="isLoggedIn == 1" class="alert alert-danger" role="alert">
            Email or Password is incorrect
        </div>
        <div v-if="isLoggedIn == 2" class="alert alert-success" role="alert">
            Welcome {{name }} You are successfully Logged In.
        </div>
        <button type="submit" class="btn btn-primary" v-on:click="submitLogin" >Submit</button>
    </div>
</div>


</template>

<script>
//import {baseURL} from '../config/config.js'

import Company from '../models/company'

import CompanyService from '@/services/company'

export default {
    name : 'Login',
    data(){
        return {
           email : "",
           password  : "",
           isLoggedIn: 0,
           name : ""
        }
    },
    methods : {
        submitLogin : function (){
            CompanyService.login(this.email, this.password)
                .then(res => res.data)
                .then(res => {
                    this.isLoggedIn = 1
                    this.$store.dispatch('authorization/setToken', res.token);

                    const company = new Company(res.email, res.password, res.name, res.city, res.latitude, res.longitude, res.phone)
                    this.$store.dispatch('company/setCompany', company);
                    this.$router.push('/dashboard')
                })
        } 
    }
}
</script>
<style scoped>

.form{
    background-color: rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-top: 200px;
    margin-left: 30%;
    margin-right: 30%;
}


.login_title{
   text-align: center;
}
  
</style>
