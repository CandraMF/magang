<template>
    <div>
        <div class="card outline-dashed outline mt-5 card-custom mb-5 shadow-none">
            <div :class="{'overlay overlay-block rounded' : loading}">
                <!--begin::Body-->
                <div class="card-header ">
                    <div class="card-title">
                        <router-link to="/admin/rekrutmen/form" >
                            <el-button :loading="loading" type="primary" icon="el-icon-plus text-white">Tambah Rekrutmen</el-button>
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
                            row-key="recruitment_id"
                            style="width: 100%">

                            <el-table-column >
                                <template #header>
                                    <ul class="nav nav-pills nav-pills-sm nav-light">
                                        <li class="nav-item">
                                            <a class="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2" :class="{ 'active': filter == 'All' }" @click="changeFilter('All')">Semua</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2" :class="{ 'active': filter == 'REC001' }" @click="changeFilter('REC001')">Konsep</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2" :class="{ 'active': filter == 'REC101' }" @click="changeFilter('REC101')">Rilis</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2" :class="{ 'active': filter == 'REC201' }" @click="changeFilter('REC201')">Hold</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder" :class="{ 'active': filter == 'REC102' }" @click="changeFilter('REC102')">Selesai</a>
                                        </li>
                                    </ul>
                                </template>
                                <template #default="scope">
                                    <div class="card bg-light">
                                        <div class="card-header ">
                                            <div class="card-title ">
                                                <div class="col-md-12 py-3">

                                                    <span>{{ scope.row.position }}</span><br>
                                                    <span class="fw-normal fs-5" >{{ scope.row.department }}</span>

                                                    <div class="mt-3">
                                                        <span class="badge badge-dark me-3">{{ scope.row.user.name }}</span>
                                                        <span class="badge badge-light-primary me-3">open : {{ scope.row.open_date }}</span>
                                                        <!-- <span class="badge badge-light-danger">{{ scope.row.close_date }}</span> -->
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="card-toolbar d-flex justify-content-end">
                                                <button
                                                    type="button"
                                                    class="btn btn-sm btn-icon btn-light-facebook"
                                                    data-kt-menu-trigger="click"
                                                    data-kt-menu-overflow="true"
                                                    data-kt-menu-placement="bottom-end">
                                                    <span class="svg-icon svg-icon-2">
                                                        <inline-svg
                                                            src="/media/icons/duotune/general/gen008.svg"
                                                        />
                                                    </span>
                                                </button>
                                                <Dropdown3></Dropdown3>

                                                <select
                                                    class="form-select form-select-solid bg-white form-select-sm"
                                                    aria-label="Select example" @change="statusChange(scope.row.recruitment_id)">
                                                    <option :selected="scope.row.status_id == 'REC001'" value="REC001">Konsep</option>
                                                    <option :selected="scope.row.status_id == 'REC101'" value="REC101">Rilis</option>
                                                    <option :selected="scope.row.status_id == 'REC201'" value="REC201">Hold</option>
                                                    <option :selected="scope.row.status_id == 'REC102'" value="REC102">Selesai</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
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

<style>

    .el-table--enable-row-hover .el-table__body tr:hover > td {
        background-color: unset;
    }


    .el-table__row:nth-child(2n - 1) {
        background: white;
    }
</style>

<script setup lang="ts">
    import axios from 'axios';
    import { reactive, onMounted, ref, getCurrentInstance } from 'vue';
    import { useStore } from 'vuex';

    import Modal from '@/components/Modal.vue';
    import PosisiForm from './forms/PosisiForm.vue';

    import { setCurrentPageBreadcrumbs } from '@/core/helpers/breadcrumb';
    import router from '@/router';
    import Dropdown3 from '@/components/dropdown/Dropdown3.vue';
import { stat } from 'fs';

    const app = getCurrentInstance()
    const store = useStore();
    var token = ref('');

    let globalProperties;

    const list = ref([]);
    const personId = ref('');
    const search = ref('');
    const loading = ref(true)
    const formData = ref<any>(null);

    const filter = ref('All');

    const modalTitle = ref('Tambah Rekrutmen');
    let myModal = ref(null);

    let myForm = ref(null);

    let myTable = ref(null);

    const disabled = ref(false);
    const currentPage = ref(1);
    const pageSize = ref(10);
    const total = ref(0);

    onMounted(() => {
        setCurrentPageBreadcrumbs("Data Rekrutmen", ["Rekrutmen"]);

        token = store.getters.getToken
        personId.value = store.getters.getUser.person_id

        globalProperties = app.appContext.config.globalProperties

        getData(pageSize.value, currentPage.value, "All")

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
        getData(pageSize.value, currentPage.value, filter.value)
    }

    const handleSuccess = (payload) => {
        myModal.value.hide();
    }

    const handleSizeChange = (val) => {
        getData(val, currentPage.value, filter.value)
    }

    const handleCurrentChange = (val) => {
        getData(pageSize.value, val, filter.value)
    }

    const performDelete = (id) => {
        globalProperties.$confirm('Aksi ini akan menghapus data secara permanen. Lanjut?', 'Perhatian', {
            confirmButtonText: 'Ya',
            cancelButtonText: 'Batal',
            type: 'warning'
        }).then(async() => {
            await axios.get('/sanctum/csrf-cookie').then(async (response) => {
                await axios.delete('/api/recruitment/'+id, {
                    headers: {'Authorization': 'Bearer '+ token},
                })
                .then((response)=> {
                    if (response.data.success) {
                        globalProperties.$message({
                            type: 'success',
                            message: 'Berhasil Menghapus Data'
                        });
                        getData(pageSize.value, currentPage.value, filter.value)
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
        router.push({name: 'admin-rekrutmen-form', params: {data: data}})
    }

    const statusChange = async (id) => {
        loading.value = true
        var status = (event.target as HTMLInputElement).value

        await axios.get('/sanctum/csrf-cookie').then(async (response) => {
                await axios.put('/api/recruitment/changeStatus/'+id, {
                    status_id: status
                },{
                    headers: {'Authorization': 'Bearer '+ token},
                })
                .then((response)=> {
                    if (response.data.success) {
                        globalProperties.$message({
                            type: 'success',
                            message: 'Berhasil Mengubah Data'
                        });
                        getData(pageSize.value, currentPage.value, filter.value)
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

    const changeFilter = (payload) => {
        filter.value = payload
        getData(pageSize.value, currentPage.value, filter.value)
    }

    const getData = async (perPage: Number | null, page: Number | null, status: String | null) => {
        loading.value = true;

        await axios.get('/sanctum/csrf-cookie').then(async (response) => {
            await axios.get('/api/recruitment?perPage='+perPage+'&page='+page+'&status='+status, {
                headers: {'Authorization': 'Bearer '+ token},
            })
            .then((response)=> {
                console.log(response)

                list.value = [];

                total.value = response.data.recruitment.total

                response.data.recruitment.data.forEach(element => {
                    list.value.push(element)
                })

                myTable.value.doLayout();

                loading.value = false;
            })
        })
    }

</script>
