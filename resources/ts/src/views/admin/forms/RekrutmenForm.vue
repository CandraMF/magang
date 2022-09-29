<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleFormRef" label-position="top" status-icon>
            <el-input
                hidden
                v-model="ruleForm.recruitment_id"
            ></el-input>
            <div class="row ">
            <div class="col-md-6">
                <el-form-item label="Nama Lengkap" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item prop="email" label="Email" >
                    <el-input v-model="ruleForm.email"></el-input>
                </el-form-item>

                <div class="row">
                    <div class="col-md-6 ">
                        <el-form-item label="Gelar Awal" prop="title_pre">
                            <el-input v-model="ruleForm.title_pre"></el-input>
                        </el-form-item>
                    </div>
                    <div class="col-md-6">
                        <el-form-item label="Gelar Akhir" prop="title_post" >
                            <el-input v-model="ruleForm.title_post"></el-input>
                        </el-form-item>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <el-form-item label="Nomor KTP" prop="identity_id">
                            <el-input v-model="ruleForm.identity_id"></el-input>
                        </el-form-item>
                    </div>
                    <div class="col-md-6">
                        <el-form-item label="NPWP" prop="tax_id">
                            <el-input
                                v-model="ruleForm.tax_id"
                                maxlength="16"
                                show-word-limit></el-input>
                        </el-form-item>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <el-form-item label="Nomor SIM A" prop="driving_a">
                            <el-input
                                v-model="ruleForm.driving_a"
                                maxlength="12"
                                show-word-limit >
                            </el-input>
                        </el-form-item>
                    </div>
                    <div class="col-md-6">
                        <el-form-item label="Nomor SIM B" prop="driving_b">
                            <el-input
                                v-model="ruleForm.driving_b"
                                maxlength="12"
                                show-word-limit>
                            </el-input>
                        </el-form-item>
                    </div>
                    <div class="col-md-6">
                        <el-form-item label="Nomor SIM C" prop="driving_c">
                            <el-input
                                v-model="ruleForm.driving_c"
                                maxlength="12"
                                show-word-limit>
                            </el-input>
                        </el-form-item>
                    </div>
                </div>
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

                <el-form-item label="Golongan Darah" prop="blood_type">
                    <el-radio-group v-model="ruleForm.blood_type">
                        <el-radio-button border label="A"></el-radio-button>
                        <el-radio-button border label="B"></el-radio-button>
                        <el-radio-button border label="O"></el-radio-button>
                        <el-radio-button border label="AB"></el-radio-button>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="Status Pernikahan" prop="marital_status_id">
                    <el-select v-model="ruleForm.marital_status_id" placeholder="Select" class="w-100">
                        <el-option
                            v-for="item in marital"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </div>
            <div class="col-md-6">
                <el-form-item label="Alamat Asal" prop="address">
                    <el-input placeholder="Isi Alamat di Bawah Tingkat Kecamatan" type="textarea" v-model="ruleForm.address"></el-input>
                </el-form-item>
                <el-form-item label="Domisili Asal" prop="region">
                    <el-autocomplete
                        class="inline-input w-100"
                        v-model="ruleForm.region"
                        :fetch-suggestions="querySearch"
                        placeholder="Isi Dengan Nama Kecamatan"
                        :trigger-on-focus="false"
                        @select="handleSelectAsal">
                    </el-autocomplete>
                </el-form-item>
                <div class="row">
                    <div class="col-md-6">
                        <el-form-item label="Kode Pos Asal" prop="zip">
                            <el-input v-model="ruleForm.zip"></el-input>
                        </el-form-item>
                    </div>
                </div>
                <el-form-item label="Alamat Tinggal" prop="address_home">
                    <el-input placeholder="Isi Alamat di Bawah Tingkat Kecamatan" type="textarea" v-model="ruleForm.address_home"></el-input>
                </el-form-item>
                <el-form-item label="Domisili Tinggal" prop="region_home">
                    <el-autocomplete
                        class="inline-input w-100"
                        v-model="ruleForm.region_home"
                        :fetch-suggestions="querySearch"
                        placeholder="Isi Dengan Nama Kecamatan"
                        :trigger-on-focus="false"
                        @select="handleSelectTinggal">
                    </el-autocomplete>
                </el-form-item>
                <div class="row">
                    <div class="col-md-6">
                        <el-form-item label="Kode Pos Tinggal" prop="zip_home">
                            <el-input v-model="ruleForm.zip_home"></el-input>
                        </el-form-item>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <el-form-item label="Nomor Ponsel" prop="mobile">
                            <el-input v-model="ruleForm.mobile"></el-input>
                        </el-form-item>
                    </div>
                    <div class="col-md-6">
                        <el-form-item label="Nomor Ponsel Alternatif" prop="mobile_alt">
                            <el-input v-model="ruleForm.mobile_alt"></el-input>
                        </el-form-item>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <el-form-item label="Etnis" prop="ethnicity_id">
                            <el-select v-model="ruleForm.ethnicity_id" placeholder="Select" class="w-100">
                                <el-option
                                    v-for="item in etnicity"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div class="col-md-6">
                        <el-form-item label="Agama" prop="religion_id">
                            <el-select v-model="ruleForm.religion_id" placeholder="Select" class="w-100">
                                <el-option
                                    v-for="item in religion"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                </div>
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
    </div>
</template>

<script setup lang="ts">
    import axios from 'axios'
    import { useStore } from "vuex";
    import { ref, reactive, onMounted, watch } from 'vue';

    const store = useStore();

    const token = store.getters.getToken

    const ruleFormRef = ref(null);

    const isLoading =  ref(false)

    const position = reactive([]);
    const department = reactive([]);
    const status = reactive([]);

    const ruleForm = reactive({
        'recruitment_id' : null,
        'open_date' : '',
        'close_date' : '',
        'position_id' : '',
        'position' : '',
        'department_id' : '',
        'department' : '',
        'letter' : '',
        'letter_date' : '',
        'status_id' : '',
        'user_id' : '',
        'create_date' : '',
        'update_date' : '',
    })

    const emit = defineEmits(['success', 'finishInit']);


    onMounted(() => {
        getStatus()
    })

    const rules = reactive({
        open_date: [
            { required: true, message: 'Mohon isi Tanggal Pembukaan', trigger: 'blur' },
        ],
        close_date: [
            { required: true, message: 'Mohon isi Tanggal Penutupan', trigger: 'blur' },
        ],
        position_id: [
            { required: true, message: 'Mohon isi Tempat Lahir', trigger: 'blur' },
        ],
        position: [
            { required: true, message: 'Mohon isi Tempat Lahir', trigger: 'blur' },
        ],
        department_id: [
            { required: true, message: 'Mohon isi Tempat Lahir', trigger: 'blur' },
        ],
        department: [
            { required: true, message: 'Mohon isi Tempat Lahir', trigger: 'blur' },
        ],
        letter: [
            { required: true, message: 'Mohon isi Tempat Lahir', trigger: 'blur' },
        ],
        letter_date: [
            { required: true, message: 'Mohon isi Tempat Lahir', trigger: 'blur' },
        ],
        status_id: [
            { required: true, message: 'Mohon isi Tempat Lahir', trigger: 'blur' },
        ],
    })

    const submitForm = async () => {
        isLoading.value = false
        // console.log(ruleForm)
        ruleFormRef.value.validate((valid) => {
            if (valid) {
                if(ruleForm.recruitment_id) {
                    axios.get("/sanctum/csrf-cookie").then(response => {
                        axios.put("/api/recruitment/"+ruleForm.recruitment_id, {
                            formData: {ruleForm},
                        },{
                            headers: {'Authorization': 'Bearer ' + token},
                        })
                        .then((response) => {
                            console.log(response)
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
                        axios.post("/api/recruitment", {
                            formData: {ruleForm},
                        },{
                            headers: {'Authorization': 'Bearer ' + token},
                        })
                        .then((response) => {
                            console.log(response)

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
            await axios.get('/api/status/getByType/Status Lowongan', {
                headers: {'Authorization': 'Bearer '+ token},
            })
            .then(async (response)=> {
                await response.data.forEach(element => {
                    status.push({
                        'value': element.status_id,
                        'label': element.name,
                    })
                });

                await axios.get('/api/department', {
                    headers: {'Authorization': 'Bearer '+ token},
                })
                .then(async (response)=> {
                    await response.data.forEach(element => {
                        department.push({
                            'value': element.department_id,
                            'label': element.name,
                        })
                    });

                    await axios.get('/api/position', {
                        headers: {'Authorization': 'Bearer '+ token},
                    })
                    .then((response)=> {
                        response.data.forEach(element => {
                            position.push({
                                'value': element.position_id,
                                'label': element.name,
                            })
                        });
                        emit('finishInit', response.data.message)
                    })
                })
                // emit('finishInit', response.data.message)
            })





        })
    }

    var results = reactive([]);

    const querySearch = async (queryString, cb) => {
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

    const handleSelectAsal = (item) => {
        ruleForm.region_id = item.region_id
    };

    const handleSelectTinggal = (item) => {
        ruleForm.region_id_home = item.region_id
    };

    function resetForm () {
        ruleFormRef.value?.resetFields();
    }

    function _reset() {
        ruleForm.recruitment_id = null
        ruleFormRef.value?.resetFields();
    }

    function _initData(data){
        ruleForm.recruitment_id = data.recruitment_id
        ruleForm.open_date = data.open_date
        ruleForm.close_date = data.close_date
        ruleForm.position_id = data.position_id
        ruleForm.position = data.position
        ruleForm.department_id = data.department_id
        ruleForm.department = data.department
        ruleForm.letter = data.letter
        ruleForm.letter_date = data.letter_date
        ruleForm.status_id = data.status_id
    }

    defineExpose({ reset: _reset, initData: _initData });
</script>
