<template>
    <el-form   :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm">
      <el-form-item label="Nama Lengkap" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
    </el-form>
      <!-- <el-form-item prop="email" label="Email" >
          <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="Gelar">
          <el-col :span="11">
              <el-form-item prop="gelarAwal">
                  <el-input v-model="ruleForm.gelarAwal" placeholder="Gelar Awal"></el-input>
              </el-form-item>
          </el-col>
          <el-col :span="11" class="px-2">
              <el-form-item prop="gelarAkhir" >
                  <el-input v-model="ruleForm.gelarAkhir" placeholder="Gelar Akhir"></el-input>
              </el-form-item>
          </el-col>
      </el-form-item>
      <el-form-item label="Nomor KTP" prop="nomorKTP">
          <el-input v-model="ruleForm.nomorKTP"></el-input>
      </el-form-item>
      <el-form-item label="Nomor NPWP" prop="nomorNPWP">
          <el-input v-model="ruleForm.nomorNPWP"></el-input>
      </el-form-item>
      <el-form-item label="Nomor SIM" prop="nomorSIM">
          <el-input v-model="ruleForm.nomorSIM"></el-input>
      </el-form-item>
      <el-form-item label="Tempat, Tanggal Lahir" required class="max-w-100">
          <el-col :span="11">
              <el-form-item prop="tempatLahir">
                  <el-input v-model="ruleForm.tempatLahir" placeholder="Tempat Lahir"></el-input>
              </el-form-item>
          </el-col>
          <el-col :span="11" class="px-2">
              <el-form-item prop="tanggalLahir">
                  <el-date-picker v-model="ruleForm.tanggalLahir" placeholder="Tanggal Lahir"></el-date-picker>
              </el-form-item>
          </el-col>
      </el-form-item>
      <el-form-item label="Golongan Darah" prop="golonganDarah">
        <el-radio-group v-model="ruleForm.golonganDarah">
            <el-radio border label="A" class="mx-0 me-2"></el-radio>
            <el-radio border label="B" class="mx-0 me-2"></el-radio>
            <el-radio border label="O" class="mx-0 me-2"></el-radio>
            <el-radio border label="AB" class="mx-0 me-2"></el-radio>
            </el-radio-group>
      </el-form-item>
      <el-form-item label="Status Pernikahan" prop="marital">
        <el-select v-model="ruleForm.marital" placeholder="Select" class="w-100">
          <el-option
            v-for="item in options['marital']"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Alamat Asal" prop="alamat">
        <el-input type="textarea" v-model="ruleForm.alamat" @input="searchRegion()"></el-input>
        <el-autocomplete
            class="inline-input w-100"
            v-model="ruleForm.alamat"
            :fetch-suggestions="querySearch"
            :trigger-on-focus="false"
            @select="handleSelect">
        </el-autocomplete>
      </el-form-item>
      <el-form-item label="Nomor Ponsel" prop="nomorHP">
        <el-input v-model="ruleForm.nomorHP"></el-input>
      </el-form-item>
      <el-form-item label="Etnis" prop="etnicity">
        <el-select v-model="ruleForm.etnicity" placeholder="Select" class="w-100">
          <el-option
            v-for="item in options['etnicity']"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Agama" prop="religion">
        <el-select v-model="ruleForm.religion" placeholder="Select" class="w-100">
          <el-option
            v-for="item in options['religion']"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
          <el-button @click="resetForm('ruleForm')">Reset</el-button> -->
          <el-button type="primary" @click="submitForm('ruleForm')">Next</el-button>
      <!-- </el-form-item>
    </el-form> -->

</template>
<script lang="ts">
  import axios from 'axios'
  import { defineComponent, ref, onMounted, reactive } from 'vue'
  import { useStore } from 'vuex';

