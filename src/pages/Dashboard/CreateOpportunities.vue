<template>
    <div class="all-form">
        <h1>Create an Opportunity</h1>
        <!--<table cols="" data="" />-->
        <form style="margin-bottom:100px">               
            <div class="form-group">
                <label 
                    for="latitude"
                    >
                    Latitude
                </label>
                <input 
                    id="latitude"
                    class="form-control"
                    type="text"
                    placeholder="Enter the latitude of the opportunity"
                    required="required"
                    v-model="latitude"
                    >
            </div>
            <div class="form-group">
                <label 
                    for="longitude"
                    >
                    Longitude
                </label>
                <input 
                    id="longitude"
                    class="form-control"
                    type="text"
                    placeholder="Enter the longitude of the opportunity"
                    required="required"
                    v-model="longitude"
                    >
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">City</label>
                <input type="phone" class="form-control" placeholder="Enter the city of the opportunity" required
                        id="city"
                        v-model="city">
            </div>
            <div class="form-group"> 
                <div class="form-check">
                    <input 
                        id="companyLocation" 
                        class="form-check-input"
                        type="checkbox"
                        v-model="companyLocation"
                        @change="autoComplete"
                        >
                    <label 
                        class="form-check-label" 
                        for="companyLocation"
                        >
                        I want to make my opportunity's location same as my company's
                    </label>
                </div>
            </div>
            <div class="form-group">
<<<<<<< HEAD
                <label for="exampleInputPassword1">Amount</label>
                <input v-model="count" type="text" class="form-control" placeholder="Enter the amount of the opportunity" required>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Description One</label>
                <input v-model="desc1" type="text" class="form-control"  placeholder="Enter a description of the opportunity" required>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Description Two</label>
                <input v-model="desc2" type="text" class="form-control"  placeholder="Enter a description of the opportunity" required>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Description Three</label>
                <input v-model="desc3" type="text" class="form-control" placeholder="Enter a description of the opportunity" required>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Price</label>
                <input v-model="price" type="text" class="form-control" placeholder="Enter the price of the opportunity" required>
=======
                <label 
                    for="amount"
                    >
                    Amount
                </label>
                <input 
                    id="amount"
                    class="form-control"
                    type="number" 
                    placeholder="Enter the amount of the opportunity" 
                    required="required"
                    v-model="amount"
                    >
            </div>
            <div class="form-group">
                <label 
                    for="desc1"
                    >
                    Description One
                </label>
                <input  
                    id="desc1"
                    class="form-control"
                    type="text" 
                    placeholder="Enter a description of the opportunity" 
                    required="required"
                    v-model="desc1"
                    >
            </div>
            <div class="form-group">
                <label 
                    for="desc2"
                    >
                    Description Two
                </label>
                <input   
                    id="desc2"
                    class="form-control"
                    type="text"
                    placeholder="Enter a description of the opportunity" 
                    required="required"
                    v-model="desc2"
                    >
            </div>
            <div class="form-group">
                <label 
                    for="desc3"
                    >
                    Description Three
                </label>
                <input   
                    id="desc3"
                    class="form-control"
                    type="text" 
                    placeholder="Enter a description of the opportunity" 
                    required="required"
                    v-model="desc3"
                >
            </div>
            <div class="form-group">
                <label 
                    for="price"
                    >
                    Price
                </label>
                <input 
                    id="price"
                    class="form-control"
                    type="number" 
                    placeholder="Enter the price of the opportunity" 
                    required="required"
                    v-model="price"
                    >
            </div>
            <div class="form-group">
                <label 
                    for="city"
                    >
                    City
                </label>
                <input
                    id="city"
                    class="form-control" 
                    type="phone" 
                    placeholder="Enter the city of the opportunity"
                    required="required"
                    v-model="city"
                    >
>>>>>>> e8ad7562245d7459010b371615813af981b20399
            </div>
            <button 
                @click="submitOpportunity"
                id="btnLeft" 
                class="btn btn-primary"
<<<<<<< HEAD
                type="button"
=======
                type="submit"
                @click="createOpportunity"
>>>>>>> e8ad7562245d7459010b371615813af981b20399
                >
                Create Opportunity
            </button>
            <button 
                id="btnRight" 
                class="btn btn-primary"
<<<<<<< HEAD
                type="button"                
=======
                type="button"
                @click="reset"                
>>>>>>> e8ad7562245d7459010b371615813af981b20399
                >
                Reset
            </button>
        </form>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import OpportunityService from '@/services/opportunity'
import store from '@/store/store';

export default {
    name: 'CreateOpportunities',
    data() {
        return {
            latitude: '',
            longitude: '',
<<<<<<< HEAD
            city : '',
            companyLocation: false,
            count : '',
            price :'',
            desc1 :'',
            desc2 : '',
            desc3 : '' 
=======
            amount: '',
            desc1: '',
            desc2: '',
            desc3: '',
            price: '',
            city: '',
            companyLocation: false
>>>>>>> e8ad7562245d7459010b371615813af981b20399
        }
    },
    computed: {
        ...mapGetters({
           getCompany: 'company/getCompany'
        })
    },
    methods: {
<<<<<<< HEAD
       autoComplete: function () {
           if (this.companyLocation) {
               this.latitude = this.getCompany.latitude
               this.longitude = this.getCompany.longitude
               this.city = this.getCompany.city
           }
           else {
               this.latitude = ''
               this.longitude = ''
               this.city = ''
           }
       } , 
       submitOpportunity : function(){
           console.log(store.getters['authorization/getToken']); // burada geliyor ama headera eklemiyor.
           OpportunityService.createOpportunity(this.latitude , this.longitude , this.amount , this.desc1 , this.desc2 , this.desc3 , this.price ,this.city)
            .then(res => res.data)
            .then(res => {
                console.log(res);
            });

       }
=======
        autoComplete: function () {
            if (this.companyLocation) {
                this.latitude = this.getCompany.latitude
                this.longitude = this.getCompany.longitude
            }
            else {
                this.latitude = ''
                this.longitude = ''
            }
        },
        createOpportunity: function () {

        },
        reset: function () {
            this.latitude = ""
            this.longitude = ""
            this.companyLocation = false
            this.amount = ""
            this.desc1 = ""
            this.desc2 = ""
            this.desc3 = ""
            this.price = ""
            this.city = ""

        }
>>>>>>> e8ad7562245d7459010b371615813af981b20399
    }
}
</script>

<style scoped>
    #btnLeft {
        margin-right: 10px;
    }

    .all-form{
        background: rgba(0, 0, 0 ,0.1);
        padding: 30px;
    }
</style>
