import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const state = () => ({
    articles: []
})
  
export const mutations = {
    SET_ARTICLES(state, ARTICLES) {
        state.articles = ARTICLES
    }
}

export const actions = {
    getArticles({ commit }) {
        axios
            .get('http://localhost:1337/articles')
            .then(response => {
                const ARTICLES = response.data
                commit('SET_ARTICLES', ARTICLES)
            })
            .catch(error => console.log(error))
    }
}

export const getters = {
}