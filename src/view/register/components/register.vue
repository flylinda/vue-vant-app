<template>
  <div class="register">
    <form @submit.prevent="nextStep">
      <img class="register-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png">
      <van-cell-group class="register-info">
        <van-field
          v-model="username"
          clearable
          left-icon="contact"
          placeholder="请输入用户名"
        />

        <van-field
          v-model="textCode"
          type="new-password"
          left-icon="photo-o"
          placeholder="请输入图文验证码"
        />
        <van-field
          v-model="msgCode"
          type="password"
          left-icon="envelop-o"
          placeholder="请输入短信验证码"
        >
        <van-button slot="button" size="small" type="primary">获取验证码</van-button>
        </van-field>
      </van-cell-group>
      <div class="register-pwd">
        <span @click="login">密码登录</span>
        <span class="register-pwd-try">未收到验证码？试试<a>语音验证</a></span>
      </div>
      <van-button slot="button" size="large" type="primary">下一步</van-button>
    </form>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      textCode: '',
      msgCode: '',
    }
  },
  methods: {
    login () {
      this.$router.push('login')
    },
    nextStep () {
      this.$dialog.confirm({
        title: '提示',
        message: `尊敬的客户\n是否通过手机号${this.username}\n接收语音验证码？`,
        confirmButtonText: '确定',
        confirmButtonColor: '#003a8c',
      }).then(() => {
        this.$router.push('finishRegister')
      }).catch(() => {
        this.$router.push('login')
      })
    },
  },

}
</script>

<style lang="less">
.register {
  background-color: #fff;
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
    margin: 0 0 10vw 0;
  }
  &-pwd {
    display: flex;
    justify-content:space-between;
    font-size: 0.3rem;
    margin: 10px 16px;
    color: #003a8c;
    &-try {
      color: gray;
      a {
        color: #003a8c;
      }
    }
  }
  .van-button--primary {
    color: #fff;
    background-color: #FF595F;
    border-color: #FF595F;
  }
  .van-button--large {
    width: 90%;
    margin-top: 10vw;
    margin-left: 5%;
    height: 5%;
    line-height: 245%;
  }
}
.van-dialog__header {
  padding-top: 5px;
  padding-bottom: 5px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  background-color: #E3E7ED;
  color: gray;
}

</style>
