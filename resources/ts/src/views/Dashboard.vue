<template>
  <!--begin::Row-->
  <div class="row g-xl-8">
    <!--begin:::Col-->
    <div class="col-xxl-5">

      <KTSliderWidget1 widget-classes="mb-5 mb-xl-8"></KTSliderWidget1>

    </div>
    <!--end:::Col-->

  </div>
  <!--end::Row-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

import KTSliderWidget1 from "@/components/widgets/sliders/Widget1.vue";


export default defineComponent({
  name: "dashboard",
  components: {
    KTSliderWidget1,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Dashboard", ["Dashboards"]);
    });
  },
});
</script>
