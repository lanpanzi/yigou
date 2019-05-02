<template>
  <div class="cart-item">
    <Row type="flex" justify="space-around" align="middle">
      <Col span="1"><Checkbox v-model="cartItem.check" @click.prevent.native="changeCheck(cartItem.id)"></Checkbox></Col>
      <Col span="5">
        <Row type="flex" justify="start" align="middle">
          <Col class="img"><img :src="cartItem.img" alt="" /></Col>
          <Col class="name">{{ cartItem.name }}</Col>
        </Row>
      </Col>
      <Col span="1"><span>￥</span>{{ cartItem.price }}</Col>
      <Col span="3">
        <Row type="flex" justify="center" align="middle">
          <Col style="cursor: pointer">
            <Icon type="ios-add-circle-outline" size="22" color="#000" @click.native.stop="addAmount(cartItem.id)" />
          </Col>
          <Col class="amount">{{ cartItem.amount }}</Col>
          <Col style="cursor: pointer">
            <Icon type="ios-remove-circle-outline" size="22" color="#000" @click.native.stop="removeAmount(cartItem.id)" />
          </Col>
        </Row>
      </Col>
      <Col span="1" class="subTotal"><span>￥</span>{{ subTotal }}</Col> 
      <Col span="1" style="cursor: pointer">
        <Icon type="ios-close-circle-outline" size="24" color="#000" @click.native.stop="deleteCartItem(cartItem.id)" />
      </Col>
    </Row>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: ['cartItem'],
  name: 'cartItem',
  methods: {
    ...mapMutations(['addAmount', 'deleteCartItem', 'changeCheck']),
    removeAmount(id) {
      if (this.cartItem.amount === 1) {
        this.$Message.info({
          content: "商品数量至少为1件",
          duration: 6,
          closable: true
        })
      } else{
        this.$store.commit('removeAmount', id)
      }
    }
  },
  computed: {
    subTotal() {
      return (this.cartItem.price * this.cartItem.amount).toFixed(2)
    }
  }
}
</script>

<style lang="less" scoped>
.cart{
  &-item {
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
</style>


