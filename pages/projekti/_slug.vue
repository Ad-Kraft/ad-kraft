<template>
  <div class="main-container">
    <Header />

    <OffCanvasMobileMenu />

    <Breadcrumb :title="caseStudy.title" :active-title="caseStudy.title" />
    <div class="container">
      <div class="row mt-60">
        <div class="col-lg-5">
          <div>
            <img
              class="featuredImg"
              :src="`http://localhost:1337${url}`"
              alt=""
            />
          </div>
        </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-6">
          <div v-html="caseStudy.introText"></div>
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
                  <n-link :to="`/projekti/kategorija/${cat.slug}`">{{
                    cat.title
                  }}</n-link>
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
            <div class="row mt-5 mb-5">
              <div class="col-lg-6">
                <div v-html="caseStudy.challengeText"></div>
              </div>
              <div class="col-lg-6">
                <img
                  class="featuredImg"
                  :src="`http://localhost:1337${challengeUrl}`"
                  alt=""
                />
              </div>
            </div>
            <div class="row mt-60 mb-5">
              <div class="col-lg-6">
                <img
                  class="featuredImg"
                  :src="`http://localhost:1337${solutionUrl}`"
                  alt=""
                />
              </div>
              <div class="col-lg-6">
                <div v-html="caseStudy.solutionText"></div>
              </div>
            </div>
            <div class="row mt-60 mb-5">
              <div class="col-lg-6">
                <div v-html="caseStudy.resultText"></div>
              </div>
              <div class="col-lg-6">
                <img
                  class="featuredImg"
                  :src="`http://localhost:1337${resultUrl}`"
                  alt=""
                />
              </div>
            </div>
            <div class="row mt-60 mb-5">
              <div class="col-lg-12">
                <div v-html="caseStudy.clientMessage"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container">
      <Cta :title="ctaTitle" :desc="ctaDesc" />
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
    Cta: () => import("@/components/Cta")
  },

  data() {
    return {
      caseStudy: [],
      url: "",
      challengeUrl: "",
      solutionUrl: "",
      resultUrl: "",
      ctaTitle: 'Trebate pomoć u definisanju marketing strategije na društvenim mrežama?',
      ctaDesc: 'Naš tim pomoći će vam da odredite tko je vaša ciljana publika i da kreirate informativan, zabavan i primamljiv sadržaj koji će privući korisnike i pretvoriti vaš profil na društvenim mrežama u generator online vidljivosti vašeg branda.'
    };
  },

  mounted() {
    axios
      .get(`http://localhost:1337/case-studies?slug=${this.$route.params.slug}`)
      .then((response) => {
        this.caseStudy = response.data[0];
        this.url = response.data[0].featuredImage.url;
        this.challengeUrl = response.data[0].challengeImg.url;
        this.solutionUrl = response.data[0].solutionImg.url;
        this.resultUrl = response.data[0].resultImg.url;
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
.intro-text {
  font-weight: 300;
}
.case-clients-card {
  background-color: transparent;
  .case-clients-card-inner {
    box-shadow: 0px 20px 140px #d6dee49e;
  }
}

</style>