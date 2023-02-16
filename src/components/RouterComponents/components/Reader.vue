<template>
  <div class="backgroud-reader">
    <div class="reader">
          <div class="box1"></div>
          <div class="box2"></div>
      <div class="reader-header">
        <div class="reader-content">
          <div>
             <img class="svg-1" src="../../../assets/svg/svg-1.svg" v-bind:style="{left:25/ratio+'%'}"/>
            <div
              class="
                d-flex
                number-reader
                animate__animated
                wow
                animate__fadeInUp
              "
            >
              <div>03</div>
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
              <div class="title-reader">Reader</div>
              <button class="button-primary m-l-auto d-hidden-mobile">
                Launch App
              </button>
            </div>
            <div
              class="
                animate__animated
                wow
                animate__fadeInUp
                text-header-backgroup
              "
              data-wow-duration="1s"
              data-wow-delay="1s"
            >
              More than simply an end user, Reader is the dominant audience for
              NFTBooks. The number of Readers is proportional to the
              attractiveness of NFTBooks. To explain this, we understand that
              when someone needs to read a book on our platform, the user needs
              to have the NFTBooks token before they can buy or borrow the book.
              Therefore, as users increase, the demand to buy NFTBooks token
              will increase. In addition, there is another factor, although not
              sudden, but equally important, like other e-wallets, the user's
              wallet will never go to 0, which will contribute to reducing the
              amount of money in circulation in implementation of the NFTBooks
              token. That is, even if the price falls, it will help the price
              behaviour to increase slowly over time in a passive way.
            </div>
            <div class="d-none d-show-mobile">
              <a href="https://pancakeswap.finance/swap#/swap?outputCurrency=0x3279510e89600ee1767a037dbd0ad49c974063ae" target="_blank"><button class="button-primary m-l-auto">Buy Tokens</button></a>
            </div>
          </div>
        </div>
      </div>
      <div class="fixed-fee">
        <div class="image">
          <img src="../../../assets/image-reader.png" class="w-100" />
        </div>
        <div
          class="content animate__animated wow animate__fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="1s"
        >
          <div>
            NFTBooks once emphasized that users will not only include crypto
            literates, but all readers around the world. But the impediment of
            crypto technology is making it difficult for those who are older or
            less tech-savvy. We are aiming to have a product that is so simple
            to use that every person in the world can use at a touch of a
            button. Mainly focusing on the less tech savvy audience.
          </div>
          <div>
            Just like how TV entered the American population in the
            mid-twentieth century “No invention entered American homes faster
            than black-and-white TV sets; by 1955 half of all U.S. homes had one
            “. Therefore, according to our vision and prediction, banks will
            soon integrate direct buying or direct swap to decentralized
            exchanges like Uniswap or Pancakeswap, which will help us bypass
            quite a few steps to reach the entire world of reading lovers. About
            the features; we will build a queue model based on the price the
            Lessor has set for a book. There will be many types of queue
            arrangements so Readers can choose as desired to be able to read a
            book at the cheapest or fastest price.
          </div>
          <div>
            In addition, because extending an unfinished book is so important,
            intelligent queuing will also be discussed further for the best
            reader experience; keep them uninhibited and wait too long if
            NFTBooks becomes overcrowded. Because we want users to be able to
            borrow books instantly and “Cheaper to Cheapest”.
          </div>
        </div>
      </div>
    </div>
    <div class="readers-button-lunch-app">
      <div
        class="animate__animated wow animate__fadeInUp"
        data-wow-duration="1s"
        data-wow-delay="1s"
      >
        If you have any good ideas, email at
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
  name: "Reader",
  components: {  },
  data(){
    return{
      ratio: window.innerWidth / 1440,
    }
  }
};
</script>
<style scoped src="@/components/RouterComponents/styles/Reader.css">
</style>
