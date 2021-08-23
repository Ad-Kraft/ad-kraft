<template>
    <section class="testimonial-section">
        <div class="container">
            <div class="row">
                <div class="col-12" data-aos="fade-up" data-aos-delay="100">
                    <div class="section-title primary text-center pb-100">
                        <h3 class="title">Klijenti o nama</h3>
                        <h6>Vrlo smo ponosni na usluge koje pružamo našim klijentima. Zapravo, odnos s klijentom vidimo puno ličnijim nego većina digitalnih agencija. Naši odnosi s klijentima ne počinju u 9:00h i završavaju u 17:00h – s njima smo neprekidno kako bismo im pružili kvalitetnu uslugu kakvu zaslužuju.</h6>
                        <span class="hr-secondary"></span>
                    </div>
                </div>
            </div>
            <div class="row position-relative">
                <div class="clients">
                    <img src="/images/testimonial/2.png" alt="images-not_found" class="client" />
                    <img src="/images/testimonial/3.png" alt="images-not_found" class="client" />
                    <img src="/images/testimonial/4.png" alt="images-not_found" class="client" />
                    <img src="/images/testimonial/5.png" alt="images-not_found" class="client" />
                    <img src="/images/testimonial/6.png" alt="images-not_found" class="client" />
                    <img src="/images/testimonial/7.png" alt="images-not_found" class="client" />
                </div>
                <div class="col-12 mx-auto">
                    <div class="testimonial-content position-relative">
                        <img class="shape" src="/images/testimonial/shape.png" alt="images-not_found" />
                        <div class="testimonial-carousel">
                            <swiper :options="testimonialCarousel">
                                <!-- swiper-slide start -->
                                <div class="swiper-slide" data-aos="fade-up" data-aos-delay="300">
                                    <div class="profile-wrap">
                                        <img class="testimonial-profile" src="/images/testimonial/lg-1.png" alt="images-not_found" />
                                    </div>
                                    <p>„Imaju sjajan tim koji savršeno upravlja našim kampanjama. Pomogli su nam da razvijemo svoj biznis i sad nam je najveći problem što imamo previše posla. Ad Kraft je zaslužan što smo danas ispred naše konkurencije. Hvala vam!”</p>
                                    <h5 class="sub-title">Mladen Kostić – SHB Kostić</h5>
                                    <span class="designation">spec. internista</span>
                                </div>
                                <!-- swiper-slide end -->
                                <!-- swiper-slide start -->
                                <div class="swiper-slide" data-aos="fade-up" data-aos-delay="300">
                                    <div class="profile-wrap">
                                        <img class="testimonial-profile" src="/images/testimonial/lg-2.png" alt="images-not_found" />
                                    </div>
                                    <p>„Riješili su sve probleme koje smo imali s Google Ads-om. Conversion rate nam se povećao za 3% i započeli smo niz novih kampanja. Sviđa mi se njihova agilnost, stručnost i njihov proaktivni nastup.“</p>
                                    <h5 class="sub-title">Goran Gojić – Bravo Systems</h5>
                                    <span class="designation">Direktor</span>
                                </div>
                                <!-- swiper-slide end -->
                                <!-- swiper-slide start -->
                                <div class="swiper-slide" data-aos="fade-up" data-aos-delay="300">
                                    <div class="profile-wrap">
                                        <img class="testimonial-profile" src="/images/testimonial/lg-3.png" alt="images-not_found" />
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text the printing and typesetting as been the industry's standard dummy text ever since the 1500s when unknown printer took a galley of type and scrambled it to make specimen book has survived not only five centuries</p>
                                    <h5 class="sub-title">Wendy W Jones</h5>
                                    <span class="designation">Ui/Ux designer</span>
                                </div>
                                <!-- swiper-slide end -->
                                <!-- swiper-slide start -->
                                <div class="swiper-slide" data-aos="fade-up" data-aos-delay="300">
                                    <div class="profile-wrap">
                                        <img class="testimonial-profile" src="/images/testimonial/lg-4.png" alt="images-not_found" />
                                    </div>
                                    <p>„Ako tražite prave saradnike, izaberite Ad Kraft. Ad Kraft nam je sa dobrom strategijom društvenih medija, novom web stranicom i razvojem SEO strategije pomogao da se probijemo. Imaju odličan tim i sada ne mogu zamisliti da s nekim drugim sarađujemo.”</p>
                                    <h5 class="sub-title">Dr. Boris Ćulum – Elite Dent</h5>
                                    <span class="designation">Doktor</span>
                                </div>
                                <!-- swiper-slide end -->
                                <!-- swiper-slide start -->
                                <div class="swiper-slide" data-aos="fade-up" data-aos-delay="300">
                                    <div class="profile-wrap">
                                        <img class="testimonial-profile" src="/images/testimonial/lg-5.png" alt="images-not_found" />
                                    </div>
                                    <p>„Ad Kraft je vrhunska kompanija. Znaju svoj posao i potpuno su fokusirani na ostvarivanje rezultata. Preporučujem ih svima.”</p>
                                    <h5 class="sub-title">Dean Žuna – Ad Lab</h5>
                                    <span class="designation">Direktor</span>
                                </div>
                                <!-- swiper-slide end -->
                                <!-- swiper-slide start -->
                                <div class="swiper-slide" data-aos="fade-up" data-aos-delay="300">
                                    <div class="profile-wrap">
                                        <img class="testimonial-profile" src="/images/testimonial/lg-6.png" alt="images-not_found" />
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text the printing and typesetting as been the industry's standard dummy text ever since the 1500s when unknown printer took a galley of type and scrambled it to make specimen book has survived not only five centuries</p>
                                    <h5 class="sub-title">Doreen E. Prince</h5>
                                    <span class="designation">Ui/Ux designer</span>
                                </div>
                                <!-- swiper-slide end -->
                            </swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                testimonialCarousel: {
                    loop: true,
                    speed: 1000,
                    slidesPerView: 1,
                    spaceBetween: 0,
                    autoplay: {
                        delay: 2000,
                    },
                }
            }
        },
    };
</script>