<template>
    <div>
        <div class="card outline-dashed outline mt-5 card-custom mb-5 shadow-none">
            <!--begin::Body-->
            <div class="card-header">
                <div class="card-title">
                    <h3>Data Pendidikan</h3>
                </div>
            </div>
            <div class="card-body pt-2 px-0">
                <div>
                    <el-table :data="list" style="width: 100%">
                        <el-table-column label="Jenis" prop="education_type" />
                        <!-- <el-table-column label="Tahun Keluar" prop="end_year" /> -->
                        <el-table-column label="Jurusan" prop="major" />
                        <el-table-column label="Sekolah" prop="school" />
                        <el-table-column label="Status" prop="status_id" >
                            <template #default="scope">
                                {{ scope.row.status_id }}
                            </template>
                        </el-table-column>
                        <el-table-column align="right">
                            <template #header>
                                <el-input v-model="search" size="small" placeholder="Type to search" />
                            </template>
                            <template #default="scope">
                                <el-button size="small">Edit</el-button>
                                <el-button size="small" type="danger">Delete</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <el-button
                        data-bs-toggle="modal"
                        data-bs-target="#modal_1"
                        class="mt-4" style="width: 100%" @click="">Tambah Pendidikan</el-button>
                </div>
            </div>
            <!--end::Body-->
        </div>
        <div class="modal fade " tabindex="-1" id="modal_1" ref="myModal">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Tambah Pendidikan</h5>
                        <div
                            class="btn btn-icon btn-sm btn-active-light-primary ms-2"
                            data-bs-dismiss="modal"
                            aria-label="Close">
                            <span class="svg-icon svg-icon-2x"></span>
                        </div>
                    </div>

                    <div class="modal-body">
                        <Pendidikan></Pendidikan>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import axios from 'axios';
    import { reactive, onMounted, ref, getCurrentInstance } from 'vue';
    import { useStore } from 'vuex';
    import Pendidikan from './Pendidikan.vue';

    const list = ref([]);
    const myModal = ref(null);

    var token = ref('');
    const personId = ref('');
    const store = useStore();

    const app = getCurrentInstance()
    let globalProperties;

    onMounted(() => {
        token = store.getters.getToken
        personId.value = store.getters.getUser.person_id

        globalProperties = app.appContext.config.globalProperties

        // globalProperties.$notify.success({
        //     title: 'Success',
        //     message: 'This is a success message',
        //     offset: 100
        // });
        // console.log(myModal.show())

        getEducation()
    })

    const handleModalClose = async () => {
        console.log('close')
    }

    const getEducation = async () => {
        await axios.get('/sanctum/csrf-cookie').then(async (response) => {

            await axios.get('/api/education/showByPerson/'+personId.value, {
                headers: {'Authorization': 'Bearer '+ token},
            })
            .then((response)=> {
                response.data.forEach(element => {
                    list.value.push(element)
                })
            })
        })
    }

</script>
