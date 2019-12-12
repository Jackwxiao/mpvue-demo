<template>
  <div class="swiperWrapper">
    <swiper indicator-dots="true" indicator-color="yellow" indicator-active-color="red"
            autoplay="true" interval="2000">
      <swiper-item>
        <img src="/static/images/detail/carousel/01.jpg" alt="image">
      </swiper-item>
      <swiper-item>
        <img src="/static/images/detail/carousel/02.jpg" alt="image">
      </swiper-item>
      <swiper-item>
        <img src="/static/images/detail/carousel/03.jpg" alt="image">
      </swiper-item>
      <swiper-item>
        <img src="/static/images/detail/carousel/04.jpg" alt="image">
      </swiper-item>
    </swiper>
    <div>
      <ListTmp v-for="(item,index) in listTmp" :key="index" :item="item" :index="index" />
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import ListTmp from '../list-template/list-template'
  export default {
      components:{ListTmp},
      beforeMount(){
        this.$store.dispatch('getList')
      },
      computed:{
        ...mapState(['listTmp'])
      }
  }
</script>
<style>
  .swiperWrapper swiper{
    width: 100%;
    height: 400rpx;
  }
  .swiperWrapper swiper img{
    width: 100%;
    height: 100%;
  }
</style>
