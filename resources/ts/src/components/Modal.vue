<script setup lang="ts">
    import { onMounted, ref } from "vue";
    import { Modal } from "bootstrap";

    defineProps({
        title: {
            type: String,
        },
        size: String
    });

    const emit = defineEmits(['hide'])

    let modalEle = ref(null);
    let thisModalObj = null;
    let modalDiv

    onMounted(() => {
        thisModalObj = new Modal(modalEle.value);

        modalDiv = document.getElementById('exampleModal')

        modalDiv.addEventListener('hide.bs.modal', ((event: CustomEvent) => {
            emit('hide', true)
        }) as EventListener);

    });

    function _show() {
        thisModalObj.show();
    }

    function _hide() {
        thisModalObj.hide();
    }

    defineExpose({ show: _show, hide: _hide });
</script>

<script>

</script>

<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby=""
    aria-hidden="true" ref="modalEle">
    <div class="modal-dialog" :class="'modal-'+size">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot name="body" />
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
