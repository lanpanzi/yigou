<template>
  <div class="Cake">
    <div class="Cake-Wrap">
      <category></category>
      <div class="list">
        <div class="list-item"
          v-for="listItem in cakeList"
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
  name: 'Cake',
  data() {
    return {
      cakeList: []
    }
  },
  created() {
    this.$http.getCakeListData()
      .then(res => {
        this.cakeList = res.cakeList
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

.Cake {
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




