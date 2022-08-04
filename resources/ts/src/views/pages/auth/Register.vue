<template>

    <div class="row d-flex justify-content-center p-0 m-0">
        <div class="col-md-6 mt-10">
            <el-card class="p-10">
                <h2 class="mb-5 text-center">Register</h2>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="top" status-icon>
                    <el-form-item prop="nik" label="Nomor Induk Kependudukan">
                        <el-input
                            v-model="ruleForm.nik"
                            maxlength="16"
                            show-word-limit
                        ></el-input>
                    </el-form-item>
                    <el-form-item prop="email" label="Email">
                        <el-input v-model="ruleForm.email"></el-input>
                    </el-form-item>
                    <el-form-item prop="nomorHP" label="Nomor HP">
                        <el-input v-model="ruleForm.nomorHP"></el-input>
                    </el-form-item>
                    <el-form-item prop="password" label="Password" >
                        <el-input v-model="ruleForm.password" show-password></el-input>
                    </el-form-item>
                    <el-form-item prop="confirmPassword" label="Confirm Password" >
                        <el-input v-model="ruleForm.confirmPassword" show-password autocomplete="off"></el-input>
                    </el-form-item>
                    <div class="w-100 text-end">Sudah Punya Akun? <router-link to="login">Login</router-link></div>
                    <div class="my-5 text-center">
                        <button type="button" @click="submitForm('ruleForm')" class="btn btn-primary w-100">Register</button>
                        <div class="separator my-5"></div>
                        <a href="#" class="btn btn-danger">
                            <i class="bi bi-google me-2"></i> Google
                        </a>
                    </div>
                </el-form>
            </el-card>
        </div>
    </div>

</template>
<script>
    import axios from 'axios'
    // import { regex } from "vee-validate/dist/rules";

  export default {
    data() {
        return {
            ruleForm: {
                email: '',
                password: '',
                confirmPassword: '',
                nomorHP: '',
                nik: '',
            },
            rules: {
              nik: [
                { required: true, message: 'Mohon isi NIK', trigger: 'blur' },
                { min: 16, message: 'NIK Harus 16 Digit', trigger: 'blur' },
              ],
              confirmPassword: [
                { required: true, message: 'Mohon isi Konfirmasi Password', trigger: ['blur', 'change'] },
              ],
            //   password: [
            //     { validator: validatePass2, trigger: ['blur', 'change'] },
            //   ],
              nomorHP: [
                { required: true, message: 'Mohon isi Nomor HP', trigger: ['blur', 'change'] },
                // { regex: /^[2-9]\d{2}[2-9]\d{2}\d{4}$/ },
              ],
              email: [
                { required: true, message: 'Mohon isi email', trigger: ['blur', 'change'] },
                { type: 'email', message: 'Mohon isi format email yang benar', trigger: ['blur', 'change'] }
              ],
            }
      };
    },
    methods: {
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
