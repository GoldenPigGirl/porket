<template>
  <div id="onesix">
    <!-- 头部 -->
    <van-row type="flex" justify="space-between">
       <van-col class="yui" span="6">
          <router-link :to="dian">
         <div>
           <
         </div>
         </router-link>
       </van-col>
      </van-col>
      <van-col class="wph" span="6">
        <h4>添加收货地址</h4>
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
    <!-- 地区 -->
    <van-address-edit :area-list="areaList" show-postal show-delete show-set-default show-search-result :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave" @delete="onDelete" @change-detail="onChangeDetail" />
    <!-- 地区 -->
  </div>
</template>

<script>
  import areaList from '../assets/area.js'
  export default {
    data() {
      return {
        dian: '/setadress',
        yuan: '/',
        areaList,
        searchResult: []
      }
    },
    methods: {
      onSave(content) {
        var keydata = this.$qs.stringify({
          'user_id':4,
          'receiver':content.name,
          'tel':content.tel,
          'adds':content.addressDetail,
          'code':1,
          'sheng':1,
          'city':1,
          'quyu':1
        })
          this.$axios.post('https://dawn.changxvan.top/api/Address/add_adds',keydata)
          this.$router.push('/setadress')
          // this.$router.go(0)
      },
      onDelete() {
        Toast('delete');
      },
      onChangeDetail(val) {
        if (val) {
          this.searchResult = [{
            name: '黄龙万科中心',
            address: '杭州市西湖区'
          }];
        } else {
          this.searchResult = [];
        }
      },
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
  .map {
    width: 100%;
    height: 400px;
  }
</style>
