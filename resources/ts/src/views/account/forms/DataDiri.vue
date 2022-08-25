<template>
    <el-form :model="ruleForm" label-position="top" :rules="rules" ref="ruleFormRef" label-width="175px" class="demo-ruleForm">
        <div class="row">
            <div class="col-md-6">
                <el-form-item label="Nama Lengkap" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item prop="email" label="Email" >
                    <el-input v-model="ruleForm.email"></el-input>
                </el-form-item>

                <div class="row">
                    <div class="col-md-6 ">
                        <el-form-item label="Gelar Awal" prop="gelarAwal">
                            <el-input v-model="ruleForm.gelarAwal"></el-input>
                        </el-form-item>
                    </div>
                    <div class="col-md-6">
                        <el-form-item label="Gelar Akhir" prop="gelarAkhir" >
                            <el-input v-model="ruleForm.gelarAkhir"></el-input>
                        </el-form-item>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <el-form-item label="Nomor KTP" prop="nomorKTP">
                            <el-input v-model="ruleForm.nomorKTP"></el-input>
                        </el-form-item>
                    </div>
                    <div class="col-md-6">
                        <el-form-item label="NPWP" prop="nomorNPWP">
                            <el-input
                                v-model="ruleForm.nomorNPWP"
                                maxlength="16"
                                show-word-limit></el-input>
                        </el-form-item>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <el-form-item label="Nomor SIM A" prop="nomorSIMA">
                            <el-input
                                v-model="ruleForm.nomorSIMA"
                                maxlength="12"
                                show-word-limit >
                            </el-input>
                        </el-form-item>
                    </div>
                    <div class="col-md-6">
                        <el-form-item label="Nomor SIM B" prop="nomorSIMB">
                            <el-input
                                v-model="ruleForm.nomorSIMB"
                                maxlength="12"
                                show-word-limit>
                            </el-input>
                        </el-form-item>
                    </div>
                    <div class="col-md-6">
                        <el-form-item label="Nomor SIM C" prop="nomorSIMC">
                            <el-input
                                v-model="ruleForm.nomorSIMC"
                                maxlength="12"
                                show-word-limit>
                            </el-input>
                        </el-form-item>
                    </div>
                </div>
                <el-form-item label="Tempat, Tanggal Lahir">
                    <div class="row">
                        <div class="col-md-6 mb-sm-2">
                            <el-form-item prop="tempatLahir">
                                <el-input v-model="ruleForm.tempatLahir" placeholder="Tempat Lahir"></el-input>
                            </el-form-item>
                        </div>
                        <div class="col-md-6">
                            <el-form-item prop="tanggalLahir">
                                <el-date-picker v-model="ruleForm.tanggalLahir" placeholder="Tanggal Lahir" class="w-100"></el-date-picker>
                            </el-form-item>
                        </div>
                    </div>
                </el-form-item>

                <el-form-item label="Golongan Darah" prop="golonganDarah">
                    <el-radio-group v-model="ruleForm.golonganDarah">
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
            </div>
            <div class="col-md-6">
                <el-form-item label="Alamat Asal" prop="alamatAsal">
                    <el-input placeholder="Isi Alamat di Bawah Tingkat Kecamatan" type="textarea" v-model="ruleForm.alamatAsal"></el-input>
                </el-form-item>
                <el-form-item label="Domisili Asal" prop="domisiliAsal">
                    <el-autocomplete
                        class="inline-input w-100"
                        v-model="ruleForm.domisiliAsal"
                        :fetch-suggestions="querySearch"
                        placeholder="Isi Dengan Nama Kecamatan"
                        :trigger-on-focus="false"
                        @select="handleSelectAsal">
                    </el-autocomplete>
                </el-form-item>
                <div class="row">
                    <div class="col-md-6">
                        <el-form-item label="Kode Pos Asal" prop="kodePosAsal">
                            <el-input v-model="ruleForm.kodePosAsal"></el-input>
                        </el-form-item>
                    </div>
                </div>
                <el-form-item label="Alamat Tinggal" prop="alamatTinggal">
                    <el-input placeholder="Isi Alamat di Bawah Tingkat Kecamatan" type="textarea" v-model="ruleForm.alamatTinggal"></el-input>
                </el-form-item>
                <el-form-item label="Domisili Tinggal" prop="domisiliTinggal">
                    <el-autocomplete
                        class="inline-input w-100"
                        v-model="ruleForm.domisiliTinggal"
                        :fetch-suggestions="querySearch"
                        placeholder="Isi Dengan Nama Kecamatan"
                        :trigger-on-focus="false"
                        @select="handleSelectTinggal">
                    </el-autocomplete>
                </el-form-item>
                <div class="row">
                    <div class="col-md-6">
                        <el-form-item label="Kode Pos Tinggal" prop="kodePosTinggal">
                            <el-input v-model="ruleForm.kodePosTinggal"></el-input>
                        </el-form-item>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <el-form-item label="Nomor Ponsel" prop="nomorHP">
                            <el-input v-model="ruleForm.nomorHP"></el-input>
                        </el-form-item>
                    </div>
                    <div class="col-md-6">
                        <el-form-item label="Nomor Ponsel Alternatif" prop="nomorHPAlt">
                            <el-input v-model="ruleForm.nomorHPAlt"></el-input>
                        </el-form-item>
                    </div>
                </div>
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
                        <el-button type="primary" @click="submitForm()">Next</el-button>
                    </el-form-item>
                </div>
            </div>

        </div>
    </el-form>

