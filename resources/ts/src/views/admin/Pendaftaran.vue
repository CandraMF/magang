<template>
    <div>
        <div class="card outline-dashed outline mt-5 card-custom mb-5 shadow-none">
            <div :class="{'overlay overlay-block rounded' : loading}">
                <!--begin::Body-->
                <div class="card-header">
                    <div class="card-title">
                        <h3>Pendaftaran</h3>
                    </div>
                    <div class="card-toolbar">
                        <el-button :loading="loading" type="primary" icon="el-icon-plus text-white" @click="showModal()">Tambah Pendaftaran</el-button>
                        <el-button :loading="loading" type="dark" icon="el-icon-menu" @click="showModalPosisi()">Posisi</el-button>
                    </div>
                </div>
                <div class="card-body pt-2 px-6 overlay-wrapper">
                    <div>
                        <el-table
                            :data="list"
                            :default-sort="{ prop: 'department_id', order: 'ascending' }"
                            style="width: 100%">
                            <el-table-column type="index" :index="indexMethod"/>
                            <el-table-column sortable label="Kode" prop="code">
                                <template #default="scope">
                                    <div class="col-md-12">
                                        <div class="row">
                                            <div class="col-md-6">{{ scope.row.position }}</div>
                                            <div class="col-md-6">{{ scope.row.code }}</div>
                                        </div>
                                    </div>
                                </template>
                            </el-table-column>

                            <!-- <el-table-column sortable label="Nama" prop="name" />
                            <el-table-column sortable label="Kepala" prop="head.name" />
                            <el-table-column sortable label="Status" prop="status_id" width="100">
                                <template #default="scope">
                                    <span class="badge badge-primary" v-if="scope.row.status_id == 'DEP101'">Aktif</span>
                                    <span class="badge badge-danger" v-if="scope.row.status_id == 'DEP001'">Tidak Aktif</span>
                                </template>
                            </el-table-column>
                            <el-table-column align="right" width="200">
                                <template #header>
                                    <el-input v-model="search" size="small" placeholder="Type to search" />
                                </template>
                                <template #default="scope">
                                    <el-button-group :loading="loading">
                                        <el-button type="secondary" size="small" icon="el-icon-user"></el-button>
                                        <el-button type="warning" size="small" icon="el-icon-edit text-white" @click="perfomEdit(scope.row)"></el-button>
                                        <el-button type="danger" size="small" icon="el-icon-delete text-white" @click="perfomDelete(scope.row.user_id)"></el-button>
                                    </el-button-group>
                                </template>
                            </el-table-column> -->
                        </el-table>
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

        <Modal ref="myModalPosisi" size="lg" :title="modalTitle" @hide="handleHide">
            <template #body>
                <Posisi ref="myPosisi" @success="handleSuccess" :data="formData"/>
            </template>
            <template #footer>
            </template>
        </Modal>

        <Modal ref="myModal" size="lg" :title="modalTitle" @hide="handleHide">
            <template #body>
                <UserForm ref="myForm" @success="handleSuccess" :data="formData"/>
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
    import UserForm from './forms/UserForm.vue';
    import Posisi from '@/views/admin/Posisi.vue';

    const app = getCurrentInstance()
    const store = useStore();
    var token = ref('');

    let globalProperties;

    const list = ref([]);
    const personId = ref('');
    const search = ref('');
    const loading = ref(true)
    const formData = ref<any>(null);

    const modalTitle = ref('Tambah Departemen');
    let myModal = ref(null);
    let myModalPosisi = ref(null);
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

    const showModalPosisi = () => {
        formData.value = null
        myModalPosisi.value.show();
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
                await axios.delete('/api/department/'+id, {
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
            await axios.get('/api/department', {
                headers: {'Authorization': 'Bearer '+ token},
            })
            .then((response)=> {
                list.value = [];

                console.log(response)

                response.data.department.forEach(element => {
                    list.value.push(element)
                })

                loading.value = false;
            })
        })
    }

</script>
