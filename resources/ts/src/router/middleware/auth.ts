export default function auth({ next, to, router }) {

    var vuex = JSON.parse(localStorage.getItem('vuex'))

    if (vuex.AuthModule.token == null) {
        router.push({ name: 'login', query: { redirect: '/login' } });
    }

    return next();
  }
