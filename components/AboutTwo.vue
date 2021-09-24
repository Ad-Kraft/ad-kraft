<template>
  <section class="about-us-section pb-0">
    <div class="container">
      <div class="row mtn-30">
        <div class="col-md-6 col-xl-4 mt-30">
          <div class="about-thumb">
            <img src="/images/about/2.png" alt="images_not_found" />
          </div>
        </div>
        <div class="col-md-6 col-xl-5 mt-30">
          <div class="about-cards">
            <div class="about-card-list">
              <h4 class="title">Dobro došli u Ad Kraft</h4>
              <p>
                Ad Kraft je digitalna agencija sa kompletnom uslugom. Od web
                dizajna, preko SEO optimizacije i PPC oglašavanja, pa do vođenja
                društvenih mreža, naša usluga je cjelovita, a strategija
                sveobuhvatna.
              </p>
              <p>
                Sa strašću za pružanjem inovativnih IT rješenja na visokom
                nivou, donosimo izvanredno iskustvo našim klijentima,
                prevazilazimo izazove i stvaramo prava poslovna rješenja i
                vrednosti. Efektivno. Vođen strašću. Posvećeno.
              </p>
              <p>
                Na nas uvijek možete računati, obratite nam se s pitanjima te
                nas gledajte kao partnera u rastu. Jer Vaš uspjeh je i naš
                uspjeh.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-8 offset-lg-2 offset-xl-0 col-xl-3 mt-30">
          <AboutBanner />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    AboutBanner: () => import("@/components/AboutBanner"),
  },
};
</script>