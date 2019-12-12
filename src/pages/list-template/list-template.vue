<template>
  <div @tap="toDetail" class="tmpContainer">
    <div class="avatar_date">
      <img :src="item.avatar">
      <span>{{item.date}}</span>
    </div>
    <p class="company">{{item.title}}</p>
    <img class="content_img" :src="item.headImgSrc">
    <p class="content">{{item.detail_content}}</p>
    <div class="love_attention">
      <img :src="item.detail_love_image1">
      <span>{{item.love_count}}</span>
      <img :src="item.detail_love_image2">
      <span>{{item.attention_count}}</span>
    </div>
  </div>
</template>

<script>
    export default {
      props:[
        'item',
        'index'
      ],
      methods:{
        toDetail(){
          wx.navigateTo({
            url:'/pages/detail/main?index=' + this.index
          })
        }
      }
    }
</script>

<style >
  /* pages/template/template.wxss */
  .tmpContainer {
    display: flex;
    flex-direction: column;
    border-top:1px solid #efefef;
    border-bottom:1px solid #efefef;
    padding:5px 0;
    margin:20rpx 0 40rpx;
  }

  .avatar_date {
    margin:10rpx 0 20rpx 10rpx;
  }

  .avatar_date image {
    width: 60rpx;
    height:60rpx;
    vertical-align: middle;
  }

  .avatar_date text {
    font-size: 14px;
    vertical-align: middle;
    margin-left: 10px;
  }

  .company {
    font-size: 18px;
    font-weight: 700;
    margin:20rpx 0;
    text-align: center;
  }

  .content_img {
    width: 100%;
    height:680rpx;
  }

  .content {
    font-size: 16px;
    color: #666;
    text-indent: 16px;
    line-height: 28px;
  }

  .love_attention image {
    width:32rpx;
    height:32rpx;
    vertical-align: middle;
  }

  .love_attention text {
    font-size: 14px;
    color: #666;
    vertical-align: middle;
    margin:0 16rpx;
  }
</style>
