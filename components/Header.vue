<template>
    <header class="header header-area">
        <div class="header-top">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col col-lg-4 d-none d-lg-block">
                        <ul class="header-social-links d-flex flex-wrap align-items-center">
                            <li class="social-link-item"><a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fad-kraft%2Fabout%2F" class="social-link"><i class="icofont-linkedin"></i></a></li>
                            <li class="social-link-item"><a href="https://www.facebook.com/Ad.Kraft.Agency/" class="social-link"><i class="icofont-facebook"></i></a></li>
                            <li class="social-link-item"><a href="https://twitter.com/ad_kraft" class="social-link"><i class="icofont-twitter"></i></a></li>
                            <li class="social-link-item"><a href="https://www.instagram.com/ad_kraft/" class="social-link"><i class="icofont-instagram"></i></a></li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 d-none d-md-block">
                        <p class="d-flex flex-wrap align-items-center"><span class="hr-border d-none d-xl-block"></span>Rastimo zajedno, postanite naš partner</p>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <ul class="select-box d-flex flex-wrap align-items-center justify-content-center justify-content-md-end">
                            <li class="select-item">
                                <a href="tel:+38765393205"><i class="icofont-phone"></i> +387 (0) 65 393 205</a>
                            </li>
                            <!--<li class="select-item">
                                <select class="form-select">
                                    <option value="1">Srpski</option>
                                    <option value="2">English</option>
                                </select>
                            </li>-->
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-bottom" :class="{'is-sticky': isSticky}">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col">
                        <n-link to="/" class="brand-logo">
                            <img src="/images/logo/logo.png" alt="brand logo" />
                        </n-link>
                    </div>
                    <div class="col-auto">
                        <div class="main-menu-wrapper">
                            <nav class="d-none d-lg-block">
                                <Navigation />
                            </nav>
                            <n-link to="/kontakt" class="btn btn-warning btn-hover-warning btn-lg d-none d-md-block">
                                Analizirajte vaš sajt <i class="icofont-arrow-right"></i>
                            </n-link>
                            <button class="btn btn-warning offcanvas-toggler d-lg-none" @click="mobiletoggleClass('addClass', 'show-mobile-menu')">
                                <span class="line"></span>
                                <span class="line"></span>
                                <span class="line"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        components: {
            Navigation: () => import("@/components/Navigation"),
        },

        data() {
            return {
                isSticky: false,
            }
        },

        mounted(){
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY
                if(scrollPos >= 200){
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            })
        },

        methods: {
            // offcanvas mobile-menu
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        },
    };
</script>