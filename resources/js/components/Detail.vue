<template>
    <div class="container">
        <div class="vh-100 pt-5 mt-5">
            <h3>Tentang Divisi <span style="font-weight: 600">{{ id }}</span> </h3>
            <router-link to="/" class="btn btn-primary">Kembali Ke Home</router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id'],
}
</script>
