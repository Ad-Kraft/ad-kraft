<template>
  <div class="timeline-area timeline-bg mt-5">
    <div class="timeline-warp">
      <div class="timeline-single">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="roadmap-outer">
                <div class="roadmap roadmap-1">
                  <div class="roadmap-icon">
                    <span class="year">2017</span>
                  </div>
                  <div class="roadmap-content">
                    <h3>Novembar</h3>
                    <p >
                      Ad Kraft je registrovan 13.11.2017. godine.
                    </p>
                  </div>
                </div>
                <div class="roadmap roadmap-2">
                  <div class="roadmap-icon">
                    <span class="year">2018</span>
                  </div>
                  <div class="roadmap-content">
                    <h3>Oktobar</h3>
                    <p>
                     Postao je Google Partner 17.10.2018. godine.
                    </p>
                  </div>
                </div>
                <div class="roadmap roadmap-3">
                  <div class="roadmap-icon"><span class="year">2018</span></div>
                  <div class="roadmap-content">
                    <h3>Novembar</h3>
                    <p>
                      Prvi rođendan proslavili smo 13.11.2018. godine.
                    </p>
                    <img src="/images/about/ad-kraft-prvi-rodjendan-1.jpg" alt="">
                  </div>
                </div>
                <div class="roadmap roadmap-4">
                  <div class="roadmap-icon">
                    <span class="year">2019</span>
                  </div>
                  <div class="roadmap-content">
                    <h3>Novembar</h3>
                    <p>
                      Drugi rođendan je proslavljen 13.11.2019. godine.
                    </p>
                    <img src="/images/about/ad-kraft-drugi-rodjendan-1.jpg" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.timeline-bg {
  background: #f7f7f7;
}
.timeline-area {
  padding: 80px 0 80px 0;
}
.roadmap-outer {
  overflow: hidden;
  position: relative;
}
.roadmap-outer .roadmap {
  position: relative;
  margin-top: -63px;
}
.roadmap-outer .roadmap:first-child {
  margin-top: 0;
}
.roadmap-outer .roadmap:after,
.roadmap-outer .roadmap:before {
  content: "";
  display: block;
  width: 100%;
  clear: both;
}
.roadmap-outer .roadmap:before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
}
.roadmap-outer .roadmap-icon {
  width: 210px;
  height: 210px;
  border-radius: 50%;
  border: 25px solid transparent;
  border-top-color: #f75983;
  border-right-color: #f75983;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  transform: rotate(45deg);
}
.roadmap-outer .year {
  display: block;
  width: 110px;
  height: 110px;
  line-height: 110px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 10px 40px rgba(165, 165, 165, 0.2);
  margin: auto;
  font-size: 24px;
  font-weight: 600;
  color: #f75983;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transform: rotate(-45deg);
}
.roadmap-outer .roadmap-content {
  width: 35%;
  float: right;
  background: #f75983;
  padding: 20px 20px;
  margin: 50px 0 51px;
  z-index: 1;
  position: relative;
  border-radius: 5px;
}
.roadmap-outer .roadmap-content:before {
  content: "";
  width: 20%;
  height: 15px;
  background: #f75983;
  position: absolute;
  top: 50%;
  left: -20%;
  z-index: -1;
  transform: translateY(-50%);
}
.roadmap-outer h3 {
  color: #fff;
  font-size: 20px;
  margin-bottom: 17px;
}
.roadmap-outer p {
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-size: 15px;
}
.roadmap-outer .roadmap:nth-child(2n) .roadmap-icon {
  transform: rotate(-135deg);
}
.roadmap-outer .roadmap:nth-child(2n) .year {
  transform: rotate(135deg);
}
.roadmap-outer .roadmap:nth-child(2n) .roadmap-content {
  float: left;
}
.roadmap-outer .roadmap:nth-child(2n) .roadmap-content:before {
  left: auto;
  right: -20%;
}
.roadmap-outer .roadmap:nth-child(2n) .roadmap-icon {
  border-top-color: #f75983;
  border-right-color: #f75983;
}
.roadmap-outer .roadmap:nth-child(2n) .year {
  color: #f75983;
}
.roadmap-outer .roadmap:nth-child(2n) .roadmap-content,
.roadmap-outer .roadmap:nth-child(2n) .roadmap-content:before {
  background: #f75983;
}
.roadmap-outer .roadmap:nth-child(3n) .roadmap-icon {
  border-top-color: #f75983;
  border-right-color: #f75983;
}
.roadmap-outer .roadmap:nth-child(3n) .year {
  color: #f75983;
}
.roadmap-outer .roadmap:nth-child(3n) .roadmap-content,
.roadmap-outer .roadmap:nth-child(3n) .roadmap-content:before {
  background: #f75983;
}
.roadmap-outer .roadmap:nth-child(4n) .roadmap-icon {
  border-top-color: #f75983;
  border-right-color: #f75983;
}
.roadmap-outer .roadmap:nth-child(4n) .year {
  color: #f75983;
}
.roadmap-outer .roadmap:nth-child(4n) .roadmap-content,
.roadmap-outer .roadmap:nth-child(4n) .roadmap-content:before {
  background: #f75983;
}

@media (min-width: 992px) and (max-width: 1200px) {
  .roadmap-outer .roadmap {
    margin-top: -85px;
  }
  .roadmap-outer .roadmap-content:before {
    left: -15%;
  }
  .roadmap-outer .roadmap:nth-child(2n) .roadmap-content:before {
    right: -15%;
  }
}
@media only screen and (max-width: 767px) {
  .warp h1 {
    font-size: 30px;
  }
  .roadmap-outer .roadmap,
  .roadmap-outer .roadmap:first-child {
    margin: 0 0 20px;
  }
  .roadmap-outer .roadmap {
    margin-top: 0;
    overflow: hidden;
  }
  .roadmap-outer .roadmap:before,
  .roadmap-outer .roadmap:nth-child(2n):before {
    box-shadow: none;
  }
  .roadmap-outer .roadmap-icon,
  .roadmap-outer .roadmap:nth-child(2n) .roadmap-icon {
    margin-top: -30px;
    margin-bottom: 20px;
    position: relative;
    transform: rotate(135deg);
  }
  .roadmap-outer .roadmap:nth-child(2n) .year,
  .roadmap-outer .year {
    transform: rotate(-135deg);
  }
  .roadmap-outer .roadmap-content,
  .roadmap-outer .roadmap:nth-child(2n) .roadmap-content {
    width: 100%;
    float: none;
    border-radius: 0 0 20px 20px;
    text-align: center;
    padding: 25px 20px;
    margin: 0 auto;
  }
  .roadmap-outer .roadmap-content:before,
  .roadmap-outer .roadmap:nth-child(2n) .roadmap-content:before {
    width: 15px;
    height: 25px;
    position: absolute;
    top: -22px;
    left: 50%;
    z-index: -1;
    transform: translate(-50%, 0);
  }
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .roadmap-outer .roadmap,
  .roadmap-outer .roadmap:first-child {
    margin: 0 0 20px;
  }
  .roadmap-outer .roadmap {
    margin-top: 0;
    overflow: hidden;
  }
  .roadmap-outer .roadmap:before,
  .roadmap-outer .roadmap:nth-child(2n):before {
    box-shadow: none;
  }
  .roadmap-outer .roadmap-icon,
  .roadmap-outer .roadmap:nth-child(2n) .roadmap-icon {
    margin-top: -30px;
    margin-bottom: 20px;
    position: relative;
    transform: rotate(135deg);
  }
  .roadmap-outer .roadmap:nth-child(2n) .year,
  .roadmap-outer .year {
    transform: rotate(-135deg);
  }
  .roadmap-outer .roadmap-content,
  .roadmap-outer .roadmap:nth-child(2n) .roadmap-content {
    width: 100%;
    float: none;
    border-radius: 0 0 20px 20px;
    text-align: center;
    padding: 25px 20px;
    margin: 0 auto;
  }
  .roadmap-outer .roadmap-content:before,
  .roadmap-outer .roadmap:nth-child(2n) .roadmap-content:before {
    width: 15px;
    height: 25px;
    position: absolute;
    top: -22px;
    left: 50%;
    z-index: -1;
    transform: translate(-50%, 0);
  }
}

@media (min-width: 756px) {
    .roadmap-outer .roadmap-2 {
        margin-top: -20px;
        margin-right: -3px;
    }

     .roadmap-outer .roadmap-3 {
        margin-top: -155px;
        margin-left: -3px;
    }

     .roadmap-outer .roadmap-4 {
        margin-top: -291px;
        margin-right: -6px;
    }
  
}
</style>
