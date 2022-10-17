import store from "@/store";
import { Actions } from "@/store/enums/StoreEnums";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import activated from "./middleware/activated";
// import active from "./middleware/active";
// import auth from "./middleware/auth";
// import authentication from "./middleware/auth";
// import authenticated from "./middleware/authenticated";
// import role from "./middleware/role";

import multiguard from 'vue-router-multiguard';

// import activated from "./middleware/activated";
// import active from "./middleware/active";
// import authenticated from "./middleware/authenticated";
// // import log from "./middleware/log";
// // import authenticated from "./middleware/authenticated";

var user = store.getters.getUser ? store.getters.getUser : { role_id : 'ROL001', status_id : 'USR101', person_id : null } ;

const token = store.getters.getToken

const role = (to, from, next) => {

    if (to.name == 'admin') {
        if (user.role_id == 'ROL001') {
            console.log('dashboar')
            next({ path: '/dashboard' });
            return false;
        } else if(user.role_id == 'ROL101' || user.role_id == 'ROL102') {
            console.log('admin-dashboard')
            next({ path: '/admin/dashboard' });
            return false;
        }
    }

    next()
}

const auth = (to, from, next) => {
    console.log('auth')

    if (!token) {
        next({ path: '/beranda/login' })
        return false
    }

    next()
}

const active = (to, from, next) => {

    if (user.status_id == 'USR001') {

        next({ path : '/auth/aktivasiPlatform' })

        return false
    } else if (user.person_id == null) {

        if(!(to.path == '/profil')) {
            next({ path : '/profil' })
            return false
        }
    }
    next()
}

const activated = (to, from, next) => {

    console.log(user)

    if (user.status_id === 'USR101' && user.person_id !== null) {
        next({ path : '/admin' })
        return false;
    }

    next()
}

