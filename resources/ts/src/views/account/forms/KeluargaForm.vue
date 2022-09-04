<template>
    <div>
        <div class="card outline-dashed outline mt-5 card-custom mb-5 shadow-none">
            <!--begin::Body-->
            <div class="card-header">
                <div class="card-title">
                    <h3>Data Keluarga</h3>
                </div>
            </div>
            <div class="card-body pt-2 px-0">
                <div>
                    <el-table :data="list" style="width: 100%">
                        <el-table-column label="Jenis" prop="family_type" />
                        <el-table-column label="Nama" prop="name" />
                        <el-table-column label="Tanggal Lahir" prop="birth_date" />
                        <el-table-column label="Nomor Ponsel" prop="mobile" >
                            <template #default="scope">
                                {{ scope.row.mobile }}
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
                        class="mt-4" style="width: 100%" @click="">Tambah Keluarga</el-button>
                </div>
            </div>
            <!--end::Body-->
        </div>
        <div class="modal fade " tabindex="-1" id="modal_1" ref="myModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Tambah Keluarga</h5>
                        <div
                            class="btn btn-icon btn-sm btn-active-light-primary ms-2"
                            data-bs-dismiss="modal"
                            aria-label="Close">
                            <span class="svg-icon svg-icon-2x"></span>
                        </div>
                    </div>
                    <div class="modal-body">
                        <Keluarga></Keluarga>
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
    import Keluarga from './Keluarga.vue';

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

        getFamily()
    })


    const handleModalClose = async () => {
        console.log('close')
    }

    const getFamily = async () => {
        await axios.get('/sanctum/csrf-cookie').then(async (response) => {

            await axios.get('/api/family/showByPerson/'+personId.value, {
                headers: {'Authorization': 'Bearer '+ token},
            })
            .then((response) => {
                response.data.forEach(element => {
                    list.value.push(element)
                })
            })
        })
    }

</script>
