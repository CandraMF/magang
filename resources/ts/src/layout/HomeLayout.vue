<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style="font-size: 12pt !important; padding: 10px 20px;" :class="{ 'navOnScroll': !view.topOfPage }">
            <div class="container-fluid px-4">
                <router-link class="navbar-brand" to="/">
                    <img v-if="view.topOfPage" :src="'/image/logo-bpkh-s-white.png'" alt="" style="width: 100px">
                    <img v-else :src="'/image/logo-bpkh-s.png'" alt="" style="width: 100px">
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto ms-5 ps-3 mb-2 mb-lg-0">
                        <li class="nav-item ">
                            <router-link exact-active-class="active" to="/beranda" class="nav-link" aria-current="page" :class="{ 'navLinkOnScroll': !view.topOfPage}">Beranda</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link exact-active-class="active" to="/prosedurMagang" class="nav-link" :class="{ 'navLinkOnScroll': !view.topOfPage}">Prosedur Magang</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link exact-active-class="active" to="/pengumuman" class="nav-link" :class="{ 'navLinkOnScroll': !view.topOfPage}">Pengumuman</router-link>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link exact-active-class="active" to="/login" class="nav-link" :class="{ 'navLinkOnScroll': !view.topOfPage}">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link exact-active-class="active" to="/register" class="nav-link" :class="{ 'navLinkOnScroll': !view.topOfPage}">Register</router-link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
        <div class="">
            <router-view></router-view>
        </div>
        <footer style="background: #092F53; color: white !important; padding: 50px 0px;">
            <div class="container">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-4">
                            <h5 class="pb-4">Badan Pengelola Keuangan Haji</h5>
                            <p>Menara Bidakara 1, lantai 5 Jalan Gatot Subroto, Kav. 71-73 Pancoran, Jakarta Seltan 12870, Indonesia.</p>
                        </div>
                        <div class="col-md-4">
                            <h5 class="pb-4">Hubungi Kami</h5>
                            <h3>(021) 83793001</h3>
                            <p>(hunting)</p>
                            <h3>+62 821 9090 6002</h3>
                            <p>(WA Contact Center)</p>
                            <p>Fax: 021 83793019 <br> Email : info@bpkh.go.id</p>
                        </div>
                        <div class="col-md-4">
                            <h5 class="pb-4">Media Sosial</h5>
                            <div class="symbol symbol-50px symbol-circle m-2">
                                <div class="symbol-label" style="background: rgba(255, 255, 255, 0.226)">
                                    <i class="bi bi-telephone text-white"></i>
                                </div>
                            </div>
                            <div class="symbol symbol-50px symbol-circle m-2">
                                <div class="symbol-label" style="background: rgba(255, 255, 255, 0.226)">
                                    <i class="bi bi-whatsapp text-white"></i>
                                </div>
                            </div>
                            <div class="symbol symbol-50px symbol-circle m-2">
                                <div class="symbol-label" style="background: rgba(255, 255, 255, 0.226)">
                                    <i class="bi bi-instagram text-white"></i>
                                </div>
                            </div>
                            <div class="symbol symbol-50px symbol-circle m-2">
                                <div class="symbol-label" style="background: rgba(255, 255, 255, 0.226)">
                                    <i class="bi bi-tiktok text-white"></i>
                                </div>
                            </div>
                            <div class="symbol symbol-50px symbol-circle m-2">
                                <div class="symbol-label" style="background: rgba(255, 255, 255, 0.226)">
                                    <i class="bi bi-envelope text-white"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </main>
    <KTScrollTop></KTScrollTop>
</template>

<style scoped>
   .navOnScroll {
        box-shadow: 0 0 10px #aaa;
        background-color: #fff;
   }

   .navOnScroll .active {
        color: #092F53 !important;
   }
   .navLinkOnScroll {
        color: black !important;
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

<script>
import KTScrollTop from "@/layout/extras/ScrollTop.vue";

export default {
    components: {
        KTScrollTop,
    },
    data () {
        return {
            view: {
                topOfPage: true
            }
        }
    },
    beforeMount() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll(){
            if(window.pageYOffset > 0){
                if(this.view.topOfPage) this.view.topOfPage = false
            } else {
                if(!this.view.topOfPage) this.view.topOfPage = true
            }
        }
    },
}
</script>
