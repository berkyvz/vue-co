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
                    type="number"
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
                    type="number"
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
                <label for="exampleInputPassword1">Amount</label>
                <input v-model="count" type="number" class="form-control" placeholder="Enter the amount of the opportunity" required>
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
                <input v-model="price" type="number" class="form-control" placeholder="Enter the price of the opportunity" required>
            </div>
            <div v-if="showingError" class="alert alert-danger" role="alert">
                {{errorMessage}}
            </div>
            <div v-if="showingOk" class="alert alert-success" role="alert">
                Opportunity created.
            </div>
            <button
                @click="submitOpportunity"
                id="btnLeft" 
                class="btn btn-primary"
                type="button"
                >
                Create Opportunity
            </button>
            <button 
                id="btnRight" 
                class="btn btn-primary"
                type="button" 
                @click="reset"               
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
            city : '',
            companyLocation: false,
            count : '',
            price :'',
            desc1 :'',
            desc2 : '',
            desc3 : '' ,
            showingError : false,
            errorMessage : "",
            showingOk : false

        }
    },
    computed: {
        ...mapGetters({
           getCompany: 'company/getCompany'
        })
    },
    methods: {
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
        },
        submitOpportunity: function () {
          

            if(this.latitude.length < 1 || this.longitude.length < 1 || 
            this.city.length < 1 || this.count.length < 1 || 
            this.desc1.length < 1 || this.desc2.length < 1 || 
            this.desc3.length < 1 || this.price.length < 1 ){

                this.showingError = true;
                this.showingOk = false;
                this.errorMessage = "Please fill all the blanks."
                return ;
            }

            OpportunityService.createOpportunity(this.latitude, this.longitude , this.city , this.count , this.desc1 , this.desc2  , this.desc3 , this.price)
            .then(res => res.data)
            .then(res => {
                this.showingOk = true;
                this.showingError = false;
            });

            this.latitude = "";
            this.longitude = "";
            this.companyLocation = false;
            this.count = "";
            this.desc1 = "";
            this.desc2 = "";
            this.desc3 = "";
            this.price = "";
            this.city = "";

        },
        reset: function () {
            this.latitude = "";
            this.longitude = "";
            this.companyLocation = false;
            this.count = "";
            this.desc1 = "";
            this.desc2 = "";
            this.desc3 = "";
            this.price = "";
            this.city = "";
            this.showingError = false;
            this.errorMessage = "";
            this.showingOk = false;

        }
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
