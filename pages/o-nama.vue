<template>
    <div class="main-container">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb title="O nama" active-title="O nama" />

        <section class="about-section">
            <img src="/images/about/bg.png" alt="images-not_found" class="about-bg" />
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="about-img-content" data-aos="zoom-in" data-aos-delay="100">
                            <img src="/images/about/1.png" alt="images-not_found" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="offset-about">
                            <div class="about-content section-title primary">
                                <h5 class="sub-title">// Zašto Ad Kraft?</h5>
                                <h3 class="title">AGENCIJA ZA DIGITALNI MARKETING</h3>
                                <p>Fokusirani smo na dvije stvari: rezultate i odnose s klijentima. Dio smo Vaše kompanije i kroz povjerenje i saradnju možemo sve postići!</p>
                                <span class="hr-primary mt-4"></span>
                            </div>
                            <div class="about-object">
                                <div class="about-object-list">
                                    <div class="about-object-content">
                                        <h4 class="title">Njegujemo odnose zasnovane na transparentnosti, upornosti, međusobnom povjerenju i poštovanju sa zaposlenima, klijentima i ostalim poslovnim partnerima.</h4>
                                        <p>Strast, kreativnost i želja da internet učinimo boljim mjestom su vrijednosti kojima se vraćamo iz dana u dan. Inovativnim idejama želimo napraviti razliku u digitalnom svijetu. Međusobna saradnja pojedinaca kao i timova je snaga koja stvara ideje koje nas pokreću.</p>

                                        <p>Kao društveno odgovorna kompanija nastojimo podstaknuti razvoj naše društvene zajednice i pozitivno uticati na naše okruženje.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <AboutTwo />

        <TeamSection />

        <TestimonialOne />

        <Footer />

        <ScrollTop />

    </div>
</template>

<script>
    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            Breadcrumb: () => import('@/components/Breadcrumb'),
            AboutTwo: () => import('@/components/AboutTwo'),
            TeamSection: () => import('@/components/TeamSection'),
            TestimonialOne: () => import('@/components/TestimonialOne'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
        },

        head() {
            return {
                title: 'O nama - Ad Kraft | Internet Marketing i Web Dizajn Agencija',
                meta: [{ 
                    hid: 'description', 
                    name: 'description', 
                    content: 'Njegujemo odnose zasnovane na transparentnosti, upornosti, međusobnom povjerenju i poštovanju sa zaposlenima, klijentima i ostalim poslovnim partnerima.' 
                }]
            }
        },
    };
</script>


