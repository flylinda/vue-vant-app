<template>
  <div class="home">
    <div class="home-title">
      <van-row type="flex">
        <van-col offset="1" span="5" >
          <van-image
            width="2.5rem"
            height="3.2rem"
            src="https://img.yzcdn.cn/vant/logo.png"
          />
        </van-col>
        <van-col span="4">
          <span>Vant</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col offset="1">
          <p>轻量、可靠的移动端Vue组件库</p>
        </van-col>
      </van-row>
    </div>
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item title="基础组件" name="1">
        <div slot="right-icon"> <van-icon name="fire-o" /></div>
        <van-cell-group v-for="(item, index) in baseList" :key="index">
          <van-cell :title="item.content" is-link :url="item.url" />
        </van-cell-group>
      </van-collapse-item>
      <van-collapse-item title="表单组件" name="2">
        <div slot="right-icon"> <van-icon name="gem-o" /></div>
        <van-cell-group v-for="(item, index) in formList" :key="index">
          <van-cell :title="item.content" is-link :url="item.url" />
        </van-cell-group>
      </van-collapse-item>
      <van-collapse-item title="导航组件" name="3">
        <div slot="right-icon"> <van-icon name="gem-o" /></div>
       <van-cell-group v-for="(item, index) in navList" :key="index">
          <van-cell :title="item.content" is-link :url="item.url" />
        </van-cell-group>
      </van-collapse-item>
      <van-collapse-item title="展示组件" name="4">
        <div slot="right-icon"> <van-icon name="gem-o" /></div>
        <van-cell-group v-for="(item, index) in displayList" :key="index">
          <van-cell :title="item.content" is-link :url="item.url" />
        </van-cell-group>
      </van-collapse-item>
      <van-collapse-item title="业务组件" name="5">
        <div slot="right-icon"> <van-icon name="photo-o" /></div>
        <van-cell-group v-for="(item, index) in businessList" :key="index">
          <van-cell :title="item.content" is-link :url="item.url" />
        </van-cell-group>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: '',
      baseList: [
        {
          content: '会员中心',
          url: '#/user',
        },
      ],
      formList: [
        {
          content: '忘记密码',
          url: '#/forgotPassword',
        },
        {
          content: '重置密码',
          url: '#/resetPassword',
        },
        {
          content: '登录',
          url: '#/login',
        },
        {
          content: '注册',
          url: '#/register',
        },
      ],
      navList: [
        {
          content: '提现申请成功',
          url: '#/success',
        },
      ],
      displayList: [
        {
          content: '日分析',
          url: '#/dailyAnalysis',
        },
        {
          content: '商品详情',
          url: '#/goods',
        },
        {
          content: '帮助中心',
          url: '#/help',
        },
      ],
      businessList: [
        {
          content: '申请借款',
          url: '#/applyMoney',
        },
        {
          content: '购物车',
          url: '#/cart',
        },
        {
          content: '联系人信息',
          url: '#/contact',
        },
        {
          content: '借款首页',
          url: '#/loanHome',
        },
        {
          content: '个人信息',
          url: '#/personalLnfo',
        },
        {
          content: '还款计划',
          url: '#/repayment',
        },
      ],
    }
  },

}
</script>

<style lang="less" scoped>
.home {
  background-color: #fff;
  .van-collapse {
    display: flex;
    flex-direction: column;
    align-items: center;
    .van-collapse-item {
      width: 90%;
      margin-bottom: 10px;
      box-shadow: #f5f5f5 1px 1px 1px 1px;
      .van-cell {
        font-size: 17px;
        font-weight: 500;
      }
    }
  }
  .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after {
    border-width: 0 0 1px 0;
  }
  &-title {
    padding: 15px;
    span {
      font-size: 40px;
    }
    p {
      color: gray;
      font-size: 13px;
    }
  }
}
</style>
