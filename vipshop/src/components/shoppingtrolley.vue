<template>
  <div id="shoppingtrolley">
    <!-- 头部 -->
    <van-row type="flex" justify="space-between">
      <van-col class="yui" span="6">
        <router-link :to="dian">
          <div>
            < </div> </router-link> </van-col> <van-col class="wph" span="6">
              <h4>购物车</h4>
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
    <!-- 精选特卖 -->
    <div class="selectsale">
      <div class="handpick">
        <p>{{jingxuan}}</p>
      </div>
      <div>
        <van-divider />
      </div>
     <div v-for="shang in shang">
       <van-card num="1" :price="shang.price" :desc="shang.pro_name" :title="商品标题" :thumb="shang.photo_x">
         <div slot="tags">
           <div class="haohuo">
             <p>{{haohuo}}</p>
           </div>
           <p class="nos">{{tui}}</p>
         </div>
         <div slot="footer" >
           <van-button @click="shan(shang.id)" size="mini">删除</van-button>
         </div>
       </van-card>
     </div>
      <div>
        <van-divider />
      </div>
      <div class="zonged">
        <div class="qian">
          <h5>￥{{jinqian}}</h5>
        </div>
        <div class="guoji">
          <p>{{guo}}</p>
        </div>
        <div>
          <van-nav-bar left-text="使用优惠劵" right-text=">" @click-left="onClickLeft" @click-right="onClickRight" />
        </div>
      </div>
    </div>
    <!-- 精选特卖 -->
    <!-- 结算 -->
    <div class="dingwei">
      <div class="jiesuan">
        <p>总金额：
          <span>￥{{jinqian}}</span>
          (不含运费)
        </p>
      </div>
      <router-link :to="jies">
        <van-button class="jie" type="primary" size="large">{{jie}}</van-button>
      </router-link>
    </div>
    <!-- 结算 -->
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
    inject:['reload'],
    data() {
      return {
       jinqian: 0,
        dian: '/classify',
        yuan: '/',
        url: '/particulars',
        jies: '/payments',
        jingxuan: '精选特卖',
        shang:[],
        haohuo: '唯品会好货精选',
        tui: '不支持7天无理由退换',
        qian: '￥155.00',
        guo: '唯品会国际商品已满88元，已享免10元运费',
        jie: '结算',
        active: 2,
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
      }
    },
    methods: {
      onClickLeft() {
        Toast('返回');
      },
      onClickRight() {
        Toast('按钮');
      },
      shan(content){
       this.$axios({
         method:'get',
         url:'https://dawn.changxvan.top/api/Shopping/delete',
         params:{
           cart_id:content,
         }
       })
       this.reload()
      }
    },
    created(){
      this.$axios({
        method:'get',
        url:'https://dawn.changxvan.top/api/Shopping/index',
        params:{
          user_id:4,
        }
      })
      .then(res =>{
        var array =res.data.cart;
        console.log(array);
        this.shang=res.data.cart;
        var sum=0;
         for(var i in array){
             sum += parseInt(array[i].price);
         }
       this.jinqian=sum;
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
  /* 精选特卖 */
  .selectsale {
    width: 90%;
    margin-left: 5%;
  }

  .handpick {
    display: flex;
    justify-content: flex-start;
  }

  .haohuo {
    line-height: 10px;
    color: #98989f;
    font-size: 12px;
  }

  .nos {
    width: 130px;
    text-align: center;
    color:   #dd3d96;
    border: 1px solid   #dd3d96;
    border-radius: 3px;
    font-size: 10px;
  }

  .zonged {
    line-height: 5px;
  }

  .qian {
    display: flex;
    justify-content: flex-end;
  }

  .guoji {
    color: #585c64;
    font-size: 13px;
  }

  .van-nav-bar__text {
    color: black;
  }

  /* 精选特卖 */
  /* 结算 */
  .dingwei {
   background-color:
   white;
   bottom: 0;
   position: fixed;
   margin-bottom: 62px;
   position: static;
   width: 100%;
   text-align: center;
  }

  .jiesuan {
    display: flex;
    justify-content: center;
  }

  .jiesuan span {
    color: #dd3d96;
  }

  .jiesuan p {
    color: #585c64;
  }

  .jie {
    border-radius: 30px;
    background-color: #dd3d96;
    border: none;
    position: relative;
  }

  /* 结算 */
</style>
