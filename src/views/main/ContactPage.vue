<template>
    <div class="">
        <HeaderApp />
        <SlideApp />
        <div class="container-fluid my-5">
            <div class="container-cover">
                <div class="row">
                    <div class="mapouter">
                        <div class="gmap_canvas"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%&amp;height=400&amp;hl=en&amp;q=Can Tho University&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://piratebay-proxys.com/">Pirate Proxy</a></div>
                        <!-- <style>.mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {width:100%!important;height:400px!important;}</style> -->
                    </div>
                </div>
                <div class="row my-5">
                    <div  class="col-md-8 offset-md-2">
                        <h6 style="color: #000; font-size: 16px;">Get In Touch</h6>
                        <form action="">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Your name *</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Your email *</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name">
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Your message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn2 text-center btn_review btn-primary">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <FooterApp />
    </div>
</template>

<script>
import HeaderApp from '../../components/main/HeaderApp.vue'
import SlideApp from '../../components/main/SlideApp.vue'
import FooterApp from '../../components/main/FooterApp.vue'
export default{
    name: "ContactPage",
    components: {
        HeaderApp,
        SlideApp,
        FooterApp
    }
}
</script>

<style scoped>
.mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {width:100%!important;height:400px!important;}
</style>