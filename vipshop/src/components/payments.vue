<template>
  <div id="payments">
    <!-- 头部 -->
    <van-row type="flex" justify="space-between">
      <van-col class="yui" span="6">
        <router-link :to="dian">
          <div>
            < </div> </router-link> </van-col> <van-col class="wph" span="6">
              <h4>结算</h4>
      </van-col>
      <van-col span="6">
        <div class="yuan">
          <!-- <router-link :to="dian"> -->
          <div class="yuanss">
            <img src="../../static/assets/dian.jpg" />
          </div>
          <!-- </router-link> -->
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
    <!-- 安全 -->
    <div class="safety">
      <img :src="dun" />
      <span>{{goumai}}</span>
    </div>
    <!-- 安全 -->
    <div>
      <van-divider />
    </div>
    <!-- 设置地址 -->
    <div class="site">
      <span>{{shou}}</span>
      <span>
        <router-link :to="url">
          <van-icon name="arrow" />
        </router-link>
      </span>
    </div>
    <!-- 设置地址 -->
    <!-- 背景 -->
    <div class="beijing"></div>
    <!-- 背景 -->
     <!-- 当前默认地址 -->
   <div>
     <van-address-list v-model="chosenAddressId" :list="shuzu" :disabled-list="disabledList" />
   </div>
     <!-- 当前默认地址 -->
    <!-- 背景 -->
    <div class="beijing"></div>
    <!-- 背景 -->
    <!-- 支付人 -->
    <div class="change">
      <div class="genghuan">
        <span class="genghuans">
          <p>{{fu}}</p>
          <p>{{gao}}</p>
        </span>
        <p @click="showPopup()">{{huan}}</p>
        <div>
          <van-popup v-model="show" closeable close-icon-position="top-left" position="bottom" :style="{ height: '20%' }">
            <div style="text-align: center;">
              <p>{{xuan}}</p>
            </div>
            <div class="stipulate">
              <p>{{hai}}</p>
            </div>
            <div class="xinxis">
              <span class="xinxi">
                <p>{{xing}}</p>
                <p>{{haos}}</p>
                <p>{{xiu}}</p>
              </span>
              <p class="gai">
                <van-icon name="success" />
              </p>
            </div>
            <div class="adds">
              <span>{{tian}}</span>
              <span class="addse">></span>
            </div>
          </van-popup>
        </div>
      </div>
      <div>
        <van-divider />
      </div>
      <div class="customs">
        <p>{{haiguan}}</p>
      </div>
    </div>
    <!-- 图标位置 -->

    <!-- 支付人 -->
    <!-- 背景 -->
    <div class="beijing"></div>
    <!-- 背景 -->
    <!-- 金额 -->
    <div class="money" v-for=" shang in shang">
      <div>
        <img :src="shang.photo_x" />
      </div>
      <div class="payable">
        <p>{{shang.pro_name}}</p>
        <p>{{shang.price}}</p>
      </div>
      <div class="details">
        <span>{{xiang}}</span>
        <van-icon name="arrow-down" />
      </div>
    </div>
    <!-- 线 -->
    <div>
      <van-divider />
    </div>
    <!-- 线 -->
    <div class="weipinbi">
      <span class="bors">
        <span class="bor"></span>
        <span>{{zhe}}</span>
      </span>
      <span>{{er}}</span>
    </div>
    <!-- 背景 -->
    <div class="beijing"></div>
    <!-- 背景 -->
    <div class="deal">
      <div>
        <p>本人已知悉并同意<span>用户协议</span> </p>
      </div>
      <div>
        <van-switch v-model="checked" active-color="#07c160" size="24px" style="margin-top: 22px;" />
      </div>
    </div>
    <!-- 背景 -->
    <div class="beijing"></div>
    <!-- 背景 -->
    <div class="voucher">
      <van-row>
        <van-col span="2">{{fa}}</van-col>
        <van-col class="guojihai" span="19" offset="2">{{guos}}</van-col>
      </van-row>
    </div>
    <!-- 背景 -->
    <div class="beijings"></div>
    <!-- 背景 -->
    <!-- 金额 -->
    <!-- 支付方式 -->
    <div class="obligation">
      <p>待付款：<span style="color:  #dd3d96;">￥{{jinqian}}</span></p>
      <van-button Dialog.alert style="border-radius: 35px; margin-left: 5%;width: 90%;" type="primary" size="large">{{weixin}}</van-button>
    </div>
    <!-- 支付方式 -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        shuzu:[],
        jinqian:0,
        shang: [],
        show: false,
        checked: false,
        dian: '/shoppingtrolley',
        yuan: '/',
        url: '/setadress',
        dun: '../../static/assets/anquan.jpg',
        goumai: '你正在安全购物环境中，请放心购买',
        shou: '设置收货地址',
        fu: '支付人',
        gao: '高文婷 410622******40',
        huan: '更换',
        xuan: '选择支付人',
        hai: '海关规定，购买跨境商品须提供实际支付人身份证信息，请选择实际支付人信息。',
        xing: '高文婷',
        haos: '410622*********40',
        xiu: '修改',
        tian: '添加新支付人',
        haiguan: '海关规定购买跨境商品，须验证支付人身份证，请确认使用高文婷名下的支付方式付款。',
        ying: '应付金额￥155.00',
        mian: '免运费',
        imgtu: '../../static/assets/tu.jpg',
        xiang: '详情',
        zhe: '可用0个唯品币抵扣',
        er: '￥0.00',
        fa: '发票',
        guos: '(唯品国际和海外直营商品不支持开具发票)',
        weixin: '微信支付'
      }
    },
    methods: {
      showPopup() {
        this.show = true;
      }
    },
    created() {
      var _this = this;
      this.$axios({
          method: 'get',
          url: 'https://dawn.changxvan.top/api/Address/index',
         params:{
                user_id:4,
           }
        })
        .then(function(res) {
          _this.shuzu = res.data.adds;
          console.log(res)
        })

      this.$axios({
          method: 'get',
          url: 'https://dawn.changxvan.top/api/Shopping/index',
          params: {
            user_id: 4,
          }
        })
        .then(res => {
        var array = res.data.cart;
        // console.log(array);
        this.shang = res.data.cart;
        var sum = 0 ;
         for(var i in array){
             sum += parseInt(array[i].price);
         }
       this.jinqian = sum ;
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

  /* 头 */
  /* 安全 */
  .safety {
    display: flex;
    justify-content: flex-start;
    color: #c3c3d3;
    width: 90%;
    margin-left: 5%;
  }

  .safety img {
    width: 20px;
    height: 20px;
  }

  /* 安全 */
  /* 设置地址 */
  .site {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-left: 5%;
  }

  /* 设置地址 */
  /* 背景 */
  .beijing {
    background-color: #f3f4f6;
    width: 100%;
    height: 15px;
    margin-top: 15px;
  }

  /* 背景 */
  /*  */
  .change {
    width: 90%;
    margin-left: 5%;
  }

  .genghuan {
    display: flex;
    justify-content: space-between;
  }

  .genghuans {
    display: flex;
    justify-content: space-between;
  }

  .van-popup--bottom {
    height: 45% !important;
  }

  .stipulate {
    background-color: #f3f4f6;
    width: 100%;
    height: 50px;
  }

  .stipulate p {
    width: 90%;
    margin-left: 5%;
    color: #A6A9AD;
  }

  .xinxis {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-left: 5%;
  }

  .xinxi {
    display: flex;
    justify-content: space-between;
  }

  .gai {
    display: flex;
    justify-content: flex-end;
  }

  .adds {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-left: 5%;
  }

  .addse {
    font-size: 20px;
    font-family: 宋体;
  }

  .customs {
    color: darkorange;
    font-size: 14px;
  }

  /*  */
  /* 金额 */
  .money {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-left: 5%;
  }

  .money img {
    width: 100px;
    height: 100px;
  }

  .payable {
    text-align: center;
  }

  .details {
    margin-top: 15px;
  }

  .weipinbi {
    display: flex;
    justify-content: space-between;
    color: #c3c3d3;
    width: 90%;
    margin-left: 5%;
  }

  .bors {
    display: flex;
    justify-content: flex-start;
  }

  .bors span {
    margin-left: 15px;
  }

  .bor {
    border: 1px solid #c3c3d3;
    width: 15px;
    height: 15px;
    border-radius: 3px;
  }

  .deal {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-left: 5%;
  }

  .deal p {
    margin-top: 25px;
  }

  .deal span {
    color: #1989fa;
  }

  .voucher {
    margin-top: 5%;
    margin-left: 5%;
  }

  .guojihai {
    color: #c3c3d3;
  }

  .beijings {
    background-color: #f3f4f6;
    width: 100%;
    height: 130px;
    margin-top: 15px;
  }

  /* 金额 */
  /* 支付方式 */
  .obligation {
    bottom: 0;
    margin: 5%;
  }

  .obligation p {
    text-align: center;
  }

  /* 支付方式 */
  .van-address-list__add{
    display: none;
  }
  .van-address-list{
    box-sizing: border-box;
    height: 20% !important;
    padding-bottom: 0px;
  }
</style>
