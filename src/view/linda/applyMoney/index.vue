<template>
  <div class="applyMoney">
    <van-nav-bar
      title="申请借款"
      :left-arrow="false"
    >
    <van-icon name="cross" slot="left" />
    <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
    <div class="applyMoney-info">
      <van-card title="请填写借款金额">
        <div slot="tags" class="applyMoney-content">
          <van-cell-group>
            <van-field :value="loan" placeholder="借多少" left-icon="gold-coin-o" @touchstart.native.stop="show = true">
              <span slot="button">借全部</span>
            </van-field>
            <van-number-keyboard
            v-model="loan"
            :show="show"
            :maxlength="6"
            @blur="show = false"
            />
          </van-cell-group>
        </div>
        <div slot="footer" class="footer">
          <p>单笔<span>1000</span>元起借，最多可借<span>4000</span>元</p>
        </div>
      </van-card>
    </div>
    <van-button type="primary" round size="large">我要借款</van-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loan: '',
      show: false,
    }
  },

}
</script>

<style lang="less" scoped>
.applyMoney {
  .van-nav-bar .van-icon {
    vertical-align: middle;
    color: black;
  }
  &-info {
    display: flex;
    justify-content: center;
    margin: 50px 0 0 0 ;
    &-content {
      margin-top: 30px;
    }
    .van-card {
      background-color: #fff;
      border-radius: 5px;
      width: 80%;
    }
    .van-card__title {
      line-height: 27px;
      font-size: 18px;
      margin-bottom: 44px;
    }
    .van-cell {
      padding: 10px 0px;
    }
    span {
      color: #0045AD;
    }
    .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after {
      border-width: 0 0 1px 0;
    }
    .footer {
      display: flex;
      justify-content: flex-start;
      line-height: 1px;
      p {
        color: gray;
        span {
          color: #FF9896;
        }
      }
    }
  }
  .van-button--primary {
    color: #fff;
    background-color: #FF595F;
    border-color: #FF595F;
    cursor: pointer;
  }
  .van-button--large {
    width: 80%;
    margin-top: 10vw;
    margin-left: 10%;
    height: 5%;
    line-height: 245%;
  }
}
</style>
