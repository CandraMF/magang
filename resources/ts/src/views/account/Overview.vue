<template>
    <div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
        <div class="card-header cursor-pointer">

            <div class="card-title m-0">
                <h3 class="fw-bolder m-0">Data Diri</h3>
            </div>

            <router-link to="/profil/data-diri" class="btn btn-primary align-self-center">Edit Profile</router-link>

        </div>

        <div class="card-body p-9">
            <div class="row mb-7">
                <label class="col-lg-4 fw-bold text-muted">Nama Lengkap</label>
                <div class="col-lg-8">
                    <span class="fw-bolder fs-6 text-dark">{{ user.name }}</span>
                </div>
            </div>
            <div class="row mb-7">
                <label class="col-lg-4 fw-bold text-muted">User ID</label>
                <div class="col-lg-8">
                    <span class="fw-bolder fs-6 text-dark">{{ user.login }}</span>
                </div>
            </div>

            <div class="row mb-7">
                <label class="col-lg-4 fw-bold text-muted">
                    Nomor Telepon
                    <i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip"
                        title="Phone number must be active"></i>
                </label>
                <div class="col-lg-8 d-flex align-items-center">
                    <span class="fw-bolder fs-6 me-2">{{ user.mobile }}</span>
                </div>
            </div>

            <div class="row mb-7">

                <label class="col-lg-4 fw-bold text-muted">Alamat Email</label>
                <div class="col-lg-8">
                    <a href="#" class="fw-bold fs-6 text-dark text-hover-primary me-2">{{ user.email }}</a>
                </div>
            </div>

            <div class="
                    notice
                    d-flex
                    bg-light-warning
                    rounded
                    border-warning border border-dashed
                    p-6
                ">
                <span class="svg-icon svg-icon-2tx svg-icon-warning me-4">
                    <inline-svg src="/media/icons/duotune/general/gen044.svg" />
                </span>


                <div class="d-flex flex-stack flex-grow-1">

                    <div class="fw-bold">
                        <h4 class="text-gray-800 fw-bolder">Perhatian!</h4>

                        <div class="fs-6 text-gray-600">
                            Data Akun Anda Belum Lengkap Mohon
                            <a class="fw-bolder" href="#">Lengkapi Detail Akun</a>.
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>

    <!-- <KTChartWidget2 widget-classes="mb-5 mb-xl-10"></KTChartWidget2>

  <KTTableWidget1 widget-classes="mb-5 mb-xl-10"></KTTableWidget1>

  <KTListWidget4 widget-classes="mb-5 mb-xl-10"></KTListWidget4> -->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, onBeforeMount } from "vue";
import KTTableWidget1 from "@/components/widgets/tables/Widget1.vue";
import KTChartWidget2 from "@/components/widgets/lists/Widget2.vue";
import KTListWidget4 from "@/components/widgets/lists/Widget4.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import store from "@/store";

export default defineComponent({
    name: "overview",
    components: {
        KTTableWidget1,
        KTChartWidget2,
        KTListWidget4,
    },
    setup() {
        const user = ref(null)

        onBeforeMount(() => {
            user.value = store.getters.getUser
        })

        onMounted(() => {

            setCurrentPageBreadcrumbs("Overview", ["Account", "Overview"]);
        });

        return {
            user
        }
    },
});
</script>
