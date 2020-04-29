<template>
  <div id="onefive">
    <!-- 头部 -->
    <van-row type="flex" justify="space-between">
      <van-col class="yui" span="6">
        <router-link :to="dian">
          <div> < </div>
        </router-link>
      </van-col>
       <van-col class="wph" span="6">
          <h4>添写地址</h4>
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
    <!-- 添加地址 -->
   <div>
     <van-address-list v-model="chosenAddressId" :list="shuzu" :disabled-list="disabledList" @add="onAdd" @edit="onEdit" @select="onselect" />
   </div>
    <!-- 添加地址 -->

  </div>
</template>

<script>
  export default {
    inject:['reload'],
    data() {
      return {
        dian: '/payments',
        yuan: '/',
        chosenAddressId: '1',
        shuzu:[]
      }
    },

    methods: {
    onAdd(){
      this.$router.push({
        path:'/address'
      });
    },

      onEdit(contents) {
      this.$router.push({
        query:{
          id:contents.id
        }
      })
      },
      onselect(content){

       // var keydata = this.$qs.stringify({
       //   'user_id':4,
       //   'receiver':content.name,
       //   'tel':content.tel,
       //   'adds':content.addressDetail,
       //   'code':1,
       //   'sheng':1,
       //   'city':1,
       //   'quyu':1
       // })
         // this.$axios.post('https://dawn.changxvan.top/api/Address/add_adds',keydata)
         // this.$router.push('/payments')
         // this.$router.go(0)
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
          // console.log(res)
        })

       var zhi = this.$route.query.id;
       var keydata = this.$qs.stringify({
          user_id:4,
          id:zhi
       })
        this.$axios.post('https://dawn.changxvan.top/api/Address/my_del ',keydata)
         // .then((response) => {
         //   this.commodity = response.data.pro;
         //   console.log(response.data)
         // })

    },
  }
</script>

<style scoped>
  /* 头 */
  .jiantou {
    margin-top: 22px;
    margin-left: 5%;
  }

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
</style>
