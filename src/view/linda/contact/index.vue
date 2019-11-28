<template>
  <div class="contact">
    <van-nav-bar
      title="联系人信息"
      :left-arrow="false"
    >
    <van-icon name="cross" slot="left" />
    <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
    <div class="contact-content">
      <van-card title="请添加您的联系人">
        <div slot="tags" class="contact-content-add">
          <van-icon name="warning" size="15px" />
          <span>常联系的手机号能大幅提高申请成功率</span>
        </div>
      </van-card>
      <van-card>
        <div slot="tags" class="contact-content-fixContact">
          <div class="contact-content-fixContact-title">
            <van-icon name="manager" size="15px"></van-icon>
            <span>紧急联系人1</span>
          </div>
          <van-cell-group>
            <van-field v-model="relationship" readonly label="关系" right-icon="arrow" />
            <van-field v-model="relationship" readonly label="姓名" />
            <van-field v-model="relationship" readonly label="电话" />
          </van-cell-group>
          <hr style="height:1px;border:none;border-top:1px solid #e8e8e8;margin-bottom: 14px;" />
          <div class="contact-content-fixContact-title">
            <van-icon name="manager" size="15px"></van-icon>
            <span>紧急联系人1</span>
          </div>
          <van-cell-group>
            <van-field v-model="relationship" readonly label="关系" right-icon="arrow" />
            <van-field v-model="relationship" readonly label="姓名" />
            <van-field v-model="relationship" readonly label="电话" />
          </van-cell-group>
        </div>
      </van-card>
    </div>
    <div class="contact-footer">
      <van-checkbox v-model="checked" checked-color="#FF595F" icon-size="15px">
        <p>
          <a>点击下一步即代表您已阅读同意签署</a>
          <span>《个人信息使用授权书》</span>
          <span>《个人征信授权书》</span>
        </p>
      </van-checkbox>
    </div>

    <van-button type="primary" round size="large" @click="nextStep">下一步</van-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: false,
      relationship: '',
      name: '',
      tel: '',
    }
  },
  methods: {
    nextStep () {},
  },

}
</script>

<style lang="less" scoped>
.contact {

  .van-nav-bar .van-icon {
    vertical-align: middle;
    color: black;
  }
  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
    .van-card{
      background-color: #fff;
      border-radius: 5px;
      width: 90%;
    }
    .van-card__title {
      font-size: 15px;
    }
    .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after {
      border-width: 0 0 0 0;
    }
    .van-card__content {
      min-height: 41px;
    }
    .van-icon {
      color: #FFD7D6;
    }
    &-fixContact {
      span {
        font-size: 14px;
        color: #262626;
        margin-left: 3%;
      }
      &-title {
        display: flex;
      }
    }
    &-add {
      display: flex;
      margin: 10px 0 0 0;
      .van-icon {
        color: #FFD7D6;
      }
    }
    span{
      color: gray;
      margin: -1px 0 0 3%;
    }
  }
  .van-button--primary {
    color: #fff;
    background-color: #FF595F;
    border-color: #FF595F;
  }
  .van-button--large {
    width: 90%;
    margin-top: 1vw;
    margin-left: 5%;
    height: 5%;
    line-height: 245%;
  }

  &-footer {
    .van-checkbox {
      margin: 0 0 0 5%;
      font-size: 4px;
    }

    p {
      color: gray;
      margin-top: 30px;
      span {
        color: #003a8c;
      }
    }
  }
}

</style>
