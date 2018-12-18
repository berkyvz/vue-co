<template>
<div>
    <!--  HEADER -->
    <div>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <a href="/" class="navbar-brand">Dashboard</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar7">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse justify-content-stretch" id="navbar7">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link
                        to="/dashboard/profile">
                        <div class="menuitem">
                            <i class="fas fa-user"></i>
                            <div class="menuitem2">Profile</div>
                        </div>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                        to="/">
                        <div class="menuitem"> 
                            <i class="fas fa-sign-out-alt"></i> 
                            <div class="menuitem2">Log Out</div> 
                        </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

    <div class="sidebar">
        <ul class="ulul">
            <li class="listitem">
                <router-link   
                    to="/dashboard/createopportunuties"
                    class="listitemside">
                    <i class="fas fa-plus-circle"></i> <span class="spanside">Create Opportunity</span>
                </router-link>
            </li>
             <li class="listitem">
                   <router-link   
                    to="/dashboard/myopportunities"
                    class="listitemside">
                    <i class="fas fa-archive"></i> <span class="spanside">My Opportunities</span>
                </router-link>
            </li>
             <li class="listitem">
                 <router-link   
                    to="/dashboard/qrcodes"
                    class="listitemside">
                    <i class="fas fa-qrcode"></i> <span class="spanside">My QR Codes</span>
                </router-link>
            </li>
        </ul>
           
    </div>
    <div class="content">
        <router-view />
    </div>
</div>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
    name : 'Dashboard',
    data(){
        return {

        }
    },
    computed: {
        ...mapGetters({
            userToken: 'authorization/getToken'
        })
    },
    beforeRouteEnter: function (to, from, next) {
        next(vm => {
            if(vm.userToken === null) { vm.$router.push('/login') }
        })
    }
}



</script>



<style>
.spanside{
    margin-left: 9px;

}
.listitemside{
    display: inline-block;
    padding: 5px;
}
.ulul{
    list-style-type: none;
}
.listitem{
    font-size: 17px;
    color: white;
    margin-top: 10px;
}
i{
    font-size: 20px;
    color: white;
    
}
.menuitem{
    width: 100px;
    margin-right: 10px;
    color: white;
    font-size: 15px;
    border: 2px solid white;
    border-radius: 14%;
    padding: 10px;
    text-align: center;
}

.sidebar{
    height: 1000px;
    background-color: black;
    width: 250px;
    float: left;
}

.content{
    margin-left: 20px;
    width: 70%;
    float: left;
}


</style>
