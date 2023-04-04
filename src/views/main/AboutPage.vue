<template>
    <div class="">
        <HeaderApp />
        <SlideApp />
        <div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
            <div class="col-md-6 px-0">
              <h1 class="display-4 font-italic">Title of a longer featured blog post</h1>
              <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
              <p class="lead mb-0"><a href="#" class="text-white font-weight-bold">Continue reading...</a></p>
            </div>
          </div>
        <FooterApp />
    </div>
</template>

<script>
import HeaderApp from '../../components/main/HeaderApp.vue'
import FooterApp from '../../components/main/FooterApp.vue'
import SlideApp from '../../components/main/SlideApp.vue'
export default{
    name: "ContactPage",
    components: {
        HeaderApp,
        FooterApp,
        SlideApp
    }
}
</script>

<style scoped>
.mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {width:100%!important;height:400px!important;}
</style>