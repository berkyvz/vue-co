<template>
    <div>
        <h1>QR Codes of the Opportunuties</h1>
        <div class="form-group">
            <label for="sel1">Select list:</label>
            <select v-model="selected" class="form-control" id="sel1">
                <option v-for="(opportunity,index) in opportunities"  :key="index">
                    {{ opportunity.oid }}
                </option>
            </select>
        </div>
        <div v-if="!selected == ''" style="background: gray; padding: 50px; text-align: center">        
            <qrcode-vue :value="selected" :size="size" level="H"></qrcode-vue>
        </div>

        <div v-if="selected == ''" style="background: gray; padding: 50px; text-align: center">        
             <div class="alert alert-primary" role="alert">
                    Select opportunity ID for create QRCode.
            </div>
        </div>
    </div>
</template>


<script>
import QrcodeVue from 'qrcode.vue';
import OpportunityService from '@/services/opportunity';

export default {
    name : 'MyQRCodes',
    components: {
        QrcodeVue
    },created(){
        OpportunityService.getMyOpportunities()
            .then(res => res.data)
            .then(res => {
                this.opportunities = res;
            });
    },
    data(){
        return {
            value: '',
            size: 300,
            selected : '',
            opportunities : []
        }
    }
    
}



</script>



<style>


</style>
