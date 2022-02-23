import { Module } from "vuex";
import loginState from './types'
import rootState from '../types'

const loginModule:Module<loginState,rootState> = {
  state:{
    token:"",
    user:{}
  },
  mutations:{},
  actions:{},
  getters:{}
}

export default loginModule