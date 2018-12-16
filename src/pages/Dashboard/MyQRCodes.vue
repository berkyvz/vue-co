<template>
    <div>
        <h1>QR Codes of the Opportunuties</h1>
        <div class="form-group">
            <label for="sel1">Select list:</label>
            <select class="form-control" id="sel1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
        </div>
        <div style="background: gray; padding: 50px; text-align: center">        
            <img src="data:image/png;base64,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">
        </div>
    </div>
</template>


<script>

export default {
    name : 'MyQRCodes',
    data(){
        return {

        }
    }
    
}



</script>



<style>


</style>
