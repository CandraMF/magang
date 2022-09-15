<template>
    <div>
        <div class="card outline-dashed outline card-custom mb-5 shadow-none">
            <div :class="{'overlay overlay-block rounded' : loading}">
                <!--begin::Body-->
                <div class="card-header">
                    <div class="card-title">
                        <h3>Riwayat Kerja</h3>
                    </div>
                </div>
                <div class="card-body pt-2 px-6 overlay-wrapper">
                    <div>
                        <el-table
                            :data="list"
                            :default-sort="{ prop: 'id', order: 'ascending' }"
                            style="width: 100%">

                            <el-table-column type="index" :index="indexMethod"/>
                            <el-table-column sortable label="Perusahaan" prop="company" />
                            <el-table-column sortable label="Posisi" prop="position"/>
                            <el-table-column sortable label="Deskripsi" prop="description" />
                            <el-table-column align="right" width="150">
                                <template #default="scope">
                                    <el-button-group :loading="loading">
                                        <el-button type="warning" size="small" icon="el-icon-edit text-white" @click="perfomEdit(scope.row)"></el-button>
                                        <el-button type="danger" size="small" icon="el-icon-delete text-white" @click="perfomDelete(scope.row.id)"></el-button>
                                    </el-button-group>
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-button
                            @click="showModal()"
                            :loading="loading"
                            class="mt-4" style="width: 100%">Tambah Riwayat Kerja</el-button>
                    </div>
                </div>

                <div class="overlay-layer rounded bg-dark bg-opacity-0" v-if="loading">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
            <!--end::Body-->
        </div>

        <Modal ref="myModal" size="lg" :title="modalTitle" @hide="handleHide">
            <template #body>
                <KerjaForm ref="myForm" @success="handleSuccess" :data="formData"/>
            </template>
            <template #footer>
            </template>
        </Modal>
    </div>
</template>

<script setup lang="ts">
    import axios from 'axios';
    import { reactive, onMounted, ref, getCurrentInstance } from 'vue';
    import { useStore } from 'vuex';

    import Modal from '@/components/Modal.vue';
    import KerjaForm from '@/views/forms/KerjaForm.vue';

    const app = getCurrentInstance()
    const store = useStore();
    var token = ref('');

    let globalProperties;

    const list = ref([]);
    const personId = ref('');
    const search = ref('');
    const loading = ref(true)
    const formData = ref<any>(null);

    const modalTitle = ref('Tambah Riwayat Kerja');
    let myModal = ref(null);
    let myForm = ref(null);

    const disabled = ref(false);

    onMounted(() => {
        token = store.getters.getToken
        personId.value = store.getters.getUser.person_id

        globalProperties = app.appContext.config.globalProperties

        getData()
    })

    const indexMethod = (index: number) => {
        return index++ + 1
    }

    const showModal = () => {
        formData.value = null
        myModal.value.show();
    }

    const handleHide = (payload) => {
        myForm.value.reset();
        getData()
    }

    const handleSuccess = (payload) => {
        myModal.value.hide();
    }

    const perfomDelete = (id) => {
        globalProperties.$confirm('Aksi ini akan menghapus data secara permanen. Lanjut?', 'Perhatian', {
            confirmButtonText: 'Ya',
            cancelButtonText: 'Batal',
            type: 'warning'
        }).then(async() => {
            await axios.get('/sanctum/csrf-cookie').then(async (response) => {
                await axios.delete('/api/work/'+id, {
                    headers: {'Authorization': 'Bearer '+ token},
                })
                .then((response)=> {
                    if (response.data.success) {
                        globalProperties.$message({
                            type: 'success',
                            message: 'Berhasil Menghapus Data'
                        });
                        getData()
                    } else {
                        globalProperties.$message({
                            type: 'error',
                            message: 'Terjadi Kesalahan Mohon Ulangi Lagi Nanti'
                        });
                    }
                })
            })
        }).catch(() => {

        });
    }

    const perfomEdit = (payload) => {
        myForm.value.reset();
        myForm.value.initData(payload)
        myModal.value.show();
    }

    const getData = async () => {
        loading.value = true;

        await axios.get('/sanctum/csrf-cookie').then(async (response) => {
            await axios.get('/api/work/'+personId.value, {
                headers: {'Authorization': 'Bearer '+ token},
            })
            .then((response)=> {
                list.value = [];

                console.log(response.data.work)

                response.data.work.forEach(element => {
                    list.value.push(element)
                })

                loading.value = false;
            })
        })
    }

</script>
