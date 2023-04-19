<template>
    <div class="col-lg-10 mb-5">
        <div class="container-cover container-cover-cart">
            <h6>Thêm danh mục</h6>
          
                <div class="form-group">
                    <label for="exampleInputEmail1">Tên danh mục*</label>
                    <input type="text" v-model="name_category"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name">
                    <span v-if="error_category" class="text-danger">*Vui lòng nhập tên danh mục*</span>
                </div>
                <div class="text-center">
                    <button  v-if="update_category.status" @click="handlerClickUpdateCategory()" class="btn2 text-center btn_review btn-primary mb-5">Update</button>
                    <button v-else @click="handlerSubmitPostCategory()"  class="btn2 text-center btn_review btn-primary mb-5">Submit</button>
                </div>
                
            <h6 class="mt-5">List Category</h6>
            <table class="table text-center table-bordered table_cart">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Manager</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="padding:0px !important" v-for="(category,index) in list_category" :key="category._id">
                        <th><span style="margin-top: 40px;">{{ (index+1) }}</span></th>
                        <td><a href="">{{ category.name }}</a></td>
                        
                        <td>
                            <button class="btn2 btn-custom btn-warning" @click="handlerUpdateCategory(category._id, category.name)">Edit</button>
                            <button class="btn2 ml-3 btn-custom btn-danger" @click="handlerDeleteCategory(category._id)">Detele</button>
                            
                        </td>
                    </tr>
                   
                </tbody>
            </table>
        </div>

          
          
    </div>
    
</template>

<script>
import store from '@/store';
import { mapActions } from 'vuex';
import axios from 'axios'
export default{
    name: 'ListCategory',
    data(){
        return{
            name_category: "",
            error_category: false,
            update_category:{
                status: false,
                id: "",
            }
        }
    },
    computed: {
        list_category(){
            return store.state.list_category
        }
    },
    methods: {
        ...mapActions(['deleteBlog','getListCategory']),
        handlerDeleteBlog(id){
            this.deleteBlog(id)
        },
        handlerUpdateBlog(id){
            this.$router.push({name: 'updateblog',params: {id: id}})
        },
        isValid(){
            if(this.name_category == ""){
                this.error_category = true
            }else{
                this.error_category = false
            }
        },
        handlerSubmitPostCategory(){
            this.isValid()
            const data = {
                name: this.name_category
            }
            if(!this.error_category){
                axios.post('http://localhost:3000/api/category',data)
                    .then(response=>{
                        console.log(response)
                        this.getListCategory()
                    })
                    .catch(error=>{
                        console.log(error)
                    })
            }   
        },
        handlerUpdateCategory(id,name){
            this.update_category.status = true;
            this.update_category.id = id;
            this.name_category = name
                
        },
        handlerClickUpdateCategory(){
            const id = this.update_category.id
            const data = {
                name: this.name_category
            }
            axios.put('http://localhost:3000/api/category/'+id,data)
                .then(response=>{
                    if(response.status == 200){
                        this.getListCategory()
                        this.name_category = ""
                        this.update_category.status = false
                    }
                })
                .catch(error=>{
                    console.log(error)
                })
        },
        handlerDeleteCategory(id){
            axios.delete('http://localhost:3000/api/category/'+id)
                .then(response=>{
                    if(response.status == 200){
                        this.getListCategory()
                    }
                })
                .catch(error=>{
                    console.log(error)
                })
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

 .btn2{
    margin-top: 0px;
    margin-bottom: 0px;
 }
</style>