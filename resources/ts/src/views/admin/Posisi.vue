<template>
    <div>
        <div class="card outline-dashed outline mt-5 card-custom mb-5 shadow-none">
            <div :class="{'overlay overlay-block rounded' : loading}">
                <!--begin::Body-->
                <div class="card-header">
                    <div class="card-title">
                        <router-link to="/admin/posisi/form" >
                            <el-button :loading="loading" type="primary" icon="el-icon-plus text-white">Tambah Posisi</el-button>
                        </router-link>
                    </div>
                    <div class="card-toolbar">
                        <el-input v-model="search" size="small" placeholder="Type to search" />
                    </div>
                </div>
                <div class="card-body pt-2 px-6 overlay-wrapper">
                    <div>
                        <el-table
                            ref="myTable"
                            :data="list"
                            style="width: 100%">

                            <el-table-column type="index" :index="indexMethod"/>
                            <el-table-column sortable label="Nama" prop="name" />
                                <el-table-column sortable label="Status" prop="status_id">
                                    <template #default="scope">
                                        <!-- <el-switch
                                            :loading="loading"
                                            :v-model="scope.row.status_id"
                                            :active-text="scope.row.status_id == 'POS101'? 'Aktif' : 'Tidak Aktif'">
                                        </el-switch> -->
                                        <div
                                            class="form-check form-switch form-check-custom form-check-solid">
                                            <input
                                                class="form-check-input h-25px w-40px"
                                                type="checkbox"
                                                :checked="scope.row.status_id == 'POS101'? true : false "
                                                value=""
                                                v-on:change="statusChange(scope.row)"/>
                                            <label class="form-check-label" for="flexSwitchDisabled">
                                                <p>{{ scope.row.status_id == 'POS101'? 'Aktif' : 'Tidak Aktif' }}</p>
                                            </label>
                                        </div>
                                    </template>
                                </el-table-column>
                            <el-table-column align="right" width="250">
                                <template #header>

                                </template>
                                <template #default="scope">
                                    <el-button-group :loading="loading">
                                        <el-button type="warning" size="small" icon="el-icon-edit text-white" @click="performEdit(scope.row)"></el-button>
                                        <el-button type="danger" size="small" icon="el-icon-delete text-white" @click="performDelete(scope.row.position_id)"></el-button>
                                    </el-button-group>
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-pagination
                            class="mt-5 d-flex justify-content-end"
                            v-model:currentPage="currentPage"
                            v-model:page-size="pageSize"
                            :disabled="disabled"
                            :page-sizes="[10, 50, 100]"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="total"
                            :lazy="true"
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"/>
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

        <!-- <Modal ref="myModal" size="sm" :title="modalTitle" @hide="handleHide">
            <template #body>
                <PosisiForm ref="myForm" @success="handleSuccess" :data="formData"/>
            </template>
            <template #footer>
            </template>
        </Modal> -->
    </div>
</template>

<script setup lang="ts">
    import axios from 'axios';
    import { reactive, onMounted, ref, getCurrentInstance } from 'vue';
    import { useStore } from 'vuex';

    import Modal from '@/components/Modal.vue';
    import PosisiForm from './forms/PosisiForm.vue';

    import { setCurrentPageBreadcrumbs } from '@/core/helpers/breadcrumb';
    import router from '@/router';

    const app = getCurrentInstance()
    const store = useStore();
    var token = ref('');

    let globalProperties;

    const list = ref([]);
    const personId = ref('');
    const search = ref('');
    const loading = ref(true)
    const formData = ref<any>(null);

    const modalTitle = ref('Tambah Posisi');
    let myModal = ref(null);

    let myForm = ref(null);

    let myTable = ref(null);

    const disabled = ref(false);
    const currentPage = ref(1);
    const pageSize = ref(10);
    const total = ref(0);

    onMounted(() => {
        setCurrentPageBreadcrumbs("Data Posisi", ["Posisi"]);

        token = store.getters.getToken
        personId.value = store.getters.getUser.person_id

        globalProperties = app.appContext.config.globalProperties

        getData(pageSize.value, currentPage.value)

    })

    const indexMethod = (index: number) => {
        return index++ + 1
    }

    const beforeChange = (payload) => {
        loading.value = true
    }

    const showModal = () => {
        formData.value = null
        myModal.value.show();
    }

    const handleHide = (payload) => {
        myForm.value.reset();
        getData(pageSize.value, currentPage.value)
    }

    const handleSuccess = (payload) => {
        myModal.value.hide();
    }

    const handleSizeChange = (val) => {
        getData(val, currentPage.value)
    }

    const handleCurrentChange = (val) => {
        getData(pageSize.value, val)
    }

    const performDelete = (id) => {
        globalProperties.$confirm('Aksi ini akan menghapus data secara permanen. Lanjut?', 'Perhatian', {
            confirmButtonText: 'Ya',
            cancelButtonText: 'Batal',
            type: 'warning'
        }).then(async() => {
            await axios.get('/sanctum/csrf-cookie').then(async (response) => {
                await axios.delete('/api/position/'+id, {
                    headers: {'Authorization': 'Bearer '+ token},
                })
                .then((response)=> {
                    if (response.data.success) {
                        globalProperties.$message({
                            type: 'success',
                            message: 'Berhasil Menghapus Data'
                        });
                        getData(pageSize.value, currentPage.value)
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

    const performEdit = (payload) => {
        var data = JSON.stringify({...payload})
        router.push({name: 'admin-posisi-form', params: {data: data}})
    }

    const statusChange = async (payload) => {
        loading.value = true
        await axios.get('/sanctum/csrf-cookie').then(async (response) => {
                await axios.put('/api/position/changeStatus/'+payload.position_id, {

                },{
                    headers: {'Authorization': 'Bearer '+ token},
                })
                .then((response)=> {
                    if (response.data.success) {
                        globalProperties.$message({
                            type: 'success',
                            message: 'Berhasil Mengubah Data Data'
                        });
                        getData(pageSize.value, currentPage.value)
                        loading.value = false
                    } else {
                        globalProperties.$message({
                            type: 'error',
                            message: 'Terjadi Kesalahan Mohon Ulangi Lagi Nanti'
                        });
                        loading.value = false
                    }
                })
            })
    }

    const getData = async (perPage: Number | null, page: Number | null) => {
        loading.value = true;

        await axios.get('/sanctum/csrf-cookie').then(async (response) => {
            await axios.get('/api/position?perPage='+perPage+'&page='+page, {
                headers: {'Authorization': 'Bearer '+ token},
            })
            .then((response)=> {
                list.value = [];

                total.value = response.data.position.total

                response.data.position.data.forEach(element => {
                    list.value.push(element)
                })

                myTable.value.doLayout();
                loading.value = false;
            })
        })
    }

</script>
