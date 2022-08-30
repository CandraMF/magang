<template>
    <div :class="{'row d-flex justify-content-center m-0 p-0' : this.$route.name != 'berandaForgotPassword'}">
        <div :class="{'col-md-6 mt-10' : this.$route.name != 'berandaForgotPassword'}">
            <el-card class="p-10" >
                <h2 class="mb-5 text-center">Lupa Password</h2>
                <el-form :model="ruleForm" :rules="rules" ref="ruleFormRef" label-position="top" status-icon>
                    <el-form-item prop="password" label="Password" >
                        <el-input v-model="ruleForm.password" show-password></el-input>
                    </el-form-item>
                    <el-form-item prop="confirmPassword" label="Konfirmasi Password" >
                        <el-input v-model="ruleForm.confirmPassword" show-password autocomplete="off"></el-input>
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
                    <div class="w-100 text-end mb-5">Ingat Password? <router-link to="login#content">Masuk</router-link></div>
                    <div class="text-center">
                        <el-button type="button" :loading="isLoading" @click="submitForm()" class="btn btn-primary w-100">Submit</el-button>
                    </div>
                </el-form>
            </el-card>
        </div>
    </div>


</template>

<script setup lang="ts">
    import { reactive, ref } from 'vue';

    const isLoading = ref(false);
    const ruleFormRef = ref(null);
    var validCaptcha = false;

    const ruleForm = reactive({
        password : '',
        confirmPassword : '',
        captcha: ''
    })

    function getCaptchaCode(value){
        // console.log(value);
    }
    function checkValidCaptcha(value){
        if(value) {
            validCaptcha = true
            console.log(validCaptcha)
        }
    }

    const rules = reactive({
        password: [
            { required: true, message: 'Mohon isi Password', trigger: ['blur', 'change'] },
        ],
        confirmPassword: [
            { required: true, message: 'Mohon Ulangi Password', trigger: ['blur', 'change'] },
        ],
        captcha: [
            { required: true, message: 'Mohon Isi Captcha', trigger: ['blur', 'change'] },
        ]
    })

    const submitForm = () => {
        ruleFormRef.value?.validate()
    }

</script>
