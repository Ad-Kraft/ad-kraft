<template>
  <div class="main-container">
    <Header />

    <OffCanvasMobileMenu />

    <Breadcrumb title="Usluge" active-title="Usluge" />

    <section class="service-section section-ptb-150">
      <div class="container-fluid">
        <div class="row mtn-30">
          <!-- service-card start -->
          <div class="col-md-6 mt-30" data-aos="fade-up" data-aos-delay="500">
            <div class="service-card">
              <div class="service-icon">
                <div class="roted-around danger">
                  <span></span>
                </div>
                <img src="/images/icon/internet-marketing.png" alt="Digitalni marketing-icon" />
              </div>
              <div class="service-content">
                <h4 class="title">Digitalni marketing</h4>
                <p>
                  Sve naše kampanje uvijek se završavaju na isti način -
                  USPJEŠNO, to postižemo kroz individualnost i fokusiranost na
                  klijenta. Garantujemo postizanje postavljenih ciljeva, poput
                  povećane prodaje ili većeg nivoa informisanosti.
                </p>
                <n-link to="/digitalni-marketing" class="btn btn-warning"
                  >Saznajte više</n-link
                >
              </div>
            </div>
          </div>
          <!-- service-card end -->
          <!-- service-card satrt -->
          <div class="col-md-6 mt-30" data-aos="fade-up" data-aos-delay="1000">
            <div class="service-card">
              <div class="service-icon">
                <div class="roted-around warning">
                  <span></span>
                </div>
                <img src="/images/icon/izrada-web-stranica.png" alt="Izrada web stranica-icon" />
              </div>
              <div class="service-content">
                <h4 class="title">Izrada web stranica</h4>
                <p>
                  Kreativan i upečatljiv dizajn te kvalitetno korisničko
                  iskustvo je ono što najbolje radimo. Pored atraktivnog i
                  funkcionalnog dizajna, mi brinemo da Vaša web stranica ispuni
                  i osnovni cilj – konverziju.
                </p>
                <n-link
                  to="/izrada-web-stranica"
                  class="btn btn-warning"
                  >Saznajte više</n-link
                >
              </div>
            </div>
          </div>
          <!-- service-card end -->
          <!-- service-card satrt -->
          <div class="col-md-6 mt-30" data-aos="fade-up" data-aos-delay="1500">
            <div class="service-card">
              <div class="service-icon">
                <div class="roted-around primary">
                  <span></span>
                </div>
                <img src="/images/icon/drustvene-mreze.png" alt="Marketing na društvenim mrežama-icon" />
              </div>
              <div class="service-content">
                <h4 class="title">Marketing na društvenim mrežama</h4>
                <p>
                  Nikad ne znate koju društvenu mrežu Vaš klijent želi koristiti
                  za interakciju s Vama. Naš tim stručnjaka iz oblasti
                  društvenih medija brinuće za Vaše postojeće korisnike,
                  istovremeno privlačeći nove.
                </p>
                <n-link to="/marketing-na-drustvenim-mrezama" class="btn btn-warning"
                  >Saznajte više</n-link
                >
              </div>
            </div>
          </div>
          <!-- service-card end -->
          <!-- service-card satrt -->
          <div class="col-md-6 mt-30" data-aos="fade-up" data-aos-delay="2000">
            <div class="service-card">
              <div class="service-icon">
                <div class="roted-around secondary">
                  <span></span>
                </div>
                <img src="/images/icon/seo-optimizacija.png" alt="SEO optimizacija-icon" />
              </div>
              <div class="service-content">
                <h4 class="title">SEO optimizacija</h4>
                <p>
                  SEO nudi vidljivu i efikasnu prisutnost na internet
                  pretraživačima što dovodi do značajnog povećanja prodaje,
                  profitabilnosti i ekonomičnosti naših klijenata.
                </p>
                <n-link
                  to="/search-engine-optimizacija"
                  class="btn btn-warning"
                  >Saznajte više</n-link
                >
              </div>
            </div>
          </div>
          <!-- service-card end -->
        </div>

        <div class="row">
          <!-- service-card satrt -->
          <div class="col-md-6 mt-30" data-aos="fade-up" data-aos-delay="2000">
            <div class="service-card">
              <div class="service-icon">
                <div class="roted-around secondary">
                  <span></span>
                </div>
                <img src="/images/icon/graficki-dizajn.png" alt="Grafički dizajn-icon" />
              </div>
              <div class="service-content">
                <h4 class="title">Grafički dizajn</h4>
                <p>
                  U konkurentnom svijetu prvi utisak je ključan za postizanje
                  Vaših ciljeva i uspostavljanje odnosa s potencijalnim
                  klijentima. Zato su dobro pripremljena grafička rješenja bitan
                  dio efikasne marketinške strategije.
                </p>

                

                <n-link to="/graficki-dizajn" class="btn btn-warning"

                  >Saznajte više</n-link
                >
              </div>
            </div>
          </div>
          <!-- service-card end -->
          <!-- service-card satrt -->
          <div class="col-md-6 mt-30" data-aos="fade-up" data-aos-delay="2000">
            <div class="service-card">
              <div class="service-icon">
                <div class="roted-around secondary">
                  <span></span>
                </div>
                <img src="/images/icon/optimizacija-konverzija.png" alt="Optimizacija konverzija-icon" />
              </div>
              <div class="service-content">
                <h4 class="title">Optimizacija konverzija</h4>
                <p>
                  Optimizacija stope konverzija (CRO) je sistemski proces koji
                  ima za cilj da posjetioce Vaše web stranice pretvori u lojalne
                  klijente
                </p>
                <n-link
                  to="/optimizacija-konverzija"

                

                  class="btn btn-warning"

                  >Saznajte više</n-link
                >
              </div>
            </div>
          </div>
          <!-- service-card end -->
          <!-- service-card satrt -->
          <div class="col-md-12 mt-30" data-aos="fade-up" data-aos-delay="2000">
            <div class="service-card">
              <div class="service-icon">
                <div class="roted-around secondary">
                  <span></span>
                </div>
                <img src="/images/icon/hosting.png" alt="Hosting-icon" />
              </div>
              <div class="service-content">
                <h4 class="title">Hosting</h4>
                <p>
                  Našim partnerima nudimo kvalitetan hosting po pristupačnim
                  cijena.
                </p>

                

                <n-link to="/hosting" class="btn btn-warning"

                  >Saznajte više</n-link
                >
              </div>
            </div>
          </div>
          <!-- service-card end -->
        </div>
      </div>
    </section>

    <TestimonialOne />

    <BlogOne />

    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import("@/components/Header"),
    OffCanvasMobileMenu: () => import("@/components/OffCanvasMobileMenu"),
    Breadcrumb: () => import("@/components/Breadcrumb"),
    TestimonialOne: () => import("@/components/TestimonialOne"),
    BlogOne: () => import("@/components/BlogOne"),
    Footer: () => import("@/components/Footer"),
  },

  head() {
    return {
      title: "Usluge - Ad Kraft | Agencija za Digitalni Marketing i Web Dizajn ",
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

<style>
</style>