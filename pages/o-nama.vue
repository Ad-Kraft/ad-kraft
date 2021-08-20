<template>
    <div class="main-container">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb title="O nama" active-title="O nama" />

        <AboutTwo />

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
                                <h5 class="sub-title">// Why Choose Us?</h5>
                                <h3 class="title">We Are Trusted Digital Marketing Company.</h3>
                                <p>Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type scrambled.</p>
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


