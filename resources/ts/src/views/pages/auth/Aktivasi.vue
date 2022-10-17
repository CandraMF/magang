<template>
    <div class="row d-flex justify-content-center m-0 p-0">
        <div class="col-md-6 mt-10">
            <el-card class="p-10 text-center">
                <el-form>
                    <h2 class="text-center mb-10">Masukan Kode OTP</h2>
                    <p>Periksa Email/Whatsapp </p>
                    <code-input
                        ref="inputToken"
                        id="input-token-id"
                        @complete="submitForm()"
                        :fields="4"
                        :fieldWidth="56"
                        :fieldHeight="56"
                        :required="true"
                    />

                    <el-button :disabled="!completed" @click="submitForm()" class="btn btn-primary mt-10">
                        Aktivasi
                        <vue-countdown :time="180000" v-slot="{ days, hours, minutes, seconds }">
                            {{ minutes }} : {{ seconds }}
                        </vue-countdown>
                    </el-button>
                </el-form>
            </el-card>
        </div>
    </div>
</template>
<script lang="ts">
    import CodeInput from "@/components/CodeInput.vue";
    import { inject, onBeforeMount, onMounted, ref } from "vue";
    import VueCountdown from '@chenfengyuan/vue-countdown';
    import { useStore } from "vuex";
    import axios from "axios";
    import { computed } from "@vue/reactivity";
    import { Mutations } from "@/store/enums/StoreEnums";
    import { useRouter } from "vue-router";

    export default {
        components: {
            CodeInput,
            VueCountdown
        },
        data() {
            return {
                userCode: ''
            }
        },
        setup() {
            let completed = ref(false);
            const store = useStore();
            const router = useRouter();

            let remaining = ref(0);
            let subject = ref('');
            let token = ref('');
            let userId = ref('');

            const notify = inject('$notify');

            let code = ref('');

            onBeforeMount(() => {
                remaining = store.getters.remainingTime
                subject = store.getters.subject
                code = store.getters.code
                token = store.getters.getToken
                userId = store.getters.getUser.user_id

                console.log(remaining)
                console.log(subject)
                console.log(code)
                console.log(token)
                console.log(userId)
            })

            const submitForm = async () => {
                completed = ref(true);

                var inputToken = document.getElementById('input-token-id')
                var tokenFields = inputToken?.children[0].getElementsByTagName('input')
                var userCode = '';

                for (let item of tokenFields) {
                    userCode += item.value
                }

                axios.post('/api/activateUser', {
                        userCode: userCode,
                        userId: userId,
                        code: code
                    },{
                        headers: {'Authorization': 'Bearer '+token},
                    })
                    .then(response => {
                        console.log(response)
                        if (response.data.success) {
                            store.commit(Mutations.SET_USER, response.data.user)
                            router.push({ name: 'admin' });
                        } else {
                            alert("gagal")
                        }
                    })
            }

            return {
                store,
                remaining,
                subject,
                completed,
                submitForm
            }
        },
    }

</script>
