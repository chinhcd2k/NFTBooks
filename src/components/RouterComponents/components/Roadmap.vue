<template>
  <div id="roadmap" v-bind:style="{paddingTop:140*ratio+'px'}">
    <div
        class="token-orange ts-animate ts-scale"
        style="animation-duration: 7s"
        v-bind:style="{left:-2*ratio+'%',top:-15*ratio+'%'}"
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
        v-bind:style="{right:-5*ratio+'%',bottom:20*ratio+'%'}"
    ></div>
    <section class="timeline">
      <div class="title-roadmap desktop-tile animate__animated wow animate__fadeInRight">
        <p>ROAD</p>
        <p>MAP</p>
      </div>
      <div class="title-roadmap mobile-tile animate__animated wow animate__fadeInRight">
        <p>ROADMAP</p>
      </div>
      <ol>
        <li v-for="(value,i) in dataRoadmap" :key="i"
            :class="value.active==='parent'?'active':value.active==='child'?'child-active':''">
          <div>
            <time class="animate__animated wow animate__fadeInLeft">{{ value.stage }}</time>
            <p class="content-timeline animate__animated wow animate__fadeInLeft" v-html="value.content">{{ value.content }}</p>
          </div>
        </li>
        <li></li>
      </ol>
      <!--      <div class="arrows">-->
      <!--        <button class="arrow arrow__prev disabled" disabled>-->
      <!--          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/arrow_prev.svg" alt="prev timeline arrow">-->
      <!--        </button>-->
      <!--        <button class="arrow arrow__next">-->
      <!--          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/arrow_next.svg" alt="next timeline arrow">-->
      <!--        </button>-->
      <!--      </div>-->
    </section>
    <div id="timeline-mobile">
      <div class="title-roadmap desktop-tile">
        <p>ROAD</p>
        <p>MAP</p>
      </div>
      <div class="title-roadmap mobile-tile">
        <p>ROADMAP</p>
      </div>
      <div>
        <section v-for="(value,i) in dataRoadmap" class="year" :key="i"
                 :class="value.active==='parent'?'active':value.active==='child'?'child-active':''">
          <section>
            <h4>{{ value.stage }}</h4>
            <ul>
              <li v-html="value.content">{{ value.content }}</li>
            </ul>
          </section>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import {WOW} from "wowjs";
import "animate.css";
export default {
  name: "Roadmap",
  data() {
    return {
      ratio: window.innerWidth / 1440,
      dataRoadmap: [
        {
          stage: "Stage 1 - 2021",
          content: `<p style="margin-bottom: 0">Launch NFTBS Token <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 1L6 12L1 7" stroke="#129961" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></p>
              <p style="margin-bottom: 0"> Website Launch <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 1L6 12L1 7" stroke="#129961" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></p>
             <p style="margin-bottom: 0"> 2000 Holders <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 1L6 12L1 7" stroke="#129961" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></p>
              <p style="margin-bottom: 0">3000 Community members <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 1L6 12L1 7" stroke="#129961" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></p>
             <p style="margin-bottom: 0"> Marketing campaign <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 1L6 12L1 7" stroke="#129961" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></p>
            <p style="margin-bottom: 0"> Coingecko listing <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 1L6 12L1 7" stroke="#129961" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></p>
              <p style="margin-bottom: 0"> Coinmarketcap listing <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 1L6 12L1 7" stroke="#129961" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></p>
               <p style="margin-bottom: 0">Code auditing <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 1L6 12L1 7" stroke="#129961" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></p>`,
          active: 'child'
        },
        {
          stage: "Stage 2 - 2021",
          content: `
          <p style="margin-bottom: 0">5,000 Telegram members <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 1L6 12L1 7" stroke="#129961" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></p>
          <p style="margin-bottom: 0"> 10,000 Holders <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 1L6 12L1 7" stroke="#129961" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></p>
           <p style="margin-bottom: 0"> Whitepaper release <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 1L6 12L1 7" stroke="#129961" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></p>
            <p style="margin-bottom: 0">Aggressive marketing rollout <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 1L6 12L1 7" stroke="#129961" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></p>
             <p style="margin-bottom: 0">  Create NFTBS community of countries <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 1L6 12L1 7" stroke="#129961" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></p>
            <p style="margin-bottom: 0"> First CEX Listing. <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 1L6 12L1 7" stroke="#129961" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></p>
              `,
          active: 'child'
        },
        {
          stage: "Stage 3 - 2021",
          content: `
<p style="margin-bottom: 0">15,000 Community members.<svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 1L6 12L1 7" stroke="#129961" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></p>
<p style="margin-bottom: 0"> 30,000 Holders. <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 1L6 12L1 7" stroke="#129961" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></p>
              <p style="margin-bottom: 0">Beta Testnet Publishing for Authors. <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 1L6 12L1 7" stroke="#129961" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></p>
              <p style="margin-bottom: 0">Website Relaunch. Extreme Marketing Campaign. <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 1L6 12L1 7" stroke="#129961" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></p>
              <p style="margin-bottom: 0">Company Registration. <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 1L6 12L1 7" stroke="#129961" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></p>
              <p style="margin-bottom: 0"> Doxxed NFTBOOKS Team. <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 1L6 12L1 7" stroke="#129961" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></p>`,
          active: 'child'
        },
        {
          stage: "Stage 1 - 2022",
          content: `
          <p style="margin-bottom: 0">Beta Version for NFTBOOKS platform.</p>
          <p style="margin-bottom: 0">30,000 Community members.</p> <p style="margin-bottom: 0">60,000 Holders.</p>
          <p style="margin-bottom: 0">NFTBOOKS merchandise store Start Certik Auditing Contract.</p>
          <p style="margin-bottom: 0">Marketing Campaign. Listing Tier 1 CEX.</p>
              <p style="margin-bottom: 0">Solid partnership.</p>`,
          active: 'parent'
        },
        {
          stage: "Stage 2 - 2022",
          content: `
          <p style="margin-bottom: 0">Mainnet NFTBOOKS Platform.</p>
             <p style="margin-bottom: 0">Release NFTBOOKS Market for Lessor.</p>
              <p style="margin-bottom: 0">Grow project with Marketing.</p>`,
          active: ''
        },
        {
          stage: "Stage 3 - 2022",
          content: `<p>Release an app so readers can borrow books and increase security</p>`,
          active: ''
        }
      ]
    }
  },
  mounted() {
    new WOW().init();
  },
}
</script>
<style scoped lang="css" src="@/components/RouterComponents/styles/Roadmap.css">

</style>