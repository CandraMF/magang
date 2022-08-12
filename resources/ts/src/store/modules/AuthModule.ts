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

  @Action({rawError: true})
//   async [Actions.LOGIN]({commit, payload}){
//     await axios.get('http://localhost:8000/sanctum/csrf-cookie')
//         .then(response => {
//             return new Promise(async (resolve, reject) => {
//                 await axios.post('http://localhost:8000/api/login', {
//                     login       : payload.nik,
//                     password    : payload.password
//                 }).then((response) => {
//                     console.log(response)
//                     resolve(response);
//                 }).catch((error) => {
//                     console.log(error)
//                     reject(error);
//                 })
//             })
//         })
//   }

//   @Action
//   async [Actions.REGISTER](payload){
//     // this.context.commit(Mutations.SET_TOKEN, "asdasda")
//     // console.log(this.context.getters.getToken)
//     await axios.get('/sanctum/csrf-cookie').then(async (response) => {
//         // return new Promise(async (resolve, reject) => {
//             await axios.post('/api/register', {
//                 login: payload.login,
//                 password: payload.password,
//                 name: payload.name,
//                 email: payload.email,
//                 mobile: payload.mobile
//             })
//                 .then(async (response) => {
//                     await this.context.commit(Mutations.SET_TOKEN, response.data.token)
//                     await this.context.commit(Mutations.SET_USER, response.data.user)
//                 })
//             })
//         // })

//   }

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
