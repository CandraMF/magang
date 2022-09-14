<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleFormRef" label-position="top" status-icon>
            <div class="row">
                <div class="col-md-6">
                    <el-form-item prop="nik" label="Nomor Induk Kependudukan">
                        <el-input
                            v-model="ruleForm.nik"
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="name" label="Nama Lengkap">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item prop="email" label="Email">
                        <el-input v-model="ruleForm.email"></el-input>
                    </el-form-item>
                    <el-form-item prop="nomorHP" label="Nomor Ponsel">
                        <el-input v-model="ruleForm.nomorHP"></el-input>
                    </el-form-item>
                </div>
                <div class="col-md-6">
                    <el-form-item prop="username" label="Username" >
                        <el-input v-model="ruleForm.nik" readonly disabled></el-input>
                    </el-form-item>
                    <el-form-item prop="password" label="Password" >
                        <el-input v-model="ruleForm.password" show-password></el-input>
                    </el-form-item>
                    <el-form-item prop="confirmPassword" label="Konfirmasi Password" >
                        <el-input v-model="ruleForm.confirmPassword" show-password autocomplete="off"></el-input>
                    </el-form-item>
                </div>
                <div class="col-md-12">
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-5 mt-10">
                            <VueClientRecaptcha
                                :value="ruleForm.captcha"
                                @getCode="getCaptchaCode"
                                @isValid="checkValidCaptcha"
                                class="mb-5"
                            />
                            <el-form-item prop="captcha">
                                <el-input v-model="ruleForm.captcha" placeholder="Masukan Token di Atas"></el-input>
                            </el-form-item>
                            <div class="w-100 text-center">Sudah Punya Akun? <router-link to="login#content">Login</router-link></div>
                            <div class="my-5 text-center">
                                <el-button type="button" :loading="isLoading" @click="submitForm('ruleForm')" class="btn btn-primary w-100">Daftar</el-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </el-form>
    </div>
</template>

<script setup lang="ts">
    import axios from 'axios'
    import { useStore, mapMutations } from "vuex";
    import { Mutations, Actions } from "@/store/enums/StoreEnums";
    import { ref, reactive } from 'vue';
    import { useRoute } from 'vue-router';

    const store = useStore();
    const router = useRoute();

    const ruleFormRef = ref(null);

    const isLoading =  ref(false)
    const validCaptcha =  ref(false)
    const ruleForm = reactive({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        nomorHP: "",
        nik: "",
        captcha: "",
    })

    const rules = reactive({
        name: [
            { required: true, message: "Mohon isi Nama Lengkap", trigger: "blur" },
        ],
        nik: [
            { required: true, message: "Mohon isi NIK", trigger: "blur" },
        ],
        confirmPassword: [
            { required: true, message: "Mohon isi Konfirmasi Password", trigger: ["blur", "change"] },
        ],
        password: [
            { required: true, message: "Mohon isi Password", trigger: ["blur", "change"] },
            { min: 8, message: "Password Minimal 8 Karakter", trigger: ["blur", "change"] },
        ],
        nomorHP: [
            { required: true, message: "Mohon isi Nomor HP", trigger: ["blur", "change"] },
            // { regex: /^[2-9]\d{2}[2-9]\d{2}\d{4}$/ },
        ],
        captcha: [
            { required: true, message: "Mohon isi Captcha", trigger: ["blur", "change"] },
        ],
        email: [
            { required: true, message: "Mohon isi email", trigger: ["blur", "change"] },
            { type: "email", message: "Mohon isi format email yang benar", trigger: ["blur", "change"] }
        ],
    })

    const submitForm = async (formName) => {
        isLoading.value = false
        ruleFormRef.value.validate((valid) => {
            if (valid) {
                if (validCaptcha) {
                    axios.get("/sanctum/csrf-cookie").then(response => {
                        axios.post("/api/register", {
                            login: ruleForm.nik,
                            password: ruleForm.password,
                            name: ruleForm.name,
                            email: ruleForm.email,
                            mobile: ruleForm.nomorHP
                        })
                            .then((response) => {
                            console.log(response.data);
                            if (response.data.success) {
                                // this.$notify({
                                //     title: "Success",
                                //     type: "success",
                                //     message: response.data.message
                                // });
                                // router.push({ name: "login", query: { redirect: "/login" } });
                            }
                            else {
                                // this.$notify.error({
                                //     title: "Error",
                                //     message: response.data.message
                                // });
                            }
                            isLoading.value = false
                        })
                        .catch((error) => {
                            console.error(error.message);
                            isLoading.value = false
                        });
                    });
                }
                else {
                    isLoading.value = false
                    // this.setLoading(false);
                    // this.$notify.error({
                    //     title: "Error",
                    //     message: "Captcha tidak valid"
                    // });
                }
            }
            else {
                isLoading.value = false;
                return false;
            }
        });
    }
    const resetForm = (formName) => {
        ruleFormRef.value.resetFields();
    }
    const getCaptchaCode = (value) => {
        // console.log(value);
    }
    const checkValidCaptcha = (value) => {
        if (value) {
            validCaptcha.value = true;
            console.log(validCaptcha.value);
        }
    }
</script>
