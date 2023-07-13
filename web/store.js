import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    state: {
      items: {}
    },
    actions: {
      fetchItem({ commit }) {
        const fetchItem = axios.get('http://localhost:4200/api/items')
        return fetchItem.then(res => {
          const { data } = res.data
          commit('setItem', { id: data.id, item: data.item })
        })
      }
    },
    mutations: {
      setItem(state, { id, item }) {
        Vue.set(state.items, id, item)
      }
    }
  })
}