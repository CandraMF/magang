<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleFormRef" label-position="top" status-icon>
            <el-input
                hidden
                v-model="ruleForm.person_id"
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
    const status = reactive([]);

    const isLoading =  ref(false)

    const etnicity = reactive([]);
    const religion = reactive([]);
    const marital = reactive([]);

    const ruleForm = reactive({
        person_id : null,
        title_pre : '',
        name : '',
        title_post : '',
        identity_id : '',
        tax_id : '',
        driving_a : '',
        driving_b : '',
        driving_c : '',
        birth_place : '',
        birth_date : '',
        religion_id : '',
        blood_type : '',
        marital_status_id : '',
        ethnicity_id : '',
        email : '',
        mobile : '',
        mobile_alt : '',
        address : '',
        region_id : '',
        region : '',
        zip : '',
        address_home : '',
        region_id_home : '',
        region_home : '',
        zip_home : '',
    })

    const emit = defineEmits(['success', 'finishInit']);


    onMounted(() => {
        getStatus()
    })

    const rules = reactive({
        name: [
            { required: true, message: 'Mohon isi nama lengkap', trigger: 'blur' },
            { min: 3, message: 'Panjang karakter harus lebih dari 3', trigger: 'blur' }
        ],
        email: [
            { required: true, message: 'Mohon isi email', trigger: 'blur' },
            { type: 'email', message: 'Mohon isi format email yang benar', trigger: ['blur', 'change'] }
        ],
        identity_id: [
            { required: true, message: 'Mohon isi nomor KTP', trigger: ['blur', 'change'] },
            { min: 16, message: 'Nomor KTP harus 16 digit', trigger: ['blur', 'change'] },
            { max: 16, message: 'Nomor KTP harus 16 digit', trigger: ['blur', 'change'] }
        ],
        tax_id: [
            { min: 16, message: 'Nomor NPWP harus 16 digit', trigger: ['blur', 'change'] },
            { max: 16, message: 'Nomor NPWP harus 16 digit', trigger: ['blur', 'change'] }
        ],
        driving_a: [
            { min: 12, message: 'Nomor SIM harus 12 digit', trigger: ['blur', 'change'] },
            { min: 12, message: 'Nomor SIM harus 12 digit', trigger: ['blur', 'change'] }
        ],
        driving_b: [
            { min: 12, message: 'Nomor SIM harus 12 digit', trigger: ['blur', 'change'] },
            { min: 12, message: 'Nomor SIM harus 12 digit', trigger: ['blur', 'change'] }
        ],
        driving_c: [
            { min: 12, message: 'Nomor SIM harus 12 digit', trigger: ['blur', 'change'] },
            { min: 12, message: 'Nomor SIM harus 12 digit', trigger: ['blur', 'change'] }
        ],
        birth_place: [
            { required: true, message: 'Mohon isi Tempat Lahir', trigger: 'blur' },
        ],
        birth_date: [
            { required: true, message: 'Mohon isi Tanggal Lahir', trigger: 'blur' },
        ],
        region_id: [
            { required: true, message: 'Mohon isi Kecamatan', trigger: 'blur' },
        ],
        region: [
            { required: true, message: 'Mohon isi Kecamatan', trigger: 'blur' },
        ],
        region_id_home: [
            { required: true, message: 'Mohon isi Kecamatan', trigger: 'blur' },
        ],
        region_home: [
            { required: true, message: 'Mohon isi Kecamatan', trigger: 'blur' },
        ],
        address_home: [
            { required: true, message: 'Mohon isi Alamat Tinggal', trigger: 'blur' },
        ],
        address: [
            { required: true, message: 'Mohon isi Alamat Asal', trigger: 'blur' },
        ],
        mobile: [
            { required: true, message: 'Mohon isi nomor HP', trigger: 'blur' },
        ],
        mobile_alt: [

        ],
        marital_status_id: [
            { required: true, message: 'Mohon pilih Status Pernikahan', trigger: ['blur', 'change'] },
        ],
        blood_type: [
            { required: true, message: 'Mohon pilih Golongan Darah', trigger: ['blur', 'change'] },
        ],
        ethnicity_id: [
            { required: false, message: 'Mohon pilih Etnis', trigger: ['blur', 'change'] },
        ],
        religion_id: [
            { required: true, message: 'Mohon pilih Agama', trigger: ['blur', 'change'] },
        ],
        zip_home: [
            { required: true, message: 'Mohon isi Kode Pos Tinggal', trigger: ['blur', 'change'] },
        ],
        zip: [
            { required: true, message: 'Mohon isi Kode Pos Asal', trigger: ['blur', 'change'] },
        ],
    })

    const submitForm = async () => {
        isLoading.value = false
        // console.log(ruleForm)
        ruleFormRef.value.validate((valid) => {
            if (valid) {
                if(ruleForm.person_id) {
                    axios.get("/sanctum/csrf-cookie").then(response => {
                        axios.put("/api/person/"+ruleForm.person_id, {
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
                        axios.post("/api/person", {
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
            await axios.get('/api/status/getByType/Etnis', {
                headers: {'Authorization': 'Bearer '+ token},
            })
            .then(async (response)=> {
                await response.data.forEach(element => {
                    etnicity.push({
                        'value': element.status_id,
                        'label': element.name,
                    })
                });

                await axios.get('/api/status/getByType/Agama', {
                    headers: {'Authorization': 'Bearer '+ token},
                })
                .then(async (response)=> {
                    await response.data.forEach(element => {
                        religion.push({
                            'value': element.status_id,
                            'label': element.name,
                        })
                    });

                    await axios.get('/api/status/getByType/Status Pernikahan', {
                        headers: {'Authorization': 'Bearer '+ token},
                    })
                    .then((response)=> {
                        response.data.forEach(element => {
                            marital.push({
                                'value': element.status_id,
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
        ruleForm.person_id = null
        ruleFormRef.value?.resetFields();
    }

    function _initData(data){
        ruleForm.person_id = data.person_id
        ruleForm.title_pre = data.title_pre
        ruleForm.name = data.name
        ruleForm.title_post = data.title_post
        ruleForm.identity_id = data.identity_id
        ruleForm.tax_id = data.tax_id
        ruleForm.driving_a = data.driving_a
        ruleForm.driving_b = data.driving_b
        ruleForm.driving_c = data.driving_c
        ruleForm.birth_place = data.birth_place
        ruleForm.birth_date = data.birth_date
        ruleForm.religion_id = data.religion_id
        ruleForm.blood_type = data.blood_type
        ruleForm.marital_status_id = data.marital_status_id
        ruleForm.ethnicity_id = data.ethnicity_id
        ruleForm.email = data.email
        ruleForm.mobile = data.mobile
        ruleForm.mobile_alt = data.mobile_alt
        ruleForm.address = data.address
        ruleForm.region_id = data.region_id
        ruleForm.region = data.region
        ruleForm.zip = data.zip
        ruleForm.address_home = data.address_home
        ruleForm.region_id_home = data.region_id_home
        ruleForm.region_home = data.region_home
        ruleForm.zip_home = data.zip_home
    }

    defineExpose({ reset: _reset, initData: _initData });
</script>
