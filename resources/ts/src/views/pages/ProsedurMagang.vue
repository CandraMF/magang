<template>
    <div class="container-fluid">
        <div class="d-flex flex-column pt-10 flex-md-row px-10">
          <div class="flex-column flex-md-row-auto w-100 w-md-250px w-xxl-350px">
            <div class="card mb-10 mb-md-0">
              <div class="card-body py-10 px-6">
                <div class="d-flex flex-column mb-10 px-3">
                  <form>
                    <div
                      class="input-group input-group-solid"
                      id="kt_chat_aside_search"
                    >
                      <span class="input-group-text" id="basic-addon1">
                        <span class="svg-icon svg-icon-1 svg-icon-dark">
                          <inline-svg src="/media/icons/duotone/general/gen004.svg" />
                        </span>
                      </span>
                      <input
                        type="text"
                        class="form-control ps-0 py-4 h-auto"
                        placeholder="Cari"
                      />
                    </div>
                  </form>
                </div>



                <ul
                  class="menu menu-column menu-rounded menu-gray-600 menu-hover-bg-light-primary menu-active-bg-light-primary fw-bold mb-10"
                >
                  <li class="menu-content fw-bold pb-2 px-3">
                    <span class="fs-3 fw-bolder">Prosedur</span>
                  </li>
                  <li class="menu-item px-3 pb-1">
                    <a href="#" class="menu-link fs-6 px-3">
                      Prosedur Pendaftaran
                    </a>
                  </li>
                  <li class="menu-item px-3 pb-1">
                    <a href="#" class="menu-link fs-6 px-3">
                      Prosedur Magang
                    </a>
                  </li>
                  <li class="menu-item px-3 pb-1">
                    <a href="#" class="menu-link fs-6 px-3">
                      Hari dan Jam Kerja
                    </a>
                  </li>
                </ul>

                <ul
                  class="menu menu-column menu-rounded menu-gray-600 menu-hover-bg-light-primary menu-active-bg-light-primary fw-bold mb-10"
                >
                  <li class="menu-content fw-bold pb-2 px-3">
                    <span class="fs-3 fw-bolder">Aturan Dasar</span>
                  </li>
                  <li class="menu-item px-3 pb-1">
                    <a href="#" class="menu-link fs-6 px-3">
                      Absensi
                    </a>
                  </li>
                  <li class="menu-item px-3 pb-1">
                    <a href="#" class="menu-link fs-6 px-3">
                      Berpakaian
                    </a>
                  </li>
                  <li class="menu-item px-3 pb-1">
                    <a href="#" class="menu-link fs-6 px-3 active">
                        Konsekuensi
                    </a>
                  </li>
                </ul>

                <ul
                  class="menu menu-column menu-rounded menu-gray-600 menu-hover-bg-light-primary menu-active-bg-light-primary fw-bold mb-10"
                >
                  <li class="menu-content fw-bold pb-2 px-3">
                    <span class="fs-3 fw-bolder">Dasar Hukum</span>
                  </li>
                  <li class="menu-item px-3 pb-1">
                    <a href="#" class="menu-link fs-6 px-3">
                      Dasar Hukum 1
                    </a>
                  </li>
                  <li class="menu-item px-3 pb-1">
                    <a href="#" class="menu-link fs-6 px-3">
                        Dasar Hukum 2
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="flex-md-row-fluid ms-md-12">
            <div class="card">
              <div class="card-body py-10">
                <h2 class="text-dark fw-bolder fs-1 mb-5">Popular Articles</h2>

                <div class="accordion accordion-icon-toggle" id="kt_accordion_1">
                  <div class="mb-5">
                    <div
                      class="accordion-header py-3 d-flex"
                      data-bs-toggle="collapse"
                      data-bs-target="#kt_accordion_1_item_1"
                    >
                      <span class="accordion-icon">
                        <span class="svg-icon svg-icon-4">
                          <inline-svg
                            src="media/icons/duotone/Navigation/Right-2.svg"
                          />
                        </span>
                      </span>
                      <h3 class="fs-4 text-gray-800 fw-bold mb-0 ms-4">
                        The best way to quick start business
                      </h3>
                    </div>

                    <div
                      id="kt_accordion_1_item_1"
                      class="fs-6 collapse show ps-10"
                      data-bs-parent="#kt_accordion_1"
                    >
                      <div class="mb-5">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but
                        also the leap into electronic typesetting, remaining
                        essentially unchanged.
                      </div>

                      <div>
                        It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more recently with
                        desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                      </div>
                    </div>
                  </div>

                  <div class="mb-5">
                    <div
                      class="accordion-header py-3 d-flex collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#kt_accordion_1_item_2"
                    >
                      <span class="accordion-icon">
                        <span class="svg-icon svg-icon-4">
                          <inline-svg
                            src="media/icons/duotone/Navigation/Right-2.svg"
                          />
                        </span>
                      </span>
                      <h3 class="fs-4 text-gray-800 fw-bold mb-0 ms-4">
                        How To Create Channel ?
                      </h3>
                    </div>

                    <div
                      id="kt_accordion_1_item_2"
                      class="collapse fs-6 ps-10"
                      data-bs-parent="#kt_accordion_1"
                    >
                      <div class="mb-5">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in some
                        form, by injected humour, or randomised words which don't look
                        even slightly believable.
                      </div>

                      <div class="mb-5">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but
                        also the leap into electronic typesetting, remaining
                        essentially unchanged.
                      </div>

                      <div>
                        It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more recently with
                        desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                      </div>
                    </div>
                  </div>

                  <div class="mb-5">
                    <div
                      class="accordion-header py-3 d-flex collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#kt_accordion_1_item_3"
                    >
                      <span class="accordion-icon"
                        ><span class="svg-icon svg-icon-4">
                          <inline-svg
                            src="media/icons/duotone/Navigation/Right-2.svg"
                          /> </span
                      ></span>
                      <h3 class="fs-4 text-gray-800 fw-bold mb-0 ms-4">
                        What are the support terms & conditions ?
                      </h3>
                    </div>

                    <div
                      id="kt_accordion_1_item_3"
                      class="collapse fs-6 ps-10"
                      data-bs-parent="#kt_accordion_1"
                    >
                      Some plugins may ask for a purchase code for
                      registration/activation once installed, however, you can simply
                      ignore these messages as bundled plugins do not require
                      activation or registration.
                    </div>
                  </div>

                  <div class="mb-5">
                    <div
                      class="accordion-header py-3 d-flex collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#kt_accordion_1_item_4"
                    >
                      <span class="accordion-icon"
                        ><span class="svg-icon svg-icon-4">
                          <inline-svg
                            src="media/icons/duotone/Navigation/Right-2.svg"
                          /> </span
                      ></span>
                      <h3 class="fs-4 text-gray-800 fw-bold mb-0 ms-4">
                        What is the 6 Months support extention ?
                      </h3>
                    </div>

                    <div
                      id="kt_accordion_1_item_4"
                      class="collapse fs-6 ps-10"
                      data-bs-parent="#kt_accordion_1"
                    >
                      Some plugins may ask for a purchase code for
                      registration/activation once installed, however, you can simply
                      ignore these messages as bundled plugins do not require
                      activation or registration. The plugin will still work as
                      intended with the theme once the theme has been
                      activated/registered. When a plugin is updated, the theme author
                      will include the latest version of the bundled plugin with their
                      next theme update.
                    </div>
                  </div>

                  <div class="mb-5">
                    <div
                      class="accordion-header py-3 d-flex collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#kt_accordion_1_item_5"
                    >
                      <span class="accordion-icon"
                        ><span class="svg-icon svg-icon-4">
                          <inline-svg
                            src="media/icons/duotone/Navigation/Right-2.svg"
                          /> </span
                      ></span>
                      <h3 class="fs-4 text-gray-800 fw-bold mb-0 ms-4">
                        How can I keep up to date my item ?
                      </h3>
                    </div>

                    <div
                      id="kt_accordion_1_item_5"
                      class="collapse fs-6 ps-10"
                      data-bs-parent="#kt_accordion_1"
                    >
                      Some plugins may ask for a purchase code for
                      registration/activation once installed, however, you can simply
                      ignore these messages as bundled plugins do not require
                      activation or registration. The plugin will still work as
                      intended with the theme once the theme has been
                      activated/registered.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </template>
