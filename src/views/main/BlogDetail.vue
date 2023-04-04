<template>
    <div v-if="blog_detail" class="col-lg-9" >
        <div class="row">
            <div class="blog_detail_img">
                <img v-if="blog_detail.image"
                :src="'http://localhost:3000/images/' + blog_detail.image"
                alt=""
              />
            </div>
            <h5 class="blog_detail_name"> {{ blog_detail.title }} </h5>
            <br>
            <div class="blog_detail_content">
                <p>{{ blog_detail.header }}
                </p>
                <p class="blog_detail_content_sub">{{ blog_detail.body }}
                </p>
                <p>{{ blog_detail.footer }}
                </p>
            </div>
            <div class="w-100">
                <p><span class="font-weight-bold mr-3">Category:    </span>{{ blog_detail.category}}</p>
            </div>
        </div>
    </div>
    <h1 v-else>Loading...</h1>
</template>

<script>
// import store from '@/store';
// import { mapActions } from 'vuex';
import axios from 'axios'
export default{
    data(){
       return {
            blog_detail: {
                title: "",
                category: "",
                header: "",
                body: "",
                footer: "",
                image: ""
            }
       }
    },
    computed:{
        // blog_detail(){
        //     this.getBlogDetail(this.$route.params.id)
        //     return store.state.blog_detail
        // }
    },
    methods: {
       
    },
    created(){
        const id = this.$route.params.id
        axios.get('http://localhost:3000/api/blog/'+id)
            .then(response => {
                if(response.status == 200){
                    this.blog_detail = response.data
                }
            })
            .catch(()=>{
                console.log("Loi created")
            })
    },
    updated(){
        const id = this.$route.params.id
        axios.get('http://localhost:3000/api/blog/'+id)
            .then(response => {
                if(response.status == 200){
                    this.blog_detail.title = response.data.title
                    this.blog_detail.image = response.data.image
                    this.blog_detail.header = response.data.header
                    this.blog_detail.body = response.data.body
                    this.blog_detail.footer = response.data.footer
                    this.blog_detail.category = response.data.category
                }
            })
            .catch(()=>{
                console.log("Loi created")
            })
    }
}
</script>

<style>

</style>




