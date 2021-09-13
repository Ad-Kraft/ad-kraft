<template>
  <div class="main-container">
    <Header />

    <OffCanvasMobileMenu />

    <Breadcrumb :title="caseStudy.title" :active-title="caseStudy.title" />
    <div class="container">
      <div class="row">
        <div class="mt-4">
          <img
            class="featuredImg"
            :src="`http://localhost:1337${url}`"
            alt=""
          />
        </div>
        <div class="col-12">
          <div class="case-clients-card">
            <div class="case-clients-card-inner">
              <div class="case-details-row">
                <div class="case-details-col">
                  <h3 class="title">Kategorija:</h3>
                  <span class="clients-hr"></span>
                  <p
                    v-for="(cat, index) in caseStudy.case_studies_categories"
                    :key="index"
                  >
                    {{ cat.title }}
                  </p>
                </div>
                <div class="case-details-col">
                  <h3 class="title">Klijent:</h3>
                  <span class="clients-hr"></span>
                  <p>{{ caseStudy.Client }}</p>
                </div>
                <div class="case-details-col">
                  <h3 class="title">Datum:</h3>
                  <span class="clients-hr"></span>
                  <p>{{ caseStudy.published }}</p>
                </div>
                <div class="case-details-col">
                  <h3 class="title">Budžet:</h3>
                  <span class="clients-hr"></span>
                  <p>{{ caseStudy.Budget }}</p>
                </div>
                <div class="case-details-col">
                  <h3 class="title">Lokacija:</h3>
                  <span class="clients-hr"></span>
                  <p>{{ caseStudy.Location }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="mt-4 mb-4">
      <div class="service-details">
        <div class="service-details-list">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div v-html="caseStudy.content"></div>
              </div>
            </div>
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
    CaseDetailsCarousel: () => import("@/components/CaseDetailsCarousel"),
    Footer: () => import("@/components/Footer"),
    ScrollTop: () => import("@/components/ScrollTop"),
  },

  data() {
    return {
      caseStudy: [],
      url: "",
    };
  },

  mounted() {
    axios
      .get(`http://localhost:1337/case-studies?slug=${this.$route.params.slug}`)
      .then((response) => {
        this.caseStudy = response.data[0];
        this.url = response.data[0].featuredImage.url;
        console.log(response.data[0]);
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style lang="scss" scoped>
.featuredImg {
  width: 100%;
}
</style>