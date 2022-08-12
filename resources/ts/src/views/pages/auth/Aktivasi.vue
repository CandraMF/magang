<template>
    <div class="row d-flex justify-content-center m-0 p-0">
        <div class="col-md-6 mt-10">
            <el-card class="p-10 text-center">
                <h2 class="text-center mb-10">Masukan Kode OTP</h2>
                <code-input
                    @complete="completed = true"
                    :fields="4"
                    :fieldWidth="56"
                    :fieldHeight="56"
                    :required="true"
                />
                <router-link to="/admin" class="btn btn-primary mt-10">
                    Aktivasi
                </router-link>
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
