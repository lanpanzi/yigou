<template>
  <div class="Cart">
    <!-- Cart-Wrap -->
    <div class="Cart-Wrap">
      <!-- Full TODO: v-if="productInfo" -->
      <div class="Cart-Wrap-Full">
        <Table disabled-hover 
        no-data-text="你的购物车里还没有商品" 
        :columns="columns" 
        :data="productInfo"
        tooltip="light">
          <template slot-scope="{ row }" slot="name">
            <strong>{{ row.name }}</strong>
          </template>
          <template slot-scope="{ row, index }" slot="amount">
            <Input v-model="amount" size="small" style="text-align: center">
              <Button slot="prepend" type="primary" icon="ios-remove" size="small" @click="add(index)"></Button>
              <Button slot="append" type="primary" icon="ios-add" size="small" @click="remove(index)"></Button>
            </Input>
          </template>
          <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size=small @click.prevent="deleteItem(index)">删除</Button>
          </template>
        </Table>
      </div>
      <!-- Empty -->
      <!-- <div class="Cart-Wrap-Empty" v-else>
        <Row type="flex" justify="center" align="middle" class="Cart-Wrap-Empty-Icon">
          <Col><Icon type="ios-cart-outline" size="108" color="#26cad3" /></Col>
        </Row>
        <Row type="flex" justify="center" align="middle" class="Cart-Wrap-Empty-Desc">
          <Col>你的购物车里还没有商品</Col>
        </Row>
        <Row type="flex" justify="center" align="middle" class="Cart-Wrap-Empty-ToShop">
          <Col><router-link to="/cake">去购物>></router-link></Col>
        </Row>
      </div> -->
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
      columns: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '商品',
            slot: 'name',
            align: 'center'
          },
          {
            title: '单价',
            key: 'price',
            align: 'center'
          },
          {
            title: '数量',
            slot: 'amount',
            width: 150,
            align: 'center'
          },
          {
            title: '金额',
            key: 'subTotal',
            align: 'center'
          },
          {
            title: '操作',
            slot: 'action',
            width: 150,
            align: 'center'
          }
      ],
      productInfo: [
          {
              name: 'John Brown',
              price: 18,
              subTotal: 18
          }
      ],
      amount: '1'
    }
  },
  methods: {
    deleteItem(index) {
      this.productInfo.splice(index, 1);
    }
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
    background-color: #f8f8f8;
    &-Wrap {
      padding: 0 6% @division;
      &-Full {
        padding-top: @division;
      }
      /* &-Empty {
        margin-top: @division;
        padding:  144px 0 196px;
        &-Desc, &-ToShop {
          line-height: 24px;
        }
        &-ToShop {
          color: @primary-color;
        }
      } */
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

