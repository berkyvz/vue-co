<template>
    <div class="all-form">
        <h1>My Opportunities</h1>
            <tr>
                <th>Opportunity ID</th>
                <th>Description 1</th>
                <th>Description 2</th>
                <th>Description 3</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Left Amount</th>
                <th>Price</th>
                <th>Option</th>
            </tr>
            <tr v-for="(opp,index) in opportunities" :key="index">
                <td> {{ opp.oid }}</td>
                <td>{{opp.desc1}}</td>
                <td>{{opp.desc2}}</td>
                <td>{{opp.desc3}}</td>
                <td>{{opp.latitude}}</td>
                <td>{{opp.longitude}} </td>
                <td >{{opp.count}} </td>
                <td>{{opp.price}}</td>
                <td v-if="opp.count!=0"><button class="btn btn-danger" @click="removeOpportunity(index+1)">REMOVE</button></td>
                <td v-if="opp.count==0"><button class="btn btn-primary" @click="removeOpportunity(index+1)">REMOVE[Out of Stock]</button></td>
            </tr>
            <div v-if="showing" class="alert alert-primary" role="alert">
                    Opportunity Removed.
            </div>
            
        
    </div>
</template>


<script>

import OpportunityService from '@/services/opportunity'

export default {
    name : 'MyOpportunities',
    data(){
        return {
            opportunities : [],
            showing : false

        }
    } , created(){
           OpportunityService.getMyOpportunities()
            .then(res => res.data)
            .then(res => {
                this.opportunities = res;
            });

     
    },updated(){
        OpportunityService.getMyOpportunities()
            .then(res => res.data)
            .then(res => {
                this.opportunities = res;
            });
    },
    methods : {
        removeOpportunity : function(index) {
            this.showing = true;
            OpportunityService.deleteOpportunity(index).then(res => {
            });

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
