<template>
    <div class="container-fluid">
        <div class="pt-10 px-10">
            <div class="col-md-12">
                <div class="row">
                    <div class="card mb-10 mb-md-0">
                        <div class="card-header">
                            <div class="card-title">
                                Pengumuman
                            </div>
                        </div>
                        <div class="card-body py-10 px-6">
                            <div class="row">
                                <div class="col-md-5">
                                    <ul class="menu menu-column menu-rounded menu-gray-600 menu-hover-bg-light-primary menu-active-bg-light-primary fw-bold mb-10">
                                        <li class="menu-item">
                                            <a href="#" class="menu-link fs-6 px-5 active">
                                                Daftar Nama Peserta Lolos Seleksi Tahap 1
                                            </a>
                                        </li>
                                        <el-divider class="my-5"></el-divider>
                                        <li class="menu-item menu">
                                            <a href="#" class="menu-link fs-6 px-5">
                                                Jadwal Penting! Catat ya
                                            </a>
                                        </li>
                                        <el-divider class="my-5"></el-divider>
                                        <li class="menu-item">
                                            <a href="#" class="menu-link fs-6 px-5">
                                                Pembukaan Lowongan Magang Batch 3, Apa Saja Posisi Magang yang di Buka?
                                            </a>
                                        </li>
                                        <el-divider class="my-5"></el-divider>
                                    </ul>
                                </div>
                                <div class="col-md-7">
                                    <div class="card border">
                                        <div class="card-body ">
                                            <el-skeleton-item variant="image" style="width: 100%; height: 240px" />
                                            <el-skeleton :rows="5" animated />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
