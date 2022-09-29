<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleFormRef" label-position="top" status-icon>
            <el-input
                hidden
                v-model="ruleForm.recruitment_id"
            ></el-input>
            <div class="row ">
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-6">
                            <el-form-item prop="open_date" label="Tanggal Pembukaan">
                                <el-date-picker v-model="ruleForm.open_date" placeholder="Tanggal Pembukaan" class="w-100"></el-date-picker>
                            </el-form-item>
                        </div>
                        <div class="col-md-6">
                            <el-form-item prop="close_date" label="Tanggal Penutupan">
                                <el-date-picker v-model="ruleForm.close_date" placeholder="Tanggal Penutupan" class="w-100"></el-date-picker>
                            </el-form-item>
                        </div>
                    </div>
                    <el-form-item prop="position_id" label="Posisi/Jabatan">
                        <el-select v-model="ruleForm.position_id" filterable placeholder="Select" class="w-100">
                            <el-option
                                v-for="item in position"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item prop="department_id" label="Unit Kerja">
                        <el-select v-model="ruleForm.department_id" filterable placeholder="Select" class="w-100">
                            <el-option
                                v-for="item in department"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-6">
                            <el-form-item prop="letter" label="Nomor Surat">
                                <el-input v-model="ruleForm.letter" placeholder="Nomor Surat" class="w-100"></el-input>
                            </el-form-item>
                        </div>
                        <div class="col-md-6">
                            <el-form-item prop="letter_date" label="Tanggal Surat">
                                <el-date-picker v-model="ruleForm.letter_date" placeholder="Tanggal Surat" class="w-100"></el-date-picker>
                            </el-form-item>
                        </div>
                    </div>
                    <el-form-item prop="status_id" label="Status">
                        <div class="row">
                            <div class="col-md-6">
                                <el-select v-model="ruleForm.status_id" placeholder="Select" class="w-100">
                                    <el-option
                                        v-for="item in status"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
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

        ruleForm.user_id = store.getters.getUser.user_id
    })

    watch(() => ruleForm.department_id, (newValue: String) => {
        var thisdepartment = department.find((obj) => {
            return obj.value === newValue
        })

        ruleForm.department = thisdepartment.label
    })

    watch(() => ruleForm.position_id, (newValue: String) => {
        var thisposition = position.find((obj) => {
            return obj.value === newValue
        })

        ruleForm.position = thisposition.label
    })

    const rules = reactive({
        open_date: [
            { required: true, message: 'Mohon isi Tanggal Pembukaan', trigger: 'blur' },
        ],
        close_date: [
            { required: true, message: 'Mohon isi Tanggal Penutupan', trigger: 'blur' },
        ],
        position_id: [
            { required: true, message: 'Mohon pilih Posisi/Jabatan', trigger: 'blur' },
        ],
        department_id: [
            { required: true, message: 'Mohon pilih Unit Kerja', trigger: 'blur' },
        ],
        status_id: [
            { required: true, message: 'Mohon pilih Status', trigger: 'blur' },
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
            })

            await axios.get('/api/position', {
                    headers: {'Authorization': 'Bearer '+ token},
                })
                .then((response)=> {
                    console.log(response)
                    response.data.position.forEach(element => {
                        position.push({
                            'value': element.position_id,
                            'label': element.name,
                        })
                    });
                })

            await axios.get('/api/department', {
                    headers: {'Authorization': 'Bearer '+ token},
                })
                .then((response)=> {
                    console.log(response)
                    response.data.department.forEach(element => {
                        department.push({
                            'value': element.department_id,
                            'label': element.name,
                        })
                    });
                    emit('finishInit', response.data.message)
                })

            // emit('finishInit', response.data.message)




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
