<template>
  <div :class="typeButton ? 'button-left' : 'button-right'">
    <a :href="hrefTo">
      {{ title }}
      <ArrowCircleRightIcon
          :class="typeButton ? 'custom-icon' : 'custom-icon-tranform'"
      />
    </a>
  </div>
</template>
<script>
import {ArrowCircleRightIcon} from "@vue-hero-icons/outline";

export default {
  name: "Button",
  components: {ArrowCircleRightIcon},
  props: ["title", "typeButton", "hrefTo"],
};
</script>
<style scoped>
.button-global {
  display: inline-block;
}

a {
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: 400;
  /*font-size: 18px;*/
  font-size: 18px;
  line-height: 40px;
  text-align: center;
  color: #FFFFFF!important;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.button-left {
  /*background: linear-gradient(90deg, #3023AE 0%, #C86DD7 100%);*/
  /*box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);*/
  /*border-radius: 20px;*/
  /*color: #fff;*/
  /*font-size: 16px;*/
  /*!*padding: 9px 13px;*!*/
  /*line-height: 24px;*/
  /*box-sizing: content-box;*/
  /*width: 171px;*/
  /*height: 40px;*/
  /*display: flex;*/
  /*align-items: center;*/
  /*justify-content: center;*/
  box-shadow: 0px 0px 20px 0px #c86dd7;
  background-image: linear-gradient(to right, #3023ae 0%, #c86dd7 100%);
  border-radius: 19px;
  height: 40px;
  width: 171px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
}
.button-left:after {
  content: "";
  width: 100%;
  height: 98%;
  position: absolute;
  top: 0;
  left: 0px;
  z-index: -1;
  border-radius: 19px;
  -webkit-filter: blur(8px); /* Safari 6.0 - 9.0 */
  filter: blur(8px);
  background-image: linear-gradient(to right, #3023ae 0%, #c86dd7 100%);
}

.button-right {
  /*position: relative;*/
  /*border: 1px solid transparent;*/
  /*background-clip: padding-box;*/
  /*border-radius: 40px;*/
  /*padding: 7px 20px;*/
  /*font-size: 18px;*/
  /*background: #000000;*/
  /*z-index: 1000;*/

  width: 171px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0!important;
  border: solid 1px transparent;
  border-radius: 40px;
  background-image: linear-gradient(#000000bd, #000000),
  linear-gradient(to bottom right, #3626af, #824bc4, #b966d3);
  background-origin: border-box;
  background-clip: content-box, border-box;

}
.button-right::after {
  /*  content: "";*/
  /*  position: absolute;*/
  /*  top: -2px;*/
  /*  bottom: -2px;*/
  /*  left: -2px;*/
  /*  right: -2px;*/
  /*  background: linear-gradient(to bottom right, #3626af, #824bc4, #b966d3);*/
  /*  z-index: -1;*/
  /*  border-radius: 40px;*/
}

.button-right::before {
  /*content: "";*/
  /*position: absolute;*/
  /*top: -2px;*/
  /*bottom: -2px;*/
  /*left: -2px;*/
  /*right: -2px;*/
  /*margin: -2px;*/
  /*background: linear-gradient(to bottom right, #3626af, #824bc4, #b966d3);*/
  /*z-index: -1;*/
  /*border-radius: 40px;*/


}

.custom-icon {
  margin-left: 15px;
  margin-bottom: 0px;
}
.custom-icon path{
 stroke-width: 1!important;
}

.custom-icon-tranform {
  margin-left: 30px;
  transform: rotate(-45deg);
}
.custom-icon-tranform path{
  stroke-width: 1!important;
}
</style>