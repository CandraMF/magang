export default function auth({ next, from, to, router }) {
    var vuex = JSON.parse(localStorage.getItem('vuex'))

    if (vuex.AuthModule.user.status)

    return next();
}