</template>

<script setup lang="ts">
    import axios from 'axios'
    import {ref, onMounted, reactive } from 'vue'
    import { useStore } from 'vuex';

    // const store = useStore();
    const ruleFormRef = ref(null);

    var token = ref('');

    const etnicity   = reactive([]);
    const marital    = reactive([]);
    const religion   = reactive([]);

    const ruleForm = reactive({
        name: '',
        email: '',
        etnicity: '',
        marital: '',
        religion: '',
        gelarAwal: '',
        gelarAkhir: '',
        nomorKTP: '',
        nomorNPWP: '',
        nomorSIMA: '',
        nomorSIMB: '',
        nomorSIMC: '',
        tempatLahir: '',
        tanggalLahir: '',
        golonganDarah: '',
        domisiliAsal: '',
        kodeDomisiliAsal: '',
        domisiliTinggal: '',
        kodeDomisiliTinggal: '',
        alamatAsal: '',
        alamatTinggal: '',
        nomorHP: '',
        nomorHPAlt: '',
        kodePosTinggal: '',
        kodePosAsal: '',
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
        nomorKTP: [
            { required: true, message: 'Mohon isi nomor KTP', trigger: ['blur', 'change'] },
            { min: 16, message: 'Nomor KTP harus 16 digit', trigger: ['blur', 'change'] },
            { max: 16, message: 'Nomor KTP harus 16 digit', trigger: ['blur', 'change'] }
        ],
        nomorNPWP: [
            { min: 16, message: 'Nomor NPWP harus 16 digit', trigger: ['blur', 'change'] },
            { max: 16, message: 'Nomor NPWP harus 16 digit', trigger: ['blur', 'change'] }
        ],
        nomorSIMA: [
            { min: 12, message: 'Nomor SIM harus 12 digit', trigger: ['blur', 'change'] },
            { min: 12, message: 'Nomor SIM harus 12 digit', trigger: ['blur', 'change'] }
        ],
        nomorSIMB: [
            { min: 12, message: 'Nomor SIM harus 12 digit', trigger: ['blur', 'change'] },
            { min: 12, message: 'Nomor SIM harus 12 digit', trigger: ['blur', 'change'] }
        ],
        nomorSIMC: [
            { min: 12, message: 'Nomor SIM harus 12 digit', trigger: ['blur', 'change'] },
            { min: 12, message: 'Nomor SIM harus 12 digit', trigger: ['blur', 'change'] }
        ],
        tempatLahir: [
            { required: true, message: 'Mohon isi Tempat Lahir', trigger: 'blur' },
        ],
        tanggalLahir: [
            { required: true, message: 'Mohon isi Tanggal Lahir', trigger: 'blur' },
        ],
        domisiliAsal: [
            { required: true, message: 'Mohon isi Kecamatan', trigger: 'blur' },
        ],
        domisiliTinggal: [
            { required: true, message: 'Mohon isi Kecamatan', trigger: 'blur' },
        ],
        alamatTinggal: [
            { required: true, message: 'Mohon isi Alamat Tinggal', trigger: 'blur' },
        ],
        alamatAsal: [
            { required: true, message: 'Mohon isi Alamat Asal', trigger: 'blur' },
        ],
        nomorHP: [
            { required: true, message: 'Mohon isi nomor HP', trigger: 'blur' },
        ],
        nomorHPAlt: [

        ],
        marital: [
            { required: true, message: 'Mohon pilih Status Pernikahan', trigger: ['blur', 'change'] },
        ],
        golonganDarah: [
            { required: true, message: 'Mohon pilih Golongan Darah', trigger: ['blur', 'change'] },
        ],
        etnicity: [
            { required: false, message: 'Mohon pilih Etnis', trigger: ['blur', 'change'] },
        ],
        religion: [
            { required: true, message: 'Mohon pilih Agama', trigger: ['blur', 'change'] },
        ],
        kodePosTinggal: [
            { required: true, message: 'Mohon isi Kode Pos Tinggal', trigger: ['blur', 'change'] },
        ],
        kodePosAsal: [
            { required: true, message: 'Mohon isi Kode Pos Asal', trigger: ['blur', 'change'] },
        ],
    })

    onMounted(() => {

        var vuex = JSON.parse(localStorage.getItem('vuex'))
        token = vuex.AuthModule.token

        getStatus()

        ruleForm.email = vuex.AuthModule.user.email
        ruleForm.nomorKTP = vuex.AuthModule.user.login
        ruleForm.nomorHP = vuex.AuthModule.user.mobile

    })

    const getStatus = async () => {

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
    }

    const submitForm = async () => {
        ruleFormRef.value?.validate((valid) => {
            if (valid) {
                axios.get('/sanctum/csrf-cookie').then(response => {
                    axios.post('/api/person', {
                        formData: ruleForm
                    },{
                        headers: {'Authorization': 'Bearer ' + token},
                    })
                    .then(response => {
                        console.log(response)
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
            if(payload.length >= 3) {
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
        ruleForm.kodeDomisiliAsal = item.region_id
    };

    const handleSelectTinggal = (item) => {
        ruleForm.kodeDomisiliTinggal = item.region_id
    };

</script>
<!-- <script lang="ts">
  import axios from 'axios'
  import { result } from 'lodash';
  import { defineComponent, ref, onMounted } from 'vue'
  import { useStore } from 'vuex';

  export default {
    data() {
        return {
            token: '',
            options: {
              'etnicity': [],
              'marital': [],
              'religion': [],
            },
            ruleForm: {
                name: '',
                email: '',
                etnicity: '',
                marital: '',
                religion: '',
                gelarAwal: '',
                gelarAkhir: '',
                nomorKTP: '',
                nomorNPWP: '',
                nomorSIMA: '',
                nomorSIMB: '',
                nomorSIMC: '',
                tempatLahir: '',
                tanggalLahir: '',
                golonganDarah: '',
                domisiliAsal: '',
                kodeDomisiliAsal: '',
                domisiliTinggal: '',
                kodeDomisiliTinggal: '',
                alamatTinggal: '',
                nomorHP: '',
                nomorHPAlt: '',
                kodePosTinggal: '',
                kodePosAsal: '',
            },
            rules: {
              name: [
                { required: true, message: 'Mohon isi nama lengkap', trigger: 'blur' },
                { min: 3, message: 'Panjang karakter harus lebih dari 3', trigger: 'blur' }
              ],
              email: [
                { required: true, message: 'Mohon isi email', trigger: 'blur' },
                { type: 'email', message: 'Mohon isi format email yang benar', trigger: ['blur', 'change'] }
              ],
              nomorKTP: [
                { required: true, message: 'Mohon isi nomor KTP', trigger: ['blur', 'change'] },
                { min: 16, message: 'Nomor KTP harus 16 digit', trigger: ['blur', 'change'] },
                { max: 16, message: 'Nomor KTP harus 16 digit', trigger: ['blur', 'change'] }
              ],
              nomorNPWP: [
                { min: 16, message: 'Nomor NPWP harus 16 digit', trigger: ['blur', 'change'] },
                { max: 16, message: 'Nomor NPWP harus 16 digit', trigger: ['blur', 'change'] }
              ],
              nomorSIMA: [
                { min: 12, message: 'Nomor SIM harus 12 digit', trigger: ['blur', 'change'] },
                { min: 12, message: 'Nomor SIM harus 12 digit', trigger: ['blur', 'change'] }
              ],
              nomorSIMB: [
                { min: 12, message: 'Nomor SIM harus 12 digit', trigger: ['blur', 'change'] },
                { min: 12, message: 'Nomor SIM harus 12 digit', trigger: ['blur', 'change'] }
              ],
              nomorSIMC: [
                { min: 12, message: 'Nomor SIM harus 12 digit', trigger: ['blur', 'change'] },
                { min: 12, message: 'Nomor SIM harus 12 digit', trigger: ['blur', 'change'] }
              ],
              tempatLahir: [
                { required: true, message: 'Mohon isi Tempat Lahir', trigger: 'blur' },
              ],
              tanggalLahir: [
                { required: true, message: 'Mohon isi Tanggal Lahir', trigger: 'blur' },
              ],
              domisiliAsal: [
                { required: true, message: 'Mohon isi Kecamatan', trigger: 'blur' },
              ],
              domisiliTinggal: [
                { required: true, message: 'Mohon isi Kecamatan', trigger: 'blur' },
              ],
              alamatTinggal: [
                { required: true, message: 'Mohon isi Alamat Tinggal', trigger: 'blur' },
              ],
              alamatAsal: [
                { required: true, message: 'Mohon isi Alamat Asal', trigger: 'blur' },
              ],
              nomorHP: [
                { required: true, message: 'Mohon isi nomor HP', trigger: 'blur' },
              ],
              nomorHPAlt: [

              ],
              marital: [
                { required: true, message: 'Mohon pilih Status Pernikahan', trigger: ['blur', 'change'] },
              ],
              golonganDarah: [
                { required: true, message: 'Mohon pilih Golongan Darah', trigger: ['blur', 'change'] },
              ],
              etnicity: [
                { required: false, message: 'Mohon pilih Etnis', trigger: ['blur', 'change'] },
              ],
              religion: [
                { required: true, message: 'Mohon pilih Agama', trigger: ['blur', 'change'] },
              ],
              kodePosTinggal: [
                { required: true, message: 'Mohon isi Kode Pos Tinggal', trigger: ['blur', 'change'] },
              ],
              kodePosAsal: [
                { required: true, message: 'Mohon isi Kode Pos Asal', trigger: ['blur', 'change'] },
              ],
            }
      };
    },
    mounted : function() {
        var vuex = JSON.parse(localStorage.getItem('vuex'))
        this.token = vuex.AuthModule.token
        console.log(vuex.AuthModule.user);

        this.ruleForm.email = vuex.AuthModule.user.email
        this.ruleForm.nomorKTP = vuex.AuthModule.user.login
        this.ruleForm.nomorHP = vuex.AuthModule.user.mobile

        this.getStatus()
    },
    methods: {
      async getStatus(){

        await axios.get('/api/status', {
            headers: {'Authorization': 'Bearer '+ this.token},
        })
          .then((response)=> {
            response.data.forEach(element => {
                if(element.status_id.slice(0,3) == 'ETH') {
                    this.options['etnicity'].push({
                        'value': element.status_id,
                        'label': element.name,
                    })
                } else if(element.status_id.slice(0,3) == 'REL') {
                    this.options['religion'].push({
                        'value': element.status_id,
                        'label': element.name,
                    })
                }
                if(element.status_id.slice(0,3) == 'MAR') {
                    this.options['marital'].push({
                        'value': element.status_id,
                        'label': element.name,
                    })
                }
            });
          })
      },
      async submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            if (valid) {
                axios.post('/api/person', {
                        formData: this.ruleForm
                    },{
                        headers: {'Authorization': 'Bearer ' + this.token},
                    })
                    .then(response => {
                        console.log(response)
                        // if (response.data.success) {
                        //     router.push({ name: 'dashboard', query: { redirect: '/dashboard' } });
                        // } else {
                        //     alert("gagal")
                        // }
                    })
            } else {
                console.log('error submit!!');
                return false;
            }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

    //   async searchRegion() {

    //     var payload = this.ruleForm.alamat
    //     if(payload.length >= 3) {
    //         await axios.get('/api/region/search/' + payload, {
    //             headers: {'Authorization': 'Bearer '+ this.token},
    //         })
    //         .then(response => {
    //             console.log(response)
    //         })
    //     }

    //   }
    },
    setup() {
        const store = useStore();
        const restaurants = ref([]);
        const token = store.getters.getToken
        var results = [];

        const querySearch = async (queryString, cb) => {
                var payload = queryString
                    if(payload.length >= 3) {
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
                this.ruleForm.kodeDomisiliAsal = item.region_id
            };

            const handleSelectTinggal = (item) => {
                this.ruleForm.kodeDomisiliTinggal = item.region_id
            };

        return {
            restaurants,
            querySearch,
            createFilter,
            handleSelectTinggal,
            handleSelectAsal,
        };
    },

  }
</script> -->
