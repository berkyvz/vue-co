<template>   
<!--import func from './vue-temp/vue-editor-bridge';-->
<div class="container">
                <div class="form">
                    <h3 class="register_title">You can update your profile here!</h3>
                    <div class="form-group">
                        <label>Email address</label>
                        <input type="email" v-model="email" class="form-control" disabled="disabled" placeholder="burası kaydolurkenki emaili editlenemez olacak" required>                
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
                    <button type="submit" class="btn btn-primary" v-on:click="submitUpdate" >Save</button>

                    <div v-if="isSaved" class="alert alert-success" role="alert">
                        <strong>Well done!</strong> You successfully save the changes.
                    </div>    
                </div>
            </div>
</template>



<script>
import Company from '../../models/company'
import CompanyService from '@/services/company'
import {mapGetters} from 'vuex'
import { Authorization } from '@/services/config'

export default {
    name : 'Profile',
    data(){
        return {
            coid : 0,
            email : '',
            password : '',
            name : '',
            city : '',
            latitude : '',
            longitude : '',
            phone : '',
            isSaved : false
        }
    } ,
    created(){
        this.coid = this.company.coid;
        this.email = this.company.email;
        this.password = this.company.password;
        this.name = this.company.name;
        this.city = this.company.city;
        this.latitude = this.company.latitude;
        this.longitude = this.company.longitude;
        this.phone = this.company.phone;

    },
    computed: {
        ...mapGetters({
            company: 'company/getCompany',
        })
    },
    methods : {
         submitUpdate : function() {

            
            CompanyService.updateProfile(this.coid , this.password , this.name , this.city ,this.latitude , this.longitude , this.phone)
            .then(res => res.data)
            .then(res => {

                 this.$store.dispatch('authorization/setToken', res.token);
                 Authorization.defaults.headers['AuthSession'] = res.token; // Burada tokeni basmak zorunda kaldım yoksa almıyor...
                 const company = new Company(res.coid , res.email, res.password, res.name, res.city, res.latitude, res.longitude, res.phone)
                 this.$store.dispatch('company/setCompany', company);
                 this.isSaved = true;
            })

        }
    }
    
}



</script>



<style scoped>
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
