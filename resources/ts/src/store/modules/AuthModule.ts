import { Mutations, Actions } from "@/store/enums/StoreEnums";
import { Action, Mutation, Module, VuexModule } from "vuex-module-decorators";

import axios from 'axios'
import router from "@/router";

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

  set setToken(payload: string) {
    this.token = payload
  }

  set setUser(payload: object) {
    this.user = payload
  }

  get getUser() {
    return this.user
  }

  @Action
  async [Actions.LOGIN](payload){
    await axios.get('http://localhost:8000/sanctum/csrf-cookie')
        .then(response => {
            return new Promise(async (resolve, reject) => {
                await axios.post('http://localhost:8000/api/login', {
                    login: payload.nik,
                    password: payload.password
                }).then((response)=>{
                    if(response.data.success) {
                        this.token = response.data.token,
                        this.user = response.data.user,
                        this.context.setter
                        // this.context.commit(Mutations.SET_USER, response.data.user)
                        resolve(response);
                    } else {
                        this.context.commit(Mutations.SET_TOKEN, null)
                        this.context.commit(Mutations.SET_USER, null)
                        reject(response);
                    }
                }).catch((error)=>{
                    this.context.commit(Mutations.SET_TOKEN, null)
                    this.context.commit(Mutations.SET_USER, null)
                    reject(error);
                })
            })

        })
  }

  @Action
  [Actions.LOGOUT](payload){
    this.context.commit(Mutations.SET_TOKEN, '')
    this.context.commit(Mutations.SET_USER, {})
  }

}
