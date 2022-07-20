const Home = () => import('./components/Home.vue')
const ProsedurMagang = () => import('./components/ProsedurMagang.vue')
const Pengumuman = () => import('./components/Pengumuman.vue')

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
]
