<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleFormRef" label-position="top" status-icon>
            <el-input
                hidden
                v-model="ruleForm.id"
            ></el-input>
            <div class="row">
                <div class="col-md-6">
                    <el-form-item prop="company" label="Nama Perusahaan">
                        <el-input v-model="ruleForm.company"></el-input>
                    </el-form-item>
                    <el-form-item prop="position" label="Posisi / Jabatan">
                        <el-input v-model="ruleForm.position"></el-input>
                    </el-form-item>
                    <el-form-item prop="description" label="Deskripsi">
                        <el-input v-model="ruleForm.description" type="textarea"></el-input>
                    </el-form-item>
                </div>
                <div class="col-md-6">
                    <el-form-item prop="start_period" label="Tanggal Masuk">
                        <el-date-picker v-model="ruleForm.start_period" placeholder="Tanggal Masuk" class="w-100"></el-date-picker>
                    </el-form-item>
                    <el-form-item prop="end_period" label="Tanggal Keluar">
                        <el-date-picker v-model="ruleForm.end_period" placeholder="Tanggal Keluar" class="w-100"></el-date-picker>
                    </el-form-item>
                </div>
                <div class="col-md-12">
                    <div class="d-flex justify-content-end">
                        <el-form-item class="m-0">
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
    import { useRoute } from 'vue-router';

    const store = useStore();

    const token = store.getters.getToken

    const ruleFormRef = ref(null);
    const roles   = reactive([]);

    const isLoading =  ref(false)

    const ruleForm = reactive({
        id: null,
        company: "",
        position: "",
        description: "",
        start_period: "",
        end_period: "",
    })

    const emit = defineEmits(['success']);

    onMounted(() => {
        // getStatus()
    })

    const rules = reactive({
        company : [
            { required: true, message: "Mohon isi Nama Perusahaan", trigger: "blur" },
        ],
        position : [
            { required: true, message: "Mohon isi Posisi", trigger: "blur" },
        ],
        start_period : [
            { required: true, message: "Mohon isi Tanggal Masuk", trigger: "blur" },
        ],
    })

    const submitForm = async () => {
        isLoading.value = false
        ruleFormRef.value.validate((valid) => {
            if (valid) {
                if(ruleForm.id) {
                    axios.get("/sanctum/csrf-cookie").then(response => {
                        axios.put("/api/work/"+ruleForm.id, {
                            formData: {ruleForm},
                            personId: store.getters.getUser.person_id
                        },{
                            headers: {'Authorization': 'Bearer ' + token},
                        })
                        .then((response) =>
                        {
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
                        axios.post("/api/work", {
                            formData: {ruleForm},
                            personId: store.getters.getUser.person_id
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

    // const getStatus = async () => {
    //     await axios.get('/sanctum/csrf-cookie').then(async (response) => {

    //         await axios.get('/api/status/getByType/Hak Akses User', {
    //             headers: {'Authorization': 'Bearer '+ token},
    //         })
    //         .then((response)=> {
    //             response.data.forEach(element => {
    //                 roles.push({
    //                     'value': element.status_id,
    //                     'label': element.name,
    //                 })
    //             });
    //         })
    //     })
    // }

    function resetForm () {
        ruleFormRef.value?.resetFields();
    }

    function _reset() {
        ruleForm.id = null
        ruleFormRef.value?.resetFields();
    }

    function _initData(data){
        ruleForm.id = data.id
        ruleForm.company = data.company
        ruleForm.position = data.position
        ruleForm.description = data.description
        ruleForm.start_period = data.start_period
        ruleForm.end_period = data.end_period
    }

    defineExpose({ reset: _reset, initData: _initData });
</script>
