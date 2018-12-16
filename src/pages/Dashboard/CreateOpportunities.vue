<template>
    <div>
        <h1>Create an Opportunity</h1>
        <table cols="" data="" />
        <form style="margin-bottom:100px">               
            <div class="form-group">
                <label for="exampleInputPassword1">Latitude :</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter the latitude of the opportunity" required>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Longitude :</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter the longitude of the opportunity" required>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">I want to make my opportunity's location same as my company's</label>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Amount :</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter the amount of the opportunity" required>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Description One :</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter a description of the opportunity" required>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Description Two :</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter a description of the opportunity" required>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Description Two :</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter a description of the opportunity" required>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Price :</label>
                <input type="phone" class="form-control" id="exampleInputPassword1" placeholder="Enter the price of the opportunity" required>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">City :</label>
                <input type="phone" class="form-control" id="exampleInputPassword1" placeholder="Enter the city of the opportunity" required>
            </div>
            <button id="btnLeft" type="submit" class="btn btn-primary">Create Opportunity</button>
            <button id="btnRight" type="submit" class="btn btn-primary">Reset</button>
        </form>
    </div>
</template>


<script>
import Table from '@/components/Table'

export default {
    name : 'CreateOpportunities',
    components: { Table },
    data(){
        return {

        }
    },
    created () {

    }
}



</script>



<style>
    #btnLeft {
        margin-right: 10px;

    }


</style>
