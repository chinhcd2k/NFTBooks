<template>
  <div id="author" class="backgroud-author">
    <div class="author">
      <div class="box1"></div>
      <div class="box2"></div>
      <div class="author-header">
        <div class="author-content">
          <div>
            <img class="svg-1" src="../../../assets/svg/svg-1.svg" v-bind:style="{left:25/ratio+'%'}"/>
            <div
                class="
                d-flex
                number-author
                animate__animated
                wow
                animate__fadeInUp
                align-items-center
              "
            >
              <div>01</div>
              <div class="line"></div>
            </div>
            <div
                class="
                d-flex
                align-item-centers
                group-title-button
                justify-content-between
              "
            >
              <div
                  class="title-author animate__animated wow animate__fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="1s"
              >
                Author
              </div>
              <div
                  class="
                  animate__animated
                  wow
                  animate__fadeInUp
                  button-launch-app
                "
                  data-wow-duration="1s"
                  data-wow-delay="1s"
              >
                <Button :title="'Launch App'" :typeButton="true"/>
              </div>
            </div>
            <div
                class="
                animate__animated
                wow
                animate__fadeInUp
                text-color
                content-label
              "
                data-wow-duration="2s"
                data-wow-delay="2s"
                style="text-align: center; margin-top: 40px"
            >
              <div>
                If you are an author, or you own the publishing rights of any
                work, or you are a journalist, anyone with their own work can
                become an Author in NFTBooks system.
              </div>
              <div>
                “Author starts with the letter A, which is important for the
                beginning of NFTBooks. For this solution to be balanced, the
                author must be able to increase his or her value. Only then,
                they can focus enough to contribute to the community and support
                the project.” – NFTBooks Whitepaper.
              </div>
            </div>
            <div
                class="
                animate__animated
                wow
                animate__fadeInUp
                button-buy-tokens
                d-none
              "
                data-wow-duration="1s"
                data-wow-delay="1s"
            >
              <Button :title="'Buy Tokens'" :typeButton="true"
                      :href-to="'https://pancakeswap.finance/swap#/swap?outputCurrency=0x3279510e89600ee1767a037dbd0ad49c974063ae'"/>
            </div>
          </div>
        </div>
      </div>

      <div class="fixed-fee">
        <div
            class="animate__animated wow animate__fadeInUp image"
            data-wow-duration="2s"
            data-wow-delay="2s"
        >
          <img src="../../../assets/fixed-fee.png" class="w-100"/>
        </div>
        <div class="content">
          <div class="animate__animated wow animate__fadeInUp text-color">
            <span class=" color-fff">Fixed fee:</span> Authors will receive
            a publishing fee, from those who want to own his or her book.
          </div>
          <div
              class="animate__animated wow animate__fadeInUp text-color"
              data-wow-duration="1s"
              data-wow-delay="1s"
              style="margin-top: 32px"
          >
            <span class=" color-fff">Lessor:</span> This is similar to the
            Author selling the physical book through a publisher or releasing
            the book through platforms like Amazon. But there is a difference,
            instead of the Author paying a commission on every book sold to
            publishers or platforms, at NFTBooks the author only has to pay a
            very small, fixed cost for the network that NFTBooks runs on – this
            is not a cost NFTBooks will charge, because NFTBooks was born to
            support the publishing industry and is neutral.
          </div>
          <div
              class="animate__animated wow animate__fadeInUp text-color"
              data-wow-duration="2s"
              data-wow-delay="2s"
              style="margin-top: 32px"
          >
            <span class=" color-fff">Flexible fee:</span> Like other NFTs,
            NFTBooks is oriented towards long-term benefits and increasing
            intellectual value. Therefore, the Author will receive a cost per
            transaction with the product published by the Author – precisely,
            the transaction here is mainly that the Lessor opens the function so
            that the Reader can borrow books, or transfer books between Lessors.
          </div>
        </div>
      </div>
      <div class="like-any-sector">
        <div class="content">
          <div class="animate__animated wow animate__fadeInUp text-color">
            Like any sector in the economy, without competition, development
            will be very slow, be left behind, or even disappear.
          </div>
          <div
              class="animate__animated wow animate__fadeInUp text-color"
              data-wow-duration="1s"
              data-wow-delay="1s"
          >
            NFTBooks wants Authors to compete without any barriers, all authors
            being treated fairly in the ecosystem. Like a blank page, everyone
            will come together to ask questions and discuss why users love
            reading this book? Why do most book readers don’t read the entirety
            of books? Basically, it can be noted that, in addition to
            competition, all Authors also become supporters of each other to be
            able to work together. Write better and more professionally, which
            can help people better understand their customers – the readers.
          </div>
        </div>
        <div
            class="animate__animated wow animate__fadeInUp image"
            data-wow-duration="2s"
            data-wow-delay="2s"
        >
          <img
              src="../../../assets/df3bfce305664614ebdd0ecc0884fdd1e0755be3.png"
              class="w-100"
          />
        </div>
      </div>
      <div class="to-mark-authors">
        <div class="content">
          <div class="animate__animated wow animate__fadeInUp text-color">
            To make Authors more specialized, we want to improve tools to assess
            everyone's reading process, this helps professional authors and new
            authors to better understand their readers, hence making the reading
            experience even better. Time is finite, creativity and thinking are
            limitless, but before that infinity is achieved, we need baseline
            metrics to be able to measure and raise the baseline of the entire
            community. This is similar to the in-depth knowledge inherited from
            university level. NFTBooks developers are quite a fan of Google as
            they have built a design base to share for everyone, those who make
            UI or materials for UI can refer to: https://material.io/design.
          </div>
        </div>
        <div
            class="animate__animated wow animate__fadeInUp image"
            data-wow-duration="2s"
            data-wow-delay="2s"
        >
          <img
              src="../../../assets/65cd3ae4eb2cc8b1f252269583a0e41a490ab64b.png"
              class="w-100"
          />
        </div>
      </div>
      <div class="to-mark-authors-sub">
        <div
            class="text-color animate__animated wow animate__fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="1s"
        >
          Currently, we are exploring how to build an assessment tool of how
          indicators can be reasonable, if you find any ideas useful, please
          contact us at support@ nftbooks.info. Some of the indicators being
          discussed are:
        </div>
        <div
            class="text-color animate__animated wow animate__fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="1s"
        >
          <span class="f-w-500 f-s-i color-fff"
          >• Full content reader index:</span
          >
          This index indicates the number of people who have completed reading
          the entire book. The higher the index, the more successful the work
          is. But sometimes it can go wrong in some cases
        </div>
        <div
            class="text-color animate__animated wow animate__fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="1s"
        >
          <span class="f-w-500 f-s-i color-fff">
            • Percentage of content completed index:
          </span>
          This index shows where the majority of readers will give up, this
          helps book owners and other writers to research and find logical
          errors about the content to Improve their writing skills
        </div>
        <div
            class="text-color animate__animated wow animate__fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="1s"
        >
          <span class="f-w-500 f-s-i color-fff">
            • Demo and bought index:
          </span>
          In addition to reputation, writing citations is also very important
          for new authors to attract buyers as well as readers to choose their
          books. We are also planning to develop a feature that hits this point
          so that potential writers can reach users sooner based on user
          reviews. This is perhaps a turning point in the digital market.
        </div>
      </div>
    </div>
    <div class="authors-button-lunch-app" style="text-align: center">
      <div
          class="animate__animated wow animate__fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="1s"
      >
        Here are a few metrics we plan to publish soon when things stabilize.
        Everything will gradually develop strongly according to the development
        process of NFTBooks.
      </div>
      <br/>
      <div
          class="animate__animated wow animate__fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="1s"
      >
        If you're ever curious about reader behaviour and need something
        similar, please contribute to us via
        <span class="f-s-i f-w-500">support@nftbooks.info</span>
      </div>
      <div
          class="animate__animated wow animate__fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="1s"
      >
        All your shares will be recorded and stored where we run them. Sincerely
        thank you.
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
import Button from "../../Button.vue";

export default {
  name: "Author",
  components: {Button},
  data() {
    return {
      ratio: window.innerWidth / 1440,
    }
  }
};
</script>
<style scoped src="@/components/RouterComponents/styles/Author.css">
</style>
