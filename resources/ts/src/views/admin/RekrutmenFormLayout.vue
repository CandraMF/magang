<template>
    <div>
        <div class="card outline-dashed outline mt-5 card-custom mb-5 shadow-none">
            <div :class="{'overlay overlay-block rounded' : loading}">
                <!--begin::Body-->
                <div class="card-header">
                    <div class="card-title">
                        <router-link to="/admin/rekrutmen" >
                            <el-button :loading="loading" type="primary" icon="el-icon-back text-white" circle></el-button>
                        </router-link>
                    </div>
                    <div class="card-toolbar">
                        <ul class="nav nav-pills nav-pills-sm nav-light">
                            <li class="nav-item">
                                <router-link class="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2" :class="{'active' : $route.name == 'admin-rekrutmen-form'}" :to="{name: 'admin-rekrutmen-form'}" >Rekrutmen</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2"  :class="{'active' : $route.name == 'admin-jadwalrekrutmen', 'disabled' : Object.keys(store.getters.recruitment).length === 0}" :to="{name: 'admin-jadwalrekrutmen'}" >Jadwal</router-link>
                            </li>
                        </ul>

                    </div>
                </div>
                <div class="card-body pt-2 px-6 overlay-wrapper">
                    <div>
                        <RekrutmenForm ref="myForm" @finish-init="handleFinishInit" @success="handleSuccess" :data="props.data"/>
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

    </div>
</template>

<script setup lang="ts">

    import { reactive, onMounted, ref, getCurrentInstance, defineProps, PropType } from 'vue';
    import { useStore } from 'vuex';

    import RekrutmenForm from './forms/RekrutmenForm.vue';
    import { useRouter } from 'vue-router';
    import { setCurrentPageBreadcrumbs } from '@/core/helpers/breadcrumb';
import { Mutations } from '@/store/enums/StoreEnums';

    type Position = {
        recruitment_id: string,
        name: string,
        status_id: string,
    };

    const props = defineProps({
        data: {
            type: Object as PropType<Position>,
            required: false
        }
    });

    const app = getCurrentInstance()
    const store = useStore();
    const router = useRouter();
    var token = ref('');

    let globalProperties;

    const personId = ref('');
    const loading = ref(true)

    const modalTitle = ref('Tambah Rekrutmen');
    let myModal = ref(null);
    let myForm = ref(null);

    onMounted(() => {
        setCurrentPageBreadcrumbs(modalTitle.value, ["Rekrutmen", "Form"]);

        token = store.getters.getToken
        personId.value = store.getters.getUser.person_id

        globalProperties = app.appContext.config.globalProperties
    })

    const handleSuccess = (payload) => {
        globalProperties.$message({
            type: 'success',
            message: 'Berhasil'
        });

        store.commit(Mutations.SET_RECRUITMENT, payload.recruitment)

        router.push({ name: 'admin-jadwalrekrutmen', query: { redirect: '/admin/jadwalrekrutmen' }});
    }

    const handleFinishInit = (payload) => {
        loading.value = false

        var data = store.getters.recruitment

        if(!(Object.keys(data).length === 0)) {
            myForm.value.initData(data)
        }

        setCurrentPageBreadcrumbs(modalTitle.value, ["Rekrutmen", "Form"]);
    }

</script>
