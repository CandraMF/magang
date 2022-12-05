import store from "@/store"

const user = store.getters.getUser
const token = store.getters.getToken

export default ({ to, from, next }) => {

    if (user.status_id == 'USR101') {
        next({ name : 'admin'})

        return false
    }

    next()
}
