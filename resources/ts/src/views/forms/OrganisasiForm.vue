<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleFormRef" label-position="top" status-icon>
            <el-input
                hidden
                v-model="ruleForm.id"
            ></el-input>
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
                        <el-input v-model="ruleForm.nik" readonly></el-input>
                    </el-form-item>
                    <el-form-item prop="password" label="Password" v-if="!ruleForm.id">
                        <el-input v-model="ruleForm.password" show-password="true"></el-input>
                    </el-form-item>
                    <el-form-item prop="confirmPassword" label="Konfirmasi Password" v-if="!ruleForm.id">
                        <el-input v-model="ruleForm.confirmPassword" show-password="true" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item prop="role_id" label="Hak Akses">
                        <el-select v-model="ruleForm.role_id" placeholder="Select" class="w-100">
                            <el-option
                                v-for="item in roles"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="col-md-12">
                    <div class="d-flex justify-content-end">
                        <el-form-item class="m-0">
                            <el-button @click="resetForm()">Reset</el-button>
                            <el-button type="primary" @click="submitForm()">Simpan</el-button>
                        </el-form-item>
                    </div>
                </div>
            </div>
        </el-form>
    </div>
</template>

<script setup lang="ts">
    import axios from 'axios'
    import { useStore } from "vuex";
    import { ref, reactive, onMounted, watch } from 'vue';
    import { useRoute } from 'vue-router';

    const store = useStore();

    const token = store.getters.getToken

    const ruleFormRef = ref(null);
    const roles   = reactive([]);

    const isLoading =  ref(false)

    const ruleForm = reactive({
        id: null,
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        nomorHP: "",
        nik: "",
        captcha: "",
        role_id: "",
    })

    const emit = defineEmits(['success']);

    onMounted(() => {
        ruleForm.password = "12345678"
        ruleForm.confirmPassword = "12345678"
        getStatus()
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
        email: [
            { required: true, message: "Mohon isi email", trigger: ["blur", "change"] },
            { type: "email", message: "Mohon isi format email yang benar", trigger: ["blur", "change"] }
        ],
        role: [
            { required: true, message: "Mohon pilih role", trigger: ["blur", "change"] },
        ],
    })

    const submitForm = async () => {
        isLoading.value = false
        ruleFormRef.value.validate((valid) => {
            if (valid) {
                if(ruleForm.id) {
                    axios.get("/sanctum/csrf-cookie").then(response => {
                        axios.put("/api/user/"+ruleForm.id, {
                            login: ruleForm.nik,
                            name: ruleForm.name,
                            email: ruleForm.email,
                            mobile: ruleForm.nomorHP
                        },{
                            headers: {'Authorization': 'Bearer ' + token},
                        })
                        .then((response) => {
                            if (response.data.success) {
                                emit('success', response.data.message)
                            }
                            isLoading.value = false
                        })
                        .catch((error) => {
                            console.error(error.message);
                            isLoading.value = false
                        });
                    });
                } else {
                    axios.get("/sanctum/csrf-cookie").then(response => {
                        axios.post("/api/user", {
                            login: ruleForm.nik,
                            password: ruleForm.password,
                            name: ruleForm.name,
                            email: ruleForm.email,
                            mobile: ruleForm.nomorHP
                        },{
                            headers: {'Authorization': 'Bearer ' + token},
                        })
                        .then((response) => {
                            if (response.data.success) {
                                emit('success', response.data.message)
                            }
                            isLoading.value = false
                        })
                        .catch((error) => {
                            console.error(error.message);
                            isLoading.value = false
                        });
                    });
                }
            }
            else {
                isLoading.value = false;
                return false;
            }
        });
    }

    const getStatus = async () => {
        await axios.get('/sanctum/csrf-cookie').then(async (response) => {

            await axios.get('/api/status/getByType/Hak Akses User', {
                headers: {'Authorization': 'Bearer '+ token},
            })
            .then((response)=> {
                response.data.forEach(element => {
                    roles.push({
                        'value': element.status_id,
                        'label': element.name,
                    })
                });
            })
        })
    }

    function resetForm () {
        ruleFormRef.value?.resetFields();
    }

    function _reset() {
        ruleForm.id = null
        ruleFormRef.value?.resetFields();
    }

    function _initData(data){
        ruleForm.id = data.user_id
        ruleForm.nik = data.login
        ruleForm.password = data.password
        ruleForm.name = data.name
        ruleForm.email = data.email
        ruleForm.nomorHP = data.mobile
    }

    defineExpose({ reset: _reset, initData: _initData });
</script>
