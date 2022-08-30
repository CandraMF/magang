<template>
    <div>
        <div class="container-bg ">
            <div class="wrapper">
                <img class="bg-img" :src="'/image/bg_landing6.png'" >
            </div>
        </div>
        <section id="jumbotron">
            <div class="container vh-100">
                <div class="col-md-12" style="height: 100% !important">
                    <div class="row d-flex flex-column align-items-center justify-content-center" style="height: 100% !important">
                        <div class="col-md-12 text-center " >
                            <h1 class="text-white" style="margin-bottom: 50px;">
                                Selamat Datang di Portal Magang BPKH
                            </h1>
                        </div>
                        <div class="col-md-6 mb-5 pb-5">
                            <form action="">
                                <div class="inner-form">
                                    <div class="search-field">
                                        <button class="btn-search-logo" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#525252" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                            </svg>
                                        </button>
                                        <input id="search" type="text" autofocus placeholder="Cari Posisi Magang" />
                                        <button class="btn-search">
                                            Cari
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-1">
                            <svg class="go_animated" id="go" width="30" height="30" viewBox="0 0 26 26" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                <g id="7bf1db55bbc1be3d7d48f9ed6dd65c5f">
                                    <g id="b50410873f1c5ef41de022179f6506e3">
                                        <path id="f243221f8881b6c9cd5b2539cee61a18" d="M18.7341 5.1923C19.1572 4.76923 19.8431 4.76923 20.2662 5.1923C20.6893 5.61537 20.6893 6.3013 20.2662 6.72437L13.7662 13.2244C13.3561 13.6345 12.6957 13.6488 12.2681 13.2569L5.76813 7.29858C5.32708 6.89429 5.29729 6.20901 5.70158 5.76797C6.10587 5.32692 6.79115 5.29712 7.2322 5.70142L12.9676 10.9589L18.7341 5.1923Z" fill="#fff"></path>
                                        <path id="f6b68c86abdc26f1cf9c8c852851ca93" opacity="0.3" d="M18.7341 12.7756C19.1572 12.3526 19.8431 12.3526 20.2662 12.7756C20.6893 13.1987 20.6893 13.8846 20.2662 14.3077L13.7662 20.8077C13.3561 21.2178 12.6957 21.2322 12.2681 20.8402L5.76813 14.8819C5.32708 14.4776 5.29729 13.7923 5.70158 13.3513C6.10587 12.9103 6.79115 12.8805 7.2322 13.2847L12.9676 18.5422L18.7341 12.7756Z" fill="#fff"></path>
                                    </g>
                                </g>
                            </svg>
                        </div>

                    </div>

                </div>
            </div>
        </section>
        <section >
            <div class="container">
                <div class="row d-flex justify-content-center m-0 p-0">
                    <div id="auth" :class="{'col-md-6' : this.$route.name == 'berandaLogin' || this.$route.name == 'berandaForgotPassword'}" class="bg-white p-0" style="font-size: 12pt; margin-top: -150px; border-radius: 9px; box-shadow: 0px 4px 79px -23px rgba(0,0,0,0.75);">
                        <div class="row" id="content">
                            <router-view v-if="!isLogged" v-slot="{ Component }">
                                <transition :name="this.effect" mode="out-in">
                                    <component :is="Component" />
                                </transition>
                            </router-view>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- <section id="logo">
            <div class="d-flex justify-content-center" style="margin: 100px 0px;">
                <img class="my-5" :src="'/image/logo-bpkh-s.png'" alt="" style="width: 300px">
            </div>
        </section>
        <section id="berita-utama">
            <div class=" col-md-12 text-center text-white" style="background: #3A57E8; padding: 75px 0px;">
                <h2 class="text-white">Periode Pendaftaran Baru Telah Dibuka</h2>

                <div class="action mb-4">
                    <a href="#" class="btn btn-lg text-white mx-2" style="background: rgba(255, 255, 255, 0.226)">FAQ</a>
                    <a href="#" class="btn btn-lg text-white mx-2" style="background: rgba(255, 255, 255, 0.226)">Prosedur Pendaftaran</a>
                    <a href="#" class="btn btn-lg text-primary mx-2" style="background: white">Daftar/Masuk</a>
                </div>

                <p>Atau hubungi media sosial kami : </p>

                <div class="contact">
                    <div class="symbol symbol-50px symbol-circle mx-2">
                        <div class="symbol-label" style="background: rgba(255, 255, 255, 0.226)">
                            <i class="bi bi-telephone text-white"></i>
                        </div>
                    </div>
                    <div class="symbol symbol-50px symbol-circle mx-2">
                        <div class="symbol-label" style="background: rgba(255, 255, 255, 0.226)">
                            <i class="bi bi-whatsapp text-white"></i>
                        </div>
                    </div>
                    <div class="symbol symbol-50px symbol-circle mx-2">
                        <div class="symbol-label" style="background: rgba(255, 255, 255, 0.226)">
                            <i class="bi bi-envelope text-white"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->
        <section id="berita">
            <div class="container pt-10 mt-10">
                <div class="col-md-12">
                    <div class="row pt-5" style="min-height: 100vh">
                        <div class="col-md-4 px-5">
                            <div class="row">
                                <div class="col-md-12 mb-3">
                                    <div style="border-radius: 7px; height: 250px; background: #D9D9D9">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <h6>Daftar Nama Lolos ke Tahap Interview</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat sit nunc venenatis diam elit. At nisl amet arcu at mi tortor elit felis vestibulum. Egestas tempus duis.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 px-5">
                            <div class="row">
                                <div class="col-md-12 mb-3">
                                    <div style="border-radius: 7px; height: 250px; background: #D9D9D9">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <h6>Jadwal Pendaftaran Magang</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat sit nunc venenatis diam elit. At nisl amet arcu at mi tortor elit felis vestibulum. Egestas tempus duis.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 px-5">
                            <div class="row">
                                <div class="col-md-12 mb-3">
                                    <div style="border-radius: 7px; height: 250px; background: #D9D9D9">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <h6>Jadwal Pendaftaran Magang</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat sit nunc venenatis diam elit. At nisl amet arcu at mi tortor elit felis vestibulum. Egestas tempus duis.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">

    import Login from '@/views/pages/auth/Login.vue';
    import Divisi from '@/views/pages/Divisi.vue';
    import Register from '@/views/pages/auth/Register.vue';
    import Activation from '@/components/notice/Activation.vue';

    import { defineComponent, onMounted, watch } from "vue";

    export default defineComponent({
        components: {
            Login,
            Register,
            Activation,
            Divisi
        },
        data () {
            return {
                view: {
                    topOfPage: false,
                },
                effect: "",
                isLogged: false,
                userInfo: null,
            }
        },
        watch: {
            $route(to, from) {
                if(to.path == '/login'){
                    this.effect = 'out-in-translate-fade'
                } else {
                    this.effect = 'in-out-translate-fade'
                }
            },
        },
        mounted(){
            if (localStorage.getItem('loggedIn')) {
                this.isLogged = true
            } else {
                this.isLogged = false
            }
        }
    })

