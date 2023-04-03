<template>
    <div>
        <div id="header1">
            <nav  class="navbar navbar-expand-lg navbar-light bg-light position-fixed fixed-top px-5" style="box-shadow: 0 0 10px rgba(0,0,0,0.2);">
                <a @click="handlerClickLogo($event)" class="navbar-brand" href="#"><img src="@/assets/images/logo.png" alt=""></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Shop<span><i class="fa fa-chevron-down icon_navbar" aria-hidden="true"></i></span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact Us</a>
                        </li>
                        
                    </ul>
                    <ul class="nav-list-icon" style="list-style: none;">
                        <li><a href="" class="fa fa-heart"></a></li>
                        <li><a href="" class="fa fa-user"></a></li>
                        <li><a href="" class="fa fa-shopping-cart"></a></li>
                    </ul>
                </div>
            </nav>
        </div>
        <!-- <div class="" style="margin-top: 64px;"></div> -->
    </div>
</template>

<script>
export default{
    name: 'HeaderApp',
    methods:{
        handlerClickLogo(e){
            e.preventDefault()
            this.$router.push({name: "home"})
        }
    }
}
</script>

<style>
</style>