<template>

  <div class="bg-light pb-5">
    <b-container id="app" class="pt-5 mt-5 min-vh-100">
        <d-stepper :steps="steps" :initial-state="{ name: 'Carlos', users: [] }">
            <template #fatal-error="{ errorMsg }">{{ errorMsg }}</template>
        </d-stepper>
    </b-container>
  </div>

</template>

<script>
import DStepper from "./component/DStepper.vue";
import DataDiri1 from "./DataDiri1.vue";
import DataDiri2 from "./DataDiri2.vue";
import DataDiri3 from "./DataDiri3.vue";

export default {
  name: "App",
  components: {
    DStepper
  },
  data() {
    return {
      steps: [
        {
          name: "Data Diri",
          desc:
            "Isi Dengan Data Diri Anda yang, Pastikan Data yang dimasukan sesuai",
          icon: "person",
          disabled: false,
          active: true,
          component: DataDiri1
        },
        {
          name: "Keluarga",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          disabled: false,
          active: false,
          component: DataDiri2
        },
        {
          name: "Pendidikan",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          icon: "fas fa-check",
          disabled: false,
          active: false,
          component: DataDiri3,
        },
        {
          name: "Berkas",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          icon: "fas fa-check",
          disabled: false,
          active: false,
          component: DataDiri3,
          confirm: "Kirim"
        }
      ]
    };
  }
};
</script>

<style>
</style>
