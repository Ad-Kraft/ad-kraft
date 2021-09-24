<template>
  <div class="main-container">
    <Header />

    <OffCanvasMobileMenu />

    <Breadcrumb title="Projekti" active-title="Projekti" />

    <div class="case-studies-section">
      <div class="container mt-5">
        <div class="row">
          <div
            class="col-lg-4 mb-5"
            v-for="(caseStudy, index) in caseStudies"
            :key="index"
          >
            <div class="case-card">
              <div class="custom-thumb">
                <n-link :to="`/projekti/${caseStudy.slug}`">
                  <img
                    class="case-shap case-shape1"
                    :src="`http://localhost:1337${caseStudy.thumbnailImage.url}`"
                    alt=""
                  />
                </n-link>
              </div>
              <div class="case-content">
                <h3 class="title">
                  <n-link :to="`/projekti/${caseStudy.slug}`">{{
                    caseStudy.title
                  }}</n-link>
                </h3>
                <p
                  v-for="(cat, index) in caseStudy.case_studies_categories"
                  :key="index"
                >
                  <n-link :to="`/projekti/kategorija/${cat.slug}`">{{
                    cat.title
                  }}</n-link>
                </p>
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
import { mapState } from "vuex";

export default {
  mounted() {
    this.$store.dispatch("getCaseStudies");
  },

  computed: {
    ...mapState(["caseStudies"]),
  },
};
</script>

<style lang="scss" scoped>
.case-content {
  opacity: 1;
  visibility: visible;
}

.custom-thumb {
  box-shadow: 0px 10px 10px #d6dee49e;
  margin-bottom: 20px;
  transition: .5s;
}

.custom-thumb:hover {
  box-shadow: 0px 30px 30px #d6dee49e;
  margin-bottom: 20px;
  transition: .5s;
}

</style>