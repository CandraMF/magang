<template>
    <div class="col-md-12">
        <div class="card outline-dashed outline mt-5 card-custom mb-5 shadow-none">
            <!--begin::Body-->
            <div class="card-header">
                <div class="card-title">
                    <h3>Data Keluarga</h3>
                </div>
            </div>
            <div class="card-body pt-2 px-0">
                <div class="table-responsive">
                    <table class="table table-borderless align-middle">
                        <tbody>
                            <template v-for="(item, i) in list" :key="i">
                                <tr>
                                    <th class="pl-0 w-55px">
                                    <!--begin::Symbol-->
                                        <div class="symbol symbol-55px flex-shrink-0 me-4">
                                            <span
                                            class="symbol-label"
                                            v-bind:class="`bg-light-${item.bg}`"
                                            >
                                            <img :src="item.svg" class="h-75 align-self-end" alt="" />
                                            </span>
                                        </div>
                                    <!--end::Symbol-->
                                    </th>
                                    <td class="ps-0 flex-column min-w-300px">
                                    <!--begin::Title-->
                                        <router-link
                                            to="/account"
                                            class="text-gray-800 fw-bolder text-hover-primary fs-6 mb-1 modal-link"
                                            >{{ item.name }}</router-link
                                        >
                                        <div class="text-muted fw-bold">
                                            {{ item.uses }}
                                        </div>
                                    <!--end::Title-->
                                    </td>
                                    <td>
                                    <!--begin::Label-->
                                        <div class="me-4 me-md-19 text-md-right">
                                            <div href="#" class="text-gray-800 fw-bolder fs-6 mb-1">
                                            {{ item.paid }}
                                            </div>
                                            <span class="text-muted fw-bold">Paid</span>
                                        </div>
                                    <!--end::Label-->
                                    </td>
                                    <td class="text-end pe-0">
                                    <!--begin::Btn-->
                                        <router-link
                                            to="/account"
                                            class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm modal-link"
                                        >
                                            <span class="svg-icon svg-icon-4">
                                                <span class="svg-icon svg-icon-md">
                                                    <inline-svg
                                                    src="/media/icons/duotone/Navigation/Arrow-right.svg"
                                                    />
                                                </span>
                                            </span>
                                        </router-link>
                                    <!--end::Btn-->
                                    </td>
                                </tr>
                            </template>
                            <tr>
                                <td colspan="4">
                                    <button
                                        type="button"
                                        class="btn btn-outline btn-outline-dashed btn-outline-default text-center w-100 min-w-150px"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modal_1"
                                    >
                                        <span class="text-gray-800 fw-bolder fs-6 d-block">
                                            <span class="svg-icon svg-icon-2x ms-n1">
                                                <inline-svg src="/media/icons/duotune/arrows/arr087.svg" />
                                            </span> Tambah Keluarga
                                        </span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!--end::Body-->
        </div>
    </div>
    <div class="modal fade " tabindex="-1" id="modal_1">
        <div class="modal-dialog ">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>

                    <!--begin::Close-->
                    <div
                        class="btn btn-icon btn-sm btn-active-light-primary ms-2"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    >
                        <span class="svg-icon svg-icon-2x"></span>
                    </div>
                    <!--end::Close-->
                </div>

                <div class="modal-body">
                    <keluarga1/>
                </div>

            </div>
        </div>
    </div>
  </template>

<script setup lang="ts">
    import { reactive } from 'vue';
import Keluarga1 from './forms/Keluarga.vue';

    const list = reactive([
        {
            name: "Brad Simmons",
            uses: "Ayah",
            svg: "/media/svg/avatars/009-boy-4.svg",
            bg: "primary",
            paid: "$2,000,000"
        },
        {
            name: "Jessie Clarcson",
            uses: "Ibu",
            svg: "/media/svg/avatars/006-girl-3.svg",
            bg: "danger",
            paid: "$1,200,000"
        },
    ]);
    // const list = [
        // {
        //   name: "Lebron Wayde",
        //   uses: "HTML. Laravel Framework",
        //   svg: "/media/svg/avatars/011-boy-5.svg",
        //   bg: "success",
        //   paid: "$3,400,000"
        // },
        // {
        //   name: "Kevin Leonard",
        //   uses: "VueJS, Laravel Framework",
        //   svg: "/media/svg/avatars/015-boy-6.svg",
        //   bg: "warning",
        //   paid: "$35,600,000"
        // }
    // ];
</script>
