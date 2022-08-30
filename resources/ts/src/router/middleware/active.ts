export default function active({ next, from, to, router }) {
    var vuex = JSON.parse(localStorage.getItem('vuex'))

    if(!(to.name == 'data-diri-form' || to.name == 'aktivasiPlatform' || to.name == 'aktivasi')) {
        // console.log(to.name)
        // console.log(!vuex.AuthModule)
        // console.log(!vuex.AuthModule.token)
        // console.log(!vuex.AuthModule.user.activation_date)
        // console.log(!vuex.AuthModule.user.person_id)

        if (!vuex.AuthModule.token) {
            router.push({ name: 'berandaLogin', query: { redirect: '/berandaLogin' } });
        } else if(!vuex.AuthModule.user.activation_date){
            router.push({ name: 'aktivasiPlatform', query: { redirect: '/aktivasiPlatform' } });
        } else if (!vuex.AuthModule.user.person_id) {
            router.push({ name: 'data-diri-form', query: { redirect: '/profil/data-diri' } });
        }
    }

    return next();
}
