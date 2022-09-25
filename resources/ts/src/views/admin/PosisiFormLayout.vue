<template>
    <div>
        <div class="card outline-dashed outline mt-5 card-custom mb-5 shadow-none">
            <div :class="{'overlay overlay-block rounded' : loading}">
                <!--begin::Body-->
                <div class="card-header">
                    <div class="card-title">
                        <router-link to="/admin/posisi" >
                            <el-button :loading="loading" type="primary" icon="el-icon-back text-white" circle></el-button>
                        </router-link>
                    </div>
                </div>
                <div class="card-body pt-2 px-6 overlay-wrapper">
                    <div>
                        <PosisiForm ref="myForm" @finish-init="handleFinishInit" @success="handleSuccess" :data="props.data"/>
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

    import PosisiForm from './forms/PosisiForm.vue';
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

    const modalTitle = ref('Tambah Posisi');
    let myModal = ref(null);

    let myForm = ref(null);

    onMounted(() => {
        setCurrentPageBreadcrumbs(modalTitle.value, ["Posisi", "Form"]);

        token = store.getters.getToken
        personId.value = store.getters.getUser.person_id

        globalProperties = app.appContext.config.globalProperties
    })

    const handleSuccess = (payload) => {
        router.push({ name: 'admin-posisi', query: { redirect: '/admin/posisi' } });
    }

    const handleFinishInit = (payload) => {
        loading.value = false
        var data : Object = JSON.parse(props.data)

        if(props.data) {
            modalTitle.value = "Edit Posisi"
            myForm.value.initData(data)
        } else {
            modalTitle.value = "Tambah Posisi"

        }

        setCurrentPageBreadcrumbs(modalTitle.value, ["Posisi", "Form"]);
    }

</script>
