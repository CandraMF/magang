<template>
    <div class="row d-flex justify-content-center m-0 p-0">
        <div class="col-md-6 mt-10">
            <el-card class="p-10 text-center">
                <h2 class="text-center mb-10">Pilih Tujuan Pengiriman Kode Aktifasi : </h2>
                <div class="contact">
                    <el-button @click="submitForm('whatsapp')"  class="btn btn-icon btn-warning me-3" style="height: 65px; width: 65px">
                        <i class="bi bi-whatsapp text-white fs-2x"></i>
                    </el-button>
                    <el-button @click="submitForm('email')" class="btn btn-icon btn-primary me-3" style="height: 65px; width: 65px">
                        <i class="bi bi-envelope text-white fs-2x"></i>
                    </el-button>
                </div>
            </el-card>
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

            let token = ref('');
            let user = ref({});

            onBeforeMount(() => {
                user = store.getters.getUser
                token = store.getters.getToken

                // if(user.activation_date != null) {
                //     router.push({ name: 'dashboard', query: { redirect: '/dashboard' } });
                // }
            })

            const submitForm = (subject) => {
                // console.log(user.email)
                // console.log(user.mobile)
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
                            store.commit(Mutations.SET_REMAINING, 180000)
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
                submitForm
            }
        },
    }

</script>
