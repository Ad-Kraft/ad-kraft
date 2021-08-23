<template>
    <section class="team-section position-relative">
        <img class="pattern" src="/images/team/pattern.png" alt="images-not_found" />
        <div class="container">
            <div class="row">
                <div class="col-12" data-aos="fade-up" data-aos-delay="100">
                    <div class="section-title process text-center pb-90">
                        <h3 class="title">Naš tim</h3>
                        <span class="hr-secondary"></span>
                    </div>
                </div>
            </div>
            <div class="row mtn-30">
                <div class="col-lg-3 col-sm-6 mt-30" v-for="(member, index) in teamMembers" :key="index">
                    <div class="team-card">
                        <div class="thumb">
                            <img :src="member.imgSrc" :alt="member.name" />
                            <img class="social-hover" src="/images/team/team-hover.png" alt="shape image" />
                            <ul class="team-social">
                                <li class="team-social-item" v-for="(list, index) in member.socialLink" :key="index">
                                    <a class="team-social-link" :href="list.url">
                                        <i :class="list.icon"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="content">
                            <h3 class="title">{{ member.name }}</h3>
                            <p>{{ member.designation }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                teamMembers: [
                    {
                        imgSrc: "/images/team/1.png",
                        name: "Aleksandar Ćulum",
                        designation: "Google Ads Account Manager",
                        socialLink: [
                            {
                                icon: "icofont-facebook",
                                url: "#"
                            },
                            {
                                icon: "icofont-skype",
                                url: "#"
                            },
                            {
                                icon: "icofont-twitter",
                                url: "#"
                            }
                        ]
                    },
                    {
                        imgSrc: "/images/team/2.png",
                        name: "Stefan Dragičević",
                        designation: "Lead Developer",
                        socialLink: [
                            {
                                icon: "icofont-facebook",
                                url: "#"
                            },
                            {
                                icon: "icofont-skype",
                                url: "#"
                            },
                            {
                                icon: "icofont-twitter",
                                url: "#"
                            }
                        ]
                    },
                    {
                        imgSrc: "/images/team/3.png",
                        name: "Edina Ćulum",
                        designation: "Chef Socialmedia Manager",
                        socialLink: [
                            {
                                icon: "icofont-facebook",
                                url: "#"
                            },
                            {
                                icon: "icofont-skype",
                                url: "#"
                            },
                            {
                                icon: "icofont-twitter",
                                url: "#"
                            }
                        ]
                    },
                    {
                        imgSrc: "/images/team/4.png",
                        name: "Ivana Todorović Žuna",
                        designation: "Marketing Manager",
                        socialLink: [
                            {
                                icon: "icofont-facebook",
                                url: "#"
                            },
                            {
                                icon: "icofont-skype",
                                url: "#"
                            },
                            {
                                icon: "icofont-twitter",
                                url: "#"
                            }
                        ]
                    },
                    {
                        imgSrc: "/images/team/5.png",
                        name: "Ilijana Jović",
                        designation: "SEO Specialist",
                        socialLink: [
                            {
                                icon: "icofont-facebook",
                                url: "#"
                            },
                            {
                                icon: "icofont-skype",
                                url: "#"
                            },
                            {
                                icon: "icofont-twitter",
                                url: "#"
                            }
                        ]
                    },
                    {
                        imgSrc: "/images/team/6.png",
                        name: "Bojan Bogdanić",
                        designation: "Marketing Manager",
                        socialLink: [
                            {
                                icon: "icofont-facebook",
                                url: "#"
                            },
                            {
                                icon: "icofont-skype",
                                url: "#"
                            },
                            {
                                icon: "icofont-twitter",
                                url: "#"
                            }
                        ]
                    },
                    {
                        imgSrc: "/images/team/7.png",
                        name: "Marko Janković",
                        designation: "Web Developer",
                        socialLink: [
                            {
                                icon: "icofont-facebook",
                                url: "#"
                            },
                            {
                                icon: "icofont-skype",
                                url: "#"
                            },
                            {
                                icon: "icofont-twitter",
                                url: "#"
                            }
                        ]
                    },
                    {
                        imgSrc: "/images/team/8.png",
                        name: "Marijan Vrhovac",
                        designation: "Marketing Manager",
                        socialLink: [
                            {
                                icon: "icofont-facebook",
                                url: "#"
                            },
                            {
                                icon: "icofont-skype",
                                url: "#"
                            },
                            {
                                icon: "icofont-twitter",
                                url: "#"
                            }
                        ]
                    }
                ]
            }
        },
    };
</script>