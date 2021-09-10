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
              <h4 class="title">Welcome To Seolly</h4>
              <p>
                Strast, kreativnost i želja da internet učinimo boljim mjestom
                su vrijednosti kojima se vraćamo iz dana u dan. Inovativnim
                idejama želimo napraviti razliku u digitalnom svijetu. Međusobna
                saradnja pojedinaca kao i timova je snaga koja stvara ideje koje
                nas pokreću.
              </p>
              <p>
                Kao društveno odgovorna kompanija nastojimo podstaknuti razvoj
                naše društvene zajednice i pozitivno uticati na naše okruženje.
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