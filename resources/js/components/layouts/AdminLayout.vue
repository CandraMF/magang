<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" :class="{ 'navOnScroll': !view.topOfPage }">
            <div class="container-fluid px-4">
                <router-link class="navbar-brand" to="/">
                    <img v-if="view.topOfPage" :src="'/images/logo-bpkh-s-white.png'" alt="" style="width: 100px">
                    <img v-else :src="'/images/logo-bpkh-s.png'" alt="" style="width: 100px">
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto ms-5 ps-3 mb-2 mb-lg-0">
                        <li class="nav-item ">
                            <router-link exact-active-class="active" to="/" class="nav-link" aria-current="page" :class="{ 'navLinkOnScroll': !view.topOfPage}">Beranda</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link exact-active-class="active" to="/prosedurMagang" class="nav-link" :class="{ 'navLinkOnScroll': !view.topOfPage}">Prosedur Magang</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link exact-active-class="active" to="/pengumuman" class="nav-link" :class="{ 'navLinkOnScroll': !view.topOfPage}">Pengumuman</router-link>
                        </li>
                    </ul>
                    <ul class="navbar-nav me-3">
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
        <div class="vh-100">

            <router-view></router-view>
        </div>
    </main>
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
}
</script>
