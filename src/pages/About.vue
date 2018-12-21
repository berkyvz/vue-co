
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
        <div class="container">
            <h1>About Us</h1>
            <p>This platform is a phone application and a website that will be progressed from two different sides for the same purpose.
               The aim of this platform is for people to catch opportunities by showing them a limited activities, events and discounted products.
               Users can pre-order limited opportunities, which are special big discounts or they can pre-order the tickets of activities and events that
                are embedded in our application’s database. This system protects the users from out-of-stock tickets, because these exclusive offers will
                 be only for this application. As you can guess, phone application is used by the customers, they  use it for categorizing the desired products, 
                 activities etc. with small amount of information. You can search whatever you want for a special discount. When you pre-order the product, 
                 it will show you the shortest way by using Google Map app. In addition, The website side is for a company which wants to organize the activities and events or want to 
                 sell their product with a discount. Actually, they will create our data of the products, events and activities themselves. On the other hand, the company 
                 will be able to publish company advertisements and/or opportunities by showing them in the phone application to attract people.</p>

            <div class="download">
                <h3>Apk v1 released!</h3>
                <a href="http://159.65.226.217/release/CatchOpportunity.apk" ><img  src="../assets/androiddownload.png"/></a>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name : 'About',
    data(){
        return {
          
        }
    }  
}
</script>

<style scoped>
    h1{
    text-align: center
    }

    .brandd {
    color: white;
    }
    .brandd:hover {
    color: gray;
    }
    .links {
    color : white;
    font-weight: 600;
    margin-right: 20px;
    }
    .links:hover {
    color: gray;
    }
    ul {
    display: inline; 
    }

    .download{
        margin-top: 70px;
        text-align: center;
        padding: 40px;
        background: rgba(0, 0, 0, 1);
        border-radius: 50%;
        border: 1px solid black;
    }
    .download img{
        width: 50%;
        -webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
    }
    .download img:hover{
        width: 50%;
        -webkit-transform: scale(1.15);
	transform: scale(1.15);
    }

    .download h3{
        color: white;
        margin-bottom: 30px;
       
    }

</style>
