<template>
  <div class="sidebar-widget tag-card">
    <h3 class="title">Oznake</h3>
    <ul>
      <li v-for="(tag, index) in tags" :key="index" class="tag-item">
        <div v-if="tag.tagCount != 0">
          <n-link class="tag-link" :to="`/oznaka/${tag.tagSlug}`">{{
            tag.tagName
          }}</n-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  mounted() {
    this.$store.dispatch("getTags");
  },

  computed: {
    ...mapState(["tags"]),
  },
};
</script>