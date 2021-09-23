<template>
  <div class="accordion-inner">
    <b-card no-body class="accordion-item">
      <b-card-header header-tag="header">
        <b-button block v-b-toggle.accordion-1 class="accordion-button">
          1. Da li radite na teritoriji drugih zemalja?
        </b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion">
        <b-card-body>
          <b-card-text>
            Naravno! Mi radimo za sve zemlje na svijetu. Najveći su nam klijenti iz Ujedinjenog Kraljevstva, Irske, Njemačke, Sjedinjenih Američkih Država. Radimo na svim svjetskim jezicima, engleski, njemački, španski, italijanski francuski i ostali. 
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="accordion-item">
      <b-card-header header-tag="header">
        <b-button block v-b-toggle.accordion-2 class="accordion-button">
          2. Postoji li neka vrsta garancije za zaštitu osjetljivih podataka?
        </b-button>
      </b-card-header>
      <b-collapse id="accordion-2" visible accordion="my-accordion">
        <b-card-body>
          <b-card-text>
            Obavezno! Mi smo u skladu sa GDPR regulacijama podesili sve naše aplikacije i sa svim klijentima potpisujemo NDA (non disclosure agreement) o zaštiti svih privatnih i poslovnih podataka. 
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body>
      <b-card-header header-tag="header">
        <b-button block v-b-toggle.accordion-3 class="accordion-button">
          3. Da li vi radite održavanje i vođenje društvenih mreža?
        </b-button>
      </b-card-header>
      <b-collapse id="accordion-3" visible accordion="my-accordion">
        <b-card-body>
          <b-card-text>
            Mi od 2017. godine izbjegavamo da radimo na ovaj način jer smo poučeni iskustvom odlučili da svoje klijente savjetujemo da ove aktivnosti samostalno obavljaju, a mi ćemo tu uvijek biti da podijelimo savjet i instrukcije kako dalje. Niko ne može bolje da zna svoj posao od samog klijenta, a mi možemo samo pomoći tehnički i savjetodavno. I naravno da vodimo plaćene oglase.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>