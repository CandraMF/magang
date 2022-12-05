<template>
    <div :class="{ 'row d-flex justify-content-center m-0 p-0': this.$route.name != 'berandaForgotPassword' }">
        <div :class="{ 'col-md-6 mt-10': this.$route.name != 'berandaForgotPassword' }">
            <el-card class="p-10">
                <h2 class="mb-5 text-center">Reset Password</h2>
                <el-form :model="ruleForm" :rules="rules" ref="ruleFormRef" label-position="top" status-icon>
                    <el-form-item prop="user" label="User ID">
                        <el-input v-model="ruleForm.user_id"></el-input>
                    </el-form-item>
                    <el-form-item prop="password" label="Password Baru">
                        <el-input v-model="ruleForm.password" show-password autocomplete="off"></el-input>
                    </el-form-item>
                    <div class="col-md-12">
                        <div class="d-flex justify-content-center mt-9">
                            <div>
                                <vue-recaptcha style="min-width: 100% !important;" theme="light" class="mb-5"
                                    size="normal" :tabindex="0" @widgetId="recaptchaWidget = $event"
                                    @verify="callbackVerify($event)" @fail="callbackFail()"
                                    @expired="callbackExpired()" />
                            </div>
                        </div>
                    </div>
                    <div class=" text-center mt-5">
                        <el-button type="button" :loading="isLoading" @click="submitForm('ruleForm')"
                            class="btn btn-primary px-10 mb-5">Reset Password</el-button>
                    </div>
                </el-form>
            </el-card>
        </div>
    </div>


</template>

<script setup lang="ts">
import router from '@/router';
import axios from 'axios';
import { reactive, ref } from 'vue';
import { VueRecaptcha, useRecaptcha } from "vue3-recaptcha-v2";

const isLoading = ref(false);
const ruleFormRef = ref(null);
var validCaptcha = false;

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

const ruleForm = reactive({
    user_id: '',
    password: '',
    captcha: ''
})

const rules = reactive({
    user_id: [
        { required: true, message: 'Mohon isi User ID', trigger: ['blur', 'change'] },
    ],
    confirmPassword: [
        { required: true, message: 'Mohon isi Password', trigger: ['blur', 'change'] },
    ],
    captcha: [
        { required: true, message: 'Mohon Isi Captcha', trigger: ['blur', 'change'] },
    ]
})

const submitForm = (payload) => {
    isLoading.value = false
        ruleFormRef.value.validate((valid) => {
            if (valid) {
                axios.get("/sanctum/csrf-cookie").then(response => {
                    axios.put("/api/resetPassword", {
                        login: ruleForm.user_id,
                        password: ruleForm.password,
                    })
                    .then((response) => {
                        console.log(response)
                        if (response.data.success) {
                            router.push('/auth/login')
                        }
                        isLoading.value = false
                    })
                    .catch((error) => {
                        console.error(error.message);
                        isLoading.value = false
                    });
                });
            } else {
                isLoading.value = false;
                return false;
            }
        });
}

</script>
