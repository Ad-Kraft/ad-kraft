<template>
    <div class="main-container">

        <Header />

        <OffCanvasMobileMenu />

        <Hero />

        <BrandLogoCarousel />

        <ServiceOne />

        <WorkingProcess />

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
                                <h5 class="sub-title">// Digitalna agencija koja će vas ojačati</h5>
                                <h3 class="title">Google partner</h3>
                                <p>Već 3 godine smo sertifikovani i priznati kao Google Partner, gdje smo pokazali našu stručnost i kvalitet. Svake godine obnavljamo našu sertifikaciju i redovno polažemo sve Google testove.</p>
                                <span class="hr-primary mt-4"></span>
                            </div>
                            <div class="about-object">
                                <div class="about-object-list">
                                    <div class="icon">
                                        <img src="/images/icon/1.png" alt="images-not_found" />
                                    </div>
                                    <div class="about-object-content">
                                        <h4 class="title">High Customer Retention Rate</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing typesetting Ipsum has been the industry's standard dummy. </p>
                                    </div>
                                </div>
                                <!-- about-object-list end -->
                                <div class="about-object-list">
                                    <div class="icon">
                                        <img src="/images/icon/2.png" alt="images-not_found" />
                                    </div>
                                    <div class="about-object-content">
                                        <h4 class="title">Dedicated Customer Support</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing typesetting Ipsum has been the industry's standard dummy. </p>
                                    </div>
                                </div>
                                <!-- about-object-list end -->
                                <div class="about-object-list">
                                    <div class="icon">
                                        <img src="/images/icon/3.png" alt="images-not_found" />
                                    </div>
                                    <div class="about-object-content">
                                        <h4 class="title">Professional Team Member</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing typesetting Ipsum has been the industry's standard dummy. </p>
                                    </div>
                                </div>
                                <!-- about-object-list end -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <CaseStudies />

        <FaqSection />

        <TestimonialOne />

        <BlogOne />

        <Footer />

        <ScrollTop />

    </div>
</template>

<script>
    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            Hero: () => import('@/components/Hero'),
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
            ServiceOne: () => import('@/components/ServiceOne'),
            WorkingProcess: () => import('@/components/WorkingProcess'),
            CaseStudies: () => import('@/components/CaseStudies'),
            FaqSection: () => import('@/components/FaqSection'),
            TestimonialOne: () => import('@/components/TestimonialOne'),
            BlogOne: () => import('@/components/BlogOne'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
        },

        head() {
            return {
                title: 'Ad Kraft | Internet Marketing i Web Dizajn Agencija',
                meta: [{ 
                    hid: 'description', 
                    name: 'description', 
                    content: 'Digitalni Marketing Agencija | Banja Luka. Nudimo Vam usluge internet marketinga, web dizajna, SEO, grafičkog dizajna, hostinga i registracije domena.' 
                }]
            }
        },
    };
</script>


