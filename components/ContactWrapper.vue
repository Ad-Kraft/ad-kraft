<template>
  <section class="contact-section-page section-ptb-150">
    <div class="container">
      <div class="contact-form-card">
        <div class="row mtn-35">
          <div class="col-lg-6 mt-35">
            <div class="section-title">
              <h3 class="title">Get In Touch.</h3>
              <span class="comment-hr mb-0"></span>
            </div>
            <!-- contact media -->
            <div class="contact-media contact-media-list mt-xl-8">
              <div class="icon">
                <span class="icofont-ui-call"></span>
              </div>
              <div class="content">
                <span class="text">Telefon:</span>
                <a href="tel:+38765393205" class="number"
                  >+387 (0) 65 393 205</a
                >
                <br />
                <span>Ponedjeljak – Petak 09:00h – 17:00h</span>
              </div>
            </div>
            <!-- contact media end -->
            <!-- contact media -->
            <div class="contact-media contact-media-list">
              <div class="icon">
                <span class="icofont-send-mail"></span>
              </div>
              <div class="content">
                <span class="text">Email:</span>
                <a href="mailto:info@ad-kraft.com" class="number"
                  >info@ad-kraft.com</a
                >
              </div>
            </div>
            <!-- contact media end -->
            <!-- contact media -->
            <div class="contact-media contact-media-list">
              <div class="icon">
                <span class="icofont-map-pins"></span>
              </div>
              <div class="content">
                <span class="text">Adresa:</span>
                <h3 class="number">
                  Sime Šolaje 1a, 78000 Banja Luka, Bosna i Hercegovina
                </h3>
              </div>
            </div>
            <!-- contact media end -->
          </div>
          <div class="col-lg-6 mt-35">
            <div class="section-title">
              <h3 class="title">Pošaljite poruku</h3>
              <span class="comment-hr mb-0"></span>
            </div>

            <div class="comment-form pt-xl-8">
              <form class="row gx-4">
                <div class="col-12 col-sm-6">
                  <input
                    class="form-control"
                    placeholder="Ime i prezime *"
                    type="text"
                    name="name"
                  />
                </div>
                <div class="col-12 col-sm-6">
                  <input
                    class="form-control"
                    placeholder="Email adresa *"
                    type="text"
                    name="email"
                  />
                </div>
                <div class="col-12 col-sm-6">
                  <input
                    class="form-control"
                    placeholder="Firma"
                    type="text"
                    name="subject"
                  />
                </div>
                <div class="col-12 col-sm-6">
                  <input
                    class="form-control"
                    placeholder="Broj telefona"
                    type="text"
                    name="subject"
                  />
                </div>
                <div class="col-12">
                  <textarea
                    placeholder="Poruka"
                    class="form-control textarea-control"
                    name="message"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-warning">
                    Pošalji
                    <i class="icofont-rounded-double-right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-12 mt-35">
            <iframe
              class="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65368563.61295087!2d-117.82461439612302!3d-0.2494932804537185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x65a81cae36eb8ff%3A0xa6342257f310534f!2sAtlantic%20Ocean!5e0!3m2!1sen!2sbd!4v1614241876365!5m2!1sen!2sbd"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
