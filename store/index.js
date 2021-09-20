import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const state = () => ({
    articles: [],
    caseStudies: [],
    categories: [],
    category: [],
    caseCategory: [],
    tags: [],
    tag: []
})
  
export const mutations = {
    SET_ARTICLES(state, ARTICLES) {
        state.articles = ARTICLES
    },

    SET_CASESTUDIES(state, CASESTUDIES) {
        state.caseStudies = CASESTUDIES
    },

    SET_CATEGORIES(state, CATEGORIES) {
        state.categories = CATEGORIES
    },

    SET_CATEGORY(state, CATEGORY) {
        state.category = CATEGORY
    },

    SET_CASECATEGORY(state, CASECATEGORY) {
        state.caseCategory = CASECATEGORY
    },

    SET_TAGS(state, TAGS) {
        state.tags = TAGS
    },

    SET_TAG(state, TAG) {
        state.tag = TAG
    }
}

export const actions = {
    getArticles({ commit }) {
        axios
            .get(this.$config.myPublicVariable + '/articles?_sort=published:DESC')
            .then(response => {
                const ARTICLES = response.data
                commit('SET_ARTICLES', ARTICLES)
            })
            .catch(error => console.log(error))
    },

    getCaseStudies({ commit }) {
        axios
            .get(this.$config.myPublicVariable + '/case-studies?_sort=published:DESC')
            .then(response => {
                const CASESTUDIES = response.data
                commit('SET_CASESTUDIES', CASESTUDIES)
            })
            .catch(error => console.log(error))
    },

    getCategories({ commit }) {
        axios
            .get(this.$config.myPublicVariable + '/categories')
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

    getCategory({ commit }, slug) {
        axios
            .get(this.$config.myPublicVariable + `/categories?slug=${slug}`)
            .then(response => {
                const CATEGORY = response.data[0]

                console.log(response.data[0])

                commit('SET_CATEGORY', CATEGORY)
            })
            .catch(error => console.log(error))
    },

    getCaseCategory({ commit }, slug) {
        axios
            .get(this.$config.myPublicVariable + `/case-studies-categories?slug=${slug}`)
            .then(response => {
                const CASECATEGORY = response.data[0]

                commit('SET_CASECATEGORY', CASECATEGORY)
            })
            .catch(error => console.log(error))
    },

    getTag({ commit }, slug) {
        axios
            .get(this.$config.myPublicVariable + `/tags?slug=${slug}`)
            .then(response => {
                const TAG = response.data[0].articles

                commit('SET_TAG', TAG)
            })
            .catch(error => console.log(error))
    },

    getTags({ commit }) {
        axios
            .get(this.$config.myPublicVariable + '/tags')
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