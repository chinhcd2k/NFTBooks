<template>
  <div>
    <div class="header w-100 ">
      <div class="row m-0">
        <div class="header-top w-100 " :class="scrolledToBottom?'to-bottom':''">
          <div class="row m-0">
            <div class="col-1">
              <a href="/">
                <div class="logo">
                  <img src="../assets/logo.png" alt="" srcset=""/>
                </div>
              </a>
            </div>
            <div class="col-11 d-flex align-items-center justify-content-end">
              <div class="menu">
                <ul class="mb-0">
                  <!--                  <li @click="onClick('our-story')"><a>Our Story</a></li>-->
                  <li style="cursor: pointer">
                    <a href="/how-to-buy">How to buy</a>
                  </li>
                  <li style="cursor: pointer">
                    <a href="/why-book">Why NFTBS born</a>
                  </li>
                  <li style="cursor: pointer">
                    <a href="/roadmap">Roadmap</a>
                  </li>
                  <li style="cursor: pointer" @click="onClick('token')">
                    <a>Token Distribution</a>
                  </li>
                  <li style="cursor: pointer">
                    <a href="/about">About Team</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
        :class="[
        'nav d-flex align-items-center justify-content-between',
        shown ? 'bg-nav' : '',
      ]"
    >
      <div></div>
      <div class="logo-mobile">
        <a href="/">
          <div class="logo">
            <img src="../assets/logo.png" alt="" srcset=""/>
          </div>
        </a>
      </div>
      <div class="nav-mobile d-flex align-items-center justify-content-between">
        <img
            v-show="!shown"
            @click="showMenu()"
            src="@/assets/nav.png"
        />
        <img
            v-show="shown"
            @click="showMenu()"
            src="@/assets/close.png"
        />
      </div>
    </div>
    <div :class="[shown ? 'menu-mobile' : 'd-none']">
      <ul :class="[shown ? 'd-block mb-0' : 'd-none']">
        <!--        <li @click="onClick('our-story')"><a>Our Story</a></li>-->
        <li style="cursor: pointer">
          <a href="/how-to-buy">How to buy</a>
        </li>
        <li style="cursor: pointer">
          <a href="/why-book">Why NFTBS born</a>
        </li>
        <li style="cursor: pointer">
          <a href="/roadmap">Roadmap</a>
        </li>
        <li style="cursor: pointer" @click="onClick('token')">
          <a>Token Distribution </a>
        </li>
        <li style="cursor: pointer">
          <a href="/about">About Team </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "animate.css";
import {WOW} from "wowjs";

export default {
  name: "Header",
  data() {
    return {
      shown: false,
      scrolledToBottom: false
    };
  },
  methods: {
    showMenu() {
      this.shown = !this.shown;
    },
    onClick(id) {
      if (this.$route.path !== '/') {
        this.$router.push("/")
        setTimeout(() => {
          document
              .getElementById(id)
              .scrollIntoView({behavior: "smooth", block: "start"});
        }, 300);
        if (this.shown){
          this.shown = !this.shown;
        }
      }else {
        setTimeout(() => {
          document
              .getElementById(id)
              .scrollIntoView({behavior: "smooth", block: "start"});
        }, 300);
        if (this.shown){
          this.shown = !this.shown;
        }
      }
    },
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

        if (bottomOfWindow) {
          this.scrolledToBottom = true
        } else this.scrolledToBottom = false
      }
    }
  },
  mounted() {
    new WOW().init();
    this.scroll();
  },
};
</script>
<style scoped lang="css" src="@/components/Header.css">
</style>
