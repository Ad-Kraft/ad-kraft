<template>
  <div class="main-container">
    <Header />

    <OffCanvasMobileMenu />

    <Hero />

    <BrandLogoCarousel />

    <ServiceOne />

    <section class="about-section">
      <div class="row">
        <div class="col-lg-6">
          <div
            class="about-img-content"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <img
              src="/images/ad-kraft-google-partner.jpg"
              alt="google partner badge"
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="offset-about">
            <div class="about-content section-title primary">
              <h5 class="sub-title">
                // Digitalna agencija koja će vas ojačati
              </h5>
              <h3 class="title">Google partner</h3>
              <p>
                Već 3 godine smo sertifikovani i priznati kao Google Partner,
                gdje smo pokazali našu stručnost i kvalitet. Svake godine
                obnavljamo našu sertifikaciju i redovno polažemo sve Google
                testove.
              </p>

              <div class="row">
                <div class="col-lg-6">
                  <div class="call-to-action text-center-sm mb-5">
                    <n-link to="/o-nama" class="btn btn-warning"
                      >Više o nama <i class="icofont-rounded-double-right"></i
                    ></n-link>
                    <a
                    href="https://www.google.com/partners/agency?id=7643035355"
                    target="_blank"
                    ><img
                      src="/images/ad-kraft-google-partner-badge.png"
                      alt="Google Partner bedž."
                      width="160px"
                      class="d-block mt-3"
                  /></a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <WorkingProcess />

    <CaseStudies />

    <FaqSection />

    <TestimonialOne />

    <BlogOne />

    <Footer />

    <ScrollTop />
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import("@/components/Header"),
    OffCanvasMobileMenu: () => import("@/components/OffCanvasMobileMenu"),
    Hero: () => import("@/components/Hero"),
    BrandLogoCarousel: () => import("@/components/BrandLogoCarousel"),
    ServiceOne: () => import("@/components/ServiceOne"),
    WorkingProcess: () => import("@/components/WorkingProcess"),
    CaseStudies: () => import("@/components/CaseStudies"),
    FaqSection: () => import("@/components/FaqSection"),
    TestimonialOne: () => import("@/components/TestimonialOne"),
    BlogOne: () => import("@/components/BlogOne"),
    Footer: () => import("@/components/Footer"),
    ScrollTop: () => import("@/components/ScrollTop"),
  },

  head() {
    return {
      title: "Ad Kraft | Agencija za Digitalni Marketing i Web Dizajn",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Digitalni Marketing Agencija | Banja Luka. Nudimo Vam usluge internet marketinga, web dizajna, SEO, grafičkog dizajna, hostinga i registracije domena.",
        },
      ],
    };
  },
};
</script>


