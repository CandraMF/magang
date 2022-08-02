<template>
  <!--begin::Toolbar wrapper-->
  <div class="d-flex align-items-stretch flex-shrink-0">


    <!--begin::Activities-->
    <div class="d-flex align-items-center ms-1 ms-lg-3">
      <!--begin::drawer toggle-->
      <div
        class="
          btn btn-icon btn-active-light-primary
          w-30px
          h-30px
          w-md-40px
          h-md-40px
        "
        id="kt_activities_toggle"
      >
        <span class="svg-icon svg-icon-1">
          <inline-svg src="/media/icons/duotune/general/gen032.svg" />
        </span>
      </div>
      <!--end::drawer toggle-->
    </div>
    <!--end::Activities-->

    <!--begin::Notifications-->
    <div class="d-flex align-items-center ms-1 ms-lg-3">
      <MenuComponent menu-selector="#kt-notification-menu">
        <template v-slot:toggle>
          <div
            class="
              btn btn-icon btn-active-light-primary
              position-relative
              w-30px
              h-30px
              w-md-40px
              h-md-40px
            "
            data-kt-menu-target="#kt-notification-menu"
            data-kt-menu-trigger="click"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="bottom"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="/media/icons/duotune/general/gen022.svg" />
            </span>
          </div>
        </template>
        <template v-slot:content>
          <KTNotificationMenu></KTNotificationMenu>
        </template>
      </MenuComponent>
    </div>
    <!--end::Notifications-->

    <!--begin::User-->
    <div
      class="d-flex align-items-center ms-1 ms-lg-3"
      id="kt_header_user_menu_toggle"
    >
      <MenuComponent menu-selector="#kt-user-menu">
        <template v-slot:toggle>
          <div
            class="
              cursor-pointer
              symbol symbol-circle symbol-30px symbol-md-40px
            "
            data-kt-menu-target="#kt-user-menu"
            data-kt-menu-trigger="click"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="bottom"
          >
            <img alt="Pic" src="/media/avatars/150-1.jpg" />
          </div>
        </template>
        <template v-slot:content>
          <KTUserMenu></KTUserMenu>
        </template>
      </MenuComponent>
    </div>
    <!--end::User -->
  </div>
  <!--end::Toolbar wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuComponent from "@/components/menu/MenuComponent.vue";
import KTUserMenu from "@/layout/header/partials/UserMenu.vue";
import KTNotificationMenu from "@/layout/header/partials/NotificationMenu.vue";

export default defineComponent({
  name: "topbar",
  components: {
    KTUserMenu,
    KTNotificationMenu,
    MenuComponent,
  },
});
</script>
