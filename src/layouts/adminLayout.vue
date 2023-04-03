<template>
    <div class="">
        <HeaderApp />
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
import HeaderApp from '../components/admin/HeaderApp.vue'
import SlideApp from '../components/admin/SlideApp.vue'
import SideBar from '../components/admin/SideBar.vue'
import FooterApp from '../components/admin/FooterApp.vue'

export default{
    name: 'adminLayout',
    components: {
        HeaderApp,
        SlideApp,
        SideBar,
        FooterApp
    }
}
</script>