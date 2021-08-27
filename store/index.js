import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const state = () => ({
    articles: [],
    article: []
})
  
export const mutations = {
    SET_ARTICLES(state, ARTICLES) {
        state.articles = ARTICLES
    },

    SET_ARTICLE(state, ARTICLE) {
        state.article = ARTICLE
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
    },

    getArticle({ commit }, slug) {
        axios
            .get(`http://localhost:1337/articles?slug=${slug}`)
            .then(response => {
                const ARTICLE = response.data
                commit('SET_ARTICLE', ARTICLE)
            })
            .catch(error => console.log(error))
    }
}

export const getters = {
}