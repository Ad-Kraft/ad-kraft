<template>
  <section class="cta mt-5 mb-5">
    <div class="cta-section-text">
      <h3>
        {{ title }}
      </h3>
      <p>
        {{ desc }}
      </p>
    </div>
    <div class="btn-area">
      <n-link class="btn btn-warning" to="/kontakt">Zatraži ponudu</n-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "Cta",
  props: {
    title: String,
    desc: String,
  },
};
</script>

<style lang="scss" scoped>
.cta {
  display: flex;
  flex-grow: 2 1;
  flex-direction: row;
  background: #202020;
  color: white;
  border-radius: 15px;
  padding: 2em;
  position: relative;
  background-image: url('/images/footer/ad-kraft-logo-footer.png');
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: 250px;
  align-items: center;
}

.cta-section-text {
  flex-basis: 80%;
}

.btn-area {
  flex-basis: 20%;
}

.btn {
  width: 100%;
}

@media (max-width: 800px) {
  .cta {
    flex-direction: column;
  }
  .btn {
    margin-top: 20px;
  }
  .cta-section-text h3 {
    font-size: 20px;
  }
}
</style>
