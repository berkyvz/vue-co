<template>
  <div>
    <nav class="navbar navbar-light bg-dark">
      <span class="navbar-brand brandd">Catch Opportunity</span>
      <ul>
        <router-link to="/" class="links">About Us</router-link>
        <router-link to="/login" class="links">Login</router-link>
        <router-link to="/register" class="links">Register</router-link>
      </ul>
    </nav>

    <div class="mainContent">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
     
    }
  }
}

</script>

<style scoped>
.brandd{
  color : white;
}
.brandd:hover {
  color : gray;
}
.links{
  color : white;
  font-weight: 600;
  margin-right: 20px;
}
.links:hover{
  color: gray;
}
ul {
   display: inline; 
}
.mainContent{
  padding: 20px;
  margin-top: 10px;
}

</style>
