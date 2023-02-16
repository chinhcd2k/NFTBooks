<template>
  <div id="investor" class="author" v-lazy:background-image="image2">
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
            <Button :title="'Launch App'" :typeButton="true"/>
          </div>
        </div>
      </div>
      <div class="col-lg-6 pl-0">
        <div class="author-right">
          <div class="author-right-top">
            <div class="author-right-box-4"></div>
            <div class="author-right-box"></div>
          </div>
          <div class="author-right-image">
            <div class="position-relative">
              <div class="author-right-image-cover">
              </div>
              <img class="image-title image-title-investor" v-lazy="image1"/>
              <img class="author-right-image-co" src="@/assets/co.png"/>
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
                  <span>05</span>
                  <img class="" src="@/assets/line1.png"/>
                </div>
                <h2 class="author-right-image-title-bottom">Investor</h2>
              </div>
            </div>
          </div>
          <div class="author-right-content">
            <div class="author-right-content-bg"></div>
            <div class="author-right-box-2"></div>
            <div class="author-right-content-group">
              <p
                  class="
                      author-right-content-description
                      animate__animated
                      wow
                      animate__fadeInUp
                    "
                  data-wow-duration="2s"
                  data-wow-delay="2s"
              >
                This is the first audience of the project, they existed when NFTBooks had nothing until the project took
                shape and developed.
              </p>
              <div
                  class="animate__animated wow animate__fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="1s"
                  @click="onScrollToTop()"
              >
                <router-link class="link" :to="{ path: '/investor' }"
                >
                  <Button :title="'Read more'" :typeButton="false"
                  />
                </router-link>
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
import image1 from '@/assets/investor.jpg';
import image2 from '../../assets/banner-page3.jpg'
export default {
  name: 'AuthorComponents',
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