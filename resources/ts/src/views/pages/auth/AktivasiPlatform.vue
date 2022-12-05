<template>
    <div class="row d-flex justify-content-center m-0 p-0">
        <div class="col-md-6 mt-10">
            <div class="card p-10 text-center">
                <div class="card-body">
                    <h2 class="text-center mb-5">Selamat, Proses Registrasi Anda Berhasil </h2>
                    <p class="fs-4">User ID Anda adalah <span class="fw-bold text-danger">{{ user.login }}</span>. <br> Silakan Pilih Platform Tujuan Pengiriman Kode Aktivasi Sesuai Dengan Kebutuhan Anda</p>
                    <div class="contact mt-4">
                        <el-button @click="submitForm('whatsapp')" class="btn btn-success mx-2" style="background-color: #25d366;">
                            <i class="bi bi-whatsapp fs-4 me-2"></i> Whatsapp
                        </el-button>
                        <el-button @click="submitForm('email')" class="btn btn-danger mx-2">
                            <i class="bi bi-envelope fs-4 me-2"></i> Email
                        </el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import CodeInput from "@/components/CodeInput.vue";
    import { ref, computed, onMounted, onBeforeMount, inject } from "vue";
    import { useStore } from "vuex";
    import { Mutations } from "@/store/enums/StoreEnums";
    import { useRouter } from "vue-router";

    import axios from "axios";

    export default {
        components: {
            CodeInput,
        },
        setup() {
            const completed = ref(false);
            const store = useStore();
            const router = useRouter();

            let token = store.getters.getToken;
            let user = store.getters.getUser;

            console.log(user)

            const submitForm = (subject) => {
                axios.post('/api/sendActivationCode', {
                        platform: subject,
                        email: user.email,
                        mobile: user.mobile
                    },{
                        headers: {'Authorization': 'Bearer '+token},
                    })
                    .then(response => {

                        if (response.data.success) {
                            console.log(response.data)

                            store.commit(Mutations.SET_SUBJECT, subject)
                            store.commit(Mutations.SET_REMAINING, 300000)
                            store.commit(Mutations.SET_CODE, response.data.code)

                            // this.$notify({
                            //     title: 'Success',
                            //     type: 'success',
                            //     message: response.data.message
                            // });


                            router.push({ name: 'aktivasi', query: { redirect: '/aktivasi' } });

                        } else {

                            // this.$notify.error({
                            //     title: 'Error',
                            //     message: response.data.message
                            // });

                        }
                    })
            }

            return {
                completed,
                store,
                user,
                submitForm
            }
        },
    }

</script>
