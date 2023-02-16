<template>
  <vue-aspect-ratio ar="16:9">
  <div id="our-story" class="author"  v-lazy:background-image="image2">
    <div class="author-cover"></div>
    <div class="row">
      <div class="col-lg-6">
        <div class="banner-text">
          <h3
              class="
                  banner-mobile-title-h3
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
                  mb-5
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
            <div class="author-right-box"></div>
          </div>
          <div class="author-right-image ">
            <div class="position-relative">
              <div class="author-right-image-cover">
              </div>
              <img class="image-title" v-lazy="image1"/>
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
                  <span>01</span>
                  <img class="" src="@/assets/line1.png"/>
                </div>
                <h2 class="author-right-image-title-bottom">Author</h2>
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
                  data-wow-duration="1s"
                  data-wow-delay="1s"
              >
                If you are an author, or you own the publishing rights of
                any work, or you are a journalist, anyone with their own
                work can become an Author in NFTBooks system.
              </p>
              <div
                  class="animate__animated wow animate__fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="1s"
                  @click="onScrollToTop()"
              >
                <router-link class="link" :to="{ path: '/author' }"
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
  </vue-aspect-ratio>
</template>
<script>
import "animate.css";
import {WOW} from "wowjs";
import Button from "@/components/Button";
import image1 from '@/assets/author.jpg';
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
<style  lang="css" src="@/components/ChildOfHomeComponents/style/AuthorStyle.css">

</style>