<template>
  <div class="contact">
    <div class="contact-orange ts-animate ts-scale" style="animation-duration: 7s"></div>
    <div class="contact-orange-filter ts-animate ts-scale" style="animation-duration: 7s"></div>
    <div class="row m-0 contact-us-form">
      <div class="author-right-box-2-contact"></div>
      <div class="author-right-box-2-small-contact"></div>
      <div
          class="token-orange-mall2 ts-animate ts-scale"
          style="animation-duration: 7s"
          v-bind:style="{right:60*ratio+'%',top:-2*ratio+'%'}"
      ></div>
      <div class="col-lg-6 col-md-12 form-contact">
        <div class="contact-form">
          <h1>Contact us</h1>
          <p class="text-description">Have questions? We’re happy to help.</p>
          <form>
            <div class="form-group">
              <small id="nameHelp" class="form-text">What's your name?</small>
              <input
                  type="text"
                  class="form-control input-contact"
                  id="exampleInputName"
              />
            </div>

            <div class="form-group">
              <small id="addressHelp" class="form-text"
              >What's your email address?</small
              >
              <input
                  type="email"
                  class="form-control input-contact"
                  id="exampleInputEmail"
              />
            </div>
            <div class="form-group">
              <small id="subjectHelp1" class="form-text"
              >What's your subject?</small
              >
              <input
                  type="text"
                  class="form-control input-contact"
                  id="exampleInputSubject1"
              />
            </div>
            <div class="form-group mb-50">
              <small id="subjectHelp" class="form-text"
              >What's your subject?</small
              >
              <textarea
                  type="text"
                  class="form-control input-contact"
                  id="exampleInputSubject"
                  rows="3"
              ></textarea>
            </div>

            <div class="send-message">
              <Button :title="'Send Message'" :typeButton="true"/>
            </div>
          </form>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 pl-0 follow-right-us">
        <div class="follow-right">
          <div class="author-right-top-contact">
            <div class="author-right-box-contact"></div>
            <div class="author-right-box-contact2"></div>
          </div>
          <div class="follow-right-image mt-100">
            <h1>Follow us on Twitter</h1>
            <div class="tweeter">
              <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/nftbstoken?ref_src=twsrc%5Etfw"
                 data-chrome="nofooter noborders" data-tweet-limit="1">Tweets</a>
              <script type="application/javascript" async src="https://platform.twitter.com/widgets.js"
                      charset="utf-8"></script>
            </div>
          </div>
          <div class="author-right-content-bg"></div>
          <!--          <div class="author-right-box-2"></div>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "animate.css";
import {WOW} from "wowjs";
import Button from "@/components/Button";

export default {
  name: 'AuthorComponents',
  components: {
    Button,
  },
  mounted() {
    new WOW().init();
  },
  data() {
    return {
      ratio: window.innerWidth / 1440,
    }
  }
};
</script>
<style lang="css" src="@/components/ChildOfHomeComponents/style/ContactStyle.css">

</style>