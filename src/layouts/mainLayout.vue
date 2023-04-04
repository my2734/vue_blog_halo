<template>
    <div class="">
        <HeaderApp />
        <div style="margin-top: 64px"></div>
        <SlideApp />
        <div class="container-fluid">
            <div class="container-cover">
                <div class="row">
                    <SideBar />
                    <slot/>
                </div>
            </div>           
        </div>
        <FooterApp />
    </div>
</template>

<script>
import HeaderApp from '../components/main/HeaderApp.vue'
import SlideApp from '../components/main/SlideApp.vue'
import SideBar from '../components/main/SideBar.vue'
import FooterApp from '../components/main/FooterApp.vue'

export default{
    name: 'mainLayout',
    components: {
        HeaderApp,
        SlideApp,
        SideBar,
        FooterApp
    }
}
</script>