<template>

    <div class="card bg-white">
        <div class="card-body">
            <el-steps :active="step">
                <el-step title="Data Diri" ></el-step>
                <el-step title="Keluarga" ></el-step>
                <el-step title="Pendidikan" ></el-step>
                <el-step title="Berkas" ></el-step>
            </el-steps>
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

            <keep-alive>
                <transition :name="effect" mode="out-in">
                    <component :is="steps[step].component">
                    </component>
                </transition>
            </keep-alive>

        </div>
    </div>

</template>

<script>
    import DataDiri from "./forms/DataDiri.vue";
    import Keluarga from "./forms/Keluarga.vue";

    import { ref } from 'vue'
    export default {
        setup(props) {
            const step = ref(0)
            const effect = ""
            var steps =  [
                {
                    name: "Data Diri",
                    desc:
                        "Pastikan Data yang dimasukan adalah data yang sebenar benarnya",
                    icon: "person",
                    active: true,
                    component: DataDiri
                },
                {
                    name: "Keluarga",
                    desc:
                        "Pastikan Data yang dimasukan adalah data yang sebenar benarnya",
                    icon: "person",
                    active: true,
                    component: Keluarga
                },
            ]

            return {
                step, steps,
            };
        },

        methods: {
            nextStepAction() {
                this.effect = "in-out-translate-fade";
                if (this.step < this.steps.length - 1) this.step++;

            },
            backStep() {
                this.effect = "out-in-translate-fade";
                if (this.step > 0) this.step--;
            },
        }
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
