<template>
  <div class="backgroud-translator">
    <div class="translator">
          <div class="box1"></div>
          <div class="box2"></div>
      <div class="translator-header">
        <div class="translator-content">
          <div>
             <img class="svg-1" src="../../../assets/svg/svg-1.svg" v-bind:style="{left:25/ratio+'%'}"/>
            <div
              class="
                d-flex
                number-translator
                animate__animated
                wow
                animate__fadeInUp
              "
            >
              <div>04</div>
              <div class="line"></div>
            </div>
            <div
              class="
                d-flex
                align-item-centers
                group-title-button
                animate__animated
                wow
                animate__fadeInUp
                justify-content-between
              "
              data-wow-duration="1s"
              data-wow-delay="1s"
            >
              <div class="title-translator">Translator</div>
              <button class="button-primary m-l-auto d-hidden-mobile">
                Launch App
              </button>
            </div>
            <div
              class="animate__animated wow animate__fadeInUp text-color"
              data-wow-duration="1s"
              data-wow-delay="1s"
              style="text-align: center; margin-top: 40px"
            >
              Our team built NFTBooks as a bridge, between Author-Lessor who
              provide supply, Reader who uses demand. NFTBooks' mission is to
              bring the best support to Authors and Lessors, while at the same
              time providing the best service and experience for Readers.
            </div>
            <div class="d-none d-show-mobile">
              <button class="button-primary">Buy Tokens</button>
            </div>
          </div>
        </div>
      </div>
      <div class="fixed-fee">
        <div class="image">
          <img src="../../../assets/hello-bonjour.png" class="w-100" />
        </div>
        <div
          class="content animate__animated wow animate__fadeInUp text-color"
          data-wow-duration="1s"
          data-wow-delay="1s"
        >
          <div>
            As we can see, for the first-order cycle of NFTBooks, there will be
            only 3 main actors, Authors-Lessors-Readers. This will reduce the
            reach of NFTbooks to even more readers for language reasons. That's
            why NFTBooks has an additional audience of translators. Imagine each
            translator helping Lessor create a new circle of profits with
            readers in the languages the translators work in, and Lessors are
            those who believe the book has been translated into the language to
            sell well. So, isn't the one who benefits the most is the Author? If
            the Author writes a book with the purpose of sharing, he can
            completely satisfy his purpose because there will be translators to
            help him spread the content further.
          </div>
          <div>
            Moreover, with the feature of NFTBooks, Author will be the active
            persons in the contract with translators, they will have the first
            choice about how much commission they will deduct in their contract
            when publishing for translators. This makes it possible for
            translators to secure their benefits forever. The fact that each
            Translator brings such great benefits to the Author, we consider
            this to be a symbiotic relationship, degree and mutual respect.
          </div>
        </div>
      </div>
    </div>
    <div class="translator-button-lunch-app">
      <div
        class="animate__animated wow animate__fadeInUp text-color"
        data-wow-duration="1s"
        data-wow-delay="1s"
      >
        If you have any good ideas about translation, we welcome
        suggestions.Please contact us by email:
        <span class="f-s-i f-w-500 color-fff">support@nftbooks.info</span>
      </div>
      <button
        class="
          button-primary button-lunch-app
          animate__animated
          wow
          animate__fadeInUp
        "
        data-wow-duration="2s"
        data-wow-delay="2s"
      >
        Launch App
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Translator",
  components: {  },
  data(){
    return{
      ratio: window.innerWidth / 1440,
    }
  }
};
</script>
<style scoped src="@/components/RouterComponents/styles/Translator.css">
</style>
 