export default function active({ next, from, to, router }) {
    var vuex = JSON.parse(localStorage.getItem('vuex'))

    if(!(to.name == 'data-diri-form' || to.name == 'aktivasiPlatform' || to.name == 'aktivasi')) {
        if (!vuex.AuthModule.token) {
            router.push({ name: 'berandaLogin', query: { redirect: '/berandaLogin' } });
        } else if(vuex.AuthModule.user.status_id == 'USR001'){
            router.push({ name: 'aktivasiPlatform', query: { redirect: '/aktivasiPlatform' } });
        } else if (!vuex.AuthModule.user.person_id && vuex.AuthModule.user.role_id == 'ROL001') {
            router.push({ name: 'data-diri-form', query: { redirect: '/profil/data-diri' } });
        }
    }

    return next();
}
