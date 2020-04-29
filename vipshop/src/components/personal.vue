<template>
  <div id="personal">
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
        <h4>个人中心</h4>
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
    <!-- 会员 -->
    <div class="huiyuan">
      <div class="hebing">
        <div class="touxiang">
          <router-link :to="url">
            <img :src="touxiang" />
          </router-link>
        </div>
        <div class="zhuzhu">
          <p>{{zhuzhu}}</p>
          <div class="yinka">
            <img :src="pai" />
            <span>{{huiyuan}}</span>
          </div>
          <div class="shoujihao">
            <img :src="shou" />
            <span>{{haos}}</span>
          </div>
        </div>
      </div>
      <div></div>
      <div class="zhanghao">
        <img :src="jiantou" />
        <span>{{qie}}</span>
      </div>
    </div>
    <!-- 会员 -->
    <!-- 开通会员 -->
    <div class="caoji">
      <img :src="vips" />
    </div>
    <!-- 开通会员 -->


    <div class="dingdans">
      <!-- 收藏 -->
      <div class="collec">
        <span v-for=" collec in collec">
          <img :src="collec.imgs" />
          <p>{{collec.pin}}</p>
        </span>
      </div>
      <!-- 收藏 -->
      <!-- 订单 -->
      <div class="indent">
        <span v-for=" indent in indent">
          <img :src="indent.tu" />
          <p>{{indent.wen}}</p>
        </span>
        <span>
          <img src="../assets/dingdan.jpg" />
          <p>{{quan}}</p>
        </span>
      </div>
      <!-- 订单 -->
      <div class="beijing"></div>
      <!-- 售后 -->
      <div class="after">
        <span v-for=" after in after">
          <img :src="after.man" />
          <p>{{after.pian}}</p>
        </span>
      </div>
      <div>
        <van-divider />
      </div>
      <div class="afters">
        <span v-for=" afters in afters">
          <img :src="afters.mans" />
          <p>{{afters.pians}}</p>
        </span>
      </div>
    </div>
    <!-- 售后 -->
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
        dian:'/shoppingtrolley',
        yuan:'/',
        url: '/headportrait',
        touxiang:'../../static/assets/touxiang.jpg',
        zhuzhu:'精致的猪猪',
        pai:'../../static/yin.jpg',
        huiyuan:'银卡会员',
        shou:'../../static/shouji.jpg',
        haos:'177*****444',
        jiantou:'../../static/jiantou.jpg',
        qie:'切换账号',
        vips:'../../static/vips.jpg',
        quan:'全部订单',
        active: 3,
        icon: [{
          url:'/',
          shou:'首页',
          inactive: '../static/assets/1.jpg',
          active: '../static/assets/1a1.jpg'
        },
        {
          url:'/classify',
          shou:'分类',
          inactive: '../static/assets/2.jpg',
          active: '../static/assets/2b2.jpg'
        },
        {
          url:'/shoppingtrolley',
          shou:'购物车',
          inactive: '../static/assets/3.jpg',
          active: '../static/assets/3c3.jpg'
        },
        {
          url:'/personal',
          shou:'个人中心',
          inactive: '../static/assets/4.jpg',
          active: '../static/assets/4d4.jpg'
        },
        ],
        collec: [{
            imgs: '../../static/assets/tilan.jpg',
            pin: '商品收藏'
          },
          {
            imgs: '../../static/assets/xin.jpg',
            pin: '品牌收藏'
          },
          {
            imgs: '../../static/assets/xiaodian.jpg',
            pin: '店铺收藏'
          },
          {
            imgs: '../../static/assets/jiao.jpg',
            pin: '浏览足迹'
          }
        ],
        indent: [{
            tu: '../../static/assets/yhk.jpg',
            wen: '待付款'
          },
          {
            tu: '../../static/assets/bao.jpg',
            wen: '待收货'
          },
          {
            tu: '../../static/assets/kb.jpg',
            wen: '填口碑'
          },
          {
            tu: '../../static/assets/sh.jpg',
            wen: '退货/售后'
          }
        ],
        after: [{
            man: '../../static/assets/tubaio.jpg',
            pian: '收货地址'
          },
          {
            man: '../../static/assets/zuan.jpg',
            pian: '会员俱乐部'
          },
          {
            man: '../../static/assets/wei.jpg',
            pian: '关于唯品会'
          }

        ],
        afters: [{
            mans: '../../static/assets/juan.jpg',
            pians: '优惠劵'
          },
          {
            mans: '../../static/assets/bi.jpg',
            pians: '唯品币'
          },
          {
            mans: '../../static/assets/erji.jpg',
            pians: '唯品客服'
          }

        ]

      }
    }
  }
</script>

<style scoped>
  /* 头 */
  .yui{
    margin-top: 1.25rem;
    margin-left:10px;
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
  /* 会员 */
  .huiyuan {
    display: flex;
    justify-content: space-around;
  }

  .hebing {
    display: flex;
    justify-content: flex-start;
  }

  .touxiang img {
    border-radius: 30px;
    width: 60px;
    height: 60px;
    margin: auto;
  }

  .zhuzhu {
    margin-top: -1.25rem;
    margin-left: 20px;
  }

  .yinka {
    font-size: 14px;
    color: #c3c3c3;
    display: flex;
    justify-content: flex-start;
  }

  .yinka img {
    width: 20px;
    height: 20px;
  }

  .shoujihao {
    padding-left: 8%;
    font-size: 12px;
    width: 100px;
    color: #8b8b8b;
    display: flex;
    justify-content: flex-start;
    border: 1px solid #f3f4f4;
    background-color: #f3f4f4;
    border-radius: 30px;
    margin-top: 15px;
  }

  .shoujihao img {
    width: 15px;
    height: 15px;
  }

  .zhanghao {
    display: flex;
    justify-content: flex-start;
    font-size: 14px;
  }

  .zhanghao img {
    width: 18px;
    height: 20px;
  }

  /* 会员 */
  /* 开通会员 */
  .caoji {
    display: flex;
    justify-content: center;
    width: 90%;
    margin-left: 5%;
    margin-top: 15px;
  }

  /* 开通会员 */
  /* 收藏 */
  .collec {
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-top: 20px;
    line-height: 3px;
  }

  .collec img {
    width: 25px;
    height: 25px;
  }

  /* 收藏 */
  /* 订单 */
  .dingdans p {
    font-size: 14px;
    color: #c3c3c3;
  }

  .indent {
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-top: 30px;
    line-height: 3px;
  }

  .indent img {
    width: 25px;
    height: 25px;
  }

  .beijing {
    background-color: #f3f4f6;
    height: 10px;
    width: 100%;
    margin-top: 20px;
  }

  .after {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    text-align: center;
    margin-top: 20px;
    line-height: 3px;
  }

  .after img {
    width: 20px;
    height: 20px;
  }

  .afters {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    text-align: center;
    margin-top: 20px;
    line-height: 3px;
  }

  .afters img {
    width: 18px;
    height: 20px;
  }

  /* 订单 */
</style>