</script>

<style scoped>

    @media (max-width: 767.98px) {
        .bg-img {
            min-height: 100vh;
            width: unset !important;
            left: -20%;
            top: -50%;
        }
        .go_animated{
            display: none;
        }
    }

    .inner-form {
        position: relative;
    }
    .container-bg{
        position: absolute;
        z-index: -999;
        width: 100%;
        height: 110vh;
        overflow: hidden;
    }

    .bg-img {
        position: absolute;
        width: 100%;
    }

    .container-bg .wrapper{
        position: relative;
    }

    .search-field  input {
        background: white;
        padding: 5px;
        height: 100%;
        width: 100%;
        background: transparent;
        border: 0;
        background: #fff;
        display: block;
        width: 100%;
        padding: 10px 32px 10px 70px;
        font-size: 18px;
        color: #666;
        border-radius: 34px;
        outline: 0;
    }

    .search-field .btn-search-logo {
        width: 70px;
        display: flex;
        align-items: center;
        left: 0;
        height: 100%;
        background: transparent;
        border: 0;
        padding: 0;
        cursor: pointer;
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
    }

    .search-field .btn-search {
        width: 70px;
        display: flex;
        align-items: center;
        height: 100%;
        background: #3A57E8;
        color: white;
        border: 0;
        padding: 0;
        cursor: pointer;
        display: flex;
        right: 0;
        border-radius: 50px 50px 50px 50px;
        top: 0px;
        position: absolute;
        justify-content: center;
        align-items: center;
        transform: scale(0.8);
    }

    .go_animated{
        transition: 1s ease;
        cursor: pointer;
        animation: go_animate 1s linear 0s infinite alternate
    }

    .go_animated:hover{
        animation-play-state: paused;
    }

    @keyframes go_animate {
        from {
            transform: translate(0px, -10px);
        }
        to {
            transform: translate(0px, 0px);
        }
    }

    h1, h2 {
        font-weight: 100;
        margin-bottom: 30px;
        font-size: 20pt;
    }

    h1 {
        font-size: 32pt;
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
