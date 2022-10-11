
<template>
    <div>
        <div class="card outline-dashed outline mt-5 card-custom mb-5 shadow-none">
            <div :class="{'overlay overlay-block rounded' : loading}">
                <!--begin::Body-->
                <div class="card-header">
                    <div class="card-title">

                        <el-button @click="router.go(-1)" :loading="loading" type="primary" icon="el-icon-back text-white" circle></el-button>

                    </div>
                    <div class="card-toolbar">
                        <ul class="nav nav-pills nav-pills-sm nav-light">
                            <li class="nav-item">
                                <router-link class="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2" :class="{'active' : $route.name == 'admin-rekrutmen-form'}" to="/admin/rekrutmen/form" >Rekrutmen</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2" :class="{'active' : $route.name == 'admin-jadwalrekrutmen'}" to="/admin/jadwalrekrutmen">Jadwal</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card-body pt-2 px-6 overlay-wrapper">
                    <!--begin::Body-->
                    <div class="card-header ">
                        <div class="card-title">
                            <router-link to="/admin/jadwalrekrutmen/form" >
                                <el-button :loading="loading" type="primary" icon="el-icon-plus text-white">Tambah Jadwal</el-button>
                            </router-link>
                        </div>
                        <div class="card-toolbar">
                            <el-input v-model="search" size="small" placeholder="Type to search" />
                        </div>
                    </div>
                    <div class="card-body pt-2 px-6 overlay-wrapper">
                        <div>
                            <div class="timeline-label mt-10">
                                <div class="timeline-item"
                                    v-for="item in list"
                                        :key="item.id">
                                    <div class="timeline-label fw-bolder text-gray-800 fs-6">
                                        {{ moment(item.start_date).format("hh:mm") }}
                                    </div>

                                    <div class="timeline-badge">
                                        <i class="fa fa-genderless text-grey fs-1" v-if="item.status_id == 'SCH001'"></i>
                                        <i class="fa fa-genderless text-primary fs-1" v-if="item.status_id == 'SCH101'"></i>
                                        <i class="fa fa-genderless text-success fs-1" v-if="item.status_id == 'SCH102'"></i>
                                        <i class="fa fa-genderless text-danger fs-1" v-if="item.status_id == 'SCH103'"></i>
                                    </div>

                                    <div class="fw-mormal timeline-content ps-3 d-flex justify-content-between">
                                        <div>
                                            <span class="text-muted">{{ moment(item.start_date).format("DD MMMM Y") }}</span> <br>
                                            <span class="">{{ item.action }}</span>
                                            <div>
                                                <span class="badge badge-light-dark" v-if="item.status_id == 'SCH001'"></span>
                                                <span class="badge badge-light-primary" v-if="item.status_id == 'SCH101'">Dibuka</span>
                                                <span class="badge badge-light-success" v-if="item.status_id == 'SCH102'">Ditutup</span>
                                                <span class="badge badge-light-danger" v-if="item.status_id == 'SCH103'">Dibatalkan</span>
                                            </div>
                                        </div>
                                        <div>
                                            <el-button-group :loading="loading">
                                                <el-button type="warning" size="small" icon="el-icon-edit text-white" @click="performEdit(item)"></el-button>
                                                <el-button type="danger" size="small" icon="el-icon-delete text-white" @click="performDelete(item.id)"></el-button>
                                            </el-button-group>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 w-100 mt-10" >
                                <div class="text-end">
                                    <el-button :loading="loading" type="primary" @click="router.push('/admin/rekrutmen')">Selesai</el-button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="overlay-layer rounded bg-dark bg-opacity-0" v-if="loading">
                    <div class="spinner-border text-p`rimary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
            <!--end::Body-->
        </div>

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
    import moment from 'moment';

    import { reactive, onMounted, ref, getCurrentInstance, defineProps } from 'vue';
    import { useStore } from 'vuex';


    import { setCurrentPageBreadcrumbs } from '@/core/helpers/breadcrumb';
    import router from '@/router';
    import { Mutations } from '@/store/enums/StoreEnums';

    const app = getCurrentInstance()
    const store = useStore();
    var token = ref('');

    let globalProperties;

    const list = ref([]);
    const personId = ref('');
    const search = ref('');
    const loading = ref(true)

    let myModal = ref(null);

    let myForm = ref(null);

    let myTable = ref(null);

    const currentPage = ref(1);
    const pageSize = ref(10);

    const props = defineProps({
        recruitment_id : String
    })

    onMounted(() => {
        setCurrentPageBreadcrumbs("Jadwal Rekrutmen", ["Jadwal Rekrutmen"]);

        token = store.getters.getToken
        personId.value = store.getters.getUser.person_id

        globalProperties = app.appContext.config.globalProperties

        getData(pageSize.value, currentPage.value, store.getters.recruitment.recruitment_id)

        store.commit(Mutations.SET_RECRUITMENT_SCHEDULE, {})
    })

    const performDelete = (id) => {
        globalProperties.$confirm('Aksi ini akan menghapus data secara permanen. Lanjut?', 'Perhatian', {
            confirmButtonText: 'Ya',
            cancelButtonText: 'Batal',
            type: 'warning'
        }).then(async() => {
            await axios.get('/sanctum/csrf-cookie').then(async (response) => {
                await axios.delete('/api/recruitmentSchedule/'+id, {
                    headers: {'Authorization': 'Bearer '+ token},
                })
                .then((response)=> {
                    if (response.data.success) {
                        globalProperties.$message({
                            type: 'success',
                            message: 'Berhasil Menghapus Data'
                        });
                        getData(pageSize.value, currentPage.value, store.getters.recruitment.recruitment_id)

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
        // var data = JSON.stringify({...payload})

        console.log({...payload});

        store.commit(Mutations.SET_RECRUITMENT_SCHEDULE, {...payload})
        router.push({name: 'admin-jadwalrekrutmen-form'})
    }

    const getData = async (perPage: Number | null, page: Number | null, recruitment_id: String | undefined) => {
        loading.value = true;

        await axios.get('/sanctum/csrf-cookie').then(async (response) => {
            await axios.get('/api/recruitment/'+recruitment_id+'?perPage='+perPage+'&page='+page, {
                headers: {'Authorization': 'Bearer '+ token},
            })
            .then((response)=> {

                if (response.data.success) {
                    list.value = [];

                    // total.value = response.data.recruitment.schedule.total

                    response.data.recruitment.schedule.forEach(element => {
                        list.value.push(element)
                    })

                }


                loading.value = false;
            })
            .finally(() => {
                loading.value = false;
            })
        })
    }

</script>
