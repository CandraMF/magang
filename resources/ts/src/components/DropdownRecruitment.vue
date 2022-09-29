<template>

    <div
      class="
        menu
        menu-sub
        menu-sub-dropdown
        menu-column
        menu-rounded
        menu-gray-800
        menu-state-bg-light-primary
        fw-bold
        w-200px
        py-3
      "
      data-kt-menu="true"
    >

      <div class="menu-item px-3">
        <div class="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
          Actions
        </div>
      </div>

      <div class="menu-item px-3">
        <a class="menu-link flex-stack px-3" @click="$emit('performEdit', $props.data)">
          Edit

          <i
            class="fas fa-edit ms-2 text-warning fs-7 "
            data-bs-toggle="tooltip"
            title="Specify a target name for future usage and reference"></i>
        </a>
      </div>

      <div class="menu-item px-3">
        <a class="menu-link flex-stack px-3" @click="$emit('performDelete', $props.id)">
          Delete

          <i
            class="fas fa-trash text-danger fs-7"
            data-bs-toggle="tooltip"
            title="Specify a target name for future usage and reference"></i>
        </a>
      </div>


    </div>

  </template>

  <script lang="ts">
  import { MenuComponent } from "@/assets/ts/components";
  import { defineComponent, onMounted } from "vue";

  export default defineComponent({
    name: "dropdown-recruitment",
    components: {},
    props: {
      id: String,
      status: String,
      data: Object
    },
    setup() {
      onMounted(() => {
        // Lazy Initialization
        MenuComponent.reinitialization();

      });
    },
    emits: {
        performEdit(payload) {

        },

        performDelete(payload) {

        }

    }

  });
  </script>
