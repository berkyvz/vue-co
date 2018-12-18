<template>
    <div class="all-form">
        <h1>Opportunities</h1>
        <ul class="list-group">
            <li class="list-group-item">
            Oid - desc1 - desc2 - desc3 - count - price <button>Remove</button>
            </li>
        </ul>
    </div>
</template>


<script>

import OpportunityService from '@/services/opportunity'

export default {
    name : 'MyOpportunities',
    data(){
        return {

        }
    } , created(){
   /*
           OpportunityService.getMyOpportunities()
            .then(res => res.data)
            .then(res => {
                console.log(res);
            });

     */  
    }
    
}



</script>



<style scoped>

 .all-form{
        background: rgba(0, 0, 0 ,0.1);
        padding: 30px;
    }


</style>
