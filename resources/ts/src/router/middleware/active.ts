export default function active({ next, from, to, router }) {
    var vuex = JSON.parse(localStorage.getItem('vuex'))

    if(!(to.name == 'data-diri-form')) {
        if (vuex.AuthModule.user.person_id == null) {
            router.push({ name: 'data-diri-form', query: { redirect: '/profil/data-diri' } });
        }
    }

    return next();
  }
