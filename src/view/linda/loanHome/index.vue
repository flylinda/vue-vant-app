<template>
  <div class="loanHome">
    <img class="loanHome-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png">
    <div class="loanHome-info">
      <van-panel title="金融-房信贷">
          <p class="loanHome-info-limit">最高借款额度(元)</p>
          <p class="loanHome-info-money">200000</p>
        <div slot="footer" class="loanHome-footer">
          <van-icon name="gold-coin" size="18px" class="my-icon"/>
          <span>快速申请</span>
          <van-icon name="gold-coin" size="18px" class="my-icon"/>
          <span>飞速审批</span>
          <van-icon name="gold-coin" size="18px" class="my-icon"/>
          <span>极速到账</span>
        </div>
      </van-panel>
    </div>
    <van-button type="primary" round size="large">我要借款</van-button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.loanHome {
  background-color: #fff;
  position:relative;
  &-poster {
    width: 100%;
    display: block;
  }
  &-info {
    position: absolute;
    top: 15%;
    left: 10%;
    width: 80%;
  }
  &-info{
    box-shadow: #e8e8e8 1px 1px 10px 10px;
    .van-panel__header {
      color: #FF595F;
      font-size: 20px;
      font-family: "Hiragino Sans GB";
    }
    &-limit {
      color: gray;
      font-size: 1px;
      display: flex;
      justify-content: center;
      margin: 40px 0 -31px 0;
    }
    &-money {
      color: #FF7A79;
      font-size: 30px;
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
    }
  }
  &-footer {
    display: flex;
    justify-content: space-around;
    font-size: 10px;
    color: #adc6ff;
    span {
      margin-left: -15px;
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
    margin-top: 25vw;
    margin-left: 10%;
    height: 5%;
    line-height: 245%;
  }
}

</style>
