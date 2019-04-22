<template>
  <div class="Bread">
    <div class="Bread-Wrap">
      <category></category>
      <div class="list">
        <div class="list-item"
          v-for="listItem in breadList"
          :key="listItem.id">
          <listItem :listItem="listItem"></listItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import category from '@/components/Category'
import listItem from '@/components/ListItem'

export default {
  name: 'Bread',
  data() {
    return {
      breadList: []
    }
  },
  created() {
    this.$http.getBreadListData()
      .then(res => {
        this.breadList = res.breadList
      })
      .catch(error => {
        console.log(error)
      })
  },
  components: {
    category,
    listItem
  }
}
</script>

<style lang="less" scoped>
@import '../../theme/index.less';

.Bread {
  &-Wrap {
    padding: 23px 6% 0;
    .list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      &-item {
        width: 24%;
        margin-bottom: @division;
      }
    }
  }
}
</style>




