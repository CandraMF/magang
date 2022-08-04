<template>
    <div class="vh-100">
        <nav class="navbar navbar-expand-lg" style="font-size: 12pt !important; padding: 10px 20px;" :class="{ 'navOnScroll': !view.topOfPage }">
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
        <div>
            <router-view v-slot="{ Component }">
                <transition :name="this.effect" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </div>
    </div>
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

    .wrapper {
        width: 100%;
        min-height: 100vh;
    }

    .in-out-translate-fade-enter-active,
    .in-out-translate-fade-leave-active {
        transition: all 0.15s;
    }
    .in-out-translate-fade-enter,
    .in-out-translate-fade-leave-active {
        opacity: 0;
    }
    .in-out-translate-fade-enter {
        transform: translateX(100px);
    }
    .in-out-translate-fade-leave-active {
        transform: translateX(-100px);
    }

    .out-in-translate-fade-enter-active,
    .out-in-translate-fade-leave-active {
        transition: all 0.15s;
    }
    .out-in-translate-fade-enter,
    .out-in-translate-fade-leave-active {
        opacity: 0;
    }
    .out-in-translate-fade-enter {
        transform: translateX(-100px);
    }
    .out-in-translate-fade-leave-active {
    transform: translateX(100px);
    }
</style>
<script>
    export default {
        data () {
            return {
                view: {
                    topOfPage: false,
                },
                effect: ""
            }
        },
        watch: {
            $route(to, from) {
                if(to.path == '/login'){
                    this.effect = 'out-in-translate-fade'
                } else {
                    this.effect = 'in-out-translate-fade'
                }
                // if(this.$router.history.current["path"] === "/login") {
                //     this.effect = 'out-in-translate-fade'
                // } else {
                //     this.effect = 'in-out-translate-fade'
                // }
            },
        },
    }
</script>
