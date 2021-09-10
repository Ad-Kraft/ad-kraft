<template>
    <div class="main-container">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb title="Oznake" active-title="Oznake" />

        <section class="section-pt-150 section-pb-150">
            <div class="container">
                <div class="row mtn-35">
                    <div class="col-lg-8 mt-35">
                        <div class="row mtn-35">
                            <div class="col-12 col-md-6 mt-35" v-for="(tagPosts, index) in tag" :key="index">
                                <div class="blog-grid-card">
                                    <n-link :to="`/${tagPosts.slug}`" class="blog-grid-thumb">
                                        <img :src="`http://localhost:1337${tagPosts.featuredImage.url}`" :alt="tagPosts.title" />
                                    </n-link>
                                    <div class="blog-grid-content">
                                        <ul>
                                            <li class="date">
                                                <i class="icofont-ui-calendar"></i>
                                                {{ tagPosts.published }}
                                            </li>
                                        </ul>
                                        <h5 class="title mb-3">
                                            <n-link :to="`/${tagPosts.slug}`">{{ tagPosts.title }}</n-link>
                                        </h5>
                                        <p class="mb-4">
                                            {{ tagPosts.excerpt }}
                                        </p>
                                        <n-link :to="`/${tagPosts.slug}`" class="btn btn-warning">Nastavite čitati</n-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 mt-35" :class="orderClass">
                        <aside class="sidebar">
                            <WidgetPostCategoryCard />

                            <AboutBanner />

                            <WidgetTagCard />
                        </aside>
                    </div>
                </div>
            </div>
        </section>

        <Footer />

        <ScrollTop />

    </div>
</template>

<script>
    import { mapState } from 'vuex'
    
    export default {
        props: ["orderClass"],

        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
            WidgetProfileCard: () => import('@/components/WidgetProfileCard'),
            WidgetSearchCard: () => import('@/components/WidgetSearchCard'),
            WidgetPostCategoryCard: () => import('@/components/WidgetPostCategoryCard'),
            AboutBanner: () => import('@/components/AboutBanner'),
            WidgetTagCard: () => import('@/components/WidgetTagCard'),
        },

        data() {
            return {

            }
        },

        mounted() {
            this.$store.dispatch('getTag', this.$route.params.slug)
        },

        computed: {
            ...mapState(['tag'])
        },

        head() {
            return {
                title: ` | Kategorije | Ad Kraft | Internet Marketing i Web Dizajn Agencija`
            }
        }
    };
</script>