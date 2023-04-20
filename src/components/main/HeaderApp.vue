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
                            <a class="nav-link" @click="handlerClickHome($event)">Home <span class="sr-only">(current)</span></a>
                        </li>                       
                        <li class="nav-item">
                            <a class="nav-link" @click="handlerClickAbout($event)">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" @click="handlerClickContact($event)">Contact Us</a>
                        </li>
                        
                    </ul>
                    <ul class="nav-list-icon" style="list-style: none;">
                        <li v-if="isAuth"><a style="cursor:pointer" class="nav-link" @click="handlerClickPostBlog($event)">Create Blog</a></li>
                        <li v-else><a style="cursor:pointer" @click="handlerClickLogin($event)" class="fa fa-user">Login</a></li>
                        <li v-if="isAuth"><a style="cursor:pointer" class="nav-link" @click="handlerClickLogout($event)">Logout</a></li>
                        
                    </ul>
                </div>
            </nav>
        </div>
        <!-- <div class="" style="margin-top: 64px;"></div> -->
    </div>
</template>

<script>
import store from "@/store"
import { mapActions } from "vuex"
export default{
    name: 'HeaderApp',
    computed: {
        isAuth(){
            return store.state.auth.isAuthentication
        }
    },
    methods:{
        handlerClickAbout(e){
            e.preventDefault(e)
            this.$router.push({name: 'about'})
        },
        handlerClickHome(e){
            e.preventDefault()
            this.$router.push({name: 'home'})
        },
        handlerClickContact(e){
            e.preventDefault()
            this.getListBlog()
            this.$router.push({name:'contact'})
        },  
        handlerClickLogin(e){
            e.preventDefault()
            this.$router.push({name: 'login'})
        },
        handlerClickLogo(e){
            e.preventDefault()
            this.getListBlog()
            this.$router.push({name: "home"})

        },
        handlerClickLogout(e){
            e.preventDefault()
            this.delete_cookie('token')
            store.commit('UPDATE_AUTH',false)
            this.$router.push({name: 'login'})
        },
        getCookie(cname) {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for(let i = 0; i <ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
                }
            }
            return "";
        },
        delete_cookie(name) {
            document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        },
        handlerClickPostBlog(e){
            e.preventDefault()
            this.$router.push({name:'postblog'})
        },
        ...mapActions(['getListCategory','getListBlog'])
    },
    created(){
        const token = this.getCookie('token')
        let isAuth = false
        if(token != ""){
            isAuth = true
        }
        store.commit('UPDATE_AUTH', isAuth)
        this.getListCategory()
    }
}
</script>

<style>
</style>