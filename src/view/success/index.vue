<template>
  <div class="success">
    <van-nav-bar
      title="提现申请成功"
      :left-arrow="false"
    >
    <van-icon name="cross" slot="left" />
    <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
    <div class="success-info">
      <div class="success-info-data">
        <van-icon name="checked" size="70px" />
        <span class="success-info-data-apply">提现申请成功</span>
        <span class="success-info-data-wait">款项将自动到账，请耐心等候...</span>
      </div>
      <p>
        <span>提现金额</span>
        <span>5000元</span>
      </p>
      <p>
        <span>提现银行卡</span>
        <span>xx银行(1749)</span>
      </p>
    </div>
    <span class="success-footer">查看借款详情</span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.success {
  .van-nav-bar .van-icon {
    vertical-align: middle;
    color: black;
  }
  &-info {
    padding-top: 20%;
    padding-bottom: 3%;
    background-color: #fff;
    &-data {
      display: flex;
      flex-direction: column;
      align-items: center;
      &-wait {
        color: gray;
        font-size: 5px;
      }
      .van-icon {
        color: #b7eb8f;
      }
    }
  }
  p {
    display: flex;
    justify-content:space-around;
    color: gray;
  }
  &-footer {
    color: #003a8c;
    font-size: 5px;
    display: flex;
    justify-content: flex-end;
    margin: 8px 20px 0 0;
  }
}

</style>
