<template>
    <div :class="{'row d-flex justify-content-center m-0 p-0' : this.$route.name != 'berandaLogin'}">
        <div :class="{'col-md-6 mt-10' : this.$route.name != 'berandaLogin'}">
            <el-card class="p-10">
                <h2 class="text-center">Login</h2>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="top" status-icon>
                    <el-form-item prop="nik" label="Nomor Induk Kependudukan (NIK)">
                        <el-input
                            autofocus
                            maxlength="16"
                            show-word-limit
                            v-model="ruleForm.nik"></el-input>
                    </el-form-item>
                    <el-form-item prop="password" label="Password" >
                        <el-input v-model="ruleForm.password" show-password></el-input>
                    </el-form-item>
                    <div class="w-100 text-end">Belum Punya Akun? <router-link to="register">Register</router-link></div>
                    <div class="my-5 text-center">
                        <button type="button" @click="submitForm('ruleForm')" class="btn btn-primary w-100">Login</button>
                    </div>
                </el-form>
            </el-card>
        </div>
    </div>
</template>
<script lang="ts">
  import axios from 'axios'
  import { useStore } from "vuex";
  import { Mutations, Actions } from "@/store/enums/StoreEnums";
  import { onMounted } from 'vue';
import { response } from 'express';

  export default {
    data() {
        return {
            isLoading: false,
            ruleForm: {
                nik: '',
                password: '',
            },
            rules: {
                password: [
                    { required: true, message: 'Mohon isi password', trigger: ['blur', 'change'] },
                ],
                nik: [
                    { required: true, message: 'Mohon isi NIK', trigger: 'blur' },
                    { min: 16, message: 'NIK Harus 16 Digit', trigger: 'blur' },
                ],
            }
      };
    },
    watch: {
    },
    setup() {
        const store = useStore();

        return {
            store,
        }
    },
    methods: {
        async submitForm(formName) {
            this.setLoading(true)
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    axios.get('/sanctum/csrf-cookie').then(response => {
                        axios.post('/api/login', {
                            login: this.ruleForm.nik,
                            password: this.ruleForm.password,
                        })
                            .then((response) => {
                                console.log(response.data)
                                console.log(response)
                                if (response.data.success) {
                                    this.$notify({
                                        title: 'Success',
                                        type: 'success',
                                        message: response.data.message
                                    });

                                    this.$router.push({ name: 'aktivasiPlatform', query: { redirect: '/aktivasiPlatform' } });

                                } else {
                                    this.$notify.error({
                                        title: 'Error',
                                        message: response.data.message
                                    })
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
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        setLoading(value) {
            this.isLoading = value
        }
    }
  }
</script>
