import { createStore } from "vuex";
import { config } from "vuex-module-decorators";

import BodyModule from "@/store/modules/BodyModule";
import BreadcrumbsModule from "@/store/modules/BreadcrumbsModule";
import ConfigModule from "@/store/modules/ConfigModule";
import AuthModule from "@/store/modules/AuthModule";
import AppModule from "@/store/modules/AppModule";

import createPersistedState from 'vuex-persistedstate'

config.rawError = true;

const store = createStore({
  modules: {
    BodyModule,
    BreadcrumbsModule,
    ConfigModule,
    AuthModule,
    AppModule,
  },
  plugins:[
    createPersistedState()
  ],
});

export default store;
