<template>
    <section class="blog-details-section section-pt-150 section-pb-150">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 ps-xl-7">
                    <div class="blog-details-thumb">
                        <img src="/images/blog-details/1.jpg" alt="images_not_found" />
                    </div>
                    <!-- social-share-card start -->
                    <div class="social-share-card">
                        <ul>
                            <li class="social-share-item">
                                <span>18 January, 2021</span>
                            </li>
                        </ul>
                        <div class="social-share-wrap">
                            <span class="share mb-2">Share:</span>
                            <ul class="share-social-links share-social-links2 d-flex flex-wrap align-items-center">
                                <li class="social-link-item">
                                    <a href="#" class="social-link"><i class="icofont-facebook"></i></a>
                                </li>
                                <li class="social-link-item">
                                    <a href="#" class="social-link"><i class="icofont-twitter"></i></a>
                                </li>
                                <li class="social-link-item">
                                    <a href="#" class="social-link"><i class="icofont-skype"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- social-share-card end -->

                    <div class="service-details">
                        <div class="service-details-list">
                            <h3 class="title">Why is SEO Important For Marketing?</h3>
                            <p class="mb-2">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknowne printer took a galley of type and scrambledit to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typese tting, remaining essentially unchanged. It was popularised</p>

                            <p class="mb-2">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknowne printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting ially unchanged. It was popularised in the 1960s with the release.</p>
                        </div>
                    </div>

                    <div class="service-details">
                        <div class="service-details-list">
                            <h3 class="title">Website Research</h3>
                            <p class="mb-10">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknowne printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting ially unchanged. It was popularised in the 1960s with the release.</p>

                            <p class="mb-2">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknowne printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting ially unchanged. It was popularised in the 1960s with the release.</p>
                        </div>
                    </div>

                    <div class="service-details">
                        <div class="service-details-list d-md-flex">
                            <img class="align-self-center mr-md-5 mt-4 mt-lg-0" src="/images/blog-details/2.png" alt="images_not_found" />

                            <div class="content flex-one">
                                <h3 class="title mt-2">Dashboard Statics</h3>
                                <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and type setting printer took a galley of type and scrambled it to make a type spe cimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>

                                <p class="mb-4">Lorem Ipsum is simply dummy text of the printing and type setting printer took a galley of type and scrambled it to make a type spe cimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                            </div>
                        </div>
                    </div>

                    <div class="service-details">
                        <div class="service-details-list">
                            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknowne printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting ially unchanged. It was popularised in the 1960s with the release.</p>
                        </div>
                    </div>

                    <div class="next-prev-section next-prev-section2">
                        <div class="row mb-n4 align-items-center">
                            <div class="col-md-4 mb-4 col-6 order-1 order-md-0">
                                <div class="service-prev service-media">
                                    <div class="content">
                                        <h4 class="title">Digital Marketing</h4>
                                        <n-link to="/blog-details" class="link">Previous <i class="icofont-rounded-double-right"></i></n-link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-4">
                                <div class="service-dots service-dots2 text-center">
                                    <p>
                                        <strong>Tags:</strong> marketing /
                                        <span class="text-warning">company</span> / seo
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-4 mb-4 col-6 order-2 order-md-0">
                                <div class="service-next service-media">
                                    <div class="content">
                                        <h4 class="title">Pay Per Click</h4>
                                        <n-link to="/blog-details" class="link">Next <i class="icofont-rounded-double-right"></i></n-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 order-lg-first">
                    <aside class="sidebar">
                        <WidgetProfileCard />

                        <WidgetPostCategoryCard />

                        <AboutBanner />

                        <WidgetTagCard />
                    </aside>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        components: {
            CommentForm: () => import('@/components/CommentForm'),
            WidgetProfileCard: () => import('@/components/WidgetProfileCard'),
            WidgetSearchCard: () => import('@/components/WidgetSearchCard'),
            WidgetPostCategoryCard: () => import('@/components/WidgetPostCategoryCard'),
            AboutBanner: () => import('@/components/AboutBanner'),
            WidgetTagCard: () => import('@/components/WidgetTagCard'),
        },
    };
</script>