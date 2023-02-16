<template>
  <div id="home" class="overflow-hidden">
    <Banner/>
    <div class="home" v-bind:style="{ paddingTop: (150 *ratio)>150?110 *ratio+50 + 'px!important':150 *ratio + 'px!important',
    paddingBottom: (150 *ratio)>150?150 *ratio+50 + 'px!important':150 *ratio + 'px!important'}"
         v-lazy:background-image="image2">
      <div class="container text-banner-mobile">
        <p
            class="
            text-center
            mb-4
            banner-text-description-mobile
            animate__animated
            wow
            animate__fadeInUp
          "
            data-wow-duration="1s"
            data-wow-delay="1s"
        >
          NFTBS envisions to transform the world of book-readings, making it
          become more affordable and more accessible to many people.
        </p>
        <div class="group-button mt-4 d-flex justify-content-center">
          <div
              class="banner-button animate__animated wow animate__fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="1s"
          >
            <Button :title="'Buy Tokens'" :typeButton="true"
                    :href-to="'https://pancakeswap.finance/swap#/swap?outputCurrency=0x3279510e89600ee1767a037dbd0ad49c974063ae'"/>
          </div>
          <div
              class="banner-button animate__animated wow animate__fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="1s"
          >
            <a href="https://github.com/nftbs/Whitepaper/blob/477ac26b4824162d2e0e4fc7aad103a7aa74ee55/NFTBS_Whitepaper.pdf"
               target="_blank" class="button-right-whitepaper">
              Whitepaper
              <ArrowCircleDownIcon class="custom-icon"/>
            </a>
          </div>
        </div>
      </div>
      <div id="why" class="row" style="height: 100%">
        <div class="home-cover"></div>
        <div class="col-lg-4 col-md-12 one">
          <div class="orange-mall1"></div>
          <div class="orange-mall2"></div>
          <div class="home-left">
            <div
                class="
                home-left-item
                animate__animated
                wow
                animate__fadeInLeft
              "
                data-wow-duration="1s"
                data-wow-delay="1s"
                :style="((!detailCheapest&&!detailScalable))?'margin-bottom:100px':'margin-bottom:35px'"
            >
              <h3 class="home-left-item-title d-flex align-items-center">
                <div class="d-flex justify-content-between w-100">
                  <div>
                    Cheaper to Cheapest
                  </div>
                  <div class="d-flex w-100 align-items-center">
                    <div class="line-title "/>
                    <PlusCircleIcon
                        v-if="!detailCheapest"
                        class="m-icon"
                        @click="showDetailWhyNFTBS('detailCheapest')"
                    />
                    <MinusCircleIcon
                        v-if="detailCheapest"
                        class="m-icon"
                        @click="showDetailWhyNFTBS('detailCheapest')"
                    />
                  </div>
                </div>
                <div class="text-style-1"></div>
              </h3>
              <p v-if="!detailCheapest" class="home-left-item-description">
                Cheaper to Cheapest: Bringing everything for free is not
                necessarily good, NFTBooks will try to build a model that brings
                the best value to readers….
              </p>
              <p v-if="detailCheapest" class="home-left-item-description">
                Cheaper to Cheapest: Bringing everything for free is not
                necessarily good, NFTBooks will try to build a model that brings
                the best value to readers.
              </p>
              <p v-if="detailCheapest" class="home-left-item-description">
                We think it's perfectly reasonable to pay for what we use. We
                created a tiered model. This has made the competition on the
                levels more obvious and it is the reader who benefits the most
                from this competition.
              </p>
            </div>
            <div
                class="home-left-item animate__animated wow animate__fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay="1s"
            >
              <h3 class="home-left-item-title">
                <div class="text-style-2"></div>
                <div class="d-flex justify-content-between w-100">
                  <div>
                    Highly scalable
                  </div>
                  <div class="d-flex align-items-center w-100">
                    <div class="line-title "/>
                    <PlusCircleIcon
                        v-if="!detailScalable"
                        class="m-icon"
                        @click="showDetailWhyNFTBS('detailScalable')"
                    />
                    <MinusCircleIcon
                        v-if="detailScalable"
                        class="m-icon"
                        @click="showDetailWhyNFTBS('detailScalable')"
                    />
                  </div>
                </div>
              </h3>
              <p v-if="!detailScalable" class="home-left-item-description">
                NFTBooks will create a platform for all book lovers to access
                and use the system easily…
              </p>
              <p v-if="detailScalable" class="home-left-item-description">
                NFTBooks will create a platform for all book lovers to access
                and use the system easily. One of our strongest obligations is
                to create a platform so simple and easy to use and access that
                not only crypto literates will understand, but for everyone to
                manipulate.
              </p>
              <p v-if="detailScalable" class="home-left-item-description">
                Not only smartphones, tablets, computers, but any device that
                can open NFTBooks application will be able to access and use our
                platform.
              </p>
              <p v-if="detailScalable" class="home-left-item-description">
                We hope to be able to develop low-cost devices that have the
                simplest components (e.g., Atmel AVR32) but still have access to
                NFTBooks to take advantage of reuse in reading. This can make
                the coverage of NFTBooks more than the original book.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12 two">
          <div class="home-center">
            <div class="home-center-image">
              <div
                  class="orange ts-animate ts-shape ts-scale"
                  style="animation-duration: 7s"
                  v-bind:style="{left:-20/ratio+'%',top:35/ratio+'%'}"
              ></div>
              <div
                  class="orange-mall ts-animate ts-shape ts-scale"
                  style="animation-duration: 7s"
              ></div>
              <div
                  class="purple ts-animate ts-shape ts-scale"
                  style="animation-duration: 7s"
              ></div>
              <h2 class="home-center-image-text">Why <span>NFTBS?</span></h2>
              <img v-lazy="image1" alt=""/>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12 there">
          <div class="home-right">
            <div
                class="
                home-right-item
                animate__animated
                wow
                animate__fadeInRight
              "
                data-wow-duration="1s"
                data-wow-delay="1s"
                :style="((!detailFair&&!detailFierce))?'margin-bottom:100px':'margin-bottom:35px'"
            >
              <h3 class="home-left-item-title d-flex align-items-center ">
                <div class="d-flex justify-content-between w-100">
                  <div>
                    Fair Share to everyone
                  </div>
                  <div class="d-flex align-items-center w-100">
                    <div class="line-title "/>
                    <PlusCircleIcon
                        v-if="!detailFair"
                        class="m-icon"
                        @click="showDetailWhyNFTBS('detailFair')"
                    />
                    <MinusCircleIcon
                        v-if="detailFair"
                        class="m-icon"
                        @click="showDetailWhyNFTBS('detailFair')"
                    />
                  </div>
                </div>

                <div class="text-style-3"></div>
              </h3>
              <div class="home-left-item-description-box">
                <p v-if="!detailFair" class="home-left-item-description home-left-item-description-right">
                  At NFTBooks we want to believe in fairness. Only those who are
                  willing to share what they have with others can receive the
                  value they deserve…
                </p>
                <p v-if="detailFair" class="home-left-item-description home-left-item-description-right">
                  -If you have the money, you will become an investor by simply buying NFTBooks as soon as possible.
                  -If you have books, magazines, newspapers, you can become an author by publishing your work.
                  - If you want to invest in a long-term and sustainable way, buy books in sales and rent back the books
                  you have purchased – Alternatively you can transfer the book to someone else.
                  -If you want to read a book, you only need to spend a very small amount (estimated $0.001 to $0.00001)
                  to borrow.
                  -We've created a model that provides people who share their knowledge to accumulate their finances
                  with a steady stream of passive income, this way NFTBooks can smoothly operate in a circle without
                  being compromised or influenced by the outside.
                  Highly scalable:
                  -NFTBooks will create a platform for all book lovers to access and use the system easily.
                </p>
              </div>
            </div>
            <div
                class="home-right-item animate__animated wow animate__fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="1s"
            >
              <h3 class="home-left-item-title d-flex align-items-center">
                <div class="text-style-4"></div>
                <div class="d-flex justify-content-between w-100">
                  <div>
                    Fierce competition to grow
                  </div>
                  <div class="d-flex align-items-center w-100">
                    <div class="line-title "/>
                    <PlusCircleIcon
                        v-if="!detailFierce"
                        class="m-icon "
                        @click="showDetailWhyNFTBS('detailFierce')"
                    />
                    <MinusCircleIcon
                        v-if="detailFierce"
                        class="m-icon "
                        @click="showDetailWhyNFTBS('detailFierce')"
                    />
                  </div>
                </div>
              </h3>
              <div class="home-left-item-description-box">
                <p class="home-left-item-description home-left-item-description-right">
                  Competition between authors and book owners is elevated to new
                  heights at NFTBooks…
                </p>
                <p v-if="detailFierce" class="home-left-item-description home-left-item-description-right">
                  Instead of the authors only competing with people in a small area (like their country) as before, and
                  some authors being prioritized by publishers, this leads to unfair competition.
                  However, with NFTBooks there will be no more bias and unfair prioritisation. Authors will be able to
                  compete fairly with each other, along with specifications to help authors measure why their books are
                  not selling well.
                  For example, did the reader finish reading the book? What page did the user stop reading etc. All
                  these aspects can help authors understand and improve their writing skills in a clearer and more
                  logical way.
                </p>
                <p v-if="detailFierce" class="home-left-item-description home-left-item-description-right">
                  Of course, anyone can check such index of any book, because we respect the essence of blockchain –
                  transparency.
                  For book owners, they will also be supported with such index measurement tools to be able to compete
                  with each other in the most stable way. Both authors and book owners, when such competition occurs,
                  will help improve quality and reduce reading costs, which will further attract readers to NFTBooks
                  because of the attractiveness of the content and costs.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="author-destop">
      <author/>
      <Lessor/>
      <Reader/>
      <Translator/>
      <Investor/>
    </div>
    <div class="author-mobile">
      <div class="banner-text">
        <h3
            class="
            banner-mobile-title-h3
            mb-4
            animate__animated
            wow
            animate__fadeInUp
          "
        >
          How do I become an
        </h3>
        <h1
            class="banner-mobile-title animate__animated wow animate__fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="1s"
        >
          NFTBOOKER?
        </h1>
        <p
            class="
            banner-text-description
            mb-4
            animate__animated
            wow
            animate__fadeInUp
          "
            data-wow-duration="1s"
            data-wow-delay="1s"
        >
          NFTBS envisions to transform the world of book-readings, making it
          become more affordable and more accessible to many people.
        </p>
        <div
            class="banner-button animate__animated wow animate__fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="1s"
        >
          <Button :title="'Launch App'" :typeButton="true"/>
        </div>
      </div>
      <div class="author-mobile-reader">
        <div class="author-mobile-reader-blur"></div>
        <div class="author-orange-mobile"></div>
        <div class="author-orange2-mobile"></div>
        <div class="author-blue-mobile"></div>
        <div class="author-orange3-mobile"></div>
        <div class="author-blue2-mobile"></div>
        <div class="author-mobile-reader-item">
          <div class="author-mobile-item-title">
            <div
                class="
                author-mobile-item-title-top
                animate__animated
                wow
                animate__fadeInUp
              "
            >
              <span>01</span>
              <img class="" src="@/assets/line1.png"/>
            </div>
            <h2
                class="
                author-mobile-item-title-bottom
                animate__animated
                wow
                animate__fadeInUp
              "
                data-wow-duration="1s"
                data-wow-delay="1s"
            >
              Author
            </h2>
          </div>
          <div class="author-mobile-item-title-group">
            <p
                class="
                author-mobile-item-title-description
                animate__animated
                wow
                animate__fadeInUp
              "
                data-wow-duration="1s"
                data-wow-delay="1s"
            >
              If you are an author, or you own the publishing rights of any work, or you are a journalist, anyone with
              their own work can become an Author in NFTBooks system.
            </p>
            <div
                class="animate__animated wow animate__fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="1s"
                @click="onScrollToTop()"
            >
              <router-link class="link" :to="{ path: '/author' }"
              >
                <Button :title="'Read more'" :typeButton="false"
                />
              </router-link>
            </div>
          </div>
        </div>
        <div class="author-mobile-reader-item">
          <div class="author-mobile-item-title">
            <div
                class="
                author-mobile-item-title-top
                animate__animated
                wow
                animate__fadeInUp
              "
            >
              <span>02</span>
              <img class="" src="@/assets/line1.png"/>
            </div>
            <h2
                class="
                author-mobile-item-title-bottom
                animate__animated
                wow
                animate__fadeInUp
              "
                data-wow-duration="1s"
                data-wow-delay="1s"
            >
              Lessor
            </h2>
          </div>
          <div class="author-mobile-item-title-group">
            <p
                class="
                author-mobile-item-title-description
                animate__animated
                wow
                animate__fadeInUp
              "
                data-wow-duration="1s"
                data-wow-delay="1s"
            >
              “Anyone can become a Lessor if the economic conditions are good.” – NFTBooks Whitepaper
              Anyone who owns the NFTBooks token, can become a Lessor. It is very simple to become a Lessor, just own a
              book on the NFTBooks platform, either by purchasing during the author's sale or by transferring from
              another book owner.
            </p>
            <div
                class="animate__animated wow animate__fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="1s"
                @click="onScrollToTop()"
            >
              <router-link class="link" :to="{ path: '/lessor' }"
              >
                <Button :title="'Read more'" :typeButton="false"
                />
              </router-link>
            </div>
          </div>
        </div>
        <div class="author-mobile-reader-item">
          <div class="author-mobile-item-title">
            <div
                class="
                author-mobile-item-title-top
                animate__animated
                wow
                animate__fadeInUp
              "
            >
              <span>03</span>
              <img class="" src="@/assets/line1.png"/>
            </div>
            <h2
                class="
                author-mobile-item-title-bottom
                animate__animated
                wow
                animate__fadeInUp
              "
                data-wow-duration="1s"
                data-wow-delay="1s"
            >
              Reader
            </h2>
          </div>
          <div class="author-mobile-item-title-group">
            <p
                class="
                author-mobile-item-title-description
                animate__animated
                wow
                animate__fadeInUp
              "
                data-wow-duration="1s"
                data-wow-delay="1s"
            >
              More than simply an end user, Reader is the dominant audience for NFTBooks. The number of Readers is
              proportional to the attractiveness of NFTBooks. To explain this, we understand that when someone needs to
              read a book on our platform, the user needs to have the NFTBooks token before they can buy or borrow the
              book. Therefore, as users increase, the demand to buy NFTBooks token will increase. In addition, there is
              another factor, although not sudden, but equally important, like other e-wallets, the user's wallet will
              never go to 0, which will contribute to reducing the amount of money in circulation in implementation of
              the NFTBooks token. That is, even if the price falls, it will help the price behaviour to increase slowly
              over time in a passive way.
            </p>
            <div
                class="animate__animated wow animate__fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="1s"
                @click="onScrollToTop()"
            >
              <router-link class="link" :to="{ path: '/reader' }"
              >
                <Button :title="'Read more'" :typeButton="false"
                />
              </router-link>
            </div>
          </div>
        </div>
        <div class="author-mobile-reader-item">
          <div class="author-mobile-item-title">
            <div
                class="
                author-mobile-item-title-top
                animate__animated
                wow
                animate__fadeInUp
              "
            >
              <span>04</span>
              <img class="" src="@/assets/line1.png"/>
            </div>
            <h2
                class="
                author-mobile-item-title-bottom
                animate__animated
                wow
                animate__fadeInUp
              "
                data-wow-duration="1s"
                data-wow-delay="1s"
            >
              Translator
            </h2>
          </div>
          <div class="author-mobile-item-title-group">
            <p
                class="
                author-mobile-item-title-description
                animate__animated
                wow
                animate__fadeInUp
              "
                data-wow-duration="1s"
                data-wow-delay="1s"
            >
              Our team built NFTBooks as a bridge, between Author-Lessor who provide supply, Reader who uses demand.
              NFTBooks' mission is to bring the best support to Authors and Lessors, while at the same time providing
              the best service and experience for Readers.
            </p>
            <div
                class="animate__animated wow animate__fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="1s"
                @click="onScrollToTop()"
            >
              <router-link class="link" :to="{ path: '/translator' }"
              >
                <Button :title="'Read more'" :typeButton="false"
                />
              </router-link>
            </div>
          </div>
        </div>
        <div class="author-mobile-reader-item">
          <div class="author-mobile-item-title">
            <div
                class="
                author-mobile-item-title-top
                animate__animated
                wow
                animate__fadeInUp
              "
            >
              <span>05</span>
              <img class="" src="@/assets/line1.png"/>
            </div>
            <h2
                class="
                author-mobile-item-title-bottom
                animate__animated
                wow
                animate__fadeInUp
              "
                data-wow-duration="1s"
                data-wow-delay="1s"
            >
              Investor
            </h2>
          </div>
          <div class="author-mobile-item-title-group">
            <p
                class="
                author-mobile-item-title-description
                animate__animated
                wow
                animate__fadeInUp
              "
                data-wow-duration="1s"
                data-wow-delay="1s"
            >
              This is the first audience of the project, they existed when NFTBooks had nothing until the project took
              shape and developed.
            </p>
            <div
                class="animate__animated wow animate__fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="1s"
                @click="onScrollToTop()"
            >
              <router-link class="link" :to="{ path: '/investor' }"
              >
                <Button :title="'Read more'" :typeButton="false"
                />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TokenDistribution/>
    <Contact/>
    <!--    <Team/>-->
    <!--    <Footer />-->
  </div>
</template>

<script>
import {PlusCircleIcon, MinusCircleIcon} from "@vue-hero-icons/outline";
import Button from "./Button.vue";
import Banner from "./Banner.vue";
// import Footer from "./Footer.vue";
import "animate.css";
import {WOW} from "wowjs";
import {ArrowCircleDownIcon} from "@vue-hero-icons/outline";
import Author from "@/components/ChildOfHomeComponents/Author";
import Investor from "@/components/ChildOfHomeComponents/Investor";
import Lessor from "@/components/ChildOfHomeComponents/Lessor";
import Reader from "@/components/ChildOfHomeComponents/Reader";
import Translator from "@/components/ChildOfHomeComponents/Translator";
import TokenDistribution from "@/components/ChildOfHomeComponents/TokenDistribution";
import Contact from "@/components/ChildOfHomeComponents/Contact";
import image1 from '@/assets/why.png';
import image2 from '../assets/banner-page2.jpg'

export default {
  name: "Home",
  components: {
    PlusCircleIcon,
    MinusCircleIcon,
    Button,
    Banner,
    ArrowCircleDownIcon,
    // Footer,
    Author, Investor, Lessor, Reader, Translator, TokenDistribution, Contact
  },
  data() {
    return {
      image1: image1,
      image2: image2,
      detailCheapest: false,
      detailScalable: false,
      detailFair: false,
      detailFierce: false,
      ratio: window.innerWidth / 1440,
    };
  },
  mounted() {
    new WOW().init();
  },
  methods: {
    onScrollToTop() {
      document
          .getElementById("app")
          .scrollIntoView({behavior: "smooth", block: "start"});
    },
    showDetailWhyNFTBS(type) {
      switch (type) {
        case 'detailScalable':
          this.detailScalable = !this.detailScalable;
          this.detailCheapest = false,
              this.detailFair = false,
              this.detailFierce = false
          break;
        case 'detailCheapest':
          this.detailCheapest = !this.detailCheapest;
          this.detailFair = false,
              this.detailFierce = false
          this.detailScalable = false
          break;
        case 'detailFair':
          this.detailFair = !this.detailFair;
          this.detailCheapest = false,
              this.detailFierce = false
          this.detailScalable = false
          break;
        case 'detailFierce':
          this.detailFierce = !this.detailFierce;
          this.detailCheapest = false,
              this.detailFair = false,
              this.detailScalable = false
          break;
        default:
      }
    },
  },
};
</script>
<style lang="css" src="@/components/Home.css">
</style>
