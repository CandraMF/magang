const Home = () => import('./components/Home.vue')
const ProsedurMagang = () => import('./components/ProsedurMagang.vue')
const Pengumuman = () => import('./components/Pengumuman.vue')
const NotFound = () => import('./components/404.vue')
const Detail = () => import('./components/Detail.vue')

const Login = () => import('./components/auth/Login.vue')
const Register = () => import('./components/auth/Register.vue')

export const routes = [
    {
        name: 'home',
        path: '/',
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
    {
        name: '404',
        path: '*',
        component: NotFound
    },

]
