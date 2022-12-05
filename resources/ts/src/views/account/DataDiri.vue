<template>
    <div>

        <div class="row">

            <div class="col-md-12">

                <el-tabs tab-position="top" v-model="tabActiveName">
                    <el-tab-pane name="Data Diri" label="Data Diri">
                        <div class="card bg-white">
                            <div class="card-header">
                                <div class="card-title">
                                    <h3>Data Diri</h3>
                                </div>
                            </div>
                            <div class="card-body">
                                <data-diri-form></data-diri-form>
                                <!-- <div class="row">
                                    <div class="d-flex justify-content-between ">
                                        <el-button type="primary" @click="backStep()">Kembali</el-button>
                                        <el-button type="primary" @click="nextStepAction()">Lanjut</el-button>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane name="Pendidikan" label="Pendidikan">
                        <pendidikan></pendidikan>
                    </el-tab-pane>
                    <el-tab-pane name="Keluarga" label="Keluarga">
                        <keluarga></keluarga>
                    </el-tab-pane>
                    <el-tab-pane name="Pekerjaan" label="Pekerjaan">
                        <pekerjaan></pekerjaan>
                    </el-tab-pane>
                    <el-tab-pane name="Organisasi" label="Organisasi">
                        <organisasi></organisasi>
                    </el-tab-pane>
                    <el-tab-pane name="Berkas" label="Berkas">
                        <div class="card bg-white">
                            <div class="card-header">
                                <div class="card-title">
                                    <h3>Upload Berkas</h3>
                                </div>
                            </div>
                            <div class="card-body">
                                <berkas></berkas>
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>

                <div class="d-flex justify-content-center mt-10 ">
                    <el-button type="info" plain>
                        <i class="fa fa-chevron-left me-2"></i>
                        Kembali
                    </el-button>
                    <el-button type="primary" plain>
                        Lanjut
                        <i class="fa fa-chevron-right ms-2"></i>
                    </el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

    import { ref, onMounted } from 'vue'
    import Pendidikan from "@/views/account/Pendidikan.vue";
    import Keluarga from "@/views/account/Keluarga.vue";
    import Pekerjaan from "@/views/account/Kerja.vue";
    import Organisasi from "@/views/account/Organisasi.vue";
    import DataDiriForm from "@/views/forms/DataDiriForm.vue";
    import Berkas from "@/views/account/Berkas.vue";

    const tabs = ref([
        "Data Diri",
        "Pendidikan",
        "Keluarga",
        "Pekerjaan",
        "Organisasi",
        "Berkas",
    ])

    const tabActiveName = ref("Data Diri")
    var effect = ""

</script>

<style>

.d-stepper .step-number-content.active {
  transform: scale(1.25);
}

.in-out-translate-fade-enter-active,
.in-out-translate-fade-leave-active {
  transition: all 0.15s;
}
.in-out-translate-fade-enter,
.in-out-translate-fade-leave-active {
  opacity: 0;
}
.in-out-translate-fade-enter {
  transform: translateX(100px);
}
.in-out-translate-fade-leave-active {
  transform: translateX(-100px);
}

.out-in-translate-fade-enter-active,
.out-in-translate-fade-leave-active {
  transition: all 0.15s;
}
.out-in-translate-fade-enter,
.out-in-translate-fade-leave-active {
  opacity: 0;
}
.out-in-translate-fade-enter {
  transform: translateX(-100px);
}
.out-in-translate-fade-leave-active {
  transform: translateX(100px);
}
</style>
