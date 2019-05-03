<template>
  <div class="Cart">
    <!-- Cart-Wrap -->
    <div class="Cart-Wrap">
      <!-- Full -->
      <div class="Cart-Wrap-Full" v-if="cart.length !== 0">
        <!-- Header -->
        <div class="Cart-Wrap-Full-Header">
          <Row type="flex" justify="space-around">
            <Col span="1"><Checkbox v-model="checkAll" @click.prevent.native="changeCheckAll"></Checkbox></Col>
            <Col span="5">商品</Col>
            <Col span="1">单价</Col>
            <Col span="3">数量</Col>
            <Col span="1">金额</Col>
            <Col span="1">操作</Col>
          </Row>
        </div>
        <!-- Body -->
        <div class="Cart-Wrap-Full-Body">
          <cartItem 
          v-for="cartItem in cart"
          :key="cartItem.id"
          :cartItem="cartItem"></cartItem>
        </div>
        <!-- Total -->
        <div class="Cart-Wrap-Total">
          <Row>
            <Col span="4" style="cursor: pointer" @click.native.stop="deleteCartAll">
              <Row type="flex" align="middle">
                <Col><Icon type="ios-trash" size="28" color="#000" /></Col>
                <Col><span>全部清除</span></Col>
              </Row>
            </Col>
            <Col offset="16" span="4">
              <Row class="total-product" type="flex" justify="space-between" align="middle">
                <Col>商品总计</Col>
                <Col><span>￥</span>{{ total | moneyFormat }}</Col>
              </Row>
              <Row class="total-payment" type="flex" justify="space-between" align="middle">
                <Col>应付总额</Col>
                <Col style="font-weight: 600;font-size: 18px"><span>￥</span>{{ total | moneyFormat }}</Col>
              </Row>
            </Col>
          </Row>
        </div>
        <!-- Btn -->
        <div class="Cart-Wrap-Button">
          <Row>
            <Col offset="15" span="4"><Button style="font-size: 18px;color: #000" long>继续购物</Button></Col>
            <Col offset="1" span="4"><Button style="font-size: 18px" type="primary" long @click.native.stop="placeOrder">下单结算</Button></Col>
          </Row>
        </div>
      </div>
      <!-- Empty -->
      <div class="Cart-Wrap-Empty" v-else>
        <Row type="flex" justify="center" align="middle" class="Cart-Wrap-Empty-Icon">
          <Col><Icon type="ios-cart-outline" size="108" color="#26cad3" /></Col>
        </Row>
        <Row type="flex" justify="center" align="middle" class="Cart-Wrap-Empty-Desc">
          <Col>你的购物车里还没有商品</Col>
        </Row>
        <Row type="flex" justify="center" align="middle" class="Cart-Wrap-Empty-ToShop">
          <Col><router-link to="/cake">去购物>></router-link></Col>
        </Row>
      </div>
      <!-- Recommendation -->
      <div class="Cart-Wrap-Recommendation">
        <div class="Cart-Wrap-Recommendation-title">
          <h3>热销商品推荐</h3>
        </div>
        <div class="Cart-Wrap-Recommendation-list">
          <Row type="flex" justify="space-between">
            <Col
            span="5" 
            v-for="listItem in recommendation"
            :key="listItem.id">
              <listItem :listItem="listItem"></listItem>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'

import listItem from '@/components/ListItem'
import cartItem from '@/components/CartItem'
export default {
  name: 'cart',
  data() {
    return {
      recommendation: []
    }
  },
  methods: {
    ...mapMutations(['changeCheckAll', 'deleteCartAll']),
    placeOrder() {
      this.$router.push('order')
    }
  },
  computed: {
    ...mapState(['cart', 'checkAll']),
    ...mapGetters(['total'])
  },
  components: {
    listItem,
    cartItem
  },
  created() {
    this.$http.getCartRecommendationData()
      .then(res => {
        this.recommendation = res.recommendation
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style lang="less" scoped>
  @import '../../theme/index.less';

  .Cart {
    &-Wrap {
      padding: 0 6% @division;
      background-color: #fff;
      &-Full {
        text-align: center;
        padding: @division 0;
        &-Header {
          padding: 8px 0;
          background-color: #f9f9f9;
          font-size: 12px;
          color: #000;
        }
        &-Body {
          margin-top: @division / 2;
          background-color: #f9f9f9;
        }
      }
      &-Empty {
        margin-top: @division;
        padding:  144px 0 196px;
        &-Desc, &-ToShop {
          line-height: 24px;
        }
        &-ToShop {
          color: @primary-color;
        }
      }
      &-Total {
        margin: @division 0;
        padding: 15px @division;
        background-color: #f9f9f9;
        font-size: 14px;
        .total {
          &-product, &-payment {
            font-size: 12px;
          }
          &-payment {
            color: #000;
            margin-top: 24px;
          }
        }
      }
      &-Recommendation {
        &-title {
          color: @primary-color;
          margin: @division 0;
          font-size: 24px;
          font-weight: 600;
        }
      }
    }
  }
</style>

