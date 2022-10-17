import store from "@/store"

const user = store.getters.getUser
const token = store.getters.getToken

export default ({ to, from, next }) => {

    console.log('role')

    if (to.name == 'admin') {
        if (user.role_id == 'ROL001') {
            console.log('dashboar')
            next({ path: '/dashboard' });
            return false;
        } else if(user.role_id == 'ROL101' || user.role_id == 'ROL102') {
            console.log('admin-dashboard')
            next({ path: '/profil' });
            return false;
        }
    }

    next()
}
