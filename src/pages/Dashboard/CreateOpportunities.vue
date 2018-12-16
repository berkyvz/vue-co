<template>
    <div>
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
                <div class="form-check">
                    <input 
                        id="companyLocation" 
                        class="form-check-input"
                        type="checkbox"
                        v-model="companyLocation"
                        @change="autoComplete">
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
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter the amount of the opportunity" required>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Description One</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter a description of the opportunity" required>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Description Two</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter a description of the opportunity" required>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Description Three</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter a description of the opportunity" required>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Price</label>
                <input type="phone" class="form-control" id="exampleInputPassword1" placeholder="Enter the price of the opportunity" required>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">City</label>
                <input type="phone" class="form-control" id="exampleInputPassword1" placeholder="Enter the city of the opportunity" required>
            </div>
            <button 
                id="btnLeft" 
                class="btn btn-primary"
                type="submit"
                >
                Create Opportunity
            </button>
            <button 
                id="btnRight" 
                class="btn btn-primary"
                type="submit"                
                >
                Reset
            </button>
        </form>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'CreateOpportunities',
    data() {
        return {
            latitude: '',
            longitude: '',
            companyLocation: false
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
           }
           else {
               this.latitude = ''
               this.longitude = ''
           }
       } 
    }
}
</script>

<style>
    #btnLeft {
        margin-right: 10px;

    }
</style>
