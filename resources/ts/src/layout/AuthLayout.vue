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
                <div class="wrapper">
                    <transition name="slide">
                        <component :is="Component" />
                    </transition>
                </div>
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

    .slide-enter-active,
    .slide-leave-active {
        transition: all 0.75s ease-out;
    }
    .slide-enter-to {
        position: absolute;
        right: 0;
        opacity: 1;
    }
    .slide-enter-from {
        position: absolute;
        right: -100%;
        opacity: 0;
    }
    .slide-leave-to {
        position: absolute;
        left: -100%;
        opacity: 0;
    }
    .slide-leave-from {
        position: absolute;
        left: 0;
        opacity: 1;
    }

</style>
<script>
    export default {
        data () {
            return {
                view: {
                    topOfPage: false
                }
            }
        },
        watch: {
            $route(to, from) {
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            },
        },
    }
</script>
