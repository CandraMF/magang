<template>
    <div class="row d-flex justify-content-center m-0 p-0">
        <div class="col-md-6 mt-10">
            <el-card class="p-10 text-center">
                <h2 class="text-center mb-10">Pilih Tujuan Pengiriman Kode Aktifasi : </h2>
                <div class="contact">
                    <router-link to="/aktivasi" class="btn btn-icon btn-warning me-3" style="height: 65px; width: 65px">
                        <i class="bi bi-whatsapp text-white fs-2x"></i>
                    </router-link>
                    <router-link to="/aktivasi" class="btn btn-icon btn-primary me-3" style="height: 65px; width: 65px">
                        <i class="bi bi-envelope text-white fs-2x"></i>
                    </router-link>
                </div>
            </el-card>
        </div>
    </div>
</template>
<script lang="ts">
    import CodeInput from "@/components/CodeInput.vue";
    import { ref } from "vue";

    export default {
        components: {
            CodeInput,
        },
        setup() {
            const completed = ref(false);

            return {
                completed
            }
        }
    }

</script>
