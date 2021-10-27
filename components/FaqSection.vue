<template>
  <section class="faq-section">
    <img src="/images/faq/bg.png" alt="cesto postavljena pitanja-pozadina slika" class="faq-bg" />
    <div class="container">
      <div class="row mtn-30">
        <div class="col-xl-6 mt-30">
          <div class="faq-image" data-aos="zoom-in" data-aos-delay="100">
            <img src="/images/faq/ad-kraft-digitalna-marketing-agencija-faq.webp" alt="Cesto postavljena pitanja-Agencija za digitalni marketin i web dizajn" />
          </div>
        </div>
        <div class="col-xl-6 mt-30">
          <div class="faq-content">
            <div class="section-title primary">
              <h5 class="sub-title">// FAQ.</h5>
              <h3 class="title">Često postavljana pitanja.</h3>
              <span class="hr-primary mt-4"></span>
            </div>

            <Accordion />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    Accordion: () => import("@/components/Accordion"),
  },
};
</script>
