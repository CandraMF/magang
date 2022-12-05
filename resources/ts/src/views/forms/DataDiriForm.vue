<template>
    <el-form :model="ruleForm" label-position="top" :rules="rules" ref="ruleFormRef" label-width="175px" class="demo-ruleForm">
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
                <!-- <div class="row">
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
                </div> -->
                <el-form-item label="Tempat, Tanggal Lahir">
                    <div class="row">
                        <div class="col-md-6 mb-sm-2">
                            <el-form-item prop="birth_place">
                                <el-input v-model="ruleForm.birth_place" placeholder="Tempat Lahir"></el-input>
                            </el-form-item>
                        </div>
                        <div class="col-md-6">
                            <el-form-item prop="birth_date">
                                <el-date-picker format="DD-MM-YYYY" value-format="YYYY-MM-DD" v-model="ruleForm.birth_date" placeholder="Tanggal Lahir" class="w-100"></el-date-picker>
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
                <el-form-item label="Status Pernikahan" prop="marital">
                    <el-select v-model="ruleForm.marital" placeholder="Select" class="w-100">
                        <el-option
                            v-for="item in marital"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>

                <div class="row">
                    <div class="col-md-6">
                        <el-form-item label="Nomor Ponsel" prop="mobile">
                            <el-input
                                maxlength="14"
                                show-word-limit
                                v-model="ruleForm.mobile"></el-input>
                        </el-form-item>
                    </div>
                    <div class="col-md-6">
                        <el-form-item label="Nomor Ponsel Alternatif" prop="mobile_alt">
                            <el-input v-model="ruleForm.mobile_alt"></el-input>
                        </el-form-item>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <el-form-item label="Alamat Asal (Sesuai KTP)" prop="address">
                    <el-input placeholder="Isi Alamat di Bawah Tingkat Kecamatan" type="textarea" v-model="ruleForm.address"></el-input>
                </el-form-item>
                <el-form-item label="Domisili Asal (Isi dengan nama kecamatan)" prop="region">
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


                <el-button class="mt-2 w-full" @click="handleClickaddress"><i class="fas fa-plus-square me-3 text-primary"></i>Masukkan sebagai Alamat Tinggal</el-button>

                <el-divider content-position="left"></el-divider>

                <el-form-item label="Alamat Tinggal" prop="address_home">
                    <el-input placeholder="Isi Alamat di Bawah Tingkat Kecamatan" type="textarea" v-model="ruleForm.address_home"></el-input>
                </el-form-item>
                <el-form-item label="Domisili Tinggal (Isi dengan nama kecamatan)" prop="region_home">
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

                <el-divider></el-divider>

                <div class="row">
                    <div class="col-md-6">
                        <el-form-item label="Etnis" prop="etnicity">
                            <el-select v-model="ruleForm.etnicity" placeholder="Select" class="w-100">
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
                        <el-form-item label="Agama" prop="religion">
                            <el-select v-model="ruleForm.religion" placeholder="Select" class="w-100">
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

    const etnicity   = reactive([]);
    const marital    = reactive([]);
    const religion   = reactive([]);

    const ruleForm = reactive({
        name: '',
        email: '',
        etnicity: '',
        marital: '',
        religion: '',
        title_pre: '',
        title_post: '',
        identity_id: '',
        tax_id: '',
        driving_a: '',
        driving_b: '',
        driving_c: '',
        birth_place: '',
        birth_date: '',
        blood_type: '',
        region: '',
        region_id: '',
        region_home: '',
        region_id_home: '',
        address: '',
        address_home: '',
        mobile: '',
        mobile_alt: '',
        zip_home: '',
        zip: '',
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
        region: [
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
            { required: true, message: 'Mohon isi Nomor Ponsel', trigger: 'blur' },
            { max: 14, message: 'Nomor Nomor Ponsel harus 14 digit', trigger: ['blur', 'change'] }
        ],
        mobile_alt: [

        ],
        marital: [
            { required: true, message: 'Mohon pilih Status Pernikahan', trigger: ['blur', 'change'] },
        ],
        blood_type: [
            { required: true, message: 'Mohon pilih Golongan Darah', trigger: ['blur', 'change'] },
        ],
        etnicity: [
            { required: false, message: 'Mohon pilih Etnis', trigger: ['blur', 'change'] },
        ],
        religion: [
            { required: true, message: 'Mohon pilih Agama', trigger: ['blur', 'change'] },
        ],
        zip_home: [
            { required: true, message: 'Mohon isi Kode Pos Tinggal', trigger: ['blur', 'change'] },
        ],
        zip: [
            { required: true, message: 'Mohon isi Kode Pos Asal', trigger: ['blur', 'change'] },
        ],
    })

    onMounted(() => {
        ruleForm.email = store.getters.getUser.email
        ruleForm.identity_id = store.getters.getUser.login
        ruleForm.mobile = store.getters.getUser.mobile

        token = store.getters.getToken
        personId = store.getters.getUser.person_id

        getStatus()

        if (personId != null) {
            getPerson()
        }

    })

    const getPerson = async () => {
        await axios.get('/sanctum/csrf-cookie').then(async (response) => {

            await axios.get('/api/person/'+personId, {
                headers: {'Authorization': 'Bearer '+ token},
            })
            .then((response)=> {
                ruleForm.address             = response.data.address;
                ruleForm.address_home          = response.data.address_home;
                ruleForm.region           = response.data.region;
                ruleForm.region_home        = response.data.region_home;
                ruleForm.email                  = response.data.email;
                ruleForm.etnicity               = response.data.ethnicity_id;
                ruleForm.title_pre              = response.data.title_pre;
                ruleForm.title_post             = response.data.title_post;
                ruleForm.blood_type          = response.data.blood_type;
                ruleForm.zip            = response.data.zip;
                ruleForm.zip_home         = response.data.zip_home;
                ruleForm.marital                = response.data.marital_status_id;
                ruleForm.name                   = response.data.name;
                ruleForm.mobile                = response.data.mobile;
                ruleForm.mobile_alt             = response.data.mobile_alt;
                ruleForm.identity_id               = response.data.identity_id;
                ruleForm.tax_id              = response.data.tax_id;
                ruleForm.driving_a              = response.data.driving_a;
                ruleForm.driving_b              = response.data.driving_b;
                ruleForm.driving_c              = response.data.driving_c;
                ruleForm.religion               = response.data.religion_id;
                ruleForm.birth_date           = response.data.birth_date;
                ruleForm.birth_place            = response.data.birth_place;
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
                    if(element.status_id.slice(0,3) == 'ETH') {
                        etnicity.push({
                            'value': element.status_id,
                            'label': element.name,
                        })
                    } else if(element.status_id.slice(0,3) == 'REL') {
                        religion.push({
                            'value': element.status_id,
                            'label': element.name,
                        })
                    } else if(element.status_id.slice(0,3) == 'MAR') {
                        marital.push({
                            'value': element.status_id,
                            'label': element.name,
                        })
                    }
                });
            })
        })
    }

    const submitForm = async () => {
        // console.log(ruleForm)
        ruleFormRef.value?.validate((valid) => {
            if (valid) {
                axios.get('/sanctum/csrf-cookie').then(response => {
                    axios.post('/api/person', {
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

    const createFilter = (queryString) => {
        return (restaurant) => {
            return (
                restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
            );
        };
    };


    const handleSelectAsal = (item) => {
        ruleForm.region_id = item.region_id
    };

    const handleSelectTinggal = (item) => {
        ruleForm.region_id_home = item.region_id
    };

    const handleClickaddress = () => {
        ruleForm.address_home = ruleForm.address
        ruleForm.region_home = ruleForm.region
        ruleForm.region_id_home = ruleForm.region_id
        ruleForm.zip_home = ruleForm.zip
    }

</script>
