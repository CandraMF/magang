<template>
  <!-- begin::Scrolltop -->
  <div
    id="kt_scrolltop"
    ref="kt_scrolltop"
    class="scrolltop"
    style="height: 50px; width: 50px;"
    data-kt-scrolltop="true"
  >
    <span class="svg-icon">

      <!-- <inline-svg src="/media/icons/duotune/arrows/arr066.svg" /> -->
      <i class="fas fa-chevron-up text-white fs-2x"></i>
    </span>
  </div>
  <!-- end::Scrolltop -->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { ScrollTopComponent } from "@/assets/ts/components/_ScrollTopComponent";

export default defineComponent({
  name: "KTScrollTop",
  components: {},
  setup() {
    onMounted(() => {
      ScrollTopComponent.reinitialization();
    });
  },
});
</script>
