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
            <div class="layout-cart">
              <router-link to="/cart">
                <Badge type="primary" :count="totalAmount" :offset="[16, 5]" show-zero>
                  <Icon type="ios-cart-outline" size="32" color="#757575" style="font-weight: 600" />
                </Badge>
              </router-link>
            </div>
            <div class="layout-userState">
              <div class="not-login">
                <router-link to="/login">登录</router-link>
                <span>/</span>
                <router-link to="register">注册</router-link>
              </div>
              <div class="login"></div>
            </div>
          </Menu>
        </Header>
      </div>
    </Layout>
  </div>
</template>

<script>
import routes from '../router/routes.js'
import { mapGetters } from 'vuex'

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
  },
  computed: {
    ...mapGetters(['totalAmount'])
  }
}
</script>

<style lang="less" scoped>
@import '../theme/index.less';

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
    &-cart {
      float: right;
    }
    &-userState {
      float: right;
      margin-right: 16px;
      .not-login {
        a {
          color: #515a6e;
          &:hover {
            color: @primary-color;
          }
        }
      }
    }
  }
}
</style>


