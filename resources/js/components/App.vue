<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
            <div class="container-fluid px-4">
                <a class="navbar-brand" href="#">
                    <img :src="'/images/logo-bpkh-s-white.png'" alt="" style="width: 100px">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link exact-active-class="active" to="/" class="nav-link" aria-current="page">Beranda</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link exact-active-class="active" to="/prosedurMagang" class="nav-link">Prosedur Magang</router-link>
                    </li>
                     <li class="nav-item">
                        <router-link exact-active-class="active" to="/pengumuman" class="nav-link">Pengumuman</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link exact-active-class="active" to="/login" class="nav-link">Login</router-link>
                    </li>
                     <li class="nav-item">
                        <router-link exact-active-class="active" to="/register" class="nav-link">Register</router-link>
                    </li>
                </ul>
                <a href="" class="btn " style="background: white; color: #3A57E8">
                    <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.3" d="M9.16659 6.49992C9.16659 5.3033 8.19654 4.33325 6.99992 4.33325C5.8033 4.33325 4.83325 5.3033 4.83325 6.49992C4.83325 7.69654 5.8033 8.66659 6.99992 8.66659C8.19654 8.66659 9.16659 7.69654 9.16659 6.49992Z" fill="#3A57E8"/>
                        <path d="M9.16659 12.9999C9.16659 11.8033 8.19654 10.8333 6.99992 10.8333C5.8033 10.8333 4.83325 11.8033 4.83325 12.9999C4.83325 14.1965 5.8033 15.1666 6.99992 15.1666C8.19654 15.1666 9.16659 14.1965 9.16659 12.9999Z" fill="#3A57E8"/>
                        <path d="M15.6666 6.49992C15.6666 5.3033 14.6965 4.33325 13.4999 4.33325C12.3033 4.33325 11.3333 5.3033 11.3333 6.49992C11.3333 7.69654 12.3033 8.66659 13.4999 8.66659C14.6965 8.66659 15.6666 7.69654 15.6666 6.49992Z" fill="#3A57E8"/>
                        <path d="M15.6666 12.9999C15.6666 11.8033 14.6965 10.8333 13.4999 10.8333C12.3033 10.8333 11.3333 11.8033 11.3333 12.9999C11.3333 14.1965 12.3033 15.1666 13.4999 15.1666C14.6965 15.1666 15.6666 14.1965 15.6666 12.9999Z" fill="#3A57E8"/>
                        <path d="M22.1666 6.49992C22.1666 5.3033 21.1965 4.33325 19.9999 4.33325C18.8033 4.33325 17.8333 5.3033 17.8333 6.49992C17.8333 7.69654 18.8033 8.66659 19.9999 8.66659C21.1965 8.66659 22.1666 7.69654 22.1666 6.49992Z" fill="#3A57E8"/>
                        <path d="M22.1666 12.9999C22.1666 11.8033 21.1965 10.8333 19.9999 10.8333C18.8033 10.8333 17.8333 11.8033 17.8333 12.9999C17.8333 14.1965 18.8033 15.1666 19.9999 15.1666C21.1965 15.1666 22.1666 14.1965 22.1666 12.9999Z" fill="#3A57E8"/>
                        <path d="M9.16659 19.4999C9.16659 18.3033 8.19654 17.3333 6.99992 17.3333C5.8033 17.3333 4.83325 18.3033 4.83325 19.4999C4.83325 20.6965 5.8033 21.6666 6.99992 21.6666C8.19654 21.6666 9.16659 20.6965 9.16659 19.4999Z" fill="#3A57E8"/>
                        <path d="M15.6666 19.4999C15.6666 18.3033 14.6965 17.3333 13.4999 17.3333C12.3033 17.3333 11.3333 18.3033 11.3333 19.4999C11.3333 20.6965 12.3033 21.6666 13.4999 21.6666C14.6965 21.6666 15.6666 20.6965 15.6666 19.4999Z" fill="#3A57E8"/>
                        <path d="M22.1666 19.4999C22.1666 18.3033 21.1965 17.3333 19.9999 17.3333C18.8033 17.3333 17.8333 18.3033 17.8333 19.4999C17.8333 20.6965 18.8033 21.6666 19.9999 21.6666C21.1965 21.6666 22.1666 20.6965 22.1666 19.4999Z" fill="#3A57E8"/>
                    </svg>
                    Divisi</a>
                </div>
            </div>
        </nav>
        <div class="">
            <router-view></router-view>
        </div>
        <footer style="background: #092F53;" class="text-white py-5">
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
                            <p>Menara Bidakara 1, lantai 5 Jalan Gatot Subroto, Kav. 71-73 Pancoran, Jakarta Seltan 12870, Indonesia.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </main>
</template>

<script>
    export default {}
</script>
