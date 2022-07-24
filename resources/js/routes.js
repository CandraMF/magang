const Home = () => import('./components/Home.vue')
const ProsedurMagang = () => import('./components/ProsedurMagang.vue')
const Pengumuman = () => import('./components/Pengumuman.vue')
const NotFound = () => import('./components/404.vue')
const Detail = () => import('./components/Detail.vue')

const Login = () => import('./components/auth/Login.vue')
const Register = () => import('./components/auth/Register.vue')
const DataDiri = () => import('./components/DataDiri.vue')

import LandingPageLayout from './components/layouts/LandingPageLayout.vue';
import AdminLayout from './components/layouts/AdminLayout.vue';
import AuthLayout from './components/layouts/AuthLayout.vue';

export const routes = [
    {
        path: '/',
        redirect: 'home',
        component: LandingPageLayout,
        children: [
            {
                path: '/home',
                name: 'home',
                component: Home
            },
            {
                name: 'prosedurMagang',
                path: '/prosedurMagang',
                component: ProsedurMagang
            },
            {
                name: 'pengumuman',
                path: '/pengumuman',
                component: Pengumuman
            },
            {
                name: 'detail',
                path: '/detail/:id',
                component: Detail,
                props: true,
            },
        ]
    },
    {
        path: '/',
        redirect: 'login',
        component: AuthLayout,
        children: [
            {
                name: 'login',
                path: '/login',
                component: Login,
            },
            {
                name: 'register',
                path: '/register',
                component: Register,
            },
        ]
    },
    {
        path: '/',
        redirect: 'dataDiri',
        component: AdminLayout,
        children: [
            {
                name: 'dataDiri',
                path: '/dataDiri',
                component: DataDiri,
            },
        ]
    }
]
