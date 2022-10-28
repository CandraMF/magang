<template>
    <main class="min-vh-100 bg-parallax" style="background-size: cover; background-repeat: no-repeat; background-image: url('/image/bg_landing10.png'); background-attachment: fixed;">
        <nav class="navbar navbar-expand-lg"  style="z-index: 999; font-size: 12pt !important; transition: .2s ease-in-out;" :class="[view.type != 'md' && view.type != 'lg' ? 'navbarSm' : '', {'navOnScroll': !view.topOfPage, 'navOnTop' : view.topOfPage}]">
            <div class="container-fluid px-4">
                <router-link class="navbar-brand" to="/">
                    <!-- <img v-if="view.topOfPage" :src="'/image/logo-bpkh-s-white.png'" alt="" style="width: 100px"> -->
                    <img :src="'/image/logo-bpkh-s.png'" alt="" style="width: 130px;" :class="{ 'navLogoOnScroll': !view.topOfPage }">
                </router-link>
                <button class="navbar-toggler" style="border: none; outline: none; " data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="text-dark fas fa-bars fs-2x"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto ms-5 ps-3 mb-lg-0">

                    </ul>
                    <ul class="navbar-nav ms-5 ps-3 mb-2 mb-lg-0 mb-sm-5" v-if="user == null">
                        <li class="nav-item ms-lg-4 my-auto">
                            <router-link exact-active-class="active btn" to="/beranda/divisi" class="nav-link" aria-current="page" :class="{ 'navLinkOnScroll': !view.topOfPage}">Beranda</router-link>
                        </li>
                        <li class="nav-item ms-lg-4 my-auto">
                            <router-link exact-active-class="active btn" to="/prosedurMagang" class="nav-link" :class="{ 'navLinkOnScroll': !view.topOfPage}">Prosedur Magang</router-link>
                        </li>
                        <li class="nav-item ms-lg-4 my-auto">
                            <router-link exact-active-class="active btn" to="/pengumuman" class="nav-link" :class="{ 'navLinkOnScroll': !view.topOfPage}">Pengumuman</router-link>
                        </li>
                        <li class="nav-item ms-lg-4 my-auto">
                            <router-link exact-active-class="active btn" to="/auth/register" class="nav-link" :class="{ 'navLinkOnScroll': !view.topOfPage}">Daftar</router-link>
                        </li>
                        <li class="nav-item ms-lg-4 my-auto">
                            <router-link exact-active-class="btn" style="border-radius: 6px; background: #DC8100; color: white !important;" to="/auth/login" class="nav-link btn"  :class="{ 'navLinkOnScroll': !view.topOfPage}">Masuk</router-link>
                        </li>
                    </ul>
                    <ul class="navbar-nav" v-else>
                        <div class="symbol symbol-50px symbol-circle">
                            <div class="symbol-label fs-2 fw-bold text-success">A</div>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="">
            <router-view></router-view>
        </div>
        <HomeFooter></HomeFooter>
    </main>
    <KTScrollTop></KTScrollTop>
</template>

<style scoped>

    .active {
        border-radius: 6px;
        background: #092F53;
        color: white !important;
    }
    .navOnTop{
        background: transparent;
        width: 100%;
        padding: 30px 50px;
        position: absolute;
    }
    .navOnScroll {
        box-shadow: 0 0 10px #aaa;
        background-color: #fff;
        padding: 10px 20px !important;
        position: fixed;
        width: 100%;

    }

    .navLogoOnScroll{
        width: 100px !important;
    }

    .navbarSm {
        position: relative !important;
        padding: 10px 20px !important;
        background: white !important;
    }

    .navbarSm .navbar-brand img{
        padding: 10px 20px !important;
    }

    .navbarSm .nav-link:hover{
        color: black !important;
    }

    .navbarSm .nav-item .active{
        color: white !important;
    }

    .nav-link{
        color: rgba(0, 0, 0, 0.644) !important;
        font-weight: 600;
    }
    .nav-link:hover{
        color: #DC8100 !important;
    }
    .navOnScroll  .nav-link:hover:not(.active){
        color: #000000 !important;
    }

    .nav-item .active{
        color: #ffffff !important;
    }

    .navOnScroll .active {
        color: white !important;
    }

    h5 {
        font-weight: 500;
        font-size: 18pt;
        color: white;
    }

    h3 {
        color: white;
    }

    footer .col-md-4 {
        padding: 0px 40px;
    }

</style>

<script setup>
    import { useStore } from "vuex";
    import { ref, onMounted } from "vue";

    const store = useStore()

    var user = null

    onMounted(() => {
        user = store.getters.getUser
    })


</script>

<script>
import KTScrollTop from "@/layout/extras/ScrollTop.vue";
import HomeFooter from "@/layout/footer/HomeFooter.vue";

export default {
    components: {
        KTScrollTop,
        HomeFooter
    },
    data () {
        return {
            view: {
                topOfPage: true,
                width: 0,
                height: 0,
                type: 'md',
            }
        }
    },
    beforeMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleResize() {
            this.view.width = window.innerWidth;
            this.view.height = window.innerHeight;

            if (this.view.width < 768) {
                this.view.type = 'xs'
            } else if (this.view.width >= 768 &&  this.view.width <= 992) {
                this.view.type = 'sm'
            } else if (this.view.width > 992 &&  this.view.width <= 1200) {
                this.view.type = 'md'
            } else  {
                this.view.type = 'lg'
            }

        },
        handleScroll(){

            if (this.view.type != 'md' && this.view.type != 'lg') {
                if(window.pageYOffset > 0){
                    if(this.view.topOfPage) this.view.topOfPage = false
                } else {
                    if(!this.view.topOfPage) this.view.topOfPage = true
                }
            } else {
                if(window.pageYOffset > 300){
                    if(this.view.topOfPage) this.view.topOfPage = false
                } else {
                    if(!this.view.topOfPage) this.view.topOfPage = true
                }
            }
        }
    },
}
</script>
