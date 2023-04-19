<template>
    <div>
        <div id="header1">
            <nav  class="navbar navbar-expand-lg navbar-light bg-light position-fixed fixed-top px-5" style="box-shadow: 0 0 10px rgba(0,0,0,0.2);">
                <router-link :to="{name: 'listpost'}" class="navbar-brand" href="#">Dashboard Admin</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a style="cursor:pointer" class="nav-link" @click="handlerClickHome($event)">Home <span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default{
    name: 'HeaderApp',
    methods: {
        handlerClickHome(e){
            e.preventDefault()
            this.$router.push({name: 'home'})
        },
        ...mapActions(['getListCategory'])
    },
    created(){
        this.getListCategory()
    }
}
</script>

<style>
</style>