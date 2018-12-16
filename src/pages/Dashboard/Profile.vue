<template>
<!--import func from './vue-temp/vue-editor-bridge';-->
<div class="container">
                <div class="form">
                    <h3 class="register_title">You can update your profile here!</h3>
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
                    <button id="btnLeft" type="submit" class="btn btn-primary" v-on:click="submitUpdate" >Update</button>
                    
                    <button id="btnRight" type="reset" class="btn btn-primary" v-on:click="submitClear" >Clear</button>
                </div>
            </div>
</template>


<script>
//import Company from '../../models/company'

//import CompanyService from '@/services/company'



export default {
    name : 'Profile',
    data(){
        return {
            email : '',
            password : '',
            name : '',
            city : '',
            latitude : '',
            longitude : '',
            phone : ''
        }
    } ,
    /*
    computed: {
        ...mapGetters({
            company: 'company/getCompany',
            token : 'authorization/getToken'
        })
    },
    methods : {
         submitUpdate : function() {
            CompanyService.updateProfile(this.password , this.name , this.latitude , this.longitude , this.phone)
            .then(res => res.data)
            .then(res => {
                console.log(res);
            })

            CompanyService.login(this.email, this.password)
                .then(res => res.data)
                .then(res => {
                    this.$store.dispatch('authorization/setToken', res.token);
            })
        }
    }*/
    
}



</script>



<style scoped>
    #btnLeft {
        margin-right: 10px;

    }

    .form{
        background-color: rgba(0, 0, 0, 0.1);
        padding: 20px;

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
