<template>
  <section class="cta mt-4">
    <div class="cta-section-text">
      <h3 class="text-dark">
        Trebate pomoć u definisanju marketing strategije na društvenim mrežama?
      </h3>
      <p>
        Naš tim pomoći će vam da odredite ko je vaša ciljana publika i da
        kreirate informativan, zabavan i primamljiv sadržaj koji će privući
        korisnike i pretvoriti vaš profil na društvenim mrežama u generator
        online vidljivosti vašeg brenda.
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
};
</script>

<style lang="scss" scoped>
.cta {
  display: flex;
  flex-grow: 2 1;
  flex-direction: row;
  background: white;
  border-radius: 15px;
  padding: 2em;
  box-shadow: 0 0 20px rgb(0 0 0 / 10%);
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
}
</style>
