import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Author from '../components/RouterComponents/components/Author'
import Investor from '../components/RouterComponents/components/Investor'
import Lessor from '../components/RouterComponents/components/Lessor'
import Reader from '../components/RouterComponents/components/Reader'
import Translator from '../components/RouterComponents/components/Translator'
import Team from "@/components/RouterComponents/components/Team";
import HowToBuy from "@/components/RouterComponents/components/HowToBuy";
import Roadmap from "@/components/RouterComponents/components/Roadmap"
import WhyNftBook from "@/components/RouterComponents/components/WhyNftBook"

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      component: Home,
      props: (route) => ({ name: route.query.name })
    },
    {
      path: '/author',
      component: Author,
      props: (route) => ({ name: route.query.name })
    }
    ,
    {
      path: '/investor',
      component: Investor,
      props: (route) => ({ name: route.query.name })
    },
    {
      path: '/lessor',
      component: Lessor,
      props: (route) => ({ name: route.query.name })
    },
    {
      path: '/reader',
      component: Reader,
      props: (route) => ({ name: route.query.name })
    },
    {
      path: '/translator',
      component: Translator,
      props: (route) => ({ name: route.query.name })
    },
    {
      path: '/about',
      component: Team,
      props: (route) => ({ name: route.query.name })
    },
    {
      path: '/how-to-buy',
      component: HowToBuy,
      props: (route) => ({ name: route.query.name })
    },
    {
      path: '/roadmap',
      component: Roadmap,
      props: (route) => ({ name: route.query.name })
    },
    {
      path: '/why-book',
      component: WhyNftBook,
      props: (route) => ({ name: route.query.name })
    }
  ]
})
