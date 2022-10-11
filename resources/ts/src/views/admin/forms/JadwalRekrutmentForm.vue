<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleFormRef" label-position="top" status-icon>
            <el-input
                hidden
                v-model="ruleForm.recruitment_id"
            ></el-input>
            <div class="row ">
                <div class="col-md-6">
                    <el-form-item prop="action_id" label="Kegiatan">
                        <el-select v-model="ruleForm.action_id" filterable placeholder="Select" class="w-100">
                            <el-option
                                v-for="item in actions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <div class="col-md-6">
                    <el-form-item prop="start_date" label="Tanggal Kegiatan">
                        <el-date-picker v-model="ruleForm.start_date" placeholder="Tanggal Kegiatan" class="w-100"></el-date-picker>
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

    const actions = reactive([]);

    const ruleForm = reactive({
        'id' : null,
        'recruitment_id' : '',
        'action_id' : '',
        'action' : '',
        'start_date' : '',
        'end_date' : '',
    })

    const emit = defineEmits(['success', 'finishInit']);

    onMounted(() => {
        getStatus()

        ruleForm.recruitment_id = store.getters.recruitment.recruitment_id
    })

    watch(() => ruleForm.action_id, (newValue: String) => {
        var thisaction = actions.find((obj) => {
            return obj.value === newValue
        })

        ruleForm.action = thisaction.label
    })


    const rules = reactive({
        action_id : [
            { required: true, message: 'Mohon isi Tanggal Pembukaan', trigger: 'blur' },
        ],
        action : [
            { required: true, message: 'Mohon isi Tanggal Pembukaan', trigger: 'blur' },
        ],
        start_date : [
            { required: true, message: 'Mohon isi Tanggal Pembukaan', trigger: 'blur' },
        ],
    })


    const submitForm = async () => {
        isLoading.value = false
        // console.log(ruleForm)
        ruleFormRef.value.validate((valid) => {
            if (valid) {
                if(ruleForm.id) {
                    axios.get("/sanctum/csrf-cookie").then(response => {
                        axios.put("/api/recruitmentSchedule/"+ruleForm.id, {
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
                        axios.post("/api/recruitmentSchedule", {
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
            await axios.get('/api/status/getByType/Kegiatan Rekrutmen', {
                headers: {'Authorization': 'Bearer '+ token},
            })
            .then(async (response)=> {
                await response.data.forEach(element => {
                    actions.push({
                        'value': element.status_id,
                        'label': element.name,
                    })
                });
                emit('finishInit', response.data.message)
            })
        })
    }


    function resetForm () {
        ruleFormRef.value?.resetFields();
    }

    function _reset() {
        ruleForm.id = null
        ruleFormRef.value?.resetFields();
    }

    function _initData(data){
        ruleForm.id = data.id
        ruleForm.recruitment_id = data.recruitment_id
        ruleForm.action = data.action
        ruleForm.action_id = data.action_id
        ruleForm.start_date = data.start_date
    }

    defineExpose({ reset: _reset, initData: _initData });
</script>
