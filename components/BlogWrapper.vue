<template>
    <section class="section-pt-150 section-pb-150">
        <div class="container">
            <div class="row mtn-35">
                <div class="col-lg-8 mt-35">
                    <div class="row mtn-35">
                        <div class="col-12 col-md-6 mt-35" v-for="(article, index) in articles" :key="index">
                            <div class="blog-grid-card">
                                <n-link :to="`/${article.slug}`" class="blog-grid-thumb">
                                    <img :src="`http://localhost:1337${article.featuredImage.url}`" :alt="article.title" />
                                </n-link>
                                <div class="blog-grid-content">
                                    <ul>
                                        <li class="date">
                                            <i class="icofont-ui-calendar"></i>
                                            {{ article.created_at }}
                                        </li>
                                    </ul>
                                    <h5 class="title mb-3">
                                        <n-link :to="`/${article.slug}`">{{ article.title }}</n-link>
                                    </h5>
                                    <p class="mb-4">
                                        {{ article.excerpt }}
                                    </p>
                                    <n-link :to="`/${article.slug}`" class="btn btn-warning">Nastavite čitati</n-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 mt-35">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination">
                                    <li class="page-item">
                                        <a class="page-link" href="#"><i class="icofont-rounded-double-left"></i></a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">1</a>
                                    </li>
                                    <li class="page-item active">
                                        <a class="page-link" href="#">2</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">3</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#"><i class="icofont-rounded-double-right"></i></a>
                                    </li>
                                </ul>
                            </nav>
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
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        props: ["orderClass"],

        components: {
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
            this.$store.dispatch('getArticles');
        },

        computed: {
            ...mapState([
                'articles'
            ])
        }
    };
</script>