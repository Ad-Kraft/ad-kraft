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
  background: black;
  color: white;
  border-radius: 15px;
  padding: 2em;
}

.cta-section-text {
  flex-basis: 80%;
}

.btn-area {
  flex-basis: 20%;
}

.btn {
  width: 100%;
  top: 30px;
  margin-bottom: 15px;
}

@media (max-width: 800px) {
  .cta {
    flex-direction: column;
  }
  .btn {
    margin-bottom: 30px;
  }
  .cta-section-text h3 {
    font-size: 20px;
  }
}
</style>
