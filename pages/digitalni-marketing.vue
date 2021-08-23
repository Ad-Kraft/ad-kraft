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
                    content: 'Internet marketing skrojen za Vas Sve naše kampanje uvijek se završavaju na isti način – USPJEŠNO, to postižemo kroz individualnost i fokusiranost na klijenta. Garantujemo postizanje postavljenih ciljeva, poput povećanja prodaje ili povećanja informisanosti Vaših klijenata o Vašem proizvodu, uslugama ili brendu. Saznajte zašto nas svi preporučuju!' 
                }]
            }
        },
    };
</script>


