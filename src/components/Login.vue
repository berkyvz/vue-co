<template>
    <div class="container">
        <div class="form">
            <div class="form-group">
            <label>Email address</label>
            <input type="email" v-model="email" class="form-control" placeholder="Enter email">                
            <small class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password" placeholder="Password">
        </div>
        <div v-if="isLoggedIn == 1" class="alert alert-danger" role="alert">
            Email or Password is incorrect
        </div>
        <div v-if="isLoggedIn == 2" class="alert alert-success" role="alert">
            Welcome {{name }} You are successfully Logged In.
        </div>
        <button type="submit" class="btn btn-primary" v-on:click="submitLogin" >Submit</button>
        </div>
        
    </div>

</template>

<script>


export default {
    name : 'login',
    data(){
        return {
           email : "",
           password  : "",
           isLoggedIn: 0,
           name : ""
        }
    },
    methods : {
        submitLogin : function (){
            var loginObj = {
                'email' : this.email ,
                'password' : this.password
            }
            this.$http.post('http://localhost:8080/company/login', loginObj).then(
                (response) => {
                    this.isLoggedIn = 2;
                    this.name = response.body.name;
                },
                (err) => {
                    this.isLoggedIn = 1;
                }
            )
            
        } 
    }
}
</script>
<style scoped>

.form{
    background-color: rgba(0, 0, 0, 0.1);
    padding: 20px;
   
}
  
</style>
