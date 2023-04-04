<template>
    <div class="col-lg-10 mb-5">
        <div class="container-cover container-cover-cart">
            <table class="table text-center table-bordered table_cart">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Category</th>
                        <th scope="col">Image</th>
                        <th scope="col">Content</th>
                        <th scope="col">Manager</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(blog,index) in listblog" :key="blog._id">
                        <th><span style="margin-top: 40px;">{{ (index+1) }}</span></th>
                        <td><a href="">{{ blog.title }}</a></td>
                        <td>{{ blog.category }}</td>
                        <td class="text-center">
                            <div class="cart_img">
                                <img :src="'http://localhost:3000/images/'+blog.image" alt="">
                            </div>
                        </td>
                        <td width="300px">
                            <p class="text">{{ blog.header }}</p>
                        </td>
                        <td>
                            <button class="btn2 btn-custom btn-warning" @click="handlerUpdateBlog(blog._id)">Edit</button>
                            <button class="btn2 ml-3 btn-custom btn-danger mb-5" @click="handlerDeleteBlog(blog._id)">Detele</button>
                            
                        </td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
        <!-- <button type="button" class="btn2 btn-primary" data-toggle="modal" data-target="#exampleModal">
            Launch demo modal
          </button> -->
          
          
    </div>
    
</template>

<script>
import store from '@/store';
import { mapActions } from 'vuex';
export default{
    name: 'ListBlog',
    computed: {
        listblog(){
            this.getListBlog()
            return store.state.list_blog
        }
    },
    methods: {
        ...mapActions(['getListBlog','deleteBlog']),
        handlerDeleteBlog(id){
            this.deleteBlog(id)
        },
        handlerUpdateBlog(id){
            this.$router.push({name: 'updateblog',params: {id: id}})
        }
    },
}
</script>

<style scoped>
.btn-custom{
    padding: 5px !important;
}

.text {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* number of lines to show */
            line-clamp: 4; 
    -webkit-box-orient: vertical;
 }

 .container-cover,.container-cover-cart{
    margin-right: 0px !important;
 }
</style>