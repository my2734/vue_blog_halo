<template>
    <div class="col-lg-9">
        <div class="row">
            <div v-for="(blog) in listblog" :key="blog._id" class="col-lg-6 col-md-6 mb-5">
                <div class="card custom_card">
                    <img class="card-img-top" :src="'http://localhost:3000/images/'+blog.image" alt="Card image cap">
                    <div class="card-body">
                        <h6>{{ blog.title }}</h6>
                        <p class="card-text">{{ blog.header }}
                        </p>
                    </div>
                    <h6 @click="handlerBlogDetail(blog._id)" class="read_more">read more <span><i class="fa fa-arrow-right" aria-hidden="true"></i></span> </h6>
                </div>
            </div>
        </div>

        <div>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import store from '@/store';
import { mapActions } from 'vuex';
export default{
    name: "HomePage",
    data(){
        return {
        }
    },
    computed: {
        listblog(){
            return store.state.list_blog
        }
    },
    methods: {
        ...mapActions(['getListBlog','getBlogDetail']),
        handlerBlogDetail(id){
            this.getBlogDetail(id)
            this.$router.push({name: "blogdetail",params: {id: id}})
        }
    },
    created(){
        this.getListBlog()
    },
    updated(){
        
    }
}
</script>

<style>
</style>