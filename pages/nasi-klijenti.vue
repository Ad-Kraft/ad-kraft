<template>
  <div class="main-container">
    <Header />

    <OffCanvasMobileMenu />

    <Breadcrumb title="Naši klijenti" active-title="Naši klijenti" />

    <section class="section-pt-150 section-pb-150">
      <div class="container-fluid pl-4 pr-4">
        <div class="row">
          <div
            v-for="clientImage in clientImages"
            :key="clientImage.index"
            class="col-lg-2 col-md-4 col-6"
          >
            <img
              style="width: 200px"
              :src="clientImage.imageSrc"
              :alt="clientImage.imageAlt"
            />
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
  data() {
    return {
      clientImages: [
        {imageSrc: '/images/nasi-klijenti/af-sajic-logo.png', imageAlt: 'Advokatska Firma Sajić logo'},
        {imageSrc: '/images/nasi-klijenti/asentiv-logo.jpg', imageAlt: 'Asentiv logo'},
        {imageSrc: '/images/nasi-klijenti/big-radio-logo.jpg', imageAlt: 'BIG Radio logo'},
        {imageSrc: '/images/nasi-klijenti/blue-ocean-logo.jpg', imageAlt: 'Blue Ocean logo'},
        {imageSrc: '/images/nasi-klijenti/bravo-studio-logo.png', imageAlt: 'Bravo Systems logo'},
        {imageSrc: '/images/nasi-klijenti/city-rent-car-logo.png', imageAlt: 'City Rent a Car logo'},
        {imageSrc: '/images/nasi-klijenti/cool-wool-logo.png', imageAlt: 'Cool Wool logo'},
        {imageSrc: '/images/nasi-klijenti/div-lek-logo.jpg', imageAlt: 'DIV LEK logo'},
        {imageSrc: '/images/nasi-klijenti/ekopro-logo.png', imageAlt: 'EKOPRO logo'},
        {imageSrc: '/images/nasi-klijenti/elite-dent-logo.png', imageAlt: 'Elite Dent logo'},
        {imageSrc: '/images/nasi-klijenti/jungle-land-logo.jpg', imageAlt: 'Jungle Land logo'},
        {imageSrc: '/images/nasi-klijenti/klinika-kostic-logo.png', imageAlt: 'Klinika Kostić logo'},
        {imageSrc: '/images/nasi-klijenti/kunden-magnet-logo.png', imageAlt: 'KundenMagnet logo'},
        {imageSrc: '/images/nasi-klijenti/leo-mazzotti-logo.png', imageAlt: 'Leo Mazzotti logo'},
        {imageSrc: '/images/nasi-klijenti/malfix-logo.png', imageAlt: 'Malfix logo'},
        {imageSrc: '/images/nasi-klijenti/meersand-logo.png', imageAlt: 'Meersand logo'},
        {imageSrc: '/images/nasi-klijenti/mini-spa-logo.jpg', imageAlt: 'Mini Spa logo'},
        {imageSrc: '/images/nasi-klijenti/njam-food-logo.jpg', imageAlt: 'Njam Food logo'},
        {imageSrc: '/images/nasi-klijenti/o2-logo.jpg', imageAlt: 'O2 logo'},
        {imageSrc: '/images/nasi-klijenti/preventiva-medica-logo.png', imageAlt: 'Preventiva Medical logo'},
        {imageSrc: '/images/nasi-klijenti/rc-kanjon-logo.png', imageAlt: 'RC Kanjon logo'},
        {imageSrc: '/images/nasi-klijenti/resetme-logo.png', imageAlt: 'RESETME logo'},
        {imageSrc: '/images/nasi-klijenti/strocean-logo.png', imageAlt: 'Strocean logo'},
        {imageSrc: '/images/nasi-klijenti/swiss-cosmetic-logo.png', imageAlt: 'Swiss Cosmetic logo'},
        {imageSrc: '/images/nasi-klijenti/urbanikrovovi-logo.png', imageAlt: 'Urbani Krovovi logo'},
        {imageSrc: '/images/nasi-klijenti/vrtic-nas-logo.png', imageAlt: 'Vrtić Naš logo'},
        {imageSrc: '/images/nasi-klijenti/vucko-apartmani-logo.png', imageAlt: 'Vučko Apartmani logo'},
        {imageSrc: '/images/nasi-klijenti/zlatara-sarm-logo.png', imageAlt: 'Zlatara Sarm logo'},
        {imageSrc: '/images/nasi-klijenti/autostill-logo.png', imageAlt: 'AutoStil logo'},
        {imageSrc: '/images/nasi-klijenti/cityblock-logo.png', imageAlt: 'CITY BLOCK logo'},
        {imageSrc: '/images/nasi-klijenti/pecenjara-castvo-logo.png', imageAlt: 'Pečenjara Carstvo logo'},
        {imageSrc: '/images/nasi-klijenti/alea-control-logo.png', imageAlt: 'Alea Control logo'},
        {imageSrc: '/images/nasi-klijenti/ko-moda-logo.png', imageAlt: 'ko.moda logo'},
        {imageSrc: '/images/nasi-klijenti/aqua-tim-logo.png', imageAlt: 'Aqua Tim logo'},
        {imageSrc: '/images/nasi-klijenti/fakom-nekretnine-logo.png', imageAlt: 'Fakom Nekretnine logo'},
        {imageSrc: '/images/nasi-klijenti/ryle-menswear-logo.png', imageAlt: 'Ryle Menswear logo'},
        {imageSrc: '/images/nasi-klijenti/mondello-park-logo.png', imageAlt: 'Mondello Park logo'},
        {imageSrc: '/images/nasi-klijenti/v-sistem-namjestaj-logo.png', imageAlt: 'V Sistem logo'},
        {imageSrc: '/images/nasi-klijenti/it-expert-logo.png', imageAlt: 'IT Expert logo'},
        {imageSrc: '/images/nasi-klijenti/leo-gres-logo.png', imageAlt: 'Leo Gres logo'},
        {imageSrc: '/images/nasi-klijenti/happy-car-logo.png', imageAlt: 'Happy Car logo'},
        {imageSrc: '/images/nasi-klijenti/santos-logo.png', imageAlt: 'SANTOS logo'},
        {imageSrc: '/images/nasi-klijenti/biostile-logo.png', imageAlt: 'BioStile logo'},
        {imageSrc: '/images/nasi-klijenti/cnc-hadzic-logo.png', imageAlt: 'CNC Hadžić logo'},
        {imageSrc: '/images/nasi-klijenti/collider-logo.png', imageAlt: 'Collider Studios logo'},
        {imageSrc: '/images/nasi-klijenti/corestate-logo.png', imageAlt: 'CoreStateHQ logo'},
        {imageSrc: '/images/nasi-klijenti/lulu-naturals-logo.png', imageAlt: 'LuLu Naturals logo'},
        {imageSrc: '/images/nasi-klijenti/manikas-group-logo.png', imageAlt: 'Manikas Group inc. logo'},
        {imageSrc: '/images/nasi-klijenti/archiereus-logo.png', imageAlt: 'Archiereus logo'},
        {imageSrc: '/images/nasi-klijenti/auto-demi-logo.png', imageAlt: 'Auto Demi logo'},
        {imageSrc: '/images/nasi-klijenti/pop-trade-logo.png', imageAlt: 'POP TRADE logo'}
      ]
    };
  },
};
</script>