<template>
  <div class="list-wrap">
    <Card :bordered="bordered" :padding="padding">
        <div class="list-item-top">
          <router-link :to="`/detail/${listItem.id}`"><img :src="listItem.img" alt="" /></router-link>
        </div>
        <div class="list-item-bottom">
          <div class="list-item-name">{{ listItem.name }}</div>
          <div class="list-item-price"><span>￥</span>{{ listItem.price }}</div>
          <div class="list-item-sales">
            <span>销量</span>{{ listItem.sales }}
            <router-link class="add-cart" to="">
              <Icon type="ios-cart-outline" size="32" color="#8c0776" />
            </router-link>
          </div>
        </div>
      </Card>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: ['listItem'],
  data() {
    return {
      bordered: false,
      padding: 0
    }
  }
}
</script>

<style lang="less" scoped>
.list {
  &-item {
    &-top {
      img {
        width: 100%;
      }
    }
    &-name {
      color: #000;
      font-size: 16px;
    }
    &-price {
      color: #ff3300;
      font-size: 18px;
      margin: 3% 0;
    }
    &-sales {
      box-sizing: border-box;
      padding-bottom: 6px;
      color: rgba(0, 0, 0, 0.4);
      span {
        margin-right: 4px;
      }
    }
    &-bottom {
      position: relative;
      .add-cart {
        position: absolute;
        right: 8px;
        bottom: 4px;
      }
    }
  }
}
</style>


