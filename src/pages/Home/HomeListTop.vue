<template>
  <div class="Home-List-top">
    <div class="title"><h3>{{title}}</h3></div>
    <div class="more">
      <router-link to="" class="more-wrap">
        <p>查看更多</p>
        <Icon type="ios-arrow-dropright" size="24" class="more-icon" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeListTitle',
  props:['title', 'id']
}
</script>

<style lang="less" scoped>
@import '../../theme/index.less';

.Home {
  &-List {
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
  }
}
</style>


