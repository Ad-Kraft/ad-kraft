<template>
  <div class="brand-section" data-aos="fade-up" data-aos-delay="100">
    <div class="container">
      <div class="brand-card bg-cover">
        <p class="text-center">
          Vjeruje nam <span class="main-theme-color">80+</span> klijenata širom svijeta.
        </p>
        <swiper :options="brandCarousel">
          <div
            class="swiper-slide brand-item"
            v-for="(brand, index) in brandItems"
            :key="index"
          >
            <a :href="brand.url">
              <img class="brand-before" :src="brand.imgSrc" :alt="brand.alt" />
              <img
                class="brand-after"
                :src="brand.hoverImgSrc"
                :alt="brand.alt"
              />
            </a>
          </div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brandCarousel: {
        loop: true,
        speed: 800,
        autoplay: true,
        spaceBetween: 0,
        // Responsive breakpoints
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        },
      },

      brandItems: [
        {
          imgSrc: "/images/brand-logo/Elite-Dent-logo.webp",
          hoverImgSrc: "/images/brand-logo/Elite-Dent-logo-1.webp",
          url: "#",
          alt: "brand name",
        },
        {
          imgSrc: "/images/brand-logo/Dr.Kostic-logo.webp",
          hoverImgSrc: "/images/brand-logo/Dr.Kostic-logo-1.webp",
          url: "#",
          alt: "brand name",
        },
        {
          imgSrc: "/images/brand-logo/City-block-logo.webp",
          hoverImgSrc: "/images/brand-logo/City-block-logo-1.webp",
          url: "#",
          alt: "brand name",
        },
        {
          imgSrc: "/images/brand-logo/Vsistem-namjestaj-1.webp",
          hoverImgSrc: "/images/brand-logo/Vsistem-namjestaj.webp",
          url: "#",
          alt: "brand name",
        },
        {
          imgSrc: "/images/brand-logo/Bravo-Systems-logo.webp",
          hoverImgSrc: "/images/brand-logo/Bravo-Systems-logo-1.webp",
          url: "#",
          alt: "brand name",
        },
        {
          imgSrc: "/images/brand-logo/Zlatara-Sarm-logo.webp",
          hoverImgSrc: "/images/brand-logo/Zlatara-Sarm-logo-1.webp",
          url: "#",
          alt: "brand name",
        },
                {
          imgSrc: "/images/brand-logo/happycar-logo.webp",
          hoverImgSrc: "/images/brand-logo/happycar-logo-1.webp",
          url: "#",
          alt: "brand name",
        },
      ],
    };
  },
};
</script>
