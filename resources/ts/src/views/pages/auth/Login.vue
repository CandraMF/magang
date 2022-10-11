<template>

    <div :class="{'row d-flex justify-content-center m-0 p-0' : this.$route.name != 'berandaLogin'}">
        <div :class="{'col-md-6 mt-10' : this.$route.name != 'berandaLogin'}">
            <el-card class="p-10" >
                <h2 class="mb-5 text-center">Masuk</h2>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="top" status-icon>
                    <el-form-item prop="nik" label="Username">
                        <el-input
                            v-model="ruleForm.nik"
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="password" label="Password" >
                        <el-input v-model="ruleForm.password" show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <VueClientRecaptcha
                            :value="ruleForm.captcha"
                            @getCode="getCaptchaCode"
                            @isValid="checkValidCaptcha"
                        />
                    </el-form-item>
                    <el-form-item prop="captcha" >
                        <el-input v-model="ruleForm.captcha" placeholder="Masukan Token di Atas"></el-input>
                    </el-form-item>
                    <div class="w-100 text-end">Belum Punya Akun? <router-link to="register#content">Daftar</router-link></div>
                    <div class="w-100 text-end mb-5">Lupa Password? <router-link to="forgotPassword#content">Lupa Password</router-link></div>
                    <div class="text-center">
                        <el-button type="button" :loading="isLoading" @click="submitForm('ruleForm')" class="btn btn-primary w-100">Masuk</el-button>
                    </div>
                </el-form>
                <el-divider content-position="center" class="fw-light fs-6 my-10">Atau Masuk Sebagai</el-divider>
                <div class="d-flex justify-content-center">
                    <router-link to="Ldap#content" class="btn btn-linkedin">Admin</router-link>
                </div>
            </el-card>
        </div>
    </div>

</template>
<script lang="ts">
    import axios from 'axios'
    import { useStore, mapMutations } from "vuex";
    import { Mutations, Actions } from "@/store/enums/StoreEnums";
    import { ref } from 'vue';

  export default {
    data() {
        return {
            isLoading: false,
            validCaptcha: false,
            ruleForm: {
                password: '',
                nik: '',
                captcha: '',
            },
            rules: {
                nik: [
                    { required: true, message: 'Mohon isi Username', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: 'Mohon isi Password', trigger: ['blur', 'change'] },
                ],
                captcha: [
                    { required: true, message: 'Mohon isi Captcha', trigger: ['blur'] },
                ]
            }
      };
    },
    setup() {
        const store = useStore();

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

                                this.$router.push({ name: 'aktivasiPlatform', query: { redirect: '/akktivasiPlatform' } });
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
      checkValidCaptcha(value){
        if(value) {
            this.validCaptcha = true
            console.log(this.validCaptcha);
        }
      }
    },
}

</script>