//   export default {
//     data() {
//         return {
//             token: '',
//             options: {
//               'etnicity': [],
//               'marital': [],
//               'religion': [],
//             },
//             ruleForm: {
//                 name: '',
//                 email: '',
//                 etnicity: '',
//                 marital: '',
//                 religion: '',
//                 gelarAwal: '',
//                 gelarAkhir: '',
//                 nomorKTP: '',
//                 nomorNPWP: '',
//                 nomorSIM: '',
//                 tempatLahir: '',
//                 tanggalLahir: '',
//                 golonganDarah: '',
//                 alamat: '',
//                 nomorHP: '',
//             },
//             rules: {
//               name: [
//                 { required: true, message: 'Mohon isi nama lengkap', trigger: 'blur' },
//                 { min: 3, message: 'Panjang karakter harus lebih dari 3', trigger: 'blur' }
//               ],
//               email: [
//                 { required: true, message: 'Mohon isi email', trigger: 'blur' },
//                 { type: 'email', message: 'Mohon isi format email yang benar', trigger: ['blur', 'change'] }
//               ],
//               nomorKTP: [
//                 { required: true, message: 'Mohon isi nomor KTP', trigger: ['blur', 'change'] },
//                 { min: 16, message: 'Nomor KTP harus 16 digit', trigger: ['blur', 'change'] },
//                 { max: 16, message: 'Nomor KTP harus 16 digit', trigger: ['blur', 'change'] }
//               ],
//               nomorNPWP: [
//                 { min: 16, message: 'Nomor NPWP harus 16 digit', trigger: ['blur', 'change'] },
//                 { max: 16, message: 'Nomor NPWP harus 16 digit', trigger: ['blur', 'change'] }
//               ],
//               nomorSIM: [
//                 { min: 12, message: 'Nomor SIM harus 12 digit', trigger: ['blur', 'change'] },
//                 { min: 12, message: 'Nomor SIM harus 12 digit', trigger: ['blur', 'change'] }
//               ],
//               tempatLahir: [
//                 { required: true, message: 'Mohon isi Tempat Lahir', trigger: 'blur' },
//               ],
//               tanggalLahir: [
//                 { required: true, message: 'Mohon isi Tanggal Lahir', trigger: 'blur' },
//               ],
//               alamat: [
//                 { required: true, message: 'Mohon isi Alamat Lengkap', trigger: 'blur' },
//               ],
//               nomorHP: [
//                 { required: true, message: 'Mohon isi nomor HP', trigger: 'blur' },
//               ],
//               marital: [
//                 { required: true, message: 'Mohon isi pilih Status Pernikahan', trigger: ['blur', 'change'] },
//               ],
//               etnicity: [
//                 { required: false, message: 'Mohon isi pilih Etnis', trigger: ['blur', 'change'] },
//               ],
//               religion: [
//                 { required: true, message: 'Mohon isi pilih Agama', trigger: ['blur', 'change'] },
//               ],
//             }
//       };
//     },
//     mounted : function() {
//         var vuex = JSON.parse(localStorage.getItem('vuex'))
//         this.token = vuex.AuthModule.token

//       this.getStatus()
//     },
//     methods: {
//       async getStatus(){

//         await axios.get('/api/status', {
//             headers: {'Authorization': 'Bearer '+ this.token},
//         })
//           .then((response)=> {
//             response.data.forEach(element => {
//                 if(element.status_id.slice(0,3) == 'ETH') {
//                     this.options['etnicity'].push({
//                         'value': element.status_id,
//                         'label': element.name,
//                     })
//                 } else if(element.status_id.slice(0,3) == 'REL') {
//                     this.options['religion'].push({
//                         'value': element.status_id,
//                         'label': element.name,
//                     })
//                 }
//                 if(element.status_id.slice(0,3) == 'MAR') {
//                     this.options['marital'].push({
//                         'value': element.status_id,
//                         'label': element.name,
//                     })
//                 }
//             });
//           })
//       },
//       resetForm(formName) {
//         this.$refs[formName].resetFields();
//       },

//     //   async searchRegion() {

//     //     var payload = this.ruleForm.alamat
//     //     if(payload.length >= 3) {
//     //         await axios.get('/api/region/search/' + payload, {
//     //             headers: {'Authorization': 'Bearer '+ this.token},
//     //         })
//     //         .then(response => {
//     //             console.log(response)
//     //         })
//     //     }

//     //   }
//     },
//     setup() {
//         const store = useStore();
//         const restaurants = ref([]);
//         const token = store.getters.getToken
//         var results = [];

//         const querySearch = async (queryString, cb) => {
//                 var payload = queryString
//                     if(payload.length >= 3) {
//                         await axios.get('/api/region/search/' + payload, {
//                             headers: {'Authorization': 'Bearer '+ token},
//                         })
//                         .then(response => {
//                             results = [];
//                             response.data.forEach(element => {
//                                 results.push(
//                                     {
//                                         "value": element.name,
//                                         "region_id": element.region_id
//                                     },
//                                 )
//                             });
//                         })
//                     }
//                 // call callback function to return suggestions
//                 cb(results);
//             };

//             const createFilter = (queryString) => {
//                 return (restaurant) => {
//                     return (
//                         restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
//                     );
//                 };
//             };


//             const handleSelect = (item) => {
//                 console.log(item);
//             };

//         return {
//             restaurants,
//             querySearch,
//             createFilter,
//             handleSelect,
//         };
//     },

//   }

    export default {
        setup() {
            const store = useStore();
            const ruleForm = reactive({
                name : '',
                email : '',
                etnicity : '',
                marital : '',
                religion : '',
                gelarAwal : '',
                gelarAkhir : '',
                nomorKTP : '',
                nomorNPWP : '',
                nomorSIM : '',
                tempatLahir : '',
                tanggalLahir : '',
                golonganDarah : '',
                alamat : '',
                nomorHP : ''
            })

            const options = {
                'etnicity': [],
                'marital': [],
                'religion': [],
            }

            return {
                ruleForm
            }
        },

    }
</script>
