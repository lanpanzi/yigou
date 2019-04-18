<template>
  <div class="Home-Banner">
    <router-link to="">
      <img :src="banner.img" alt="" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeBanner',
  data() {
    return {
      banner: {}
    }
  },
  created() {
    this.$http.getBannerData()
      .then(res => {
        this.banner = res.banner
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>


<style lang="less" scoped>
@import '../../theme/index.less';

.Home {
  &-Banner {
    margin: @division 0;
    img {
      width: 100%;
    }
  }
}
</style>