const authenticated = (to, from, next) => {
    if (token) {
        next({ name: 'admin' })
        return false
    }
    next()
}

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/beranda",
        component: () => import("@/layout/HomeLayout.vue"),
        children: [
            {
                path: "/beranda",
                name: "beranda",
                redirect: '/beranda/divisi',
                component: () => import("@/views/pages/LandingPage.vue"),
                children: [
                    {
                        path: "/beranda/divisi",
                        name: "berandaDivisi",
                        component: () => import("@/views/pages/Divisi.vue"),
                    },
                    {
                        path: "/beranda/login",
                        name: "berandaLogin",
                        component: () => import("@/views/pages/auth/Login.vue"),
                    },
                    {
                        path: "/beranda/forgotPassword",
                        name: "berandaForgotPassword",
                        component: () => import("@/views/pages/auth/ForgotPassword.vue"),
                    },
                    {
                        path: "/beranda/register",
                        name: "berandaRegister",
                        component: () => import("@/views/pages/auth/Register.vue"),
                    },
                ]
            },
            {
                path: "/detail",
                name: "detail",
                component: () => import("@/views/pages/AboutUs.vue"),
            },
            {
                path: "/404",
                name: "home",
                component: () => import("@/views/pages/AboutUs.vue"),
            },
        ],
    },
    {
        path: "/auth",
        redirect: "/login",
        component: () => import("@/layout/AuthLayout.vue"),
        children: [
            {
                path: "/auth/login",
                name: "login",
                component: () => import("@/views/pages/auth/Login.vue"),
            },
            {
                path: "/auth/register",
                name: "register",
                component: () => import("@/views/pages/auth/Register.vue"),
            },
            {
                path: "/auth/forgotPassword",
                name: "forgotPassword",
                component: () => import("@/views/pages/auth/ForgotPassword.vue"),
            },
            {
                path: "/auth/aktivasi",
                name: "aktivasi",
                beforeEnter: multiguard([activated]),
                component: () => import("@/views/pages/auth/Aktivasi.vue"),
            },
            {
                path: "/auth/aktivasiPlatform",
                name: "aktivasiPlatform",
                beforeEnter: multiguard([activated]),
                component: () => import("@/views/pages/auth/AktivasiPlatform.vue"),
            },
        ],
    },
    {
      path: "/admin",
      name: "admin",
      beforeEnter: multiguard([auth, active, role]),
      component: () => import("@/layout/Layout.vue"),
      children: user.role_id == 'ROL001' ? [ // Pendaftar
        {
            path: "/dashboard",
            name: "dashboard",
            component: () => import("@/views/Dashboard.vue"),
        },
        {
            path: "/profil",
            name: "profil-overview",
            component: () => import("@/views/account/Overview.vue"),
        },
        {
            path: "/profil/data-diri",
            name: "data-diri-form",
            component: () => import("@/views/account/DataDiri.vue"),
        },

      ] : user.role_id == 'ROL101' ? [ //admin

        {
            path: "/admin/dashboard",
            name: "admin-dashboard",
            component: () => import("@/views/admin/Dashboard.vue"),
        },
        {
            path: "/admin/departemen",
            name: "admin-departemen",
            component: () => import("@/views/admin/Departemen.vue"),
        },
        {
            path: "/admin/pendaftaran",
            name: "admin-pendaftaran",
            component: () => import("@/views/admin/Pendaftaran.vue"),
        },
        {
            path: "/admin/posisi",
            name: "admin-posisi",
            component: () => import("@/views/admin/Posisi.vue"),
        },
        {
            path: "/admin/posisi/form",
            name: "admin-posisi-form",
            component: () => import("@/views/admin/PosisiFormLayout.vue"),
            props: true,
        },
        {
            path: "/admin/sekolah",
            name: "admin-sekolah",
            component: () => import("@/views/admin/Sekolah.vue"),
        },
        {
            path: "/admin/sekolah/form",
            name: "admin-sekolah-form",
            component: () => import("@/views/admin/SekolahFormLayout.vue"),
            props: true,
        },
        {
            path: "/admin/jurusan",
            name: "admin-jurusan",
            component: () => import("@/views/admin/Jurusan.vue"),
        },
        {
            path: "/admin/jurusan/form",
            name: "admin-jurusan-form",
            component: () => import("@/views/admin/JurusanFormLayout.vue"),
            props: true,
        },
        {
            path: "/admin/daerah",
            name: "admin-daerah",
            component: () => import("@/views/admin/Daerah.vue"),
        },
        {
            path: "/admin/daerah/form",
            name: "admin-daerah-form",
            component: () => import("@/views/admin/DaerahFormLayout.vue"),
            props: true,
        },
        {
            path: "/admin/user",
            name: "admin-user",
            component: () => import("@/views/admin/User.vue"),
        },
        {
            path: "/admin/user/form",
            name: "admin-user-form",
            component: () => import("@/views/admin/UserFormLayout.vue"),
            props: true,
        },
        {
            path: "/admin/peserta",
            name: "admin-peserta",
            component: () => import("@/views/admin/Peserta.vue"),
        },
        {
            path: "/admin/peserta/form",
            name: "admin-peserta-form",
            component: () => import("@/views/admin/PesertaFormLayout.vue"),
            props: true,
        },
        {
            path: "/admin/rekrutmen",
            name: "admin-rekrutmen",
            component: () => import("@/views/admin/Rekrutmen.vue"),
        },
        {
            path: "/admin/rekrutmen/form",
            name: "admin-rekrutmen-form",
            component: () => import("@/views/admin/RekrutmenFormLayout.vue"),
            props: true,
        },
        {
            path: "/admin/jadwalrekrutmen",
            name: "admin-jadwalrekrutmen",
            component: () => import("@/views/admin/JadwalRekrutmen.vue"),
            props: true,
        },
        {
            path: "/admin/jadwalrekrutmen/form",
            name: "admin-jadwalrekrutmen-form",
            component: () => import("@/views/admin/JadwalRekrutmenFormLayout.vue"),
            props: true,
        },
      ] : [

      ],
    },
    {
        path: "/logout",
        name: "logout",
        component: {
            beforeRouteEnter(to, from, next) {
                const destination = {
                    path: "/",
                };
                window.location.href = "/";
                store.dispatch(Actions.LOGOUT);
                next(destination);
            }
        }
    },
    {
        path: "/:pathMatch(.*)*",
        component: () => import("@/views/Unauthenticated.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
                top: 100,
            }
        } else {
            return {
                behavior: 'smooth',
                top: 0,
            }
        }
    }
});

// function nextFactory(context, middleware, index) {
//     const subsequentMiddleware = middleware[index];

//     if (!subsequentMiddleware) return context.next;

//     return (...parameters) => {

//         context.next(...parameters);

//         const nextMiddleware = nextFactory(context, middleware, index);
//         subsequentMiddleware({ ...context, next: nextMiddleware });
//     };
// }

// router.beforeEach(middleware());

export default router;
