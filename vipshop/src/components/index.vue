<template>
  <div id="index">
    <!-- 头部 -->
    <van-row type="flex" justify="space-between">
      <van-col class="yui" span="6">
        <router-link :to="dian">
          <div>
            <
          </div>
        </router-link>
      </van-col>
      <van-col class="wph" span="6">
        <h4>唯品会</h4>
      </van-col>
      <van-col span="6">
        <div class="yuan">
          <div class="yuanss">
            <img src="../../static/assets/dian.jpg" />
          </div>
          <div class="bian"></div>
          <router-link :to="yuan">
            <div class="yuans">
              <img src="../../static/assets/yuand.jpg" />
            </div>
          </router-link>
        </div>
      </van-col>
    </van-row>
    <!-- 头部 -->
    <!-- 搜索框 -->
    <div class="sousuo">
      <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="chuan">
        <div slot="action" @click="chuan">搜索</div>
      </van-search>
    </div>
    <!-- 搜索框 -->
    <!-- 轮播 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="image in images" :key="index">
        <img width="100%" height="150rem" :src="image.photo" />
      </van-swipe-item>
    </van-swipe>
    <!-- 轮播 -->
    <!-- 宫格 -->
    <van-grid :border="false" :column-num="5">
      <van-grid-item v-for="gong in gong">
        <van-image :src="gong.ge" />
      </van-grid-item>
    </van-grid>
    <!-- 宫格 -->
    <!-- 国家地区馆 -->
    <div class="diqu">
      <img src="../../static/assets/guojia.jpg" />
    </div>
    <div class="guos">
      <img v-for="guos in guo" :src="guos.imgs" />
    </div>
    <!-- 国家地区馆 -->
    <!-- 底部 -->
    <van-tabbar v-model="active">
      <van-tabbar-item replace :to="icon.url" v-for="icon in icon">
        <span>{{icon.shou}}</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.inactive">
      </van-tabbar-item>
    </van-tabbar>
    <!-- 底部 -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dian: '/personal',
        yuan: '/personal',
        images: [],
        active: 0,
        icon: [{
            url: '/',
            shou: '首页',
            inactive: '../static/assets/1.jpg',
            active: '../static/assets/1a1.jpg'
          },
          {
            url: '/classify',
            shou: '分类',
            inactive: '../static/assets/2.jpg',
            active: '../static/assets/2b2.jpg'
          },
          {
            url: '/shoppingtrolley',
            shou: '购物车',
            inactive: '../static/assets/3.jpg',
            active: '../static/assets/3c3.jpg'
          },
          {
            url: '/personal',
            shou: '个人中心',
            inactive: '../static/assets/4.jpg',
            active: '../static/assets/4d4.jpg'
          },
        ],
        gong: [{
            ge: '../static/assets/hufu.jpg',
          },
          {
            ge: '../static/assets/muying.jpg'
          },
          {
            ge: '../static/assets/yingyang.jpg'
          },
          {
            ge: '../static/assets/3cjd.jpg'
          },
          {
            ge: '../static/assets/shoushi.jpg'
          },
          {
            ge: '../static/assets/gefu.jpg',
          },
          {
            ge: '../static/assets/caizhuang.jpg'
          },
          {
            ge: '../static/assets/jujia.jpg'
          },
          {
            ge: '../static/assets/lingshi.jpg'
          },
          {
            ge: '../static/assets/xiebao.jpg'
          }
        ],
        guo: [{
            imgs: '../../static/assets/hanguo.jpg',

          },
          {
            imgs: '../../static/assets/riben.jpg',
          },
          {
            imgs: '../../static/assets/aoxin.jpg',
          },
          {
            imgs: '../../static/assets/ouzou.jpg',
          },
        ]
      }
    },
    methods: {
      chuan() {
        this.$router.push({
          path: 'indextext',
          query: {
            keyword: this.value
          }
        })
      }
    },
    created() {
      var _this = this;
      this.$axios({
          method: 'get',
          url: 'https://dawn.changxvan.top/api/',
        })
        .then(function(res) {
          _this.images = res.data.focus;
          // console.log(res)
        })

    }
  }
</script>

<style scoped>
  /* 头 */
  .yui {
    margin-top: 1.25rem;
    margin-left: 10px;
    font-size: 20px;
    font-family: 宋体;
  }

  .wph {
    text-align: center;
  }

  .yuan {
    display: flex;
    justify-content: space-around;
    border: 1px solid #f3f4f4;
    border-radius: 30px;
    margin-top: 20px;
  }

  .yuanss img {
    margin: auto;
    width: 25px;
    height: 8px;
  }

  .yuans img {
    margin: auto;
    width: 20px;
    height: 20px;
    margin-top: 20%;
  }

  .bian {
    border-left: 1px solid #f3f4f4;
  }

  /* 国家地区馆 */
  .diqu {
    display: flex;
    justify-content: center;
  }

  .guos {
    display: flex;
    justify-content: center;
  }
</style>
