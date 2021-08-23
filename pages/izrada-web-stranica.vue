<template>
    <div class="main-container">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb title="Izrada web stranica" active-title="Izrada web stranica" />

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
                title: 'Izrada web stranica - Ad Kraft | Internet Marketing i Web Dizajn Agencija',
                meta: [{ 
                    hid: 'description', 
                    name: 'description', 
                    content: 'Izrada web stranica, graficki dizajn, SEO optimizacija, samo su dio ponude koju imamo za Vas. Tu smo da Vam pomognemo da Vaša web stranica zablista.' 
                }]
            }
        },
    };
</script>


