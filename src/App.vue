<template>
  <div>
      <router-view />
    <!--<div>
      <h1>{{welcomeMessage}}</h1>
      <input v-model="name"/>
      <button @click="updateName">Update Name</button>
      </div>-->
  </div>

</template>

<script>
//import {mapState, mapGetters, mapActions} from 'vuex';
export default {
  name: 'app',
  data () {
    return {
      //name: '',

    }
  },
  /*computed: {
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
  }*/
}

</script>

<style scoped>

.mainContent{
  padding: 20px;
  margin-top: 10px;
}

</style>
