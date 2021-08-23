<template>
    <div class="main-container">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb title="Optimizacija konverzija" active-title="Optimizacija konverzija" />

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
                title: 'Optimizacija konverzija - Ad Kraft | Internet Marketing i Web Dizajn Agencija',
                meta: [{ 
                    hid: 'description', 
                    name: 'description', 
                    content: 'Optimizacija konverzija (CRO) je sistemski proces koji ima za cilj da posjetioce Vaše web stranice pretvori u lojalne klijente.' 
                }]
            }
        },
    };
</script>


