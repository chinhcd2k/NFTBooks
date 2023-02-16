<template>
  <div id="token" class="token" v-bind:style="{ paddingTop: (ratio)>1?ratio+50 + 'px!important':0 + 'px!important',
    paddingBottom: (ratio)>1?ratio+50 + 'px!important':0 + 'px!important'}">
<!--    <div class="author-right-box-4"></div>-->
    <div
        class="token-orange ts-animate ts-scale"
        style="animation-duration: 7s"
        v-bind:style="{left:-2*ratio+'%',top:-10*ratio+'%'}"
    ></div>
    <div
        class="token-orange-mall ts-animate ts-scale"
        style="animation-duration: 7s"
        v-bind:style="{right:38*ratio+'%',top:82*ratio+'%'}"
    ></div>
    <div
        class="token-orange-mall1 ts-animate ts-scale"
        style="animation-duration: 7s"
        v-bind:style="{right:58*ratio+'%',top:35*ratio+'%'}"
    ></div>
    <div
        class="token-orange-mall2 ts-animate ts-scale"
        style="animation-duration: 7s"
        v-bind:style="{right:60*ratio+'%',top:-2*ratio+'%'}"
    ></div>
    <div
        class="token-purple ts-animate ts-scale"
        style="animation-duration: 7s"
        v-bind:style="{right:38*ratio+'%',top:18*ratio+'%'}"
    ></div>
    <div
        class="token-purple-big ts-animate ts-scale"
        style="animation-duration: 7s"
        v-bind:style="{right:5*ratio+'%',bottom:5*ratio+'%'}"
    ></div>
    <div class="token-title"  v-bind:style="{paddingTop:105*ratio+'px'}">
      <h1 class="token-title-h1 animate__animated wow animate__fadeInUp">
        TOKEN <span>DISTRIBUTION</span>
      </h1>
      <p class="token-title-description animate__animated wow animate__fadeInUp"
         data-wow-duration="1s"
         data-wow-delay="1s">
        $NFTBS was released to the public on June 7, 2021, launched on Binance
        Smart Chain to save transaction fee for users.
      </p>
    </div><div class="row token-content">
    <div class="col-lg-6 col-md-12 oder-1">
      <div class="text-style-1" style="opacity: 0.5;z-index: 0;backdrop-filter: none" v-bind:style="{left:0*ratio+'%',top:-5*ratio+'%'}"></div>
      <div class="token-content-left">
        <div
            class="
                token-content-left-item
                animate__animated
                wow
                animate__fadeInLeft
              "
            data-wow-duration="1s"
            data-wow-delay="1s"
        >
          <h1>Details :</h1>
          <h3><span>Name:</span> NFTBOOKS</h3>
          <h3><span>Symbol:</span> NFTBS</h3>
          <h3>
            <span>Smart Contract:</span>
            0x3279510e89600ee1767a037dbd0ad49c974063ae
          </h3>
          <h3><span>Total Supply:</span> 100,000,000,000,000,000</h3>
          <h3><span>Burned when start:</span> 20,000,000,000,000,000</h3>
          <h3><span>Network:</span> Binance Smart Chain</h3>
          <h3>
            <span>Transaction fee:</span> 4% ( 2% will burn and 2% is rewards
            to $NFTBS holders)
          </h3>
        </div>
      </div>
    </div><div class="col-lg-6 col-md-12">
    <div class="token-content-right">
      <img class="animate__animated wow animate__fadeInRight"
           data-wow-duration="1s"
           data-wow-delay="1s"
           v-lazy="image1"/>
    </div>
  </div>
  </div>
  </div>
</template>
<script>
import "animate.css";
import {WOW} from "wowjs";
import image1 from '@/assets/chart.png'
export default {
  name:'AuthorComponents',
  components: {

  },
  data(){
    return{
      image1:image1,
      ratio: window.innerWidth / 1440,
    }
  },
  mounted() {
    new WOW().init();
  },
};
</script>
<style lang="css" src="@/components/ChildOfHomeComponents/style/TokenStyle.css">

</style>
