<template>
    <div>
        <div class="card outline-dashed outline mt-5 card-custom mb-5 shadow-none">
            <div :class="{'overlay overlay-block rounded' : loading}">
                <!--begin::Body-->
                <div class="card-header">
                    <div class="card-title">

                        <el-button @click="router.go(-1)" :loading="loading" type="primary" icon="el-icon-back text-white" circle></el-button>

                    </div>
                </div>
                <div class="card-body pt-2 px-6 overlay-wrapper">
                    <div>
                        <JadwalRekrutmentForm ref="myForm" @finish-init="handleFinishInit" @success="handleSuccess" :data="props.data"/>
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

    import JadwalRekrutmentForm from './forms/JadwalRekrutmentForm.vue';
    import { useRouter } from 'vue-router';
    import { setCurrentPageBreadcrumbs } from '@/core/helpers/breadcrumb';

    type Position = {
        position_id: string,
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
    const formData = ref<any>(null);

    const modalTitle = ref('Tambah Rekrutmen');
    let myModal = ref(null);

    let myForm = ref(null);

    onMounted(() => {
        setCurrentPageBreadcrumbs(modalTitle.value, ["Jadwal Rekrutmen", "Form"]);

        token = store.getters.getToken
        personId.value = store.getters.getUser.person_id

        globalProperties = app.appContext.config.globalProperties
    })

    const handleSuccess = (payload) => {
        router.push({ name: 'admin-jadwalrekrutmen', query: { redirect: '/admin/jadwalrekrutmen' } });
    }

    const handleFinishInit = (payload) => {
        loading.value = false


        var data = store.getters.recruitmentschedule

        if(!(Object.keys(data).length === 0)) {

            modalTitle.value = "Edit Jadwal"
            myForm.value.initData(data)
        }

        setCurrentPageBreadcrumbs(modalTitle.value, ["Jadwal Rekrutmen", "Form"]);
    }

</script>
