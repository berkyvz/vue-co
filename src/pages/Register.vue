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
                    <label>Write Your Password Again</label>
                    <input type="password" v-model="password2" class="form-control" placeholder="Enter your password" required>
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
                    <input type="number" v-model="latitude" class="form-control" placeholder="Enter the latitude of your company " required>                
                </div>
                <div class="form-group">
                    <label>Longitude</label>
                    <input type="number" v-model="longitude" class="form-control" placeholder="Enter the longitude of your company " required>                
                </div>
                <div class="form-group">
                    <button class="btn btn-secondary" @click="findLocation">Find My Location</button>               
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="number" v-model="phone" class="form-control" placeholder="Enter your phone number" required>                
                </div>
                <div v-if="isRegistered == 1" class="alert alert-danger" role="alert">
                    {{errorMessage}}
                </div>
                <div v-if="isRegistered == 2" class="alert alert-success" role="alert">
                    Welcome. You have successfully registered.
                </div>
                <button id="btnLeft" type="button" class="btn btn-primary" @click="submitRegister" >Register</button>
                <button id="btnRight" type="button" class="btn btn-primary" @click="submitClear" >Clear</button>
            </div>
        </div>
    </div>
</template>

<script>
import CompanyService from '@/services/company'


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
            isRegistered : 0,
            errorMessage : "",
            password2 : ""
        }
    },
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

        if(!this.email.includes('@')){
            this.isRegistered = 1;
            this.errorMessage = "Email must contains '@' ";
            return;
        }
        if(this.password.length < 5){
            this.isRegistered = 1;
            this.errorMessage = "Password is must be more than 5 character";
            return;
        }

        if(this.password !== this.password2){
            this.isRegistered = 1;
            this.errorMessage = "Passwords are not equal";
            return;

        }
         if(this.name.length < 1){
            this.isRegistered = 1;
            this.errorMessage = "Check the Company Name";
            return;
        }
        if(this.city.length < 1){
            this.isRegistered = 1;
            this.errorMessage = "Please enter the City. ";
            return;
        }

        if(this.latitude.length < 1){
            this.isRegistered = 1;
            this.errorMessage = "Check the latitude";
            return;
        }

        if(this.longitude.length < 1){
            this.isRegistered = 1;
            this.errorMessage = "Check the longitude";
            return;
        }


            CompanyService.register(registerObj)
            .then(res => res.data)
            .then(response => {
                this.isRegistered = 2;
                console.log(response);
            })
            .catch(err => {
                console.log(err)
                this.isRegistered = 1;
            })

            this.email = "";
                this.password = "";
                this.name = "";
                this.city = "";
                this.latitude = "";
                this.longitude = "";
                this.phone = "";
                this.password2 = "";
            
        },
        submitClear : function (){
                this.email = "";
                this.password = "";
                this.name = "";
                this.city = "";
                this.latitude = "";
                this.longitude = "";
                this.phone = "";
                this.password2 = "";
                this.isRegistered = 0;

            },

        findLocation : function(){
            this.$getLocation()
            .then(coordinates => {
            this.latitude = coordinates.lat
            this.longitude = coordinates.lng
            });
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
