<template>
    <div class="container-fluid">
        <div class="d-flex flex-column pt-10 flex-md-row px-10">
            <div class="flex-column flex-md-row-auto w-100 w-md-250px w-xxl-350px">
                <div class="card mb-10 mb-md-0">
                    <div class="card-body py-10 px-6">
                        <div class="d-flex flex-column mb-10 px-3">
                            <form>
                                <div class="input-group input-group-solid" id="kt_chat_aside_search">
                                    <span class="input-group-text" id="basic-addon1">
                                        <span class="svg-icon svg-icon-1 svg-icon-dark">
                                            <inline-svg src="/media/icons/duotone/general/gen004.svg" />
                                        </span>
                                    </span>
                                    <input type="text" class="form-control ps-0 py-4 h-auto" placeholder="Cari" />
                                </div>
                            </form>
                        </div>



                        <ul
                            class="menu menu-column menu-rounded menu-gray-600 menu-hover-bg-light-primary menu-active-bg-light-primary fw-bold mb-10">

                            <li class="menu-item px-3 pb-1">
                                <a href="#" class="menu-link fs-6 px-3">
                                    Daftar Nama Peserta Lolos Seleksi Tahap 1
                                </a>
                            </li>
                            <li class="menu-item px-3 pb-1">
                                <a href="#" class="menu-link fs-6 px-3">
                                    Jadwal Penting! Catat ya
                                </a>
                            </li>
                            <li class="menu-item px-3 pb-1">
                                <a href="#" class="menu-link fs-6 px-3">
                                    Pembukaan Lowongan Magang Batch 3, Apa Saja Posisi Magang yang di Buka?
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="flex-md-row-fluid ms-md-12">
                <div class="card">
                    <div class="card-body py-10">
                        <el-skeleton-item variant="image" style="width: 100%; height: 240px" />
                        <el-skeleton :rows="5" animated />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

