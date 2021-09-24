<template>
  <div class="case-studies-section">
    <div class="container">
      <div class="row">
        <div class="col-12" data-aos="fade-up" data-aos-delay="100">
          <div class="section-title primary text-center pb-100">
            <h3 class="title">Studije slučaja</h3>
            <span class="hr-secondary"></span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="case-carousel" data-aos="fade-up" data-aos-delay="900">
            <swiper :options="caseCarousel">
              <div
                class="swiper-slide"
                v-for="(caseStudy, index) in caseStudies"
                :key="index"
              >
                <div class="case-card">
                  <div class="thumb">
                    <n-link :to="`/projekti/${caseStudy.slug}`">
                      <img
                        class="case-image"
                        :src="`http://localhost:1337${caseStudy.thumbnailImage.url}`"
                        :alt="caseStudy.title"
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
            </swiper>
            <!-- If we need navigation buttons -->
            <div class="case-carousel-navigation">
              <div class="case-carousel swiper-button-prev">
                <i class="icofont-rounded-double-left"></i>
              </div>
              <div class="case-carousel swiper-button-next">
                <i class="icofont-rounded-double-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      caseCarousel: {
        loop: true,
        speed: 800,
        spaceBetween: 30,
        centeredSlides: true,
        navigation: {
          nextEl: ".case-carousel .swiper-button-next",
          prevEl: ".case-carousel .swiper-button-prev",
        },
        // Responsive breakpoints
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        },
      },
    };
  },

  mounted() {
    this.$store.dispatch("getCaseStudies");
  },

  computed: {
    ...mapState(["caseStudies"]),
  },
};
</script>
