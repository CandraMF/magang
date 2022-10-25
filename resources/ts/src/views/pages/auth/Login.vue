<template>

    <div class="row d-flex justify-content-center m-0 p-0">
        <div class="col-md-4 mt-10">
            <div class="card p-5">
                <div class="card-header justify-content-center">
                    <div class="card-title">
                        <h2 class="text-center">Selamat Datang</h2>
                    </div>
                </div>
                <div class="card-body pt-3 pb-1">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="top" status-icon >
                        <el-form-item prop="nik" label="User ID">
                            <el-input
                                v-model="ruleForm.nik"
                            ></el-input>
                        </el-form-item>
                        <el-form-item prop="password" label="Password" >
                            <el-input v-model="ruleForm.password" show-password></el-input>
                        </el-form-item>

                        <div class="d-flex justify-content-center mt-9">
                            <div>
                                <vue-recaptcha
                                    theme="light"
                                    size="normal"
                                    :tabindex="0"
                                    @widgetId="recaptchaWidget = $event"
                                    @verify="callbackVerify($event)"
                                    @fail="callbackFail()"
                                    @expired="callbackExpired()"
                                />
                            </div>
                        </div>
                        <div class=" text-center mt-5" >
                            <el-button type="button" :loading="isLoading" @click="submitForm('ruleForm')" class="btn btn-primary px-10 mb-5">Masuk</el-button>
                            <div class="w-100 mb-5">Lupa Password? <router-link to="forgotPassword#content">Reset Password</router-link></div>
                        </div>
                    </el-form>
                </div>

            </div>
        </div>
    </div>

</template>
<script lang="ts">
    import axios from 'axios'
    import { useStore, mapMutations } from "vuex";
    import { Mutations, Actions } from "@/store/enums/StoreEnums";
    import { ref } from 'vue';
    import store from '@/store';

    import { VueRecaptcha, useRecaptcha } from "vue3-recaptcha-v2";

  export default {
    data() {
        return {
            isLoading: false,
            validCaptcha: true,
            ruleForm: {
                password: '',
                nik: '',
                // captcha: '',
            },
            rules: {
                nik: [
                    { required: true, message: 'Mohon isi User ID', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: 'Mohon isi Password', trigger: ['blur', 'change'] },
                ],
                // captcha: [
                //     { required: true, message: 'Mohon isi Captcha', trigger: ['blur'] },
                // ]
            },
      };
    },
    setup() {
        const store = useStore();
        const { resetRecaptcha } = useRecaptcha();
        const recaptchaWidget = ref(null);

        const callbackVerify = (response) => {
            console.log(response);
        };

        const callbackExpired = () => {
            console.log("expired!");
        };

        const callbackFail = () => {
            console.log("fail");
        };
        // Reset Recaptcha action
        const actionReset = () => {
            resetRecaptcha(recaptchaWidget.value);
        };

        function setUser(payload){
            store.commit(Mutations.SET_USER, payload)
        }

        function setToken(payload){
            store.commit(Mutations.SET_TOKEN, payload)
        }

        return {
            store,
            setUser,
            setToken,
            recaptchaWidget,
            callbackVerify,
            callbackFail,
            callbackExpired,
            actionReset,
        }
    },
    methods: {
      async submitForm(formName) {
        this.setLoading(true)
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if(this.validCaptcha) {
                axios.get('/sanctum/csrf-cookie').then(response => {
                    axios.post('/api/login', {
                        login: this.ruleForm.nik,
                        password: this.ruleForm.password,
                    })
                        .then((response) => {
                            if (response.data.success) {
                                this.$notify({
                                    title: 'Success',
                                    type: 'success',
                                    message: response.data.message
                                });

                                this.setUser(response.data.user);
                                this.setToken(response.data.token);

                                console.log(response.data)

                                console.log(store.getters.getUser)

                                this.$router.go(0);
                            } else {
                                this.$notify.error({
                                    title: 'Error',
                                    message: response.data.message
                                });
                            }
                            this.setLoading(false)
                        })
                        .catch((error) => {
                            console.error(error.message);
                            this.setLoading(false)
                        });
                })
            } else {
                this.setLoading(false)
                this.$notify.error({
                    title: 'Error',
                    message: "Captcha tidak valid"
                });
            }
          } else {
            this.setLoading(false)
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      setLoading(value) {
        this.isLoading = value
      },
      getCaptchaCode(value){
        // console.log(value);
      },
    //   checkValidCaptcha(value){
    //     if(value) {
    //         this.validCaptcha = true
    //         console.log(this.validCaptcha);
    //     }
    //   }
    },
    components: { VueRecaptcha },
}

</script>
