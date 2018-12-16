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
            </div>
            <button 
                id="btnLeft" 
                class="btn btn-primary"
                type="submit"
                @click="createOpportunity"
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

export default {
    name: 'CreateOpportunities',
    data() {
        return {
            latitude: '',
            longitude: '',
            amount: '',
            desc1: '',
            desc2: '',
            desc3: '',
            price: '',
            city: '',
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
    }
}
</script>

<style>
    #btnLeft {
        margin-right: 10px;

    }
</style>
