<template>
    <el-form :model="ruleForm" label-position="top" :rules="rules" ref="ruleFormRef" label-width="175px" class="demo-ruleForm">
        <div class="row ">
            <div class="col-md-6">
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
                <el-form-item label="Nama Lengkap" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
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
            </div>
            <div class="col-md-6">
                <div class="card outline-dashed outline mt-5 card-custom mb-5 shadow-none">
                    <!--begin::Body-->
                    <div class="card-header">
                        <div class="card-title">
                            <h3>Data Keluarga</h3>
                        </div>
                    </div>
                    <div class="card-body pt-2 px-0">
                        <div class="table-responsive">
                            <table class="table table-borderless align-middle">
                                <tbody>
                                    <template v-for="(item, i) in list" :key="i">
                                        <tr>
                                            <th class="pl-0 w-55px">
                                            <!--begin::Symbol-->
                                                <div class="symbol symbol-55px flex-shrink-0 me-4">
                                                    <span
                                                    class="symbol-label"
                                                    v-bind:class="`bg-light-${item.bg}`"
                                                    >
                                                    <img :src="item.svg" class="h-75 align-self-end" alt="" />
                                                    </span>
                                                </div>
                                            <!--end::Symbol-->
                                            </th>
                                            <td class="ps-0 flex-column min-w-200px">
                                            <!--begin::Title-->
                                                <router-link
                                                    to="/account"
                                                    class="text-gray-800 fw-bolder text-hover-primary fs-6 mb-1 modal-link"
                                                    >{{ item.name }}</router-link
                                                >
                                                <div class="text-muted fw-bold">
                                                    {{ item.family_type }}
                                                </div>
                                            <!--end::Title-->
                                            </td>
                                            <td>
                                            <!--begin::Label-->
                                                <div class="me-4 me-md-19 text-md-right">
                                                    <div href="#" class="text-gray-800 fw-bolder fs-6 mb-1">
                                                    {{ item.mobile }}
                                                    </div>
                                                </div>
                                            <!--end::Label-->
                                            </td>
                                            <td class="text-end pe-0">
                                            <!--begin::Btn-->
                                                <router-link
                                                    to="/account"
                                                    class="btn btn-icon btn-bg-danger btn-active-color-primary btn-sm modal-link"
                                                >
                                                    <span class="svg-icon svg-icon-4">
                                                        <span class="svg-icon svg-icon-md">
                                                            <inline-svg
                                                            src="/media/icons/duotone/Navigation/Arrow-right.svg"
                                                            />
                                                        </span>
                                                    </span>
                                                </router-link>
                                            <!--end::Btn-->
                                            </td>
                                        </tr>
                                    </template>
                                    <tr>
                                        <td colspan="4">
                                            <button
                                                type="button"
                                                class="btn btn-outline btn-outline-dashed btn-outline-default text-center w-100 min-w-150px"
                                                data-bs-toggle="modal"
                                                data-bs-target="#modal_1"
                                            >
                                                <span class="text-gray-800 fw-bolder fs-6 d-block">
                                                    <span class="svg-icon svg-icon-2x ms-n1">
                                                        <inline-svg src="/media/icons/duotune/arrows/arr087.svg" />
                                                    </span> Tambah Keluarga
                                                </span>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!--end::Body-->
                </div>
            </div>
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

    const list = reactive([
        {
            name: "Brad Simmons",
            family_type: "Ayah",
            svg: "/media/svg/avatars/009-boy-4.svg",
            bg: "primary",
            mobile: "082110184699"
        },
        {
            name: "Jessie Clarcson",
            family_type: "Ibu",
            svg: "/media/svg/avatars/006-girl-3.svg",
            bg: "danger",
            mobile: "082110184699"
        },
    ]);

    const ruleForm = reactive({
        family_type : '',
        name : '',
        birth_place : '',
        birth_date : '',
        mobile : '',
    })

    const rules = reactive({

        family_type : [
            { required: true, message: 'Mohon isi Jenis Pendidikan', trigger: 'blur' },
        ],
        name : [
            { required: true, message: 'Mohon isi Jenis Pendidikan', trigger: 'blur' },
        ],
        birth_place : [
            { required: true, message: 'Mohon isi Jenis Pendidikan', trigger: 'blur' },
        ],
        birth_date : [
            { required: true, message: 'Mohon isi Jenis Pendidikan', trigger: 'blur' },
        ],
        mobile : [
            { required: true, message: 'Mohon isi Jenis Pendidikan', trigger: 'blur' },
        ],
    })

    onMounted(() => {

        token = store.getters.getToken
        personId = store.getters.getUser.person_id

        console.log(token);

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
                        userId: store.getters.getUser.user_id
                    },{
                        headers: {'Authorization': 'Bearer ' + token},
                    })
                    .then(response => {
                        store.commit(Mutations.SET_USER, response.data.user)
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
