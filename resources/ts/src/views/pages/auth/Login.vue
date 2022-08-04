<template>

    <div class="row d-flex justify-content-center m-0 p-0">
        <div class="col-md-6 mt-10">
            <el-card class="p-10">
                <h2 class="text-center">Login</h2>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="top" status-icon>
                    <el-form-item prop="email" label="Email">
                        <el-input v-model="ruleForm.email"></el-input>
                    </el-form-item>
                    <el-form-item prop="password" label="Password" >
                        <el-input v-model="ruleForm.password" show-password></el-input>
                    </el-form-item>
                    <div class="w-100 text-end">Belum Punya Akun? <router-link to="register">Register</router-link></div>
                    <div class="my-5 text-center">
                        <button type="button" @click="submitForm('ruleForm')" class="btn btn-primary w-100">Login</button>
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
  export default {
    data() {
        return {
            ruleForm: {
                email: '',
                password: '',
            },
            rules: {
                password: [
                    { required: true, message: 'Mohon isi password', trigger: ['blur', 'change'] },
                ],
                email: [
                    { required: true, message: 'Mohon isi email', trigger: 'blur' },
                    { type: 'email', message: 'Mohon isi format email yang benar', trigger: ['blur', 'change'] }
                ],
            }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log($refs(formName))
            // this.nextStepAction()
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
