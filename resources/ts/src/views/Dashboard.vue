<template>
  <!--begin::Row-->
  <div class="row g-xl-8">
    <!--begin:::Col-->
    <div class="col-xxl-5">
        <Activation v-if="!active" class="mb-5"></Activation>
      <KTSliderWidget1 widget-classes="mb-5 mb-xl-8"></KTSliderWidget1>

    </div>
    <!--end:::Col-->

  </div>
  <!--end::Row-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import axios from 'axios'
import KTSliderWidget1 from "@/components/widgets/sliders/Widget1.vue";
import Activation from "@/components/notice/Activation.vue";

export default defineComponent({
  name: "dashboard",
  components: {
    KTSliderWidget1,
    Activation,
  },
  data(){
    return {
        active: false
    }
  },
  mounted() {
    setCurrentPageBreadcrumbs("Dashboard", ["Dashboards"]);
    if (localStorage.getItem('userInfo') != 'null') {
        this.active = true
    }
  }
});
</script>
