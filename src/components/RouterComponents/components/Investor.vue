<template>
  <div class="backgroud-investor">
    <div class="investor">
            <div class="box1"></div>
          <div class="box2"></div>
      <div class="investor-header">
        <div class="investor-content">
          <div>
             <img class="svg-1" src="../../../assets/svg/svg-1.svg" v-bind:style="{left:25/ratio+'%'}"/>
            <div
              class="
                d-flex
                number-investor
                animate__animated
                wow
                animate__fadeInUp
              "
            >
              <div>05</div>
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
              <div class="title-investor">Investor</div>
              <button class="button-primary m-l-auto d-hidden-mobile">
                Launch App
              </button>
            </div>
            <div
              class="animate__animated wow animate__fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="1s"
              style="text-align: center; margin-top: 40px"
            >
              This is the first audience of the project, they existed when
              NFTBooks had nothing until the project took shape and developed.
            </div>
            <div class="d-none d-show-mobile">
             <a href="https://pancakeswap.finance/swap#/swap?outputCurrency=0x3279510e89600ee1767a037dbd0ad49c974063ae" target="_blank"> <button class="button-primary">Buy Tokens</button></a>
            </div>
          </div>
        </div>
      </div>
      <div class="fixed-fee">
        <div class="image">
          <img src="../../../assets/nftbooks-token.png" class="w-100" />
        </div>
        <div
          class="content animate__animated wow animate__fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="1s"
        >
          <div>
            This is the first audience of the project, they existed when
            NFTBooks had nothing until the project took shape and developed.
          </div>
          <div>
            Their interests are tied to NFTBooks. In order not to betray the
            expectations of this target group because of the beliefs that have
            supported us from the beginning. The development of deflationary
            features in the system is indispensable. What we need to do is
            reduce the circulating supply, not the non-circulating supply (e.g.,
            Burning)
          </div>
          <div
            class="animate__animated wow animate__fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="1s"
            style="margin-top: 32px"
          >
            In addition, the benefit of token holders is 1-2% of the tokens in
            the transaction which will be divided equally among everyone. So, if
            you hold the nftbooks token until the reading transaction is
            processed, everyone can profit a lot from holding it.
          </div>
          <div
            class="animate__animated wow animate__fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="1s"
            style="margin-top: 32px"
          >
            Holding the NFTBooks token early will also be beneficial if you want
            to become a Lessor, the token price increases in proportion to the
            fact that you can buy a book at a cheaper price. Because when
            publishing, the author will calculate the amount of NFTBooks tokens
            needed to buy a book at the projection price of dollars.
          </div>
        </div>
      </div>
    </div>
    <div class="investor-button-lunch-app">
      <div
        class="animate__animated wow animate__fadeInUp"
        data-wow-duration="1s"
        data-wow-delay="1s"
      >
        If you have any good ideas about translation, we welcome
        suggestions.Please contact us by email: support@nftbooks.info
      </div>
      <button
        class="
          button-primary button-lunch-app
          animate__animated
          wow
          animate__fadeInUp
        "
        data-wow-duration="1s"
        data-wow-delay="1s"
      >
        Launch App
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Investor",
  components: {  },
  data(){
    return{
      ratio: window.innerWidth / 1440,
    }
  }
};
</script>
<style scoped src="@/components/RouterComponents/styles/Investor.css">
</style>
