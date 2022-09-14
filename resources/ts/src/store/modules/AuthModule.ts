import { Mutations, Actions } from "@/store/enums/StoreEnums";
import { Action, Mutation, Module, VuexModule } from "vuex-module-decorators";

import axios from 'axios'
import router from "@/router";
import { ESMap } from "typescript";

interface StoreInfo {
    token: string,
    user: object,
}

@Module
export default class AuthModule extends VuexModule implements StoreInfo {
  token = '';
  user = {};

  get getToken() {
    return this.token
  }

  get getUser() {
    return this.user
  }

  @Action
  [Actions.LOGOUT](payload){
    this.context.commit(Mutations.SET_TOKEN, '')
    this.context.commit(Mutations.SET_USER, {})
  }

  @Mutation
  [Mutations.SET_USER](payload){
    this.user = payload
  }

  @Mutation
  [Mutations.SET_TOKEN](payload){
    this.token = payload
  }

}
