<template>
  <div class="main-container">
    <Header />

    <OffCanvasMobileMenu />

    <Breadcrumb :title="article.title" :active-title="article.title" />

    <section class="blog-details-section section-pt-150 section-pb-150">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 ps-xl-7">
            <div class="blog-details-thumb">
              <img :src="`http://localhost:1337${url}`" :alt="article.alt" />
            </div>
            <!-- social-share-card start -->
            <div class="social-share-card">
              <ul>
                <li class="social-share-item">
                  <span>{{ article.published }}</span>
                </li>
              </ul>
              <!--<div class="social-share-wrap">
                <span class="share mb-2">Share:</span>
                <ul
                  class="
                    share-social-links share-social-links2
                    d-flex
                    flex-wrap
                    align-items-center
                  "
                >
                  <li class="social-link-item">
                    <a href="#" class="social-link"
                      ><i class="icofont-facebook"></i
                    ></a>
                  </li>
                  <li class="social-link-item">
                    <a href="#" class="social-link"
                      ><i class="icofont-twitter"></i
                    ></a>
                  </li>
                  <li class="social-link-item">
                    <a href="#" class="social-link"
                      ><i class="icofont-skype"></i
                    ></a>
                  </li>
                </ul>
              </div>-->
            </div>
            <!-- social-share-card end -->

            <div class="service-details">
              <div class="service-details-list main-blog-content">
                <h3 class="title">{{ article.title }}</h3>
                <div v-html="article.content"></div>
              </div>
            </div>

            <div class="next-prev-section next-prev-section2">
              <div class="row mb-n4 align-items-center">
                <!-- <div class="col-md-4 mb-4 col-6 order-1 order-md-0">
                                    <div class="service-prev service-media">
                                        <div class="content">
                                            <h4 class="title">Digital Marketing</h4>
                                            <n-link to="/blog-details" class="link">Previous <i class="icofont-rounded-double-right"></i></n-link>
                                        </div>
                                    </div>
                                </div> -->
                <div class="col-md-12 mb-4">
                  <div class="service-dots service-dots2">
                    <p>
                      <strong>Oznake:</strong>
                      <span v-for="(tag, index) in article.tags" :key="index">
                        <n-link
                          class="ml-2 text-warning"
                          :to="`/oznaka/${tag.slug}`"
                          >{{ tag.tag.split("-").join(" ") }}</n-link
                        >
                      </span>
                    </p>
                  </div>
                </div>
                <!-- <div class="col-md-4 mb-4 col-6 order-2 order-md-0">
                                    <div class="service-next service-media">
                                        <div class="content">
                                            <h4 class="title">Pay Per Click</h4>
                                            <n-link to="" class="link">Next <i class="icofont-rounded-double-right"></i></n-link>
                                        </div>
                                    </div>
                                </div> -->
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <aside class="sidebar">
              <WidgetProfileCard :author="author" />

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
import axios from "axios";

export default {
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

  data() {
    return {
      article: [],
      author: "",
      url: "",
    };
  },

  mounted() {
    axios
      .get(`http://localhost:1337/articles?slug=${this.$route.params.slug}`)
      .then((response) => {
        this.article = response.data[0];
        this.author = response.data[0].author;
        this.url = response.data[0].featuredImage.url;
        console.log(response.data[0]);
      })
      .catch((error) => console.log(error));
  },

  head() {
    return {
      title: `${this.article.title} | Ad Kraft | Internet Marketing i Web Dizajn Agencija`,
    };
  },
};
</script>

<style lang="scss" scoped>
.service-details ul li  {
    list-style-type: disc !important;
  }
</style>