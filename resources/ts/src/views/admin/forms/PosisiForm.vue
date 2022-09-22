<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleFormRef" label-position="top" status-icon>
            <el-input
                hidden
                v-model="ruleForm.position_id"
            ></el-input>
            <div class="row">
                <div class="col-md-12">
                    <el-form-item prop="name" label="Nama Posisi">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item prop="status_id" label="Status">
                        <el-radio-group v-model="ruleForm.status" class="h-100">
                            <el-radio-button
                                border
                                v-for="item in status"
                                    :label="item.label"
                                    :value="item.value"
                                    @click="ruleForm.status_id = item.value">
                            </el-radio-button>
                        </el-radio-group>
                    </el-form-item>
                    <!-- <p>{{ ruleForm.status + ruleForm.status_id }}</p> -->
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
    const status = reactive([]);

    const isLoading =  ref(false)

    const ruleForm = reactive({
        'position_id' : null,
        'name': '',
        'status': 'Aktif',
        'status_id': 'POS101',
    })

    const emit = defineEmits(['success', 'finishInit']);

    watch(() => ruleForm.status, (newValue: String) => {
        if (newValue == 'Aktif') {
            ruleForm.status_id = 'POS101'
        } else {
            ruleForm.status_id = 'POS001'
        }
    })

    onMounted(() => {
        getStatus()
    })

    const rules = reactive({
        'name': [
            { required: true, message: "Mohon isi Nama", trigger: ["blur", "change"] },
        ],
        'status': [
            { required: true, message: "Mohon pilih Status", trigger: ["blur", "change"] },
        ],
    })

    const submitForm = async () => {
        isLoading.value = false
        ruleFormRef.value.validate((valid) => {
            if (valid) {
                if(ruleForm.position_id) {
                    axios.get("/sanctum/csrf-cookie").then(response => {
                        axios.put("/api/position/"+ruleForm.position_id, {
                            formData: {ruleForm},
                        },{
                            headers: {'Authorization': 'Bearer ' + token},
                        })
                        .then((response) => {
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
                        axios.post("/api/position", {
                            formData: {ruleForm},
                        },{
                            headers: {'Authorization': 'Bearer ' + token},
                        })
                        .then((response) => {
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

            await axios.get('/api/status/getByType/Status Posisi', {
                headers: {'Authorization': 'Bearer '+ token},
            })
            .then((response)=> {
                response.data.forEach(element => {
                    status.push({
                        'value': element.status_id,
                        'label': element.name,
                    })

                });

                status.reverse();
                emit('finishInit', response.data.message)
            })
        })
    }

    function resetForm () {
        ruleFormRef.value?.resetFields();
    }

    function _reset() {
        ruleForm.position_id = null
        ruleFormRef.value?.resetFields();
    }

    function _initData(data){

        console.log(data);

        ruleForm.position_id = data.position_id
        ruleForm.name = data.name
        ruleForm.status = data.status
        ruleForm.status_id = data.status_id
    }

    defineExpose({ reset: _reset, initData: _initData });
</script>
