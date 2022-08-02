<template>
  <div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
    <div class="card-header cursor-pointer">

      <div class="card-title m-0">
        <h3 class="fw-bolder m-0">Data Diri</h3>
      </div>

      <router-link
        to="/profil/data-diri"
        class="btn btn-primary align-self-center"
        >Edit Profile</router-link
      >

    </div>

    <div class="card-body p-9">
      <div class="row mb-7">
        <label class="col-lg-4 fw-bold text-muted">Nama Lengkap</label>
        <div class="col-lg-8">
          <span class="fw-bolder fs-6 text-dark">Max Smith</span>
        </div>
      </div>
      <div class="row mb-7">
        <label class="col-lg-4 fw-bold text-muted">Nomor KTP</label>
        <div class="col-lg-8">
          <span class="fw-bolder fs-6 text-dark">32170110129382</span>
        </div>
      </div>

      <div class="row mb-7">
        <label class="col-lg-4 fw-bold text-muted">
          Nomor Telepon
          <i
            class="fas fa-exclamation-circle ms-1 fs-7"
            data-bs-toggle="tooltip"
            title="Phone number must be active"
          ></i>
        </label>
        <div class="col-lg-8 d-flex align-items-center">
          <span class="fw-bolder fs-6 me-2">044 3276 454 935</span>
          <span class="badge badge-success">Verified</span>
        </div>
      </div>



      <div class="row mb-7">

        <label class="col-lg-4 fw-bold text-muted">Alamat Email</label>
        <div class="col-lg-8">
          <a href="#" class="fw-bold fs-6 text-dark text-hover-primary me-2"
            >candragain99@gmail.com</a>
          <span class="badge badge-success">Verified</span>
        </div>
      </div>

      <div class="row mb-7">

        <label class="col-lg-4 fw-bold text-muted">Communication</label>



        <div class="col-lg-8">
          <span class="fw-bolder fs-6 text-dark">Email, Phone</span>
        </div>

      </div>



      <div class="row mb-10">

        <label class="col-lg-4 fw-bold text-muted">Allow Changes</label>

        <div class="col-lg-8">
          <span class="fw-bold fs-6">Yes</span>
        </div>

      </div>


      <div
        class="
          notice
          d-flex
          bg-light-warning
          rounded
          border-warning border border-dashed
          p-6
        "
      >
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
import { defineComponent, onMounted } from "vue";
import KTTableWidget1 from "@/components/widgets/tables/Widget1.vue";
import KTChartWidget2 from "@/components/widgets/lists/Widget2.vue";
import KTListWidget4 from "@/components/widgets/lists/Widget4.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "overview",
  components: {
    KTTableWidget1,
    KTChartWidget2,
    KTListWidget4,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Overview", ["Account", "Overview"]);
    });
  },
});
</script>
