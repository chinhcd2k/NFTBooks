<template>
  <div id="why-book">
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
    <div class="header-nft">
      <p>Books are important knowledge treasures for everyone because books record the knowledge and values of life
        that the predecessors have sought, studied, experienced and passed on to the next generation.</p>
    </div>
    <div class="banner-nft-1">
      <div class="item-nft">
        <img class="item-logo animate__animated wow animate__fadeInRight"
             data-wow-duration="1s"
             data-wow-delay="1s"
             src='@/assets/problem-01.png'/>
        <p class="title-nft">PROBLEMS</p>
        <p class="content-nft">The current book publishing industry is similar to other publishing industries. For
          example, a $20 movie production industry can watch hundreds of movies, but how many books can $20 buy? Most
          profits can be lost because of pirated books. So is the problem of pirated books due to the mindset of
          consumers or the traditional model itself?</p>
      </div>
    </div>
    <div class="banner-nft-2">
      <div class="item-nft">
        <img class="item-logo animate__animated wow animate__fadeInRight"
             data-wow-duration="1s"
             data-wow-delay="1s"
             src='@/assets/solution-01.png'/>
        <p class="title-nft">SOLUTIONS</p>
        <p class="content-nft">This project was born to make a profit, but it is the profit of the author, readers and
          investors. Enable authors to sell as many books as they currently are and still have passive income over time.
          As long as there are people reading the book, the author still makes a profit.
        </p>
        <p class="content-nft"> Helping readers to read a book worth up to 1/100 to 1/1000 cheaper without having to spend time searching for
          pirated books. Helping investors both gain profits and contribute to society.</p>
      </div>
    </div>
  </div>
</template>
<script>
import {WOW} from "wowjs";
import "animate.css";
export default {
  name:'WhyNftBook',
  data(){
    return{
      ratio: window.innerWidth / 1440,
    }
  },
  mounted() {
    new WOW().init();
  },
}
</script>
<style scoped lang="css" src="@/components/RouterComponents/styles/WhyNftBook.css">

</style>