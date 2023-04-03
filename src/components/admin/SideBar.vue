<template>
    <div  class="col-lg-2 col-md-12" style="margin-bottom: 200px">
        <h5 style="cursor:pointer" @click="handlerClickPostBlog()">Create Blogs</h5>
        <hr class="separate_category" >
        <!-- <div class="list_category">
            <p><a class="text_link">Men </a></p>
            <p><a class="text_link">Football </a></p>
            <p><a class="text_link">Men's</a></p>
            <p><a class="text_link">Portable Audio</a></p>
        </div> -->

        <h5 class="mt-5" style="cursor:pointer" @click="handlerClickListBlog()">List Blog</h5>
        <hr class="separate_category">
        <!-- <a class="tags_blog">Technology</a>
        <a class="tags_blog">Information</a>
        <a class="tags_blog">Wordpress</a>
        <a class="tags_blog">Devs</a>
        <a class="tags_blog">Program</a> -->
    </div>
</template>

<script>
export default{
    name: "SideBar",
    methods: {
        handlerClickListBlog(){
            this.$router.push({name: 'listblog'})
        },
        handlerClickPostBlog(){
            this.$router.push({name: 'postblog'})
        }
    }
}
</script>

<style scoped>

</style>