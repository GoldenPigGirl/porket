<template>
  <div id="indextext">
    <!-- 头 -->
    <van-row type="flex" justify="space-between">
      <van-col class="yui" span="6">
        <router-link :to="dian">
          <div>
            <
          </div>
        </router-link>
      </van-col>
    <van-col class="wph" span="6">
        <h4>商品</h4>
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
    <!-- 头 -->
    <!-- 关键字搜索 -->
    <van-row class="buju" type="flex" justify="space-between">
     <router-link :to="url">
       <van-col span="12" v-for="cun in commodity" :to="url">
         <img :src="'https://dawn.changxvan.top/Data/'+cun.photo_x" />
         <p>{{cun.name}}</p>
       </van-col>
     </router-link>
    </van-row>
     <!-- 关键字搜索 -->
     <!-- 二级详情 -->
    <van-grid :border="false" :column-num="2">
       <van-grid-item v-for="shid in shid" @click="cansu(shid.id)">
         <van-image :src="shid.photo_x"/>
         <p>{{shid.name}}</p>
       </van-grid-item>
     </van-grid>
      <!-- 二级详情 -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dian: '/',
        yuan: '/',
        url:'/particulars',
        commodity: [],
         shid:[],
      }
    },
    methods:{
      cansu(shsu){
        this.$router.push({
          path:'/particulars',
          query:{
            msy:shsu,
          }
        })
      }
    },
    created() {
      var zhi = this.$route.query.keyword;
      var keydata = this.$qs.stringify({
        keyword: zhi
      })
      this.$axios.post('https://dawn.changxvan.top/api/search/get_product', keydata)
        .then((response) => {
          this.commodity = response.data.pro;
          // console.log(response.data)
        })
       var xuns = this.$route.query.kk;
       var idcx = this.$qs.stringify({
          cat_id : xuns
       })
       this.$axios.post('https://dawn.changxvan.top/api/Product/lists', idcx)
         .then((nn) => {
           this.shid = nn.data.pro
           // console.log(shid)
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
  .buju {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
  }

  .buju p{
    color: black;
  }

  .buju img {
    width: 150px;
    height: 150px;
  }
</style>
