<template>
    <div class="main-container">

        <Header />

        <OffCanvasMobileMenu />

        <Breadcrumb title="Društvene mreže" active-title="Društvene mreže" />

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
                title: 'Društvene mreže - Ad Kraft | Internet Marketing i Web Dizajn Agencija',
                meta: [{ 
                    hid: 'description', 
                    name: 'description', 
                    content: 'Naš tim pomoći će Vam da uspostavite prisustvo na društvenim mrežama uz grafička rješenja koja će ostaviti trajan utisak na sve koji posjećuju Vašu stranicu i profil. Uvođenjem društvenih mreža u Vaše poslovanje podižete Vaš marketing na veći nivo i otvarate novo tržište.' 
                }]
            }
        },
    };
</script>


