<template>
    <div
        class="
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
                    Anda Belum Melakukan Aktifasi Akun!
                    <router-link class="fw-bolder" to="/profil/data-diri">Aktifasi Akun</router-link>.
                </div>
            </div>
        </div>
    </div>

</template>
