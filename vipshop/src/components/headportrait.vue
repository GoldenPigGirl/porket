<template>
  <div id="headportrait">
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
        <h4>{{xiugai}}</h4>
      </van-col>
      <van-col span="6">
        <div class="yuan">
         <!-- <router-link :to="dian"> -->
           <div class="yuanss">
             <img :src="yuanss" />
           </div>
         <!-- </router-link> -->
          <div class="bian"></div>
            <router-link :to="yuan">
          <div class="yuans">
            <img :src="yuans" />
          </div>
          </router-link>
        </div>
      </van-col>
    </van-row>
    <!-- 头部 -->

    <!-- 图片上传 -->
    <div class="imgsc">
      <van-uploader :after-read="afterRead" />
      <p>{{touxiang}}</p>
    </div>
    <!-- 图片上传 -->
    <!-- 信息 -->
    <van-cell-group>
      <van-cell title="昵称 : 精致的猪猪" value=">" />
      <van-cell title="签名 : 我们都开始各自的生活" value=">" />
      <van-cell title="性别 : 女" value=">" />
      <van-cell title="生日 : 2000-06-10" value=">" />
      <van-cell title="职业 : IT" value=">" />
      <van-cell title="公司 : 在读" value=">" />
      <van-cell title="邮箱 : 414111324@qq.com" value=">" />
    </van-cell-group>
    <!-- 信息 -->
  </div>
</template>

<script>
  export default {
   data(){
     return{
       dian:'/personal',
       yuan:'/',
       xiugai:'修改资料',
       touxiang:'修改头像',
       yuanss:'../../static/assets/dian.jpg',
       yuans:'../../static/assets/yuand.jpg'
     }
   },
   methods: {
     afterRead(file) {
       // 此时可以自行将文件上传至服务器
       console.log(file);
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
    margin-left: -18px;
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
  /* 图片上传 */
  .imgsc {
    text-align: center;
  }

  /* 图片上传 */
  .van-cell__value span{
	  font-size: 20px;
    font-family: 宋体;
  }
</style>
