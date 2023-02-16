<template>
  <div id="about" class="token team">
    <!--    <div class="author-right-box-4"></div>-->
    <div
        class="token-orange ts-animate ts-scale"
        style="animation-duration: 7s"
        v-bind:style="{left:-1*ratio+'%',top:0*ratio+'%'}"
    ></div>
    <div
        class="token-orange-mall ts-animate ts-scale"
        style="animation-duration: 7s"
        v-bind:style="{right:44*ratio+'%',top:38*ratio+'%'}"
    ></div>
    <div
        class="token-orange-mall1 ts-animate ts-scale"
        style="animation-duration: 7s"
        v-bind:style="{right:60*ratio+'%',top:20*ratio+'%'}"
    ></div>
    <div
        class="token-purple ts-animate ts-scale"
        style="animation-duration: 7s"
        v-bind:style="{right:36*ratio+'%',top:10*ratio+'%'}"
    ></div>
    <div
        class="token-purple-big-2 ts-animate ts-scale"
        style="animation-duration: 7s"
        v-bind:style="{right:-1*ratio+'%',top:40*ratio+'%'}"
    ></div>
    <div
        class="token-purple-big ts-animate ts-scale"
        style="animation-duration: 7s"
        v-bind:style="{right:-3*ratio+'%',bottom:5*ratio+'%'}"
    ></div>
    <div
        class="team-orange-big ts-animate ts-scale"
        style="animation-duration: 7s"
        v-bind:style="{right:62*ratio+'%',bottom:13*ratio+'%'}"
    ></div>
    <div class="text-style-1" style="opacity: 0.5;z-index: 0;backdrop-filter: none"
         v-bind:style="{left:10*ratio+'%',top:20*ratio+'%'}"></div>
    <div class="token-title" v-bind:style="{paddingTop:200*ratio+'px'}">
      <h1 class="token-title-h1 animate__animated wow animate__fadeInUp">
        <span>NFTBOOKS</span> TEAM
      </h1>
      <p class="team-title-description animate__animated wow animate__fadeInUp"
         data-wow-duration="1s"
         data-wow-delay="1s">
        Core Team Members
      </p>
    </div>
    <div class="container position-relative">
      <VueSlickCarousel v-bind="settings" ref="carousel">
        <div class="item-core-team" v-for="(item,i) in dataCoreTeam" :key="i">
          <div class="image-core">
            <div class="position-relative">
              <img class="animate__animated wow animate__fadeInRight"
                   data-wow-duration="1s"
                   data-wow-delay="1s"
                   v-bind:src='item.image'/>
              <div class="icon-link">
                <a :href="item.linkTw" target="_blank">
                  <img v-if="item.linkTw!==''" class="icon-twitter animate__animated wow animate__fadeInUp"
                       src="../../../assets/svg/ICON-TW.svg" alt=""
                       srcset="" data-wow-duration="1s"
                       data-wow-delay="1s"/>
                </a>
                <a :href="item.linkIn" target="_blank">
                  <img v-if="item.linkIn!==''" class="icon-in animate__animated wow animate__fadeInUp"
                       src="../../../assets/svg/ICON-IN.svg" alt=""
                       srcset="" data-wow-duration="1s"
                       data-wow-delay="1s"/>
                </a>
              </div>
            </div>
          </div>
          <div class="title-core">
            <p class="name">{{ item.name }}</p>
            <p class="title-1">{{ item.title1 }}</p>
            <p v-if="item.title2!==''" class="title-2">{{ item.title2 }}</p>
          </div>
        </div>
      </VueSlickCarousel>
      <div v-if="dataCoreTeam.length>5" class="action-slide hide-on-mobile-tablet arrow arrow-left" @click="handleClickArrow('prev')">
        <span class="left"></span>
      </div>
      <div v-if="dataCoreTeam.length>5" class="action-slide hide-on-mobile-tablet arrow arrow-right" @click="handleClickArrow('next')">
        <span class="right"></span>
      </div>
    </div>
    <div class="container board-advisor2">
      <VueSlickCarousel v-bind="settings2" ref="carousel3">
        <div class="item-core-team" v-for="(item,i) in dataCoreTeam2" :key="i">
          <div class="image-core">
            <div class="position-relative">
              <img class="animate__animated wow animate__fadeInRight"
                   data-wow-duration="1s"
                   data-wow-delay="1s"
                   v-bind:src='item.image'/>
              <div class="icon-link">
                <a :href="item.linkTw" target="_blank">
                  <img v-if="item.linkTw!==''" class="icon-twitter animate__animated wow animate__fadeInUp"
                       src="../../../assets/svg/ICON-TW.svg" alt=""
                       srcset="" data-wow-duration="1s"
                       data-wow-delay="1s"/>
                </a>
                <a :href="item.linkIn" target="_blank">
                  <img v-if="item.linkIn!==''" class="icon-in animate__animated wow animate__fadeInUp"
                       src="../../../assets/svg/ICON-IN.svg" alt=""
                       srcset="" data-wow-duration="1s"
                       data-wow-delay="1s"/>
                </a>
              </div>
            </div>
          </div>
          <div class="title-core">
            <p class="name">{{ item.name }}</p>
            <p class="title-1">{{ item.title1 }}</p>
            <p v-if="item.title2!==''" class="title-2">{{ item.title2 }}</p>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
    <div><p class="team-title-description animate__animated wow animate__fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="1s">
      Board Advisor
    </p>
    </div>
    <div class="container board-advisor">
      <VueSlickCarousel v-bind="settings2" ref="carousel2">
        <div class="item-core-team" v-for="(item,i) in dataBoardAdvisor" :key="i">
          <div class="image-core">
            <div class="position-relative">
              <img class="animate__animated wow animate__fadeInRight"
                   data-wow-duration="1s"
                   data-wow-delay="1s"
                   v-bind:src='item.image'/>
              <div class="icon-link">
                <a :href="item.linkTw" target="_blank">
                  <img v-if="item.linkTw!==''" class="icon-twitter animate__animated wow animate__fadeInUp"
                       src="../../../assets/svg/ICON-TW.svg" alt=""
                       srcset="" data-wow-duration="1s"
                       data-wow-delay="1s"/>
                </a>
                <a :href="item.linkIn" target="_blank">
                  <img v-if="item.linkIn!==''" class="icon-in animate__animated wow animate__fadeInUp"
                       src="../../../assets/svg/ICON-IN.svg" alt=""
                       srcset="" data-wow-duration="1s"
                       data-wow-delay="1s"/>
                </a>
              </div>
            </div>
          </div>
          <div class="title-core">
            <p class="name">{{ item.name }}</p>
            <p class="title-1">{{ item.title1 }}</p>
            <p v-if="item.title2!==''" class="title-2">{{ item.title2 }}</p>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
    <div class="partners-title text-center">
      <h1 class="token-title-h1 animate__animated wow animate__fadeInUp">
        <span>NFTBOOKS</span> PARTNERS
      </h1>
      <div class="image-partners d-flex justify-content-center">
        <a href="https://coinmarketcap.com/currencies/nftbooks/" target="_blank"> <img
            class="item-logo animate__animated wow animate__fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="1s"
            src='@/assets/LogoPartners1.png'/></a>
        <a href="https://www.coingecko.com/en/coins/nftbooks" target="_blank"><img class="item-logo animate__animated wow animate__fadeInRight"
                                         data-wow-duration="1s"
                                         data-wow-delay="1s"
                                         src='@/assets/LogoPartners2.png'/></a>
        <a href="https://bit.ly/BuyNFTBS" target="_blank"><img
            class="item-logo animate__animated wow animate__fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="1s"
            src='@/assets/LogoPartners3.png'/></a>
        <a href="https://coinsbit.io/trade_classic/NFTBS_mUSDT" target="_blank"><img class="item-logo animate__animated wow animate__fadeInRight"
                                         data-wow-duration="1s"
                                         data-wow-delay="1s"
                                         src='@/assets/LogoPartners4.png'/></a>
       <a href="https://www.squirepattonboggs.com/en" target="_blank">
         <img class="item-logo animate__animated wow animate__fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="1s"
              src='@/assets/LogoPartners5.png'/>
       </a>
        <a href="http://allanco.com.au" target="_blank"><img
            class="item-logo animate__animated wow animate__fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="1s"
            src='@/assets/LogoPartners6.png'/></a>
        <a href="https://ezyremit.com" target="_blank"><img
            class="item-logo animate__animated wow animate__fadeInRight "
            data-wow-duration="1s"
            data-wow-delay="1s"
            src='@/assets/LogoPartners7.png'/></a>
      </div>
      <div class="image-partners-mobile justify-content-center">
        <div class="d-flex justify-content-center align-items-center">
          <a href="https://coinmarketcap.com/currencies/nftbooks/" target="_blank"> <img
              class="item-logo animate__animated wow animate__fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="1s"
              src='@/assets/LogoPartners1.png'/></a>
          <a href="https://www.coingecko.com/en/coins/nftbooks" target="_blank"><img class="item-logo animate__animated wow animate__fadeInRight"
                                           data-wow-duration="1s"
                                           data-wow-delay="1s"
                                           src='@/assets/LogoPartners2.png'/></a>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <a href="https://bit.ly/BuyNFTBS" target="_blank"><img
              class="item-logo animate__animated wow animate__fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="1s"
              src='@/assets/LogoPartners3.png'/></a>
          <a href="https://coinsbit.io/trade_classic/NFTBS_mUSDT" target="_blank"><img class="item-logo animate__animated wow animate__fadeInRight"
                                           data-wow-duration="1s"
                                           data-wow-delay="1s"
                                           src='@/assets/LogoPartners4.png'/></a>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <!--          <img class="item-logo animate__animated wow animate__fadeInRight"-->
          <!--               data-wow-duration="1s"-->
          <!--               data-wow-delay="1s"-->
          <!--               src='@/assets/LogoPartners5.png'/>-->
          <a href="http://allanco.com.au" target="_blank"><img
              class="item-logo animate__animated wow animate__fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="1s"
              src='@/assets/LogoPartners6.png'/></a>
          <a href="https://ezyremit.com" target="_blank"><img
              class="item-logo animate__animated wow animate__fadeInRight "
              data-wow-duration="1s"
              data-wow-delay="1s"
              src='@/assets/LogoPartners7.png'/></a>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <a href="https://www.squirepattonboggs.com/en" target="_blank">
            <img class="item-logo animate__animated wow animate__fadeInRight"
                 data-wow-duration="1s"
                 data-wow-delay="1s"
                 src='@/assets/LogoPartners5.png'/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "animate.css";
import {WOW} from "wowjs";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import VueSlickCarousel from "vue-slick-carousel";
import image1 from "../../../assets/CEO2.jpg";
import image2 from "../../../assets/CEO4.jpg";
import image3 from "../../../assets/CEO6.jpg";
import image4 from "../../../assets/CEO7.jpg";
import image5 from "../../../assets/CEO1.jpg";
import image6 from "../../../assets/CEO8.jpg";
import image7 from "../../../assets/CEO9.jpg";
import image8 from "../../../assets/CEO10.jpg";
import image9 from "../../../assets/CEO11.jpg";

export default {
  name: 'AuthorComponents',
  components: {VueSlickCarousel},
  data() {
    return {
      ratio: window.innerWidth / 1440,
      dataCoreTeam: [
        {
          image: image1,
          name: 'Roland',
          title1: 'Co-Founder',
          title2: '',
          linkIn: 'https://www.linkedin.com/in/nftbooks-pty-ltd/',
          linkTw: 'https://twitter.com/nftbstoken'
        },
        {
          image: image2,
          name: 'Chau Nguyen',
          title1: 'Co-founder/Ceo',
          title2: '',
          linkIn: 'https://www.linkedin.com/in/chaunguyennftbooks/',
          linkTw: 'https://twitter.com/mrcapo86'
        },
        {
          image: image8,
          name: 'Easton Agnostics',
          title1: 'Co-Founder',
          title2: '',
          linkIn: 'https://www.linkedin.com/in/nftbooks-pty-ltd/',
          linkTw: 'https://twitter.com/nftbstoken'
        },
        {
          image: image3,
          name: 'Vy Pham',
          title1: 'Marketing Director',
          title2: '',
          linkIn: 'https://www.linkedin.com/in/phamtuongvy/',
          linkTw: 'https://twitter.com/msvy_crypto'
        },
        {
          image: image4,
          name: 'Vikram Soni',
          title1: 'Administrative Manager',
          title2: '',
          linkIn: 'https://www.linkedin.com/in/vikram-soni-86648684/',
          linkTw: 'https://twitter.com/LearnCrypto11'
        },
        // {
        //   image: image7,
        //   name: 'Hoang Anh',
        //   title1: 'Designer',
        //   title2: '',
        //   linkIn: '',
        //   linkTw: 'https://twitter.com/anhtxh'
        // },
      ],
      dataCoreTeam2: [
        {
          image: image7,
          name: 'Hoang Anh',
          title1: 'Designer',
          title2: '',
          linkIn: 'https://www.linkedin.com/in/anhtxh/',
          linkTw: 'https://twitter.com/anhtxh'
        },
        {
          image: image5,
          name: 'Hossein.K. Zand',
          title1: 'Community Leader',
          title2: '',
          linkIn: '',
          linkTw: 'https://twitter.com/ka_hossein'
        },
        {
          image: image9,
          name: 'Michael Kakooza',
          title1: 'Community Manager',
          title2: '',
          linkIn: '',
          linkTw: 'https://twitter.com/freshmystery'
        }
      ],
      dataBoardAdvisor: [
        {
          image: image6,
          name: 'Allan Nguyen',
          title1: 'Executive Advisor',
          title2: '',
          linkIn: 'https://www.linkedin.com/in/allan-nguyen-81035848/',
          linkTw: 'https://twitter.com/NguyenAllan'
        },
      ],
      settings: {
        dotsClass: "",
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        prevArrow: false,
        centerMode: false,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              centerMode: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              centerMode: true,
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows: false,
              centerPadding: "20px",
            },
          },

          {
            breakpoint: 768,
            settings: {
              centerMode: true,
              slidesToShow: 3,
              // slidesToScroll: 1
              arrows: false,
              centerPadding: "30px",
            },
          },
          {
            breakpoint: 576,
            settings: {
              centerMode: false,
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
            },
          },
          {
            breakpoint: 375,
            settings: {
              centerMode: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
              autoplay: true,
              speed: 2000,
              autoplaySpeed: 3000
            },
          },
        ],
      },
      settings2: {
        dotsClass: "",
        dots: false,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        prevArrow: false,
        centerMode: true,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              centerMode: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              centerMode: true,
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows: false,
              centerPadding: "20px",
            },
          },

          {
            breakpoint: 768,
            settings: {
              centerMode: true,
              slidesToShow: 2,
              // slidesToScroll: 1
              arrows: false,
              centerPadding: "30px",
            },
          },
          {
            breakpoint: 576,
            settings: {
              centerMode: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
            },
          },
          {
            breakpoint: 375,
            settings: {
              centerMode: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
              autoplay: true,
              speed: 5000,
              autoplaySpeed: 2000
            },
          },
        ],
      },
    }
  },
  mounted() {
    new WOW().init();
  },
  methods: {
    handleClickArrow(type) {
      if (this.$refs.carousel) {
        if (type === "next") {
          this.$refs.carousel.next();
        } else {
          this.$refs.carousel.prev();
        }
      }
    },
  }
};
</script>
<style scoped lang="css" src="@/components/RouterComponents/styles/TeamStyle.css">

</style>