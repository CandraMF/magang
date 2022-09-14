<template>
    <el-form :model="ruleForm" label-position="top" :rules="rules" ref="ruleFormRef" label-width="175px" class="demo-ruleForm">

        <el-form-item>
            <div class="row">
                <div class="col-md-6 mb-sm-2">
                    <el-form-item label="Jenis Keluarga" prop="family_type">
                        <el-select v-model="ruleForm.family_type" placeholder="Select" class="w-100">
                            <el-option
                                v-for="item in types"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="col-md-6 mb-sm-2">
                    <el-form-item label="Nama Lengkap" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                </div>
            </div>
        </el-form-item>
        <el-form-item label="Tempat, Tanggal Lahir">
            <div class="row">
                <div class="col-md-6 mb-sm-2">
                    <el-form-item prop="birth_place">
                        <el-input v-model="ruleForm.birth_place" placeholder="Tempat Lahir"></el-input>
                    </el-form-item>
                </div>
                <div class="col-md-6">
                    <el-form-item prop="birth_date">
                        <el-date-picker v-model="ruleForm.birth_date" placeholder="Tanggal Lahir" class="w-100"></el-date-picker>
                    </el-form-item>
                </div>
            </div>
        </el-form-item>
        <el-form-item label="Nomor Ponsel" prop="mobile">
            <el-input v-model="ruleForm.mobile"></el-input>
        </el-form-item>
        <div class="d-flex justify-content-end">
            <el-form-item>
                <el-button @click="resetForm()">Reset</el-button>
                <el-button type="primary" @click="submitForm()">Tambah Keluarga</el-button>
            </el-form-item>
        </div>
    </el-form>
</template>

<script setup lang="ts">
    import { Mutations } from '@/store/enums/StoreEnums';
    import axios from 'axios'
    import {ref, onMounted, reactive } from 'vue'
    import { useStore } from 'vuex';

    const store = useStore();
    const ruleFormRef = ref(null);

    var token = ref('');
    var personId = null;

    const types   = reactive([]);
    const status   = reactive([]);

    const ruleForm = reactive({
        family_type : '',
        name : '',
        birth_place : '',
        birth_date : '',
        mobile : '',
    })

    const rules = reactive({

        family_type : [
            { required: true, message: 'Mohon pilih Jenis Keluarga', trigger: 'blur' },
        ],
        name : [
            { required: true, message: 'Mohon isi Nama Lengkap', trigger: 'blur' },
        ],
        birth_place : [
            { required: true, message: 'Mohon isi Tempat Lahir', trigger: 'blur' },
        ],
        birth_date : [
            { required: true, message: 'Mohon isi Tanggal Lahir', trigger: 'blur' },
        ],
        mobile : [
            { required: true, message: 'Mohon isi Nomor Ponsel', trigger: 'blur' },
        ],
    })

    onMounted(() => {

        token = store.getters.getToken
        personId = store.getters.getUser.person_id

        getStatus()

        if (personId) {
            getPerson()
        }

    })

    const getPerson = async () => {
        await axios.get('/sanctum/csrf-cookie').then(async (response) => {

            await axios.get('/api/person/'+personId, {
                headers: {'Authorization': 'Bearer '+ token},
            })
            .then((response)=> {

            })
        })
    }

    const getStatus = async () => {
        await axios.get('/sanctum/csrf-cookie').then(async (response) => {

            await axios.get('/api/status', {
                headers: {'Authorization': 'Bearer '+ token},
            })
            .then((response)=> {
                response.data.forEach(element => {
                    if(element.status_id.slice(0,3) == 'FAM') {
                        types.push({
                            'value': element.status_id,
                            'label': element.name,
                        })
                    }
                    // } else if(element.status_id.slice(0,3) == 'REL') {
                    //     religion.push({
                    //         'value': element.status_id,
                    //         'label': element.name,
                    //     })
                    // } else if(element.status_id.slice(0,3) == 'MAR') {
                    //     marital.push({
                    //         'value': element.status_id,
                    //         'label': element.name,
                    //     })
                    // }
                });
            })
        })
    }

    const submitForm = async () => {

        ruleFormRef.value?.validate((valid) => {
            if (valid) {
                axios.get('/sanctum/csrf-cookie').then(response => {
                    axios.post('/api/family', {
                        formData: {ruleForm},
                        personId: store.getters.getUser.person_id
                    },{
                        headers: {'Authorization': 'Bearer ' + token},
                    })
                    .then(response => {
                        // store.commit(Mutations.SET_USER, response.data.user)
                        console.log(response.data)
                        // console.log(store.getters.getUser)
                        if (response.data.success) {
                            // router.push({ name: 'dashboard', query: { redirect: '/dashboard' } });
                        } else {
                            alert("gagal")
                        }
                    })
                })
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    }

    const resetForm = () => {
        ruleFormRef.value?.resetFields();
    }


</script>
