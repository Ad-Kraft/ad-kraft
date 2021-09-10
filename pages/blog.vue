<template>
  <div class="main-container">
    <Header />

    <OffCanvasMobileMenu />

    <Breadcrumb title="Blog" active-title="Blog" />

    <section class="section-pt-150 section-pb-150">
      <div class="container">
        <div class="row mtn-35">
          <div class="col-lg-8 mt-35">
            <div class="row mtn-35">
              <div
                class="col-12 col-md-6 mt-35"
                v-for="(article, index) in articles"
                :key="index"
              >
                <div class="blog-grid-card">
                  <n-link :to="`/${article.slug}`" class="blog-grid-thumb">
                    <img
                      :src="`http://localhost:1337${article.featuredImage.url}`"
                      :alt="article.title"
                    />
                  </n-link>
                  <div class="blog-grid-content">
                    <ul>
                      <li class="date">
                        <i class="icofont-ui-calendar"></i>
                        {{ article.published }}
                      </li>
                    </ul>
                    <h5 class="title mb-3">
                      <n-link :to="`/${article.slug}`">{{
                        article.title
                      }}</n-link>
                    </h5>
                    <p class="mb-4">
                      {{ article.excerpt }}
                    </p>
                    <n-link :to="`/${article.slug}`" class="btn btn-warning"
                      >Nastavite čitati</n-link
                    >
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
import { mapState } from "vuex";

export default {
  props: ["orderClass"],

  components: {
    Header: () => import("@/components/Header"),
    OffCanvasMobileMenu: () => import("@/components/OffCanvasMobileMenu"),
    Breadcrumb: () => import("@/components/Breadcrumb"),
    Footer: () => import("@/components/Footer"),
    ScrollTop: () => import("@/components/ScrollTop"),
    WidgetProfileCard: () => import("@/components/WidgetProfileCard"),
    WidgetSearchCard: () => import("@/components/WidgetSearchCard"),
    WidgetPostCategoryCard: () => import("@/components/WidgetPostCategoryCard"),
    AboutBanner: () => import("@/components/AboutBanner"),
    WidgetTagCard: () => import("@/components/WidgetTagCard"),
  },

  head() {
    return {
      title: "Blog - Ad Kraft | Internet Marketing i Web Dizajn Agencija",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Blog Pratite zanimljivosti iz digitalnog marketinga koje pišemo na našem blogu. Saznajte vise o intenrnet marketingu, izradi web stranica i mnogo vise.",
        },
      ],
    };
  },

  mounted() {
    this.$store.dispatch("getArticles");
  },

  computed: {
    ...mapState(["articles"]),
  },
};
</script>