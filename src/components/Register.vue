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
        
            <div class="container">
                <div class="form">
                    <h3 class="register_title">Register</h3>
                    <div class="form-group">
                        <label>Email address</label>
                        <input type="email" v-model="email" class="form-control" placeholder="Enter your email" required>                
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" v-model="password" class="form-control" placeholder="Enter your password" required>
                    </div>
                    <div class="form-group">
                        <label>Company name</label>
                        <input type="text" v-model="name" class="form-control" placeholder="Enter your company name" required>                
                    </div>
                    <div class="form-group">
                        <label>City</label>
                        <input type="text" v-model="city" class="form-control" placeholder="Enter the city of your company " required>                
                    </div>
                    <div class="form-group">
                        <label>Latitude</label>
                        <input type="text" v-model="latitude" class="form-control" placeholder="Enter the latitude of your company " required>                
                    </div>
                    <div class="form-group">
                        <label>Longitude</label>
                        <input type="text" v-model="longitude" class="form-control" placeholder="Enter the longitude of your company " required>                
                    </div>
                    <div class="form-group">
                        <label>Phone</label>
                        <input type="text" v-model="phone" class="form-control" placeholder="Enter your phone number" required>                
                    </div>
                    <div v-if="isRegistered == 1" class="alert alert-danger" role="alert">
                        Something you have written is incorrect.
                    </div>
                    <div v-if="isRegistered == 2" class="alert alert-success" role="alert">
                        Welcome {{ name }}! You have successfully registered.
                        {{submitClear()}};
                    </div>
                    <button id="btnLeft" type="submit" class="btn btn-primary" v-on:click="submitRegister" >Register</button>
                    
                    <button id="btnRight" type="reset" class="btn btn-primary" v-on:click="submitClear" >Clear</button>
                </div>
        </div>
    </div>
</template>

<script>
//import {mapState, mapGetters, mapActions} from 'vuex';
import {baseURL} from '../config/config.js';
export default {
    name : 'Register',
    data(){
        return {
            email : "",
            password : "",
            name : "",
            city : "",
            latitude : "",
            longitude : "",
            phone : "",
            isRegistered : 0
        }
    },
/*    computed: {
    ...mapState([
      'base_url'
    ]),
    ...mapGetters([
      'getBaseURL',
    ]),
  },*/
    methods : {
        submitRegister : function (){

            
            var registerObj = {
                'email' : this.email ,
                'password' : this.password,
                'name' : this.name,
                'city' : this.city,
                'latitude' : this.latitude,
                'longitude' : this.longitude,
                'phone' : this.phone,             
                
            }
            this.$http.post(baseURL+'/company', registerObj).then(
                (response) => {
                    this.isRegistered = 2;
                    this.name = response.body.name;
                },
                (err) => {
                    alert(err);
                    this.isRegistered = 1;
                }
            )
            
        },
        submitClear : function (){
            
                this.email = "";
                this.password = "";
                this.name = "";
                this.city = "";
                this.latitude = "";
                this.longitude = "";
                this.phone = "";

            }
        } 
    }  

</script>

<style scoped>
    #btnLeft {
        margin-right: 10px;

    }

    .form{
        background-color: rgba(0, 0, 0, 0.1);
        padding: 20px;
        margin-top: 100px;

    }

    .register_title{
    text-align: center
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
