export default function admin({ next, from, to, router }) {
    var vuex = JSON.parse(localStorage.getItem('vuex'))

    if(vuex) {
        if(vuex.AuthModule.user.role_id == 'ROL101') {
            router.push({ name: 'admin-dashboard', query: { redirect: '/admin/dashboard' } });
            console.log("admin")
        }
    }

    return next();
}
