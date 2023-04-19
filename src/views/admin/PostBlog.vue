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
                    <select v-model="blog.category" class="form-control" id="exampleFormControlSelect1">
                        <option :value="category.name" v-for="category in list_category" :key="category._id">{{ category.name }}</option>
                      </select>
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
               
                <button v-if="!status_update" @click="handlerSubmitBlog($event)" class="btn2 text-center btn_review btn-primary mb-5">Submit</button>
                <button v-else @click="handlerUpdateBlog($event)" class="btn2 text-center btn_review btn-primary mb-5">Update</button>
            </form>
    </div> 
</template>
<script>
import axios from 'axios'
import {mapActions} from 'vuex'
import store from '@/store'
export default{
    name: "PostBlog",
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
    computed: {
        list_category(){
            return store.state.list_category
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
        validation_update(){
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


            if(this.blog.title != "" && this.blog.category != ""){
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
        handlerUpdateBlog(e){
            e.preventDefault()
            this.validation_update()
            //upload image 
            if(!this.status){
                const data = {
                    id: this.$route.params.id,
                    title : this.blog.title,
                    category : this.blog.category,
                    header: this.blog.header,
                    body: this.blog.body,
                    footer: this.blog.footer
                }
                //upload image
                if(this.blog.image.name){
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
                        data.image = this.blog.image.name
                        this.updateBlog(data)
                        //redirect list blog
                        this.$router.push({name: "listpost"})
                    })
                    .catch((error)=>{
                        console.log(error)
                        console.log("Loi upload")
                    })
                }else{ //khong upload image
                    this.updateBlog(data)
                    //redirect list blog
                    this.$router.push({name: "listpost"})
                }
            }
        },
        uploadFile() {
            this.blog.image = this.$refs.file.files[0];
            this.statusError.title = false
        },
        ...mapActions(['addNewBlog','updateBlog'])
    },
   created(){
        if(this.$route.params.id){
            this.status_update = true
            const id = this.$route.params.id
            axios.get('http://localhost:3000/api/blog/'+id)
                .then(response=>{
                    this.blog.title = response.data.title
                    this.blog.category = response.data.category
                    this.blog.header = response.data.header
                    this.blog.body = response.data.body
                    this.blog.footer = response.data.footer
                
                })  
                .catch(error=>{
                    console.log(error)
                })
        }
   }
}
</script>

<style>

</style>