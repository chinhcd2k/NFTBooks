<template>
  <div>
    <div class="banner row m-0">
      <div class="col-lg-6 p-0 banner-left" v-bind:style="{ paddingTop: 200 *ratio + 'px!important'}">
        <div class="banner-blur"></div>
        <div class="banner-text" v-bind:style="{marginTop:0*ratio+'px'}">
          <div
              class="animation-circle ts-animate ts-shape ts-scale"
              style="animation-duration: 7s"
              v-bind:style="{ top: -15 *ratio + '%' ,left:45 *ratio + '%'}"
          ></div>
          <div
              class="animation-circle2 ts-animate ts-shape ts-scale"
              style="animation-duration: 7s" v-bind:style="{ top: 25 *ratio + '%' ,right:12 *ratio + '%'}"
          ></div>
          <div
              class="animation-circle3 ts-animate ts-shape ts-scale"
              style="animation-duration: 7s" v-bind:style="{ top:(50 * ratio<50)? 50 * ratio + '%':50+'%' }"
          ></div>
          <div
              class="trianglesvg ts-animate ts-shape ts-scale"
              style="animation-duration: 7s"
              v-bind:style="{ top: 0 *ratio + '%' ,left:70 *ratio + '%'}"
          >
            <img src="../assets/svg/triangle.svg" alt="" srcset=""/>
          </div>
          <div
              class="trianglesvg2 ts-animate ts-shape ts-scale"
              style="animation-duration: 7s"
              v-bind:style="{ top: (55 * ratio<55)?55 * ratio + '%':55 + '%' }"
          >
            <img
                src="../assets/svg/triangle.svg"
                style="transform: rotate(90deg)"
            />
          </div>
          <h1
              class="banner-mobile-title animate__animated wow animate__fadeInUp"
          >
            NFTBOOKS <span>is</span>
          </h1>
          <p
              class="banner-text-content animate__animated wow animate__fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="1s"
          >
            a project about NFT for ebooks, books, magazines, articles...
          </p>
          <p
              class="
              banner-text-description-header
              animate__animated
              wow
              animate__fadeInUp
            "
              data-wow-duration="1s"
              data-wow-delay="1s"
          >
            NFTBS envisions to transform the world of book-readings, making it
            become more affordable and more accessible to many people.
          </p>
          <div
              class="banner-button animate__animated wow animate__fadeInUp d-flex align-items-center"
              data-wow-duration="1s"
              data-wow-delay="1s"
          >
            <Button :title="'Buy Tokens'" :typeButton="true"
                    :href-to="'https://pancakeswap.finance/swap#/swap?outputCurrency=0x3279510e89600ee1767a037dbd0ad49c974063ae'"/>
           <div>
             <a href="https://github.com/nftbs/Whitepaper/blob/477ac26b4824162d2e0e4fc7aad103a7aa74ee55/NFTBS_Whitepaper.pdf"
                target="_blank" class="button-right-whitepaper">
               Whitepaper
               <ArrowCircleDownIcon class="custom-icon"/>
             </a>
           </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 p-0">
        <div class="star1"></div>
        <div class="star2"></div>
        <div class="star3"></div>
        <div class="star4"></div>
        <div class="star5"></div>
        <div class="star6"></div>
        <div class="star7"></div>
        <div class="star8"></div>
        <div class="banner-box"></div>
      </div>
    </div>
    <div class="banner banner-mobile row m-0">
      <div class="col-6 p-0 banner-left">
        <!--        <div class="banner-blur"></div>-->
        <div class="banner-text">
<!--          <div class="logo"-->
<!--               v-bind:style="{right:ratioMobile<1?-25*ratioMobile+'%':-25/ratioMobile+'%',top:ratioMobile<1?-5*ratioMobile+'%':-5/ratioMobile+'%'}">-->
<!--            <img src="../assets/logo.png" alt="" srcset=""/>-->
<!--          </div>-->
          <div
              class="animation-circle ts-animate ts-shape ts-scale"
              style="animation-duration: 7s"
          ></div>
          <div
              class="animation-circle2 ts-animate ts-shape ts-scale"
              style="animation-duration: 7s"
          ></div>
          <div
              class="animation-circle3 ts-animate ts-shape ts-scale"
              style="animation-duration: 7s"
          ></div>

          <div
              class="trianglesvg ts-animate ts-shape ts-scale"
              style="animation-duration: 7s"
          >
            <img src="../assets/svg/triangle.svg" alt="" srcset=""/>
          </div>
          <div
              class="trianglesvg2 ts-animate ts-shape ts-scale"
              style="animation-duration: 7s"
          >
            <img
                src="../assets/svg/triangle.svg"
                style="transform: rotate(90deg)"
            />
          </div>
          <h1
              class="banner-mobile-title animate__animated wow animate__fadeInUp"
          >
            NFTBOOKS <span>is</span>
          </h1>
          <p
              class="banner-text-content animate__animated wow animate__fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="1s"
          >
            a project about NFT for ebooks, books, arts, music & video.
          </p>
        </div>
      </div>
      <div class="col-6 p-0">
        <div class="banner-box"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {ArrowCircleDownIcon} from "@vue-hero-icons/outline";
import Button from "./Button.vue";
import "animate.css";
import {WOW} from "wowjs";

export default {
  name: "Banner",
  components: {ArrowCircleDownIcon, Button},
  data() {
    return {
      ratio: window.innerWidth / 1440,
      ratioMobile: window.innerWidth / 375,
    }
  },
  mounted() {
    new WOW().init();
  },
};
</script>
<style scoped lang="css" src="@/components/Banner.css">
</style>
