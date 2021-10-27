<template>
  <div class="main-container">
    <Header />

    <OffCanvasMobileMenu />

    <Breadcrumb title="Hosting" active-title="Hosting" />

    <section class="service-details-section">
      <div class="container-fluid pl-4 pr-4">
        <div class="row pl-4 pr-4">
          <div class="service-details">
            <h2 class="title">Web Hosting</h2>
            <p>
              Web hosting je u prevodu smještaj web stranica to jeste,
              cjelokupnog internet sadržaja na web server, tako da budu dostupne
              svima.
            </p>
          </div>
          <div class="service-details">
            <div class="row">
              <div class="col-lg-8">
                <h4 class="text-dark">Zašto Ad Kraft web hosting?</h4>
                <ul>
                  <li>
                    Ad Kraft web hosting platforme su stabilne, predstavljaju
                    najbolji odnos cijena–kvalitet, ispunjavaju najviše
                    standarde i omogućavaju korisnicima da putem web panela, u
                    bilo kom trenutku pristupe, mijenjaju ili čuvaju sadržaj
                    svoje web aplikacije;
                  </li>
                  <li>
                    Ad Kraft Vam omogućava Linux hosting platformu, kao i
                    stručan i profesinalan tim koji će Vam u svakom trenutku
                    pomoći u slučaju bilo kakvih nedoumica ili problema vezano
                    za naše servise;
                  </li>
                  <li>
                    Ad Kraft Vam omogućava besplatnu osnovu tehničku podršku na
                    našem jeziku, putem email-a od koje ćete dobiti odgovarajući
                    savjet, prijedlog ili rješenje vašeg problema;
                  </li>
                  <li>
                    Ad Kraft Vam garantuje da ćete za svoj novac dobiti
                    odgovarajuću profesionalnu i kvalitetnu web hosting uslugu;
                  </li>
                  <li>
                    Ad Kraft serveri ispunjavaju vodeće sigurnosne standarde;
                  </li>
                  <li>
                    Ad Kraft će besplatno izvršiti migraciju web i email
                    sadržaja sa posojećih servera na našu platformu;
                  </li>
                  <li>Ad Kraft Vam garantuje bezbjednost podataka;</li>
                  <li>
                    Ad Kraft tehnička podrška je dostupna 14/5, za sva pitanja
                    na srpskom i engleskom jeziku, putem emaila
                    info@ad-kraft.com.
                  </li>
                </ul>
              </div>
              <div class="col-lg-4">
                <img src="/images/hosting/ad-kraft-hosting.png" alt="Hosting slika" />
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-5 mb-5">
          <div class="col-md-4 col-sm-12 mb-3">
            <div class="pricing-tab">
              <span class="pricing-feat"
                ><span>Osnovni <br />paket</span></span
              >
              <h3 class="pricing-title">Basic</h3>
              <h3 class="price">
                <span class="pricee">100 KM</span
                ><span class="pricing-dura">godišnje</span>
              </h3>
              <ul class="hosting-packages">
                <li>
                  <span class="price-featur">5 GB prostora</span>
                </li>

                <li>
                  <span class="price-featur">1 domen</span>
                </li>

                <li>
                  <span class="price-featur">Podrška 14/5 neograničeno</span>
                </li>

                <li>
                  <span class="price-featur">Mjesečni protok neograničeno</span>
                </li>
                <li>
                  <span class="price-featur">1 e-mail nalog</span>
                </li>
                <li>
                  <span class="price-featur">1 FTP nalog</span>
                </li>
              </ul>
              <n-link to="/kontakt" rel="nofollow" class="btn btn-warning mt-3"
                >Izaberite odmah</n-link
              >
            </div>
          </div>

          <div class="col-md-4 col-sm-12 mb-3">
            <div class="pricing-tab">
              <span class="pricing-feat"
                ><span>Naš<br />izbor</span></span
              >
              <h3 class="pricing-title">Medium</h3>
              <h3 class="price">
                <span class="pricee">150 KM</span
                ><span class="pricing-dura">godišnje</span>
              </h3>
              <ul class="hosting-packages">
                <li>
                  <span class="price-featur">10 GB prostora</span>
                </li>

                <li>
                  <span class="price-featur">1 domen</span>
                </li>

                <li>
                  <span class="price-featur">Podrška 14/5 neograničeno</span>
                </li>

                <li>
                  <span class="price-featur">Mjesečni protok neograničeno</span>
                </li>
                <li>
                  <span class="price-featur">3 e-mail naloga</span>
                </li>

                <li>
                  <span class="price-featur">neograničeno FTP naloga</span>
                </li>
              </ul>
              <n-link to="/kontakt" rel="nofollow" class="btn btn-warning mt-3"
                >Izaberite odmah</n-link
              >
            </div>
          </div>
          <div class="col-md-4 col-sm-12 mb-3">
            <div class="pricing-tab">
              <span class="pricing-feat"><span>Popularno</span></span>
              <h3 class="pricing-title">Premium</h3>
              <h3 class="price">
                <span class="pricee">250 KM</span
                ><span class="pricing-dura">godišnje</span>
              </h3>
              <ul class="hosting-packages">
                <li>
                  <span class="price-featur">30 GB prostora</span>
                </li>

                <li>
                  <span class="price-featur">1 domen</span>
                </li>

                <li>
                  <span class="price-featur">Podrška 14/5 neograničeno</span>
                </li>

                <li>
                  <span class="price-featur">Mjesečni protok neograničeno</span>
                </li>
                <li>
                  <span class="price-featur">5 e-mail naloga</span>
                </li>

                <li>
                  <span class="price-featur">neograničeno FTP naloga</span>
                </li>
              </ul>
              <n-link to="/kontakt" rel="nofollow" class="btn btn-warning mt-3"
                >Izaberite odmah</n-link
              >
            </div>
          </div>
        </div>

        <div class="row">
          <h2 class="text-dark mb-4">Detaljnije o paketima</h2>
          <div class="table-responsive">
            <table class="table table-pricing">
              <thead>
                <tr class="">
                  <th style="width: 25%" scope="col main-table-col">
                    Paket uključuje
                  </th>
                  <th class="text-center" style="width: 25%" scope="col">
                    Basic
                  </th>
                  <th class="text-center" style="width: 25%" scope="col">
                    Medium
                  </th>
                  <th class="text-center" style="width: 25%" scope="col">
                    Premium
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Prostor na disku</th>
                  <td>5 GB</td>
                  <td>10 GB</td>
                  <td>30 GB</td>
                </tr>
                <tr>
                  <th scope="row">Broj domena</th>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <th scope="row">Broj poddomena</th>
                  <td>1</td>
                  <td>neograničeno</td>
                  <td>neograničeno</td>
                </tr>
                <tr>
                  <th scope="row">Podrška 14/5</th>
                  <td>neograničeno</td>
                  <td>neograničeno</td>
                  <td>neograničeno</td>
                </tr>
                <tr>
                  <th scope="row">Mjesečni protok (traffic)</th>
                  <td>neograničeno</td>
                  <td>neograničeno</td>
                  <td>neograničeno</td>
                </tr>
                <tr>
                  <th scope="row">Broj email naloga</th>
                  <td>1</td>
                  <td>3</td>
                  <td>5</td>
                </tr>
                <tr>
                  <th scope="row">E-mail prostor po mailboxu</th>
                  <td>Ograničeno kapacitetom zakupljenog diska</td>
                  <td>Ograničeno kapacitetom zakupljenog diska</td>
                  <td>Ograničeno kapacitetom zakupljenog diska</td>
                </tr>
                <tr>
                  <th scope="row">Broj FTP Accounts (naloga)</th>
                  <td>1</td>
                  <td>neograničeno</td>
                  <td>neograničeno</td>
                </tr>
                <tr>
                  <th scope="row">Uptime SLA</th>
                  <td>99.99%</td>
                  <td>99.99%</td>
                  <td>99.99%</td>
                </tr>
                <tr>
                  <th scope="row">Operativni sistem</th>
                  <td>Linux</td>
                  <td>Linux</td>
                  <td>Linux</td>
                </tr>
                <tr>
                  <th scope="row">Hosting Control Panel</th>
                  <td>Plesk</td>
                  <td>Plesk</td>
                  <td>Plesk</td>
                </tr>
                <tr>
                  <th scope="row">SSL Sertifikat</th>
                  <td>Da</td>
                  <td>Da</td>
                  <td>Da</td>
                </tr>
                <tr>
                  <th scope="row">VirusAlert monitoring</th>
                  <td>Da</td>
                  <td>Da</td>
                  <td>Da</td>
                </tr>
                <tr>
                  <th scope="row">
                    "On Click Install Apps (Joomla, WordPress, Concrete5,
                    DotNetNuke, SuiteCRM, …)"
                  </th>
                  <td>Da</td>
                  <td>Da</td>
                  <td>Da</td>
                </tr>
                <tr>
                  <th scope="row">Antispam i Antivirus zaštita</th>
                  <td>Da</td>
                  <td>Da</td>
                  <td>Da</td>
                </tr>
                <tr>
                  <th scope="row">
                    "Platforma podržava: pop3, imap, webmail, e-mail forwarding,
                    white/black liste"
                  </th>
                  <td>Da</td>
                  <td>Da</td>
                  <td>Da</td>
                </tr>
                <tr>
                  <th scope="row">
                    Podrška za php 5.3, 5.4, 5.5, 5.6, 7.0, 8.0.8
                  </th>
                  <td>Da</td>
                  <td>Da</td>
                  <td>Da</td>
                </tr>
                <tr>
                  <th>Aktivacija usluge</th>
                  <td>Da</td>
                  <td>Da</td>
                  <td>Da</td>
                </tr>
                <tr>
                  <th scope="row">Besplatan automatski backup</th>
                  <td>Da</td>
                  <td>Da</td>
                  <td>Da</td>
                </tr>
                <tr>
                  <th scope="row">Cijena</th>
                  <td>100 KM</td>
                  <td>150 KM</td>
                  <td>250 KM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="row mtn-35">
          <div class="col-12 mt-35">
            <div class="service-details">
              <div class="row mt-5 mb-5">
                <div class="col-lg-6 order-2 order-lg-1">
                  <img src="/images/hosting/ad-kraft-hosting-3.png" alt="Slika hosting 2" />
                </div>
                <div class="col-lg-6 order-1 order-lg-2">
                  <h4 class="text-dark">Napomena:</h4>
                  <ul>
                    <li>
                      SSL/TLS Certificates vam automatski omogućava bolji search
                      ranking na Google-u (pretraživaču);
                    </li>
                    <li>
                      Ad Kraft nije odgovaran za sadržaj i funkcionalnost samog
                      sadržaja web sajta na platformi, za navedene stavke
                      nadležan je webmaster (onaj ko je programirao/kodirao samu
                      web prezentaciju)
                    </li>
                    <li>Obračunavanje se vrši prije izvršene usluge</li>
                    <li>
                      Zakup domena i održavanje naziva domena se naplaćuje 40,00
                      KM bez PDV-a na godišnjem nivou.
                    </li>
                    <li>
                      Popust 10% za zakup Ad Kraft Hosting paketa na 2 (dvije)
                      godine.
                    </li>
                    <p class="mt-3">
                      Ad Kraft Web Hosting usluga obezbjeđuje Osnovni nivo
                      podrške, a koji je uključen u godišnji zakup Ad Kraft Web
                      Hostinga. Za dodatne usluge podrške koje se definišu po
                      želji klijenta, Ad Kraft obezbjeđuje Premium nivo podrške
                      koji se dodatno fakturiše (85,00KM / inženjer satu).
                    </p>
                  </ul>
                </div>
              </div>
            </div>
            <div class="service-details">
              <div class="row mt-5 mb-5">
                <div class="col-lg-6">
                  <h4 class="text-dark">I Osnovni nivo podrške:</h4>
                  <ul>
                    <li>Otvaranje hosting naloga na serveru,</li>
                    <li>Kreiranje subskripcije za domen,</li>
                    <li>Postavljanje web sadržaja na hosting,</li>
                    <li>
                      Kreiranje korisničkih naloga i proslijeđivanje korisniku
                      pristupnih parametara,
                    </li>
                    <li>
                      DNS konfiguracija, inicijalna konfiguracija i promjene DNS
                      zapisa pri prelasku na Ad Kraft hosting,
                    </li>
                    <li>Otvaranje mail naloga,</li>
                    <li>Migracija do 10 mail naloga,</li>
                    <li>
                      Inicijalna migracija web prezentacije sa postojećeg
                      hostinga,
                    </li>
                    <li>
                      Sedmični backup sadržaja se radi na sedmičnom nivou uz 3
                      zadnja raspoloživa backup-a,
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <img src="/images/hosting/ad-kraft-hosting-1.png" alt="Slika hosting serveri" />
                </div>
              </div>
            </div>
            <div class="service-details">
              <div class="row mt-5 mb-5">
                <div class="col-lg-6 order-2 order-lg-1">
                  <img src="/images/hosting/ad-kraft-hosting-2.png" alt="Hosting slika 3">
                </div>
                <div class="col-lg-6 mt-60 order-1 order-lg-2">
                  <h4 class="text-dark">II Premium nivo podrške:</h4>
                  <ul>
                    <li>Migracija više od 10 mail naloga,</li>
                    <li>
                      Dnevni back-up podataka uz raspoloživost 3 posljednja dana
                      (inženjer sat),
                    </li>
                    <li>
                      Otklanjanje problema sa web prezentacijama (ažuriranje
                      CMS, plugin-ova, uklanjanje virusa, …).
                    </li>
                    <p class="mt-3">
                      Ovaj nivo podrške se fakturiše jednokratno prema utrošenom
                      vremenu – ponuda prema zahtjevu.
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Cta :title="ctaTitle" :desc="ctaDesc" />

        <div class="row g-0">
          <div class="col-12">
            <div class="next-prev-section">
              <div class="row align-items-center align-items-xl-start">
                <div class="col-sm-4 col-6">
                  <div class="service-prev service-media">
                    <div class="content">
                      <h4 class="title">Optimizacija konverzija</h4>
                      <n-link to="/optimizacija-konverzija" class="link"
                        ><i class="icofont-rounded-double-left"></i>
                        Prethodno</n-link
                      >
                    </div>
                  </div>
                </div>

                <div class="col-sm-4 d-none d-sm-block"></div>

                <div class="col-sm-4 col-6">
                  <div class="service-next service-media">
                    <div class="content">
                      <h4 class="title">Digitalni marketing</h4>
                      <n-link to="/digitalni-marketing" class="link"
                        >Sljedeće <i class="icofont-rounded-double-right"></i
                      ></n-link>
                    </div>
                  </div>
                </div>
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
    ServiceCarousel: () => import("@/components/ServiceCarousel"),
    ServiceDetailsContent: () => import("@/components/ServiceDetailsContent"),
    Footer: () => import("@/components/Footer"),
    ScrollTop: () => import("@/components/ScrollTop"),
  },

  data() {
    return {
      ctaTitle:
        "Trebate pomoć prilikom definisanja hosting paketa za Vaš sajt?",
      ctaDesc:
        "Ad Kraft web hosting platforme su stabilne, predstavljaju najbolji odnos cijena–kvalitet, ispunjavaju najviše standarde. Odaberite web hosting paket po Vašim potrebama.",
    };
  },

  head() {
    return {
      title: "Hosting - Ad Kraft | Agencija za Digitalni Marketing i Web Dizajn",
            meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Digitalni Marketing Agencija | Banja Luka. Nudimo Vam usluge hostinga i registracije domena. Izaberite paket po Vašoj mjeri.",
        },
      ],
    };
  },
};
</script>


<style lang="scss" scoped>

.row {
  margin-left: 0px;
  margin-right: 0px;
}

ul {
  margin: 20px;
}

ul li {
  list-style-type: decimal;
}

.hosting-packages li {
  list-style: none;
}
.pricing-tab {
  position: relative;
  padding: 40px;
  background-color: #fff;
  text-align: center;
  box-shadow: 0px 20px 140px #d6dee49e;
}

.table-pricing {
  border-radius: 10px;
}

.table-responsive {
  box-shadow: 0px 20px 140px #d6dee49e;
}

.main-table-col {
  background-color: #6ab3f3;
  color: white;
}

.table-pricing tr td {
  text-align: center;
}

.table-pricing thead th:nth-child(2),
.table-pricing thead th:nth-child(4),
.table-pricing tr td:nth-child(2),
.table-pricing tr td:nth-child(4) {
  background-color: #f7faff;
  color: black;
}

.table-pricing tbody th {
  font-weight: 400;
}

.pricing-feat {
  height: 80px;
  width: 80px;
  display: block;
  position: absolute;
  top: -20px;
  right: -20px;
  background-color: $main-theme-color;
  text-align: center;
  border-radius: 50%;
}

.pricing-feat span {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: white;
  font-size: 15px;
  line-height: 1.2em;
}

.pricing-title {
  color: $main-theme-color;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0px 0px 0px 0px;
  margin-bottom: 15px;
}

.price {
  margin: 12px 0px 19px 0px;
}
.pricee {
  color: #000000;
  font-size: 30px;
  font-weight: 600;
}

.pricing-dura {
  display: inline-block;
  padding-left: 14px;
  color: $main-theme-color;
  font-size: 15px;
  line-height: 1em;
  font-weight: 400;
}
</style>