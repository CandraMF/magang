import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import active from "./middleware/active";
// import log from "./middleware/log";

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
            // middleware: log
        },
        component: () => import("@/layout/AuthLayout.vue"),
        children: [
            {
                path: "/login",
                name: "login",
                component: () => import("@/views/pages/auth/Login.vue"),
            },
            {
                path: "/register",
                name: "register",
                component: () => import("@/views/pages/auth/Register.vue"),
            },
            {
                path: "/forgotPassword",
                name: "forgotPassword",
                component: () => import("@/views/pages/auth/ForgotPassword.vue"),
            },
            {
                path: "/aktivasi",
                name: "aktivasi",
                component: () => import("@/views/pages/auth/Aktivasi.vue"),
            },
            {
                path: "/aktivasiPlatform",
                name: "aktivasiPlatform",
                component: () => import("@/views/pages/auth/AktivasiPlatform.vue"),
            },
        ],
    },
    {
      path: "/admin",
      redirect: "/dashboard",
      component: () => import("@/layout/Layout.vue"),
      meta: {
            middleware: [active]
      },
      children: [
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
            component: () => import("@/views/account/DataDiriForm.vue"),
        },
      ],
  },
//   {
//     path: "/:pathMatch(.*)*",
//     // redirect: "/dashboard",
//   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
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
// router.beforeEach(() => {
//   // Scroll page to top on every route change
//   setTimeout(() => {
//     window.scrollTo(0, 0);
//   }, 100);
// });

export default router;
