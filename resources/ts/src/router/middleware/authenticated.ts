import store from "@/store"
import { use } from "element-plus/lib/locale"

const user = store.getters.getUser
const token = store.getters.getToken

export default ({ to, from, next }) => {

    if (token) {
        next({ name: 'admin' })
        return false
    }

    next()
}
