<template>
    <el-form :model="ruleForm" label-position="top" :rules="rules" ref="ruleFormRef" label-width="175px" class="demo-ruleForm">
        <div class="row ">
            <div class="col-md-6">
                <el-form-item label="Jenis Pendidikan" prop="education_type">
                    <el-select v-model="ruleForm.education_type" placeholder="Select" class="w-100">
                        <el-option
                            v-for="item in types"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <div class="row">
                        <div class="col-md-6">
                            <el-form-item prop="start_year" label="Tahun Masuk">
                                <el-input v-model="ruleForm.start_year"></el-input>
                            </el-form-item>
                        </div>
                        <div class="col-md-6">
                            <el-form-item prop="end_year" label="Tahun Keluar">
                                <el-input v-model="ruleForm.end_year"></el-input>
                            </el-form-item>
                        </div>
                    </div>
                </el-form-item>
                <el-form-item>
                    <div class="row">
                        <div class="col-md-6">
                            <el-form-item prop="score" label="IPK">
                                <el-input v-model="ruleForm.score"></el-input>
                            </el-form-item>
                        </div>
                        <div class="col-md-6">
                            <el-form-item label="Status" prop="status_id">
                                <el-select v-model="ruleForm.status_id" placeholder="Select" class="w-100">
                                    <el-option
                                        v-for="item in status"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                    </div>
                </el-form-item>
            </div>
            <div class="col-md-6">
                <el-form-item label="Jurusan" prop="major">
                    <el-autocomplete
                        class="inline-input w-100"
                        v-model="ruleForm.major"
                        :fetch-suggestions="majorSearch"
                        :trigger-on-focus="false"
                        @select="handleSelectMajor">
                    </el-autocomplete>
                </el-form-item>
                <el-form-item label="Nama sekolah / Universitas" prop="school">
                    <el-autocomplete
                        class="inline-input w-100"
                        v-model="ruleForm.school"
                        :fetch-suggestions="schoolSearch"
                        :trigger-on-focus="false"
                        @select="handleSelectSchool">
                    </el-autocomplete>
                </el-form-item>
                <el-form-item label="Wilayah Sekolah / Universitas" prop="region">
                    <el-autocomplete
                        class="inline-input w-100"
                        v-model="ruleForm.region"
                        :fetch-suggestions="regionSearch"
                        placeholder="Isi dengan nama Kecamatan / Kota"
                        :trigger-on-focus="false"
                        @select="handleSelectRegion">
                    </el-autocomplete>
                </el-form-item>
            </div>
            <div class="col-md-12">
                <div class="d-flex justify-content-end">
                    <el-form-item>
                        <el-button @click="resetForm()">Reset</el-button>
                        <el-button type="primary" @click="submitForm()">Simpan</el-button>
                    </el-form-item>
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

    const ruleForm = reactive({
        education_type : '',
        start_year : '',
        end_year : '',
        major_id : '',
        major : '',
        school_id : '',
        school : '',
        region_id : '',
        region : '',
        score : '',
        status_id : '',
        is_last: false,
    })

    const rules = reactive({

        education_type: [
            { required: true, message: 'Mohon isi Jenis Pendidikan', trigger: 'blur' },
        ],
        start_year : [
            { required: true, message: 'Mohon isi Tahun Masuk', trigger: 'blur' },
        ],
        major_id : [
            { required: true, message: 'Mohon isi Jurusan ', trigger: 'blur' },
        ],
        major : [
            { required: true, message: 'Mohon isi Jurusan ', trigger: 'blur' },
        ],
        school : [
            { required: true, message: 'Mohon isi Sekolah / Universitas', trigger: 'blur' },
        ],
        school_id : [
            { required: true, message: 'Mohon isi Sekolah / Universitas', trigger: 'blur' },
        ],
        region_id : [
            { required: true, message: 'Mohon isi Wilayah Sekolah ', trigger: 'blur' },
        ],
        region : [
            { required: true, message: 'Mohon isi jenis pendidikan', trigger: 'blur' },
        ],
        status_id : [
            { required: true, message: 'Mohon Pilih Status', trigger: 'blur' },
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
                    if(element.status_id.slice(0,3) == 'EDU') {
                        types.push({
                            'value': element.status_id,
                            'label': element.name,
                        })
                    } else if(element.status_id.slice(0,3) == 'GRA') {
                        status.push({
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
                    axios.post('/api/education', {
                        formData: {ruleForm},
                        personId: personId
                    },{
                        headers: {'Authorization': 'Bearer ' + token},
                    })
                    .then(response => {
                        // store.commit(Mutations.SET_USER, response.data.user)
                        console.log(response.data)

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

    var results = reactive([]);

    const majorSearch = async (queryString, cb) => {
        var payload = queryString
            if(payload.length >= 2) {
                await axios.get('/api/major/search/' + payload, {
                    headers: {'Authorization': 'Bearer '+ token},
                })
                .then(response => {
                    results = [];
                    response.data.forEach(element => {
                        results.push(
                            {
                                "value": element.name,
                                "major_id": element.major_id,
                            },
                        )
                    });
                })
            }
        // call callback function to return suggestions
        cb(results);
    };

    const schoolSearch = async (queryString, cb) => {
        var payload = queryString
            if(payload.length >= 2) {
                await axios.get('/api/school/search/' + payload, {
                    headers: {'Authorization': 'Bearer '+ token},
                })
                .then(response => {
                    results = [];
                    response.data.forEach(element => {
                        results.push(
                            {
                                "value": element.name,
                                "school_id": element.school_id,
                            },
                        )
                    });
                })
            }
        // call callback function to return suggestions
        cb(results);
    };

    const regionSearch = async (queryString, cb) => {
        var payload = queryString
            if(payload.length >= 2) {
                await axios.get('/api/region/search/' + payload, {
                    headers: {'Authorization': 'Bearer '+ token},
                })
                .then(response => {
                    results = [];
                    response.data.forEach(element => {
                        results.push(
                            {
                                "value": element.name,
                                "region_id": element.region_id,
                            },
                        )
                    });
                })
            }
        // call callback function to return suggestions
        cb(results);
    };

    const createFilter = (queryString) => {
        return (restaurant) => {
            return (
                restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
            );
        };
    };


    const handleSelectMajor = (item) => {
        ruleForm.major_id = item.major_id
    };

    const handleSelectSchool = (item) => {
        ruleForm.school_id = item.school_id
    };

    const handleSelectRegion = (item) => {
        ruleForm.region_id = item.region_id
    };

</script>
