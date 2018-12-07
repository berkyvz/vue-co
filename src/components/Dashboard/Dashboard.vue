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
                        <div class="menuitem"><i class="fas fa-user"></i><div class="menuitem2">PROFILE</div> </div>
                    </li>
                    <li class="nav-item">
                       <div class="menuitem"> <i class="fas fa-sign-out-alt"></i> <div class="menuitem2">LOG OUT</div> </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

    <div class="sidebar">
        <ul class="ulul">
            <li class="listitem">
               <div class="listitemside"><i class="fas fa-plus-circle"></i> <span class="spanside">Create Opportunity</span> </div>
            </li>
             <li class="listitem">
                 <div class="listitemside"><i class="fas fa-archive"></i> <span class="spanside">My Opportunities</span> </div>
            </li>
             <li class="listitem">
                 <div class="listitemside"><i class="fas fa-qrcode"></i> <span class="spanside">My Qr Codes</span></div>
            </li>
        </ul>
           
    </div>
    <div class="content">
        CONTENTS HERE
    </div>
    
   

</div>
</template>


<script>
import {baseURL} from '../../config/config.js'

export default {
    name : 'dashboard',
    data(){
        return {

        }
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
    margin-right: 20px;
    margin-left: 20px;
    width: 500px;
    float: left;
}


</style>
