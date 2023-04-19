<template>
    <div  class="col-lg-3 col-md-12" style="margin-bottom: 200px">
        <h5>Categories</h5>
        <hr class="separate_category">
        <div class="list_category">
            <p v-for="category in list_category" :key="category._id"><a class="text_link">{{ category.name }} </a></p>
           
        </div>

        
    </div>
</template>

<script>
import store from '@/store'
export default{
    name: "SideBar",
    computed: {
        list_category(){
            return store.state.list_category
        }
    }
}
</script>

<style>
</style>