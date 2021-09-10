<template>
  <section class="blog-section bg-cover">
    <div class="container">
      <div class="row mtn-30">
        <div class="col-lg-6 mt-30">
          <div
            class="section-title text-center text-lg-start primary"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 class="title">Poslednje objave na našem blogu.</h3>
            <span class="hr-primary mt-4"></span>
          </div>
          <div
            class="blog-card"
            data-aos="fade-up"
            data-aos-delay="600"
            v-for="(article, index) in articles.slice(0, 1)"
            :key="index"
          >
            <div class="thumb">
              <n-link :to="`/${article.slug}`">
                <img
                  :src="`http://localhost:1337${article.featuredImage.url}`"
                  :alt="article.title"
                />
              </n-link>
            </div>
            <div class="content">
              <p>
                Autor {{ article.author.split("_").join(" ") }} /
                {{ article.published }} /
                <span v-for="(cat, index) in article.categories" :key="index">
                  <n-link :to="`/kategorije/${cat.slug}`">{{
                    cat.category
                  }}</n-link>
                </span>
              </p>

              <h3 class="title">
                <n-link :to="`/${article.slug}`">{{ article.title }}</n-link>
              </h3>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mt-30">
          <div class="blog-meta-cards">
            <!-- blog-meta-card  -->
            <div
              class="blog-meta-card"
              data-aos="fade-up"
              data-aos-delay="300"
              v-for="(article, index) in articles.slice(1, 4)"
              :key="index"
            >
              <div class="thumb">
                <n-link :to="`/${article.slug}`">
                  <img
                    :src="`http://localhost:1337${article.featuredImage.url}`"
                    :alt="article.title"
                  />
                </n-link>
              </div>
              <div class="content">
                <p>
                  Autor {{ article.author.split("_").join(" ") }} /
                  {{ article.published }} /
                  <span v-for="(cat, index) in article.categories" :key="index">
                    <n-link :to="`/kategorije/${cat.slug}`">{{
                      cat.category
                    }}</n-link>
                  </span>
                </p>
                <h3 class="title">
                  <n-link :to="`/${article.slug}`">{{ article.title }}</n-link>
                </h3>
              </div>
            </div>
            <!-- blog-meta-card  end-->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  mounted() {
    this.$store.dispatch("getArticles");
  },

  computed: {
    ...mapState(["articles"]),
  },
};
</script>

<style lang="scss" scoped>
.blog-meta-img {
  width: 200px !important;
}
</style>
