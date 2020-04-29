<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>
<script>
  import index from './components/index'
  import classify from './components/classify'
  import shoppingtrolley from './components/shoppingtrolley'
  import personal from './components/personal'
  import indextext from './components/indextext'
  import particulars from './components/particulars'
  import payments from './components/payments'
  import address from './components/address'
  import headportrait from './components/headportrait'
  import setadress from './components/setadress'
  export default {
    name: 'App',
    components: {
      index,
      classify,
      shoppingtrolley,
      personal,
      indextext,
      particulars,
      payments,
      address,
      headportrait,
      setadress
    },
     provide () {
        return {
          reload: this.reload
        }
      },
    data() {
      return{
         isRouterAlive: true
      }
    },
    methods: {
        reload () {
          this.isRouterAlive = false
          this.$nextTick(function () {
            this.isRouterAlive = true
          })
        }
      }
  }
</script>

<style>
  #app {}

  .van-tabbar-item--active {
    color: #cf4b94;
  }

  .van-tabbar {
    display: flex;
    justify-content: space-around;
  }

  .van-tabbar-item {
    /* padding-top: 15%; */
  }
</style>
