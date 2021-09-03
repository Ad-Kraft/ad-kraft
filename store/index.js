import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const state = () => ({
    articles: [],
    // article: [],
    categories: [],
    tags: []
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
    },

    SET_TAGS(state, TAGS) {
        state.tags = TAGS
    }
}

export const actions = {
    getArticles({ commit }) {
        axios
            .get('http://localhost:1337/articles?_sort=published:DESC')
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
    },

    getTags({ commit }) {
        axios
            .get('http://localhost:1337/tags')
            .then(response => {
                const TAGS = response.data
                let tagsList = []

                TAGS.forEach(tag => {
                    let tagName = tag.tag
                    let tagCount = tag.articles.length
                    let tagSlug = tag.slug
                    tagsList.push({tagName, tagCount, tagSlug})
                });

                commit('SET_TAGS', tagsList)
            })
            .catch(error => console.log(error))
    }
}

export const getters = {
}