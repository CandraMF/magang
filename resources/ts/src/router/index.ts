import store from "@/store";
import { Actions } from "@/store/enums/StoreEnums";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useStore } from "vuex";
import active from "./middleware/active";
// import log from "./middleware/log";
// import authenticated from "./middleware/authenticated";


var vuex = JSON.parse(localStorage.getItem('vuex'))
const userDefault = {
    role_id : 'ROL001'
}
let user

if (vuex) {
    user = vuex.AuthModule.user ? vuex.AuthModule.user : userDefault
} else {
    user = userDefault
}


const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/beranda",
        meta: {
            // middleware: log
        },
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
        meta: {
            // middleware: authenticated
        },
        component: () => import("@/layout/AuthLayout.vue"),
        children: [
            {
                path: "login",
                name: "login",
                component: () => import("@/views/pages/auth/Login.vue"),
            },
            {
                path: "register",
                name: "register",
                component: () => import("@/views/pages/auth/Register.vue"),
            },
            {
                path: "forgotPassword",
                name: "forgotPassword",
                component: () => import("@/views/pages/auth/ForgotPassword.vue"),
            },
            {
                path: "aktivasi",
                name: "aktivasi",
                component: () => import("@/views/pages/auth/Aktivasi.vue"),
            },
            {
                path: "aktivasiPlatform",
                name: "aktivasiPlatform",
                component: () => import("@/views/pages/auth/AktivasiPlatform.vue"),
            },
        ],
    },
    {
      path: "/admin",
      redirect: user.role_id == 'ROL001' ? "/dashboard" : '/admin/dashboard',
      component: () => import("@/layout/Layout.vue"),
      meta: {
            middleware: [active]
      },
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
      ] : [

      ],
    },
    {
        path: "/logout",
        name: "logout",
        meta: {
            reload: true,
        },
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

function nextFactory(context, middleware, index) {
    const subsequentMiddleware = middleware[index];

    if (!subsequentMiddleware) return context.next;

    return (...parameters) => {

    context.next(...parameters);

    const nextMiddleware = nextFactory(context, middleware, index);
    subsequentMiddleware({ ...context, next: nextMiddleware });
    };
}

router.beforeEach((to, from, next) => {
    if (to.meta.middleware) {
        const middleware = Array.isArray(to.meta.middleware)
            ? to.meta.middleware
            : [to.meta.middleware];

        const context = {
            from,
            next,
            router,
            to,
        };
        const nextMiddleware = nextFactory(context, middleware, 1);

        return middleware[0]({ ...context, next: nextMiddleware });
    }

    return next();
});

export default router;
