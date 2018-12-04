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
      <router-view>
      </router-view>
    </div>
    <div>
      <h1>{{welcomeMessage}}</h1>
      <input v-model="name"/>
      <button @click="updateName">Update Name</button>
      </div>
  </div>

</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex';
export default {
  name: 'app',
  data () {
    return {
      name: '',

    }
  },
  computed: {
    ...mapState([
      'message',
      'username',
    ]),
    ...mapGetters([
      'welcomeMessage',
    ]),
  },
  methods: {
    ...mapActions([
      'updateUserName',
    ]),
    updateName() {
      this.updateUserName(this.name);
      console.log(this.name)
    }, 
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
