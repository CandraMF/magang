<template>
  <div>
    <b-button v-b-toggle.sidebar-no-header> <b-icon icon="list"></b-icon> </b-button>
    <b-sidebar id="sidebar-no-header" shadow no-header visible>
      <template #default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-no-header-title">Magang</h4>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active @click="hide">Active</b-nav-item>
              <b-nav-item href="#link-1" @click="hide">Link</b-nav-item>
              <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide"><b-icon icon="x-lg"></b-icon></b-button>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>
