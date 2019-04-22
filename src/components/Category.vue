<template>
  <div class="Category">
    <Row class="Category-class-group" v-for="(items, index) in tagsInfo" :key="index">
      <Col class="Category-class-name" span="2">{{ items.tagName }} : </Col>
      <Col class="Category-class-select" span="22">
        <span v-for="(item, subIndex) in items.tags" :key="subIndex">{{ item }}</span>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'Category',
  data() {
    return {
      tagsInfo: [
        {
          tagName: '分类',
          tags: ['全部分类', '蛋糕', '冰淇淋', '咖啡下午茶', '常温蛋糕', '设计师礼品', '面包']
        },
        {
          tagName: '口味',
          tags: ['全部口味', '乳脂奶油', '慕斯', '乳酪', '巧克力', '坚果', '水果', '含酒', '咖啡', '冰淇淋']
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import '../theme/index.less';

.Category {
  margin-bottom: @division;
  width: 100%;
  font-size: 14px;
  background-color: #fff;
  border-radius: 4px;
  &-class {
    &-group {
      margin-top: 1px;
      height: 45px;
    }
    &-name {
      padding-left: 15px;
      line-height: 44px;
      color: #666;
      font-weight: bold;
      &:first-child {
        line-height: 43px;
      }
    }
    &-select {
      span {
        margin-left: 15px;
        width: 160px;
        line-height: 45px;
        cursor: pointer;
      }
    }
  }
}
</style>

