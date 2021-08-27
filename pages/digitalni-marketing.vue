<template>
    <div class="main-container">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb title="Digitalni marketing" active-title="Digitalni marketing" />

        <ServiceCarousel />

        <ServiceDetailsContent />

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
            ServiceCarousel: () => import('@/components/ServiceCarousel'),
            ServiceDetailsContent: () => import('@/components/ServiceDetailsContent'),
            Footer: () => import('@/components/Footer'),
            ScrollTop: () => import('@/components/ScrollTop'),
        },

        head() {
            return {
                title: 'Digitalni marketing - Ad Kraft | Internet Marketing i Web Dizajn Agencija',
                meta: [{ 
                    hid: 'description', 
                    name: 'description', 
                    content: 'Digitalni marketing za Vas. Ad-Kraft Agencija za digitalni marketing Vam nudi usluge digitalnog marketinga kojima povećavate Vaše online prisustvo.' 
                }]
            }
        },
    };
</script>


