<template>
  <div class="wrapper">
    <img v-if="isShow" class="userImage" :src="userInfo.avatarUrl">
    <button v-else class="btn" open-type="getUserInfo" @getuserinfo="getUserInfo">获取用户信息</button>
    <p class="userName" >hello {{userInfo.nickName}}</p>
    <div class="start">
      <p @click="getStart">开启小程序之旅</p>
    </div>
  </div>
</template>
<script>
  export default {
      data() {
          return {
              userInfo: {},
              isShow: false
          }
      },
      beforeMount(){
        this.handleGetUserInfo()
      },
      methods:{
          getStart(){
              wx.navigateTo({
                  url: '/pages/list/main'
              })
          },
          handleGetUserInfo() {
              wx.getUserInfo({
                  success: (data) => {
                      this.userInfo = data.userInfo
                      this.isShow = true
                  },
                  fail: () => {
                      console.error('获取失败')
                  }
              })
          },
          getUserInfo (data) {
              if(data.mp.detail.rawData){
                  //用户授权
                  this.handleGetUserInfo()
                  }
              }
      }
  }
</script>
<style>
  page{
    background-color: palegoldenrod;
  }
  .wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .userImage{
    width: 200rpx;
    height: 200rpx;
    border-radius: 50%;
    margin: 100rpx 0;
  }
  .userName{
    font-size: 32rpx;
    font-weight: bold;
    margin: 100rpx 0;
  }
  .start{
    border: 1rpx solid #888;
    width: 280rpx;
    height: 80rpx;
    border-radius: 10rpx;
    line-height: 80rpx;
    text-align: center;
    box-shadow: 2px 2px 2px 0 rgba(0,0,0,0.5);
  }
  .btn{
    width: 280rpx;
    height: 80rpx;
    line-height: 80rpx;
    margin: 100rpx 0;
    border: 1rpx solid #eee;
    box-shadow: 2px 2px 2px 0 rgba(0,0,0,0.5);
  }
</style>
