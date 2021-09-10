<template>
    <div class="main-container">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb :title="caseCategory.title" :active-title="caseCategory.title" />

        <div class="case-studies-section">
        <div class="container mt-5">
            <div class="row">     
                <div class="col--md-4 mb-5" v-for="(caseCat, index) in caseCategory.case_studies" :key="index">
                    <div class="case-card">
                        <div class="thumb">
                            <n-link :to="`/reference/${caseCat.slug}`">
                                <img class="case-shap case-shape1" :src="`http://localhost:1337${caseCat.thumbnailImage.url}`" alt="" />
                            </n-link>
                        </div>
                        <div class="case-content">
                            <h3 class="title">
                                <n-link :to="`/reference/${caseCat.slug}`">{{ caseCat.title }}</n-link>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

        <Footer />

        <ScrollTop />

    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {

        mounted() {
            this.$store.dispatch('getCaseCategory', this.$route.params.slug)
        },

        computed: {
            ...mapState(['caseCategory'])
        },
    };
</script>

<style lang="scss" scoped>

.case-content {
    opacity: 1;
    visibility: visible;
}

</style>