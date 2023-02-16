<template>
  <div id="translator" class="author" v-lazy:background-image="image2">
    <div class="author-cover"></div>
    <div class="row">
      <div class="col-lg-6">
        <div class="banner-text">
          <h3
              class="
                  banner-mobile-title-h3
                  mb-4
                  animate__animated
                  wow
                  animate__fadeInUp
                "
              data-wow-duration="1s"
              data-wow-delay="1s"
          >
            How do I become an
          </h3>
          <h1
              class="
                  banner-mobile-title
                  animate__animated
                  wow
                  animate__fadeInUp
                "
              data-wow-duration="1s"
              data-wow-delay="1s"
          >
            NFTBOOKER?
          </h1>
          <p
              class="
                  banner-text-description
                  mb-4
                  animate__animated
                  wow
                  animate__fadeInUp
                "
              data-wow-duration="1s"
              data-wow-delay="1s"
          >
            NFTBS envisions to transform the world of book-readings, making
            it become more affordable and more accessible to many people.
          </p>
          <div
              class="banner-button animate__animated wow animate__fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="1s"
          >
            <Button :title="'Launch App'" :typeButton="true" />
          </div>
        </div>
      </div>
      <div class="col-lg-6 pl-0">
        <div class="author-right">
          <div class="author-right-box-3"></div>
          <div class="translator-right-box"></div>
<!--          <div class="author-right-top">-->
<!--            <div class="lessor-right-blur"></div>-->
<!--          </div>-->
          <div class="author-right-image">
          <div class="position-relative">
            <div class="author-right-image-cover"></div>
            <img class="image-title" v-lazy="image1" />
            <img class="author-right-image-co" src="@/assets/co.png" />
            <div
                class="
                    author-right-image-title
                    animate__animated
                    wow
                    animate__fadeInUp
                  "
                data-wow-duration="1s"
                data-wow-delay="1s"
            >
              <div class="author-right-image-title-top">
                <span>04</span>
                <img class="" src="@/assets/line1.png" />
              </div>
              <h2 class="author-right-image-title-bottom">Translator</h2>
            </div>
          </div>
          </div>
          <div class="author-right-content">
            <div class="author-right-content-bg"></div>
            <div class="translator-right-box-2"></div>
            <div class="author-right-content-group">
              <p
                  class="
                      author-right-content-description
                      animate__animated
                      wow
                      animate__fadeInUp
                    "
                  data-wow-duration="1s"
                  data-wow-delay="1s"
              >
                Our team built NFTBooks as a bridge, between Author-Lessor
                who provide supply, Reader who uses demand. NFTBooks'
                mission is to bring the best support to Authors and Lessors,
                while at the same time providing the best service and experience for Readers.
              </p>
              <div
                  class="animate__animated wow animate__fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="1s"
                  @click="onScrollToTop()"
              >
                <router-link class="link" :to="{ path: '/translator' }"
                ><Button :title="'Read more'" :typeButton="false"
                /></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "animate.css";
import {WOW} from "wowjs";
import Button from "@/components/Button";
import image1 from '@/assets/translate.jpg'
import image2 from '../../assets/banner-page3.jpg'
export default {
  name:'AuthorComponents',
  components: {
    Button,
  },
  data(){
    return{
      image1:image1,
      image2:image2
    }
  },
  mounted() {
    new WOW().init();
  },
};
</script>
<style lang="css" src="@/components/ChildOfHomeComponents/style/AuthorStyle.css">

</style>