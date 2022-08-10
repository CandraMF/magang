import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/beranda",
        component: () => import("@/layout/HomeLayout.vue"),
        children: [
            {
                path: "/beranda",
                name: "beranda",
                redirect: '/beranda/login',
                component: () => import("@/views/pages/LandingPage.vue"),
                children: [
                    {
                        path: "/beranda/login",
                        name: "berandaLogin",
                        component: () => import("@/views/pages/auth/Login.vue"),
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
                name: "home",
                component: () => import("@/views/pages/AboutUs.vue"),
            },
        ],
    },
    {
      path: "/admin",
      redirect: "/dashboard",
      component: () => import("@/layout/Layout.vue"),
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

// router.beforeEach(() => {
//   // Scroll page to top on every route change
//   setTimeout(() => {
//     window.scrollTo(0, 0);
//   }, 100);
// });

export default router;
