<template>
    <!--begin::Slider widget 2-->
    <div :class="widgetClasses" class="card">
        <!--begin::Body-->
        <div class="card-body ">
            <!--begin::Carousel-->
            <div id="kt_stats_widget_9_carousel" class="carousel carousel-custom carousel-stretch slide"
                data-bs-ride="carousel" data-bs-interval="8000">
                <!--begin::Nav-->
                <div class="d-flex flex-stack flex-wrap">
                    <el-skeleton-item class="bg-secondary" variant="image" style="width: 100%; height: 240px;" />

                    <!--begin::Carousel Indicators-->
                    <ol class="p-0 m-0 mt-5 carousel-indicators carousel-indicators-dots ">
                        <li data-bs-target="#kt_stats_widget_9_carousel" data-bs-slide-to="0" class="ml-1 active"></li>
                        <li data-bs-target="#kt_stats_widget_9_carousel" data-bs-slide-to="1" class="ml-1"></li>
                        <li data-bs-target="#kt_stats_widget_9_carousel" data-bs-slide-to="2" class="ml-1"></li>
                        <li data-bs-target="#kt_stats_widget_9_carousel" data-bs-slide-to="3" class="ml-1"></li>
                    </ol>
                    <!--end::Carousel Indicators-->
                </div>
                <!--end::Nav-->

                <!--begin::Items-->
                <div class="carousel-inner pt-8">
                    <!--begin::Item-->
                    <div class="carousel-item active">
                        <div class="carousel-wrapper">
                            <!--begin::Title-->
                            <div class="flex-grow-1">
                                <el-skeleton class="mt-5" :rows="4" animated />

                            </div>
                            <!--end::Title-->

                            <!--begin::Info-->
                            <div class="d-flex flex-stack pt-7">
                                <span class="text-gray-400 fs-6 fw-bold pe-2">5 Oktober 2022</span>

                                <a href="#" class="
                                    btn btn-light btn-sm
                                    fs-7
                                    btn-color-muted
                                    fw-boldest
                                    px-5
                                " data-bs-toggle="modal" data-bs-target="#kt_modal_create_account">Lihat Lebih Banyak</a>
                            </div>
                            <!--end::Info-->
                        </div>
                    </div>
                    <!--end::Item-->

                    <!--begin::Item-->
                    <div class="carousel-item">
                        <div class="carousel-wrapper">
                            <!--begin::Title-->
                            <div class="flex-grow-1">
                                <el-skeleton class="mt-5" :rows="4" animated />

                            </div>
                            <!--end::Title-->

                            <!--begin::Info-->
                            <div class="d-flex flex-stack pt-7">
                                <span class="text-gray-400 fs-6 fw-bold pe-2">5 Oktober 2022</span>

                                <a href="#" class="
                                    btn btn-light btn-sm
                                    fs-7
                                    btn-color-muted
                                    fw-boldest
                                    px-5
                                " data-bs-toggle="modal" data-bs-target="#kt_modal_create_account">Lihat Lebih Banyak</a>
                            </div>
                            <!--end::Info-->
                        </div>
                    </div>
                    <!--end::Item-->

                    <!--begin::Item-->
                    <div class="carousel-item">
                        <div class="carousel-wrapper">
                            <!--begin::Title-->
                            <div class="flex-grow-1">
                                <el-skeleton class="mt-5" :rows="4" animated />

                            </div>
                            <!--end::Title-->

                            <!--begin::Info-->
                            <div class="d-flex flex-stack pt-7">
                                <span class="text-gray-400 fs-6 fw-bold pe-2">5 Oktober 2022</span>

                                <a href="#" class="
                                    btn btn-light btn-sm
                                    fs-7
                                    btn-color-muted
                                    fw-boldest
                                    px-5
                                " data-bs-toggle="modal" data-bs-target="#kt_modal_create_account">Lihat Lebih Banyak</a>
                            </div>
                            <!--end::Info-->
                        </div>
                    </div>
                    <!--end::Item-->

                    <!--begin::Item-->
                    <div class="carousel-item">
                        <div class="carousel-wrapper">
                            <!--begin::Title-->
                            <div class="flex-grow-1">
                                <el-skeleton class="mt-5" :rows="4" animated />

                            </div>
                            <!--end::Title-->

                            <!--begin::Info-->
                            <div class="d-flex flex-stack pt-7">
                                <span class="text-gray-400 fs-6 fw-bold pe-2">5 Oktober 2022</span>

                                <a href="#" class="
                                    btn btn-light btn-sm
                                    fs-7
                                    btn-color-muted
                                    fw-boldest
                                    px-5
                                " data-bs-toggle="modal" data-bs-target="#kt_modal_create_account">Lihat Lebih Banyak</a>
                            </div>
                            <!--end::Info-->
                        </div>
                    </div>
                    <!--end::Item-->
                </div>
                <!--end::Items-->
            </div>
            <!--end::Carousel-->
        </div>
        <!--end::Body-->
    </div>
    <!--end::Slider widget 2-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "kt-widget-2",
    props: {
        widgetClasses: String,
    },
    components: {},
});
</script>
