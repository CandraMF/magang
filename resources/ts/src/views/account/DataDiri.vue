<template>
    <div>

        <div class="row">
                <div class="col-2 ">
                    <el-affix :offset="120">
                        <el-steps :active="step" direction="vertical" style="height: 300px;">
                            <el-step title="Data Diri" ></el-step>
                            <el-step title="Pendidikan" ></el-step>
                            <el-step title="Keluarga" ></el-step>
                            <el-step title="Kerja" ></el-step>
                            <el-step title="Organisasi" ></el-step>
                            <el-step title="Berkas" ></el-step>
                        </el-steps>
                    </el-affix>
                </div>
                <div class="col-10">
                    <div class="card bg-white">
                        <div class="card-body">
                            <div class="row">
                                <div
                                    class="
                                        my-5
                                        notice
                                        d-flex
                                        bg-light-warning
                                        rounded
                                        border-warning border border-dashed
                                        p-6
                                    "
                                    v-if="!(step == 1 || step == 2 || step == 3 || step == 4)"
                                    >
                                    <span class="svg-icon svg-icon-2tx svg-icon-warning me-4">
                                        <inline-svg src="/media/icons/duotune/general/gen044.svg" />
                                    </span>

                                    <div class="d-flex flex-stack flex-grow-1">
                                        <div class="fw-bold">
                                            <h4 class="text-gray-800 fw-bolder">Perhatian!</h4>
                                            <div class="fs-6 text-gray-600">
                                                {{ steps[step].desc }}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <transition :name="effect" mode="out-in" >
                                    <keep-alive>
                                        <component :is="steps[step].component">
                                        </component>
                                    </keep-alive>
                                </transition>

                                <div class="d-flex justify-content-between ">
                                    <el-button type="primary" @click="backStep()">Kembali</el-button>
                                    <el-button type="primary" @click="nextStepAction()">Lanjut</el-button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>

<script setup lang="ts">
    import DataDiriForm from "@/views/forms/DataDiriForm.vue";
    import Berkas from "@/views/account/Berkas.vue";

    import { ref, onMounted } from 'vue'
    import Pendidikan from "@/views/account/Pendidikan.vue";
    import Keluarga from "@/views/account/Keluarga.vue";
    import Kerja from "@/views/account/Kerja.vue";
    import Organisasi from "@/views/account/Organisasi.vue";

    const step = ref(3)
    var effect = ""

    const steps =  [
        {
            name: "Data Diri",
            desc:
                "Pastikan Data yang dimasukan adalah data yang sebenar benarnya",
            icon: "person",
            active: true,
            component: DataDiriForm
        },
        {
            name: "Pendidikan",
            desc:
            "Pastikan Data yang dimasukan adalah data yang sebenar benarnya",
            icon: "person",
            active: true,
            component: Pendidikan
        },
        {
            name: "Keluarga",
            desc:
                "Pastikan Data yang dimasukan adalah data yang sebenar benarnya",
            icon: "person",
            active: true,
            component: Keluarga
        },
        {
            name: "Perkerjaan",
            desc:
                "Pastikan Data yang dimasukan adalah data yang sebenar benarnya",
            icon: "work",
            active: true,
            component: Kerja
        },
        {
            name: "Organisasi",
            desc:
                "Pastikan Data yang dimasukan adalah data yang sebenar benarnya",
            icon: "social",
            active: true,
            component: Organisasi
        },
        {
            name: "Berkas",
            desc:
                "Pastikan Data yang dimasukan adalah data yang sebenar benarnya",
            icon: "person",
            active: true,
            component: Berkas
        },
    ]

    const nextStepAction = () => {
        effect = "in-out-translate-fade";
        if (step.value < steps.length - 1) step.value++;
        console.log(step.value)
    }

    const backStep = () =>{
        effect = "out-in-translate-fade";
        if (step.value > 0) step.value--;
        console.log(step.value)
    }

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
