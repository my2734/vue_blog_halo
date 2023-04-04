<template>
    <div class="col-lg-10" >
            <h6 style="color: #000; font-size: 16px;">Create Blog</h6>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Title *</label>
                    <input type="text" v-model="blog.title" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name">
                    <span v-if="statusError.title" class="text-danger">*Vui lòng nhập tên BLog*</span>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Category *</label>
                    <input type="text" v-model="blog.category" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name">
                    <span v-if="statusError.category" class="text-danger">*Vui lòng nhập danh mục*</span>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Image Blog</label>
                    <input  type="file"
                    @change="uploadFile"
                    ref="file"
                    class="form-control-file" id="exampleFormControlFile1">
                    <span v-if="statusError.image" class="text-danger">*Vui lòng nhập hình ảnh*</span>
                    <!-- <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> -->
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Header Blog</label>
                    <textarea class="form-control" v-model="blog.header" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Body Blog</label>
                    <textarea class="form-control" v-model="blog.body" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Footer Blog</label>
                    <textarea class="form-control" v-model="blog.footer" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
               
                <button @click="handlerSubmitBlog($event)" class="btn2 text-center btn_review btn-primary mb-5">Submit</button>
            </form>
    </div> 
</template>
<script>
import axios from 'axios'
import {mapActions} from 'vuex'
export default{
    name: "UpdateBlog",
    data(){
        return {
            status: false,
            blog: {
                title: "",
                category: "",
                image: "",
                header: "",
                body: "",
                footer: "",
            },
            statusError: {
                title: false,
                category: false,
                image: false,
            },
            status_update: false,
        }
    },
    methods: {
        validation(){
            if(this.blog.title == ""){
                this.statusError.title = true
                this.status = true
            }else{
                this.statusError.title = false
            }

            if(this.blog.category == ""){
                this.statusError.category = true
                this.status = true
            }else{
                this.statusError.category = false
            }

            if(this.blog.image.name == undefined){
                this.statusError.image = true
                this.status = true
            }else{
                this.statusError.image = false
            }

            if(this.blog.title != "" && this.blog.category != "" && this.blog.image.name != undefined){
                this.status = false
            }
        },
        handlerSubmitBlog(e){
            e.preventDefault()
            this.validation()
            //upload image 
            if(!this.status){
              
               
                axios.post(
                    "http://localhost:3000/api/upload",
                    { file: this.blog.image },
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                )
                .then(()=>{
                    this.addNewBlog({
                        title: this.blog.title,
                        header: this.blog.header,
                        body: this.blog.body,
                        footer: this.blog.footer,
                        image: this.blog.image.name,
                        category: this.blog.category,
                    })
                    
                     //clear 
                    this.blog.title = ""
                    this.blog.category = ""
                    this.blog.image = ""
                    this.blog.header = ""
                    this.blog.body = ""
                    this.blog.footer = "" 
                    //redirect list blog
                    this.$router.push({name: "listpost"})

                })
                .catch((error)=>{
                    console.log(error)
                    console.log("Loi upload")
                })
            }
        },
        uploadFile() {
            this.blog.image = this.$refs.file.files[0];
            this.statusError.title = false
        },
        ...mapActions(['addNewBlog'])
    },
    created(){
        // const id = this.$route.params.id
        
    }
}
</script>

<style>

</style>