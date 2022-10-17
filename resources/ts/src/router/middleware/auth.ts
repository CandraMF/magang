import store from "@/store"
import { useRouter } from "vue-router"

const user = store.getters.getUser
const token = store.getters.getToken


export default ({ to, from, next }) => {

    console.log('auth')

    if (!token) {
        next({ path: '/beranda/login' })
        return false
    }

    next()
}
