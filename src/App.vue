<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Header,Footer
  },
};
</script>

<style>
*{
  font-family: Lato, sans-serif;
}
.f-s-i {
  font-style: italic;
}
.f-w-500 {
  font-weight: 500;
}
.color-fff {
  color: #fff;
}
.m-t-120 {
  margin-top: 120px;
}
.button-primary {
  width: 171px;
  border-radius: 35px;
  height: 40px;
  background-image: linear-gradient(
    to right,
    #3626af,
    #482cb3,
    #5833b7,
    #653abb,
    #7241bf,
    #7d46c2,
    #874bc5,
    #9151c8,
    #9b56cb,
    #a65bcd,
    #af60d0,
    #b966d3
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  box-shadow: 0px -2px 10px 0 #3626af, 0 5px 9px 0px #824bc4,
    0 0px 5px 0px #b966d3;
  border: unset;
}
.m-l-auto {
  margin-left: auto;
}
.align-item-centers {
  align-items: center;
}
.m-t-20 {
  margin-top: 20px;
}
.m-b-40 {
  margin-bottom: 40px;
}
/* animation */

.ts-animate {
  animation-iteration-count: infinite;
  animation-duration: 5s;
}
.ts-shape {
  position: absolute;
  transform: rotate(0.03deg);
}

.ts-scale {
  animation-name: ts-scale;
  animation-timing-function: ease-in-out;
}
@keyframes ts-scale {
  0% {
    transform: scale(2);
    transform: rotate(15deg);
  }
  50% {
    transform: scale(2.5);
    transform: rotate(20deg);
  }
  100% {
    transform: scale(2);
    transform: rotate(25deg);
  }
}
@media screen and (max-width: 425px) {
  .hidden-mobile {
    display: none;
  }
}
</style>
