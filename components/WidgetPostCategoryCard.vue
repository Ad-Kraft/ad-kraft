<template>
  <div class="sidebar-widget post-card">
    <h3 class="title">Kategorije</h3>
    <ul class="list-group">
      <li v-for="(category, index) in categories" :key="index" class="mb-1">
        <div
          v-if="category.categoryCount != 0"
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <n-link :to="`/kategorije/${category.categorySlug}`">
            <i class="icofont-rounded-double-right"></i>
            {{ category.categoryName }}
          </n-link>
          <span>{{ category.categoryCount }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  mounted() {
    this.$store.dispatch("getCategories");
  },

  computed: {
    ...mapState(["categories"]),
  },
};
</script>
