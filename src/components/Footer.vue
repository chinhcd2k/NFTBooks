<template>
  <div class="author-footer" v-lazy:background-image="image1">
    <div class="content">
      <div class="title-footer">NFTBOOKS</div>
      <div class="des">
        NFTBS with the mission of bringing the spread of intellectual knowledge
        to everyone, especially poor countries and developing countries, at the
        lowest cost.
      </div>
      <div class="footer-mobile">
        <div class="cover-footer"></div>
        <div class="email_us">Email Us</div>
        <div class="email-support">
          <img src="../assets/svg/email.svg" />
          support@nftbooks.info
        </div>
        <div class="follow-us-on position-relative">Follow us on
        <div class="circle-footer"></div></div>
        <div class="list-icon" style="margin-top: 20px">
          <a href="https://t.me/nftbs" target="_blank"><img src="../assets/svg/telegram.svg" /></a>
          <a href="https://www.reddit.com/r/Nftbooks/" target="_blank"><img src="../assets/svg/github.svg" /></a>
          <a href="https://nftbs.medium.com/" target="_blank"><img src="../assets/svg/gmail.svg" /></a>
          <a href="https://twitter.com/nftbstoken" target="_blank"><img src="../assets/svg/tiwtter.svg" /></a>
          <a href="https://www.linkedin.com/company/nftbooks/" target="_blank"><img src="../assets/svg/linkedin.svg"/></a>
        </div>
        <div class="copy-right">
          Copyright © 2021 NFTBOOKS.INFO. All Rights Reserved.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from '../assets/backgroud-footer.jpg'
export default {
  name: "Footer",
  data(){
    return{
      image1:image1
    }
  }
};
</script>
<style scoped src="@/components/Footer.css">
</style>
