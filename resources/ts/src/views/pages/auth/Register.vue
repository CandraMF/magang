<template>

    <div :class="{'row d-flex justify-content-center m-0 p-0' : this.$route.name != 'berandaRegister'}">
        <div :class="{'col-md-6 mt-10' : this.$route.name != 'berandaRegister'}">
            <el-card class="p-10" >
                <h2 class="mb-5 text-center">Register</h2>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="top" status-icon>
                    <el-form-item prop="nik" label="Nomor Induk Kependudukan">
                        <el-input
                            v-model="ruleForm.nik"
                            maxlength="16"
                            show-word-limit
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="name" label="Nama Lengkap">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item prop="email" label="Email">
                        <el-input v-model="ruleForm.email"></el-input>
                    </el-form-item>
                    <el-form-item prop="nomorHP" label="Nomor HP">
                        <el-input v-model="ruleForm.nomorHP"></el-input>
                    </el-form-item>
                    <el-form-item prop="username" label="Username" >
                        <el-input v-model="ruleForm.nik" readonly></el-input>
                    </el-form-item>
                    <el-form-item prop="password" label="Password" >
                        <el-input v-model="ruleForm.password" show-password></el-input>
                    </el-form-item>
                    <el-form-item prop="confirmPassword" label="Confirm Password" >
                        <el-input v-model="ruleForm.confirmPassword" show-password autocomplete="off"></el-input>
                    </el-form-item>
                    <div class="w-100 text-end">Sudah Punya Akun? <router-link to="login">Login</router-link></div>
                    <div class="my-5 text-center">
                        <el-button type="button" :loading="isLoading" @click="submitForm('ruleForm')" class="btn btn-primary w-100">Register</el-button>
                    </div>
                </el-form>
            </el-card>
        </div>
    </div>

</template>
<script lang="ts">
    import axios from 'axios'
    import { useStore, mapMutations } from "vuex";
    import { Mutations, Actions } from "@/store/enums/StoreEnums";
    // import { regex } from "vee-validate/dist/rules";

  export default {

    data() {
        return {
            isLoading: false,
            ruleForm: {
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                nomorHP: '',
                nik: '',
            },
            rules: {
                name: [
                    { required: true, message: 'Mohon isi Nama Lengkap', trigger: 'blur' },
                ],
                nik: [
                    { required: true, message: 'Mohon isi NIK', trigger: 'blur' },
                    { min: 16, message: 'NIK Harus 16 Digit', trigger: 'blur' },
                ],
                confirmPassword: [
                    { required: true, message: 'Mohon isi Konfirmasi Password', trigger: ['blur', 'change'] },
                ],
                password: [
                    { required: true, message: 'Mohon isi Password', trigger: ['blur', 'change'] },
                ],
                nomorHP: [
                    { required: true, message: 'Mohon isi Nomor HP', trigger: ['blur', 'change'] },
                    // { regex: /^[2-9]\d{2}[2-9]\d{2}\d{4}$/ },
                ],
                email: [
                    { required: true, message: 'Mohon isi email', trigger: ['blur', 'change'] },
                    { type: 'email', message: 'Mohon isi format email yang benar', trigger: ['blur', 'change'] }
                ],
            }
      };
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
                axios.post('/api/register', {
                    login: this.ruleForm.nik,
                    password: this.ruleForm.password,
                    name: this.ruleForm.name,
                    email: this.ruleForm.email,
                    mobile: this.ruleForm.nomorHP
                })
                    .then((response) => {
                        console.log(response.data)
                        if (response.data.success) {
                            this.$notify({
                                title: 'Success',
                                type: 'success',
                                message: response.data.message
                            });

                            this.$router.push({ name: 'login', query: { redirect: '/login' } });
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
    },
    // mounted() {
    //     if (localStorage.getItem('loggedIn') && ( this.$route.name != 'berandaRegister' && this.$route.name != 'berandaLogin' )) {
    //         this.$router.push({ name: 'dashboard', query: { redirect: '/dashboard' } });
    //     }
    // },

}

</script>
