import store from "@/store"

const user = store.getters.getUser
const token = store.getters.getToken

export default ({ to, from, next }) => {

    console.log('active')

    if (user.status_id == 'USR001') {
        console.log('aktivasi')
        next({ path : '/auth/aktivasiPlatform' })

        return false
    }

    next()
}
