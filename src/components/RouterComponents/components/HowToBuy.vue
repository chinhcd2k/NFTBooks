<template>
  <div id="how-to-buy" class="how-to-buy">
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
        v-bind:style="{right:5*ratio+'%',bottom:5*ratio+'%'}"
    ></div>
    <div class="container-how" v-bind:style="{paddingTop:140*ratio+'px'}">
     <div>
       <div class="header-top">
         <div class="title animate__animated wow animate__fadeInLeft">
           <h1>HOW TO BUY?</h1>
           <p>$NFTBS is currently available on Pancakeswap and can be purchased using our contract address
             <b>0x3279510e89600ee1767a037dbd0ad49c974063ae</b>
             You can follow the steps below if you are new to Pancakeswap or scroll down and buy directly on our website
             by connecting your BSC wallet.</p>
         </div>
       </div>
       <div class="content">
         <div class="button-nav">
           <div class="buy-token-btn">
             <Button :title="'Buy Tokens'" :typeButton="true"
                     :href-to="'https://pancakeswap.finance/swap#/swap?outputCurrency=0x3279510e89600ee1767a037dbd0ad49c974063ae'"/>
           </div>
           <div>
             <Button :title="'Check Price'" :typeButton="false"/>
           </div>
         </div>
         <div class="title-content d-flex">
           <div class="title-content-left">
             <div v-for="(value,i) in dataTitle1" class="title-item" :key="i">
               <p class="title-1 animate__animated wow animate__fadeInLeft">{{ value.title1 }}</p>
               <p class="title-2 animate__animated wow animate__fadeInLeft">{{ value.title2 }}</p>
             </div>
           </div>
           <div class="title-content-right">
             <div v-for="(value,i) in dataTitle2" class="title-item" :key="i">
               <p class="title-1 animate__animated wow animate__fadeInLeft">{{ value.title1 }}</p>
               <p class="title-2 animate__animated wow animate__fadeInLeft">{{ value.title2 }}</p>
             </div>
           </div>
         </div>
         <div class="title-content-mobile">
           <div v-for="(value,i) in dataTitle1" class="title-item" :key="i">
             <p class="title-1 animate__animated wow animate__fadeInLeft">{{ value.title1 }}</p>
             <p class="title-2 animate__animated wow animate__fadeInLeft">{{ value.title2 }}</p>
           </div>
           <div v-for="(value,i) in dataTitle2" class="title-item" :key="i">
             <p class="title-1 animate__animated wow animate__fadeInLeft">{{ value.title1 }}</p>
             <p class="title-2 animate__animated wow animate__fadeInLeft">{{ value.title2 }}</p>
           </div>
         </div>
       </div>
     </div>
    </div>
  </div>
</template>
<script>
import Button from "../../Button";
import {WOW} from "wowjs";
import "animate.css";
export default {
  name: "HowToBuy",
  components: {
    Button
  },
  data() {
    return {
      ratio: window.innerWidth / 1440,
      dataTitle1: [
        {
          title1: "MetaMask",
          title2: "Register an BSC  account on MetaMask, Trust Wallet or  Coinbase."
        },
        {
          title1: "Pancakeswap",
          title2: "Go to to Pancakeswap and add our token contract address above."
        },
        {
          title1: "Connect a Wallet",
          title2: "Connect your MetaMask or Trust wallet to Pancakeswap."
        }
      ],
      dataTitle2: [
        {
          title1: "Transfer $BNB to your MetaMask",
          title2: "Buy $BNB or transfer to your MetaMask or Trust Wallet."
        },
        {
          title1: "Slippage Tolerance",
          title2: "Make sure you set the Slippage between 5-10%."
        },
        {
          title1: "Swap",
          title2: "Swap your $BNB to $NFTBS , HODL and follow all NFTBS channel for information will be updated everyday."
        }
      ]
    }
  },
  methods: {},
  mounted() {
    new WOW().init();
  },
}

</script>
<style scoped lang="css" src="@/components/RouterComponents/styles/HowToBuy.css">

</style>