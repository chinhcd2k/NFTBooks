<template>
  <div class="author" v-lazy:background-image="image2">
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
          <div class="reader-right-top">
            <div class="author-right-box-1"></div>
          </div>
          <div class="author-right-image">
            <div class="position-relative">
              <div class="author-right-image-cover"></div>
              <img class="image-title image-title-reader" style="" v-lazy="image1"/>
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
                  <span>03</span>
                  <img class="" src="@/assets/line1.png"/>
                </div>
                <h2 class="author-right-image-title-bottom">Reader</h2>
              </div>
            </div>
          </div>
          <div class="reader-right-content">
            <div class="reader-right-box"></div>
            <div class="author-right-content-bg"></div>
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
                More than simply an end user, Reader is the dominant audience for NFTBooks. The number of Readers is
                proportional to the attractiveness of NFTBooks. To explain this, we understand that when someone needs
                to read a book on our platform, the user needs to have the NFTBooks token before they can buy or borrow
                the book. Therefore, as users increase, the demand to buy NFTBooks token will increase. In addition,
                there is another factor, although not sudden, but equally important, like other e-wallets, the user's
                wallet will never go to 0, which will contribute to reducing the amount of money in circulation in
                implementation of the NFTBooks token. That is, even if the price falls, it will help the price behaviour
                to increase slowly over time in a passive way.
              </p>
              <div
                  class="animate__animated wow animate__fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="1s"
                  @click="onScrollToTop()"
              >
                <router-link class="link" :to="{ path: '/reader' }"
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
import image1 from '@/assets/reader.jpg';
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