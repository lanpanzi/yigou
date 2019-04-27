<template>
  <div class="Cart">
    <!-- Cart-Wrap -->
    <div class="Cart-Wrap">
      <!-- Full -->
      <div class="Cart-Wrap-Full" v-if="productInfo.length !== 0">
        <div class="Cart-Wrap-Full-Header">
          <Row type="flex" justify="space-around">
            <Col span="1"><Checkbox></Checkbox></Col>
            <Col span="5">商品</Col>
            <Col span="1">单价</Col>
            <Col span="3">数量</Col>
            <Col span="1">金额</Col>
            <Col span="1">操作</Col>
          </Row>
        </div>
        <div class="Cart-Wrap-Full-Body">
          <div class="Cart-Wrap-Full-Body-Item"
          v-for="product in productInfo"
          :key="product.id">
            <Row type="flex" justify="space-around" align="middle">
              <Col span="1"><Checkbox></Checkbox></Col>
              <Col span="5">
                <Row type="flex" justify="center" align="middle">
                  <Col class="img"><img :src="product.img" alt="" /></Col>
                  <Col class="name">{{ product.name }}</Col>
                </Row>
              </Col>
              <Col span="1"><span>￥</span>{{ product.price }}</Col>
              <Col span="3">
                <Row type="flex" justify="center" align="middle">
                  <Col><Icon type="ios-add-circle-outline" size="20" /></Col>
                  <Col class="amount">{{ product.amount }}</Col>
                  <Col><Icon type="ios-remove-circle-outline" size="20" /></Col>
                </Row>
              </Col>
              <Col span="1" class="subTotal"><span>￥</span>{{ product.price * product.amount }}</Col> 
              <Col span="1"><Icon type="ios-close-circle-outline" size="24" /></Col>
            </Row>
          </div>
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
import listItem from '@/components/ListItem'

export default {
  name: 'cart',
  data() {
    return {
      recommendation: [],
      productInfo: [
        {
          "id": "630000201107044862",
          "img": "http://dummyimage.com/1366x910/f2b479&text=img",
          "name": "张参音他象五本活存",
          "price": 207.74,
          "sales": 1615,
          "amount": 1
        }
      ]
    }
  },
  methods: {
    
  },
  components: {
    listItem
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
          &-Item {
            padding: 8px 0;
            color: #000;
            font-size: 14px;
            .img {
              width: 80px;
              img {
                width: 100%;
              }
            }
            .name {
              margin-left: 8px;
            }
            .amount {
              padding: 0 16px;
            }
            .subTotal {
              color: #ff3300;
            }
          } 
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

