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
      <homeBanner></homeBanner>
      <!-- 匠心·原创 -->
      <div class="Home-Original">
        <homeListTop :title="listTop[0].title" :id="listTop[0].id"></homeListTop>
        <div class="Home-Original-bottom">
          <div class="recommendation">
            <div class="recommendation-item"
            v-for="recItem in original.rec"
            :key="recItem.id">
              <Card :bordered="bordered" :padding="padding">
                <router-link to=""><img :src="recItem.img" alt="" /></router-link>
              </Card>
            </div>
          </div>
          <div class="list">
            <div class="list-item"
              v-for="listItem in original.list"
              :key="listItem.id">
              <listItem :listItem="listItem"></listItem>
            </div>
          </div>
        </div>
      </div>
      <!-- 广告 -->
      <homeBanner style="margin-top: 1.5%;"></homeBanner>
      <!-- 贝式·严选 -->
      <div class="Home-Strict">
        <homeListTop :title="listTop[1].title" :id="listTop[1].id"></homeListTop>
        <div class="Home-Strict-bottom">
          <div class="recommendation">
            <div class="recommendation-item"
            v-for="recItem in strict.rec"
            :key="recItem.id">
              <Card :bordered="bordered" :padding="padding">
                <router-link to=""><img :src="recItem.img" alt="" style="height: 273px;" /></router-link>
              </Card>
            </div>
          </div>
          <div class="list">
            <div class="list-item"
              v-for="listItem in strict.list"
              :key="listItem.id">
              <listItem :listItem="listItem"></listItem>
            </div>
          </div>
        </div>
      </div>
      <!-- 广告 -->
      <homeBanner></homeBanner>
      <!-- 网红爆款 -->
      <div class="Home-Hot">
        <homeListTop :title="listTop[2].title" :id="listTop[2].id"></homeListTop>
        <div class="Home-Hot-bottom">
          <div class="list">
            <div class="list-item"
            v-for="listItem in hot"
            :key="listItem.id">
              <listItem :listItem="listItem"></listItem>
            </div>
          </div>
        </div>
      </div>
      <!-- 猜您喜欢 -->
      <div class="Home-Love">
        <homeListTop :title="listTop[3].title" :id="listTop[3].id"></homeListTop>
        <div class="list">
          <div class="Home-Hot-bottom">
            <div class="list">
              <div class="list-item"
              v-for="listItem in love"
              :key="listItem.id">
                <listItem :listItem="listItem"></listItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import listItem from '@/components/ListItem'

import homeBanner from './HomeBanner'
import homeListTop from './HomeListTop'

export default {
  name: 'Home',
  data() {
    return {
      value: 0,
      bordered: false,
      padding: 0,
      carousel: [],
      activity: [],
      listTop: [],
      original: {},
      strict: {},
      hot: [],
      love: []
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

    this.$http.getListTopData()
      .then(res => {
        this.listTop = res.listTop
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

    this.$http.getStrictData()
      .then(res => {
        this.strict = res.strict
      })
      .catch(error => {
        console.log(error)
      })

    this.$http.getHotData()
      .then(res => {
        this.hot = res.hot
      })
      .catch(error => {
        console.log(error)
      })

    this.$http.getLoveData()
      .then(res => {
        this.love = res.love
      })
      .catch(error => {
        console.log(error)
      })
  },
  components: {
    listItem,
    homeListTop,
    homeBanner
  }
}
</script>

<style lang="less" scoped>
@import '../../theme/index.less';

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
  &-Activity, &-Original, &-Strict, &-Hot, &-Love{ 
    margin: @division 0; 
  }
  /* 活动 */
  &-Activity {
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
  /* 匠心·原创  贝式·严选*/
  &-Original, &-Strict, &-Hot, &-Love {
    &-bottom {
      display: flex;
      .recommendation {
        width: 20%;
        margin-right: 1%;
        display: flex;
        flex-wrap: wrap;
        &-item {
          img {
            width: 100%;
          }
        }
      }
      .list {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        &-item {
          width: 32%;
          text-align: center;
          margin-bottom: 1%;
        }
      }
    }
  }
  /* 网红爆款 猜您喜欢 */
  &-Hot, &-Love {
    .list {
      &-item {
        width: 24%;
        margin-bottom: 0;
      }
    }
  }
}
</style>






