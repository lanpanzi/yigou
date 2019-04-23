<template>
  <div class="Detail">
    <div class="Detail-Wrap">
      <Row class="productInfo">
        <Col class="productInfo-show" span="14">
          <Row class="bigImg" v-if="productInfo.img[imgIndex]"><img :src="productInfo.img[imgIndex]" alt=""></Row>
          <Row class="smallImg" type="flex" justify="space-between">
            <Col 
              v-for="(item, index) in productInfo.img"
              :key="index"
              span="5">
              <div class="itemImg" @mouseover="showBigImg(index)">
                <img :src="item" alt="">
              </div>
            </Col>
          </Row>
        </Col>

        <Col class="productInfo-intro" span="10">
          <div class="name"><h3>{{ productInfo.name }}</h3></div>
          <div class="price"><span>￥</span>{{ productInfo.price }}</div>
          <Row class="sweetness" type="flex" align="middle">甜度：<Rate :value="productInfo.sweetness" disabled class="sweetness-rate" /></Row>
          <Row class="btn" type="flex" justify="center"> 
            <Col class="addCart" span="8">
              <Button type="default" :long="true" size="large">加入购物车</Button>
            </Col>
            <Col class="buy" offset="2" span="8">
              <Button type="primary" :long="true" size="large">立即购买</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Tabs class="product-detail" :animated="false">
        <TabPane label="商品详情">
          <div class="product-detail-img"
          v-for="(img, index) in productDetail.img"
          :key="index">
            <img :src="img" alt="">
          </div>
        </TabPane>
        <TabPane style="height: auto" class="product-detail-evaluation" :label="`商品评价(${evaluationNum}条)`">
          <Row
          class="product-detail-evaluation-item"
          v-for="evaluationItem in productEvaluation"
          :key="evaluationItem.uid">
            <Col span="6">
              <Row type="flex" justify="flex-start" align="middle">
                <Col><Avatar :src="evaluationItem.avatar" size="large" /></Col>
                <Col style="margin-left: 8px">
                  <p class="username">{{ evaluationItem.name }}</p>
                  <Rate :value="evaluationItem.score" icon="ios-thumbs-up" disabled />
                </Col>
              </Row>
            </Col>
            <Col offset="15" span="3"><p>{{ evaluationItem.CmtTime }}</p></Col>
          </Row>
          <Row class="page" type="flex" justify="center">
            <Col><Page :total="evaluationNum" @on-change="getEvaluationData()" /></Col>
          </Row>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data() {
    return {
      productInfo: {},
      imgIndex: 0,
      productDetail: {},
      productEvaluation: [],
      evaluationNum: 0
    }
  },
  methods: {
    showBigImg(index) {
      this.imgIndex = index
    },
    getEvaluationData() {
      this.$http.getProductEvaluationData(this.$route.params.id)
      .then(res => {
        this.productEvaluation = res.productEvaluation
        this.evaluationNum = res.evaluationNum
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  created() {
    this.$http.getProductInfoData(this.$route.params.id)
      .then(res => {
        this.productInfo = res.productInfo
      })
      .catch(error => {
        console.log(error)
      })
    
    this.$http.getProductDetailData(this.$route.params.id)
      .then(res => {
        this.productDetail = res.productDetail
      })
      .catch(error => {
        console.log(error)
      })
    this.getEvaluationData()
  }
}
</script>

<style lang="less" scoped>
@import '../theme/index.less';

.Detail {
  &-Wrap {
    padding: 0 6% @division;
    background-color: #fff;
    .productInfo {
      &-show {
        .bigImg, .smallImg {
          img {
            width: 100%;
          }
        }
        .bigImg {
          margin-bottom: @division;
        }
      }
      &-intro {
        border: 1px solid red;
        padding-left: 4%;
        .name, .price {
          font-family: 'microsoft yahei';
          font-weight: 600;
          color: #000;
        }
        .name {
          font-size: 17px;
          margin-top: @division * 2;
        }
        .price {
          font-size: 24px;
          color: #ff3300;
          margin: @division * 4 0;
        }
        .sweetness {
          font-size: 14px;
          &-rate {
            font-size: 18px;
          }
        }
        .btn {
          margin-top: @division * 2;
        }
      }
    }
    .product {
      &-detail {
        margin-top: 100px;
        &-img {
          img {
            width: 100%;
          }
        }
        &-evaluation {
          &-item {
            padding: 24px;
            p {
              font-size: 14px;
              &.username {
                color: #000;
              }
            }
            .ivu-rate {
              margin-top: 8px;
              font-size: 24px;
            }
          }
        }
        .page {
          margin-top: @division;
        }
      }
    }
  }
} 
</style>


