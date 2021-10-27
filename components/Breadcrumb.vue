<template>
  <section class="bread-crumb-section bg-cover">
    <img
      class="shape shape1"
      src="/images/bread/ad-kraft-digitalna-marketing-agencija-subheader-img.png"
      alt="agencija za digitalni marketing Ad-Kraft subheader image"
    />
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="title text-center">{{ title }}</h1>
          <nav aria-label="breadcrumb">
            <ul class="breadcrumb justify-content-center">
              <li class="breadcrumb-item">
                <n-link to="/">Početna</n-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                <span>{{ activeTitle }}</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title", "activeTitle"],
};
</script>