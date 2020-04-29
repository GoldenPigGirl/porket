<template>
  <div id="classify">
    <!-- 头部 -->
    <van-row type="flex" justify="space-between">
      <van-col class="yui" span="6">
        <router-link :to="dian">
          <div>
            < </div> </router-link> </van-col> <van-col class="wph" span="6">
              <h4>商品分类</h4>
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
    <div>
      <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="chuan">
        <div slot="action" @click="chuan">搜索</div>
      </van-search>
    </div>
    <!-- 搜索框 -->
    <!-- 二级导航 -->
    <van-row>
      <van-col span="6">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item v-for="list in lists" :title="list.name" @click="oid(list.id)" />
        </van-sidebar>
      </van-col>
      <van-col v-for="xun in xun" class="gaibian" span="6">
        <div @click="tiao(xun.id)">
          <img :src="xun.bz_1" />
          <p style="text-align: center;">{{xun.name}}</p>
        </div>
      </van-col>
    </van-row>
    <!-- 二级导航 -->
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
        tabPosition: 'left',
        activeIndex: 0,
        activeKey: 0,
        active: 1,
        dian: '/',
        yuan: '/',
        lists: [],
        xun: [],
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
        items: []
      }
    },
    methods: {
      tiao(kk){
        this.$router.push({
          path: '/indextext',
          query: {
            kk: kk,
          },
        })
      },
      chuan() {
        this.$router.push({
          path: '/indextext',
          query: {
            keyword: this.value
          }
        })
      },
      bann() {
        var _this = this;
        this.$axios.get('https://dawn.changxvan.top/api/Category/index', {})
          .then(function(res) {
            _this.lists = res.data.list
            // console.log(_this.lists)
          })
      },
      oid(id) {
        // alert(id)
        var _this = this;
        _this.id = id
        this.$axios.get('https://dawn.changxvan.top/api/Category/getcat', {
            params: {
              cat_id: id
            },
          })
          .then(function(ress) {
            _this.xun = ress.data.catList
            console.log(_this.xun)
          })
      }
    },
    mounted: function() {
      this.bann()
      this.oid(2)
    },

  }
</script>

<style scoped>
  .gaibian img {
    width: 100px;
    height: 100px;
  }

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

  /*  */
  .xunhuan {
    display: flex;
    justify-content: space-around;
  }

  .xunhuan img {
    width: 100px;
  }
</style>
