<template>
    <div>
        <div class="card outline-dashed outline mt-5 card-custom mb-5 shadow-none">
            <div :class="{'overlay overlay-block rounded' : loading}">
                <!--begin::Body-->
                <div class="card-header">
                    <div class="card-title">
                        <h3>User</h3>
                    </div>
                    <div class="card-toolbar">
                        <el-button :loading="loading" type="primary" icon="el-icon-plus text-white" @click="showModal()">Tambah User</el-button>
                    </div>
                </div>
                <div class="card-body pt-2 px-6 overlay-wrapper">
                    <div>
                        <el-table
                            :data="list"
                            :default-sort="{ prop: 'user_id', order: 'ascending' }"
                            style="width: 100%">

                            <el-table-column type="index" :index="indexMethod"/>
                            <el-table-column sortable label="Username" prop="login" />
                            <el-table-column sortable label="Role" prop="role_id" width="0">
                                <template #default="scope">
                                    <span class="badge badge-primary" v-if="scope.row.role_id == 'ROL001'">Peserta</span>
                                    <span class="badge badge-success" v-if="scope.row.role_id == 'ROL101'">Administrator</span>
                                    <span class="badge badge-info" v-if="scope.row.role_id == 'ROL102'">SDM</span>
                                </template>
                            </el-table-column>
                            <el-table-column sortable label="Email" prop="email" />
                            <el-table-column sortable label="Nama" prop="name" />
                            <el-table-column label="No. Ponsel" prop="mobile" />
                            <el-table-column align="right">
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

    const app = getCurrentInstance()
    const store = useStore();
    var token = ref('');

    let globalProperties;

    const list = ref([]);
    const personId = ref('');
    const search = ref('');
    const loading = ref(true)
    const formData = ref<any>(null);

    const modalTitle = ref('Tambah User');
    let myModal = ref(null);

    let myForm = ref(null);

    const disabled = ref(false);
    const currentPage = ref(1);
    const pageSize = ref(10);
    const total = ref(0);

    onMounted(() => {
        token = store.getters.getToken
        personId.value = store.getters.getUser.person_id

        globalProperties = app.appContext.config.globalProperties

        getUser(pageSize.value, currentPage.value)
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
        getUser(pageSize.value, currentPage.value)
    }

    const handleSuccess = (payload) => {
        myModal.value.hide();
    }

    const handleSizeChange = (val) => {
        getUser(val, currentPage.value)
    }

    const handleCurrentChange = (val) => {
        getUser(pageSize.value, val)
    }

    const perfomDelete = (id) => {
        globalProperties.$confirm('Aksi ini akan menghapus data secara permanen. Lanjut?', 'Perhatian', {
            confirmButtonText: 'Ya',
            cancelButtonText: 'Batal',
            type: 'warning'
        }).then(async() => {
            await axios.get('/sanctum/csrf-cookie').then(async (response) => {
                await axios.delete('/api/user/'+id, {
                    headers: {'Authorization': 'Bearer '+ token},
                })
                .then((response)=> {
                    if (response.data.success) {
                        globalProperties.$message({
                            type: 'success',
                            message: 'Berhasil Menghapus Data'
                        });
                        getUser(pageSize.value, currentPage.value)
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

    const getUser = async (perPage: Number | null, page: Number | null) => {
        loading.value = true;

        await axios.get('/sanctum/csrf-cookie').then(async (response) => {
            await axios.get('/api/user?perPage='+perPage+'&page='+page, {
                headers: {'Authorization': 'Bearer '+ token},
            })
            .then((response)=> {
                list.value = [];

                total.value = response.data.user.total

                response.data.user.data.forEach(element => {
                    list.value.push(element)
                })

                loading.value = false;
            })
        })
    }

</script>
