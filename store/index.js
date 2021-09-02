import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const state = () => ({
    articles: [],
    // article: [],
    categories: []
})
  
export const mutations = {
    SET_ARTICLES(state, ARTICLES) {
        state.articles = ARTICLES
    },

    // SET_ARTICLE(state, ARTICLE) {
    //     state.article = ARTICLE
    // },

    SET_CATEGORIES(state, CATEGORIES) {
        state.categories = CATEGORIES
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

    // getArticle({ commit }, slug) {
    //     axios
    //         .get(`http://localhost:1337/articles?slug=${slug}`)
    //         .then(response => {
    //             const ARTICLE = response.data
    //             commit('SET_ARTICLE', ARTICLE)
    //         })
    //         .catch(error => console.log(error))
    // },

    getCategories({ commit }) {
        axios
            .get('http://localhost:1337/categories')
            .then(response => {
                const CATEGORIES = response.data
                let categoriesList = []

                CATEGORIES.forEach(category => {
                    let categoryName = category.category
                    let categoryCount = category.articles.length
                    let categorySlug = category.slug
                    categoriesList.push({categoryName, categoryCount, categorySlug})
                });

                commit('SET_CATEGORIES', categoriesList)
            })
            .catch(error => console.log(error))
    }
}

export const getters = {
}