<template>
  <section class="hero-section">
    <img class="shape shape1" src="/images/hero/shape1.png" alt="404" />
    <img class="shape shape2" src="/images/hero/shape2.png" alt="404" />
    <img class="shape particle1" src="/images/hero/particle1.png" alt="404" />
    <img class="shape particle2" src="/images/hero/particle2.png" alt="404" />
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-xl-6">
          <div class="hero-content">
            <h2 class="title">Agencija za digitalni marketing</h2>
            <p>
              Mi Vam možemo pomoći u izradi web stranica, vođenju digitalnog
              marketinga i određivanju strategije za Vaš uspjeh na digitalnom
              prostoru. Sve sa ciljem povećanja Vaše zarade!
            </p>

            <n-link class="btn btn-warning" to="/kontakt"
              >Zatraži ponudu</n-link
            >
          </div>
        </div>
        <div class="col-lg-7 col-xl-6">
          <div class="hero-img">
            <img
              class="animate-one"
              src="/images/hero/ad-kraft-digitalna-marketing-agencija.png"
              alt="404"
              data-aos="zoom-in"
              data-aos-delay="100"
            />
            <!-- <div class="position-absolute animate-two">
              <img
                data-aos="fade-up"
                data-aos-delay="600"
                src="/images/hero/2.png"
                alt="404"
              />
            </div> -->
            <div class="position-absolute animate-three">
              <img
                data-aos="fade-down"
                data-aos-delay="400"
                src="/images/hero/3.png"
                alt="404"
                width="250px"
              />
            </div>
          </div>
          <div class="hero-img-mobile">
            <img src="/images/hero/ad-kraft-digitalna-marketing-agencija-mobile.png" alt="images-not_found" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>