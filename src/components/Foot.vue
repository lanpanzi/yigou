<template>
  <div class="Foot">
    <Layout>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'Foot'
}
</script>

<style lang="less" scoped>
@import '../theme/index.less';

.Foot {
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    &-footer-center {
      text-align: center;
      background-color: @primary-color;
      color: #fff;
    }
  }
}
</style>

