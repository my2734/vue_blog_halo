<template>
    <div  class="col-lg-2 col-md-12" style="margin-bottom: 200px">
        <h5 style="cursor:pointer" @click="handlerClickPostBlog()">Create Blogs</h5>
        <hr class="separate_category" >
      

        <h5 class="mt-5" style="cursor:pointer" @click="handlerClickListBlog()">List Blog</h5>
        <hr class="separate_category">

        <h5 class="mt-5" style="cursor:pointer" @click="handlerClickListCategory()">List Category</h5>
        <hr class="separate_category">
      
    </div>
</template>

<script>
export default{
    name: "SideBar",
    methods: {
        handlerClickListBlog(){
            console.log('click list post')
            this.$router.push({name: 'listpost'})
        },
        handlerClickPostBlog(){
            this.$router.push({name: 'postblog'})
        },
        handlerClickListCategory(){
            this.$router.push({name:'listcategory'})
        }
    }
}
</script>

<style scoped>

</style>