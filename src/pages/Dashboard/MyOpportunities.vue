<template>
    <div class="all-form">
        <h1>Opportunities</h1>
            <tr>
                <th>Opportunity ID</th>
                <th>Description 1</th>
                <th>Description 2</th>
                <th>Description 3</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Price</th>
                <th></th>
            </tr>
            <tr v-for="(opp,index) in opportunities" :key="index">
                <td> {{ opp.oid }}</td>
                <td>{{opp.desc1}}</td>
                <td>{{opp.desc2}}</td>
                <td>{{opp.desc3}}</td>
                <td>{{opp.latitude}}</td>
                <td>{{opp.longitude}} </td>
                <td>{{opp.price}}</td>
                <td><button class="btn btn-danger" @click="removeOpportunity(index)">REMOVE</button></td>
            </tr>
    </div>
</template>


<script>

import OpportunityService from '@/services/opportunity'

export default {
    name : 'MyOpportunities',
    data(){
        return {
            opportunities : []

        }
    } , created(){
           OpportunityService.getMyOpportunities()
            .then(res => res.data)
            .then(res => {
                this.opportunities = res;
            });

     
    },
    methods : {
        removeOpportunity : function(index) {
            OpportunityService.deleteOpportunity(index).then(res => {
                console.log(res);
            })

              OpportunityService.getMyOpportunities()
            .then(res => res.data)
            .then(res => {
                this.opportunities = res;
            });
        }
    }
    
}



</script>



<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}


</style>
