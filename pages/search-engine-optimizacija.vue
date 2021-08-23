<template>
    <div class="main-container">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb title="SEO optimizacija" active-title="SEO optimizacija" />

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
                title: 'SEO optimizacija - Ad Kraft | Internet Marketing i Web Dizajn Agencija',
                meta: [{ 
                    hid: 'description', 
                    name: 'description', 
                    content: 'Search Engine optimizacija | SEO poboljšava vidljivosti i prisutnost web stranice na internet pretraživačima što dovodi do značajnog povećanja prodaje, profitabilnosti i ekonomičnosti naših klijenata.' 
                }]
            }
        },
    };
</script>