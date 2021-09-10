<template>
  <div class="sidebar-widget profile-card">
    <!-- <img class="profile" src="/images/blog-details/profile.png" alt="images_not_found" /> -->
    <h3 class="title">{{ this.author.split("_").join(" ") }}</h3>
    <!-- <p>Digital Strategist</p> -->
    <ul class="profile-social-links d-flex flex-wrap align-items-center">
      <li class="social-link-item">
        <a href="#" class="social-link">
          <i class="icofont-facebook"></i>
        </a>
      </li>
      <li class="social-link-item">
        <a href="#" class="social-link">
          <i class="icofont-twitter"></i>
        </a>
      </li>
      <li class="social-link-item">
        <a href="#" class="social-link">
          <i class="icofont-skype"></i>
        </a>
      </li>
      <li class="social-link-item">
        <a href="#" class="social-link">
          <i class="icofont-pinterest"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    author: String,
  },
};
</script>