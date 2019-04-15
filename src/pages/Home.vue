<template>
  <div class="Home">
    <!-- 轮播图 -->
    <div class="Home-Carousel">
      <Carousel autoplay v-model="value" loop>
        <CarouselItem
          v-for="carouselItem in carousel"
          :key="carouselItem.id">
            <div class="demo-carousel">
              <router-link to="">
                <img :src="carouselItem.img" alt="" />
              </router-link>
            </div>
        </CarouselItem>
      </Carousel>
    </div>
    <!-- 内容 -->
    <div class="Home-Wrap">
      <!-- 活动 -->
      <div class="Home-Activity">
        <div class="Home-Activity-Item"
        v-for="activityItem in activity"
        :key="activityItem.id">
          <router-link to="">
            <img :src="activityItem.img" alt="" />
          </router-link>
        </div>
      </div>
      <!-- 广告 -->
      <div class="Home-Banner">
        <router-link to="">
          <img :src="banner.img" alt="" />
        </router-link>
      </div>
      <!-- 匠心·原创 -->
      <div class="Home-Original">
        <div class="Home-Original-top">
          <div class="title"><h3>匠心·原创</h3></div>
          <div class="more">
            <router-link to="" class="more-wrap">
              <p>查看更多</p>
              <Icon type="ios-arrow-dropright" size="24" class="more-icon" />
            </router-link>
          </div>
        </div>
        <div class="Home-Original-bottom">
          <div class="recommendation">
            <div class="recommendation-item"
            v-for="recItem in original.rec"
            :key="recItem.id">
              <Card>
                <img :src="recItem.img" alt="" />
              </Card>
            </div>
          </div>
          <div class="list"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      value: 0,
      carousel: [],
      activity: [],
      banner: {},
      original: {}
    }
  },
  created() {
    this.$http.getCarouselData()
      .then(res => {
        this.carousel = res.carousel
      })
      .catch(error => {
        console.log(error)
      })

    this.$http.getActivityData()
      .then(res => {
        this.activity = res.activity
      })
      .catch(error => {
        console.log(error)
      })

    this.$http.getBannerData()
      .then(res => {
        this.banner = res.banner
      })
      .catch(error => {
        console.log(error)
      })

    this.$http.getOriginalData()
      .then(res => {
        this.original = res.original
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style lang="less" scoped>
@import '../theme/index.less';
@division: 2%;
.Home {
  /* 轮播图 */
  &-Carousel {
    img {
      width: 100%;
    }
  }
  /* 内容 */
  &-Wrap {
    padding: 0 6%;
  }
  &-Activity, &-Banner, &-original { 
    margin: 0 0 @division; 
  }
  /* 活动 广告 */
  &-Activity, &-Banner {
    img {
      width: 100%;
    }
  }
  /* 活动 */
  &-Activity {
    display: flex;
    justify-content: space-between;
    &-Item {
      width: 24%;
    }
  }
  /* 匠心·原创 */
  &-Original {
    &-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: @division 0;
      .title {
        font-weight: 600;
        font-size: 24px;
        color: @primary-color;
      }
      .more {
        &-wrap {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
        }
        &-icon {
          margin-right: 8px;
        }
      }
    }
    &-bottom {
      display: flex;
      .recommendation {
        width: 20%;
        &-item {
          img {
            width: 100%;
          }
        }
      }
      .list {
        flex: 1;
      }
    }
  }
}
</style>






