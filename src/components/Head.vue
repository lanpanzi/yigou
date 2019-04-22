<template>
  <div class="Head">
    <Layout>
      <div class="layout">
        <Header class="layout-header">
          <Menu mode="horizontal" theme="light" :active-name="selected" @on-select="selectMenuItem">
            <div class="layout-logo">
              <img src="@/assets/logo.png" alt="" />
            </div>
            <div class="layout-nav clear">
                <MenuItem
                  v-for="nav in navs"
                  :key="nav.path"
                  :name="nav.name">
                  {{ nav.meta.navTitle }}
                </MenuItem>
            </div>
            <div class="layout-search">
              <Input search enter-button="搜索" placeholder="请输入关键词" />
            </div>
          </Menu>
        </Header>
      </div>
    </Layout>
  </div>
</template>

<script>
import routes from '../router/routes.js'

export default {
  name: 'Head',
  data() {
    return {
      navs: routes.filter(item => item.meta.isNav),
      selected: this.$route.name
    }
  },
  methods: {
    selectMenuItem(name) {
      this.$router.push({name})
    }
  }
}
</script>

<style lang="less" scoped>
.Head {
  margin-bottom: 63px;
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    &-header {
      position: fixed; 
      top: 0; 
      left: 0; 
      z-index: 9999;
      width: 100%;
      height: 65px; 
      background: #fff; 
      padding: 3px 0;
      .ivu-menu {
        padding: 0 6%;
      }
    }
    &-logo {
      height: 48px;
      border-radius: 3px;
      float: left;
      position: relative;
      top: 4px;
      left: 0;
      img {
        height: 100%;
      }
    }
    &-nav {
      float: left;
      margin-left: 24px;
    }
    &-search {
      width: 24%;
      float: left;
      position: relative;
      top: 12px;
      left: 16px;
    }
  }
}
</style>


