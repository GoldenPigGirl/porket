<template>
  <div id="particulars">
    <!-- 头部 -->
    <van-row type="flex" justify="space-between">
      <van-col class="yui" span="6">
        <router-link :to="dian">
          <div>
            < </div> </router-link> </van-col> <van-col class="wph" span="6">
              <h4>MAC</h4>
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
    <!-- 切换 -->
    <van-tabs v-model="active">
      <van-tab title="商品"></van-tab>
      <van-tab title="推荐"></van-tab>
      <van-tab title="详情"></van-tab>
    </van-tabs>
    <!-- 切换 -->
    <!-- 轮播 -->
    <div>
      <van-swipe :autoplay="3000">
        <van-swipe-item>
          <img width="100%" height="350rem" :src="aimg.photo_x" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 轮播 -->
    <!-- 口红颜色 -->
    <van-row type="flex" justify="space-around">
      <van-col class="gai" span="6" v-for=" xun in xun">
        <div class="gais">
          <img :src="xun.imgs" />
        </div>
      </van-col>
    </van-row>
    <!-- 口红颜色 -->
    <!-- border线 -->
    <div>
      <van-divider />
    </div>
    <!-- border线 -->
    <!-- 介绍 -->
    <div class="introduce">
      <div class="discount">
        <span class="dages">￥{{aimg.price}}</span>
        <span>
          <del>
            <p>￥170</p>
          </del>
        </span>
        <span>
          <p>9.1折</p>
        </span>
      </div>
      <div class="makeup">
        <span>魅可MAC子弹头经典唇膏【多色可选】小辣</br>椒/正红色/脏橘色</span>
        <img src="../../static/assets/aixinjia.jpg" />
      </div>
      <div class="makeups">
        <img src="../../static/assets/guojimac.jpg" />
        <span>MAC</span>
      </div>
    </div>
    <!-- 介绍 -->
    <!-- 开通vip -->
    <div class="dredge">
      <img src="../../static/assets/vipkaitong.jpg" />
    </div>
    <!-- 开通vip -->
    <!--  -->
    <div style="font-weight: bold;font-size: 20px;">
      <p>商品详情</p>
    </div>
    <!-- 请求接口输出 -->
    <div v-html="aimg.content"></div>
    <!-- 请求接口输出 -->
    <!-- 加入购物车 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-button @click="tiaoz(aimg.id)" color="darkviolet" type="warning" text="加入购物车" />
    </van-goods-action>
    <!-- 加入购物车 -->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: 0,
        dian: '/',
        yuan: '/',
        url: '/shoppingtrolley',
        aimg: [],
        images: [{
            img: '../../static/assets/tu.jpg',
          },
        ],

        xun: [{
            imgs: '../../static/assets/tu2.jpg'
          },
          {
            imgs: '../../static/assets/tu2.jpg'
          },
          {
            imgs: '../../static/assets/tu2.jpg'
          },
          {
            imgs: '../../static/assets/tu2.jpg'
          },
          {
            imgs: '../../static/assets/tu2.jpg'
          },
          {
            imgs: '../../static/assets/tu2.jpg'
          },
        ]
      };
    },
    methods: {
      onClickIcon() {
        Toast('点击图标');
      },
      onClickButton() {
        Toast('点击按钮');
      },
      tiaoz(id) {
        // console.log(ssac)
        // var chuan = this.$qs.stringify({
          // 'uid':4,
          // 'pid':ssac,
          // 'num':1,
        // })
        // console.log(chuan)
        // this.$axios.post('https://dawn.changxvan.top/api/Shopping/add', chuan)
        // this.$router.push('/shoppingtrolley')
        this.id=id

          // query:{
          //   keyword:id
          // }
          var spin =this
          this.$axios({
            method:'get',
            url:'https://dawn.changxvan.top/api/Shopping/add',
            params:{
              'uid':4,
              'pid':id,
              'num':1,
            }
          })
          .then(res =>{
            spin.shang=res.data.cart
            console.log(res.data);
          })
          this.$router.push({
            path:'/shoppingtrolley',
        })
      }
    },
    created() {
      var _this = this;
      // this.$axios({
      //     method: 'get',
      //     url: 'https://dawn.changxvan.top/api/',
      //   })
      //   .then(function(res) {
      //     _this.images = res.data.focus;
      //     // console.log(res)
      //   })

      // this.$axios({
      //     method: 'get',
      //     url: 'https://dawn.changxvan.top/api/product/index',
      //     params: {
      //       pro_id: 279
      //     }
      //   })
      //   .then(function(res) {
      //     _this.aimg = res.data.pro.content;
      //      console.log(res.data)
      //   })
      var xuns = this.$route.query.msy;
      var idcx = this.$qs.stringify({
        pro_id: xuns
      })
      this.$axios.post('https://dawn.changxvan.top/api/product/index', idcx)
        .then((nn) => {
          this.aimg = nn.data.pro
          // console.log(nn.data.pro)
        })
    }
  }
</script>
{

<style scoped>
  /* 头 */
  .wph {
    text-align: center;
  }

  .yui {
    margin-top: 1.25rem;
    margin-left: 10px;
    font-size: 20px;
    font-family: 宋体;
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

  /* 头 */
  /* 口红颜色 */
  .gai {
    border: 1px solid #e4e7ed;
    width: 50px;
    height: 50px;
    border-radius: 30px;
  }

  .gais img {
    width: 35px;
    height: 35px;
    margin-left: 7px;
    margin-top: 7px;
  }

  /* 口红颜色 */
  /* 介绍 */
  .introduce {
    width: 90%;
    margin-left: 5%;
  }

  .dages {
    font-size: 25px;
    font-weight: 500;
  }

  .discount {
    display: flex;
    justify-content: flex-start;
  }

  .discount p {
    color: #98989f;
    margin-left: 5px;
    margin-top: 10px;
  }

  .makeup {
    display: flex;
    justify-content: space-around;
  }

  .makeup img {
    width: 20px;
    height: 20px;
  }

  .makeups {
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
  }

  .makeups img {
    width: 70px;
    height: 20px;
  }

  .makeups span {
    color: #6da5e7;
  }

  /* 介绍 */
  /* 开通vip */
  .dredge img {
    width: 100%;
    margin-top: 10px;
  }

  /* 卡通vip */
  /* 加入购物车 */
  .van-goods-action-icon {
    min-width: 78px;
  }

  .van-goods-action-button--first {
    margin-left: 5px;
    width: 240px;
  }

  /* 加入购物车 */
</style>
