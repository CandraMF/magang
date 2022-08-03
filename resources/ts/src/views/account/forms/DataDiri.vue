<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm">
      <el-form-item label="Nama Lengkap" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item prop="email" label="Email" >
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
        <el-input v-model="ruleForm.golonganDarah"></el-input>
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
      <el-form-item label="Alamat" prop="alamat">
        <el-input type="textarea" v-model="ruleForm.alamat"></el-input>
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
          <el-button @click="resetForm('ruleForm')">Reset</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">Next</el-button>
      </el-form-item>
    </el-form>

</template>
<script>
    import axios from 'axios'
  export default {
    data() {
        return {

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
                nomorSIM: '',
                tempatLahir: '',
                tanggalLahir: '',
                golonganDarah: '',
                alamat: '',
                nomorHP: '',
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
              nomorSIM: [
                { min: 12, message: 'Nomor SIM harus 12 digit', trigger: ['blur', 'change'] },
                { min: 12, message: 'Nomor SIM harus 12 digit', trigger: ['blur', 'change'] }
              ],
              tempatLahir: [
                { required: true, message: 'Mohon isi Tempat Lahir', trigger: 'blur' },
              ],
              tanggalLahir: [
                { required: true, message: 'Mohon isi Tanggal Lahir', trigger: 'blur' },
              ],
              alamat: [
                { required: true, message: 'Mohon isi Alamat Lengkap', trigger: 'blur' },
              ],
              nomorHP: [
                { required: true, message: 'Mohon isi nomor HP', trigger: 'blur' },
              ],
              marital: [
                { required: true, message: 'Mohon isi pilih Status Pernikahan', trigger: ['blur', 'change'] },
              ],
              etnicity: [
                { required: true, message: 'Mohon isi pilih Etnis', trigger: ['blur', 'change'] },
              ],
              religion: [
                { required: true, message: 'Mohon isi pilih Agama', trigger: ['blur', 'change'] },
              ],
            }
      };
    },
    mounted : function() {
      this.getStatus()
    },
    methods: {
      async getStatus(){
        await axios.get('/api/status')
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
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.nextStepAction()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
