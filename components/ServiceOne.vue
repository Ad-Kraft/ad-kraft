<template>
  <section class="service-section section-ptb-150">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12" data-aos="fade-up" data-aos-delay="200">
          <div class="section-title primary text-center pb-100">
            <h3 class="title">Osvojite digitalni prostor na pravi način</h3>
            <h6>
              Stvorite veći broj klijenata, napravite više prodaje i
              zadržite korisnike na svojoj web stranici koristeći naše provjerene
              metode u izradi web stranica, digitalnog marketinga i SEO-a.
            </h6>
            <span class="hr-secondary"></span>
          </div>
        </div>
      </div>
      <div class="row mtn-30">
        <!-- service-card satrt -->
        <div class="col-md-6 mt-30" data-aos="fade-up" data-aos-delay="500">
          <div class="service-card">
            <div class="service-icon">
              <div class="roted-around danger">
                <span></span>
              </div>
              <img src="/images/icon/internet-marketing.png" alt="Digitalni marketing icon" />
            </div>
            <div class="service-content">
              <h4 class="title">Digitalni marketing</h4>
              <p>
                Sve naše kampanje uvijek se završavaju na isti način - USPJEŠNO,
                to postižemo kroz individualnost i fokusiranost na klijenta.
                Garantujemo postizanje postavljenih ciljeva, poput povećane
                prodaje ili većeg nivoa informisanosti.
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
              <img src="/images/icon/izrada-web-stranica.png" alt="Izrada web stranica icon" />
            </div>
            <div class="service-content">
              <h4 class="title">Izrada web stranica</h4>
              <p>
                Kreativan i upečatljiv dizajn te kvalitetno korisničko iskustvo
                je ono što najbolje radimo. Pored atraktivnog i funkcionalnog
                dizajna, mi brinemo da Vaša web stranica ispuni i osnovni cilj –
                konverziju.
              </p>
              <n-link to="/izrada-web-stranica" class="btn btn-warning"
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
              <img src="/images/icon/drustvene-mreze.png" alt="Drustvene mreze icon" />
            </div>
            <div class="service-content">
              <h4 class="title">Marketing na društvenim mrežama</h4>
              <p>
                Nikad ne znate koju društvenu mrežu Vaš klijent želi koristiti
                za interakciju s Vama. Naš tim stručnjaka iz oblasti društvenih
                medija brinuće za Vaše postojeće korisnike, istovremeno
                privlačeći nove.
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
              <img src="/images/icon/seo-optimizacija.png" alt="SEO icon" />
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
        <div class="col-12 mt-60" data-aos="fade-up" data-aos-delay="1500">
          <div class="call-to-action text-center">
            <n-link to="/usluge" class="btn btn-warning"
              >Sve usluge <i class="icofont-rounded-double-right"></i
            ></n-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.service-card {
  background: #202020;
}
</style>