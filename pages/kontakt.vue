<template>
  <div class="main-container">
    <Header />

    <OffCanvasMobileMenu />

    <Breadcrumb title="Kontakt" active-title="Kontakt" />

    <section class="contact-section-page section-ptb-150">
      <div class="container">
        <div class="contact-form-card">
          <div class="row mtn-35">
            <div class="col-lg-5 mt-35">
              <div class="section-title">
                <h3 class="title">Kontaktirajte nas</h3>
                <span class="comment-hr mb-0"></span>
              </div>
              <!-- contact media -->
              <div
                style="margin-top: 100px"
                class="contact-media contact-media-list"
              >
                <div class="icon">
                  <span class="icofont-ui-call"></span>
                </div>
                <div class="content">
                  <span class="text">Telefon:</span>
                  <a href="tel:+38765393205" class="number"
                    >+387 (0) 65 393 205</a
                  >
                </div>
              </div>
              <!-- contact media end -->
              <!-- contact media -->
              <div class="contact-media contact-media-list">
                <div class="icon">
                  <span class="icofont-send-mail"></span>
                </div>
                <div class="content">
                  <span class="text">Email:</span>
                  <a href="mailto:info@ad-kraft.com" class="number"
                    >info@ad-kraft.com</a
                  >
                </div>
              </div>
              <!-- contact media end -->
              <!-- contact media -->
              <div class="contact-media contact-media-list">
                <div class="icon">
                  <span class="icofont-map-pins"></span>
                </div>
                <div class="content">
                  <span class="text">Adresa:</span>
                  <h3 class="number">
                    Sime Šolaje 1a, 78000 Banja Luka, Bosna i Hercegovina
                  </h3>
                </div>
              </div>
              <!-- contact media end -->
              <div class="contact-media contact-media-list">
                <div class="icon">
                  <span class="icofont-clock-time"></span>
                </div>
                <div class="content">
                  <span class="text">Radno vrijeme:</span>
                  <h3 class="number">Ponedjeljak – Petak 09:00h – 17:00h</h3>
                </div>
              </div>
              <!-- contact media end -->
            </div>
            <div class="col-lg-7 mt-35">
              <div class="section-title">
                <h3 class="title">Pošaljite poruku</h3>
                <span class="comment-hr mb-0"></span>
              </div>

              <div class="comment-form pt-xl-12">
                <iframe
                  class="clickup-embed clickup-dynamic-height"
                  src="https://forms.clickup.com/f/4a7g5-372/49CJ0EF2CPLH9YOF94"
                  onwheel=""
                  width="100%"
                  height="100%"
                ></iframe>
                <script
                  async
                  src="https://app-cdn.clickup.com/assets/js/forms-embed/v1.js"
                ></script>
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
export default {
  components: {
    Header: () => import("@/components/Header"),
    OffCanvasMobileMenu: () => import("@/components/OffCanvasMobileMenu"),
    Breadcrumb: () => import("@/components/Breadcrumb"),
    ContactWrapper: () => import("@/components/ContactWrapper"),
    Footer: () => import("@/components/Footer"),
    ScrollTop: () => import("@/components/ScrollTop"),
  },

  head() {
    return {
      title: "Kontakt - Ad Kraft | Agencija za Digitalni Marketing i Web Dizajn",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Kontakt broj: +387 (0) 65 393 205 | Sime Šolaje 1a, 78000 Banja Luka, Bosna i Hercegovina | Ponedjeljak – Petak 09:00h – 17:00h | info@ad-kraft.com",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.cu-form {
  padding: 50px;
}

@media screen and (max-width: 768px) {
  .cu-form__container {
    padding: 30px;
  }
}
</style>