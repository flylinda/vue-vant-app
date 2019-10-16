<template>
  <div class="login">
    <form @submit.prevent="commit">
      <img class="login-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png">
      <van-cell-group class="login-info">
        <van-field
          v-model.trim="username"
          clearable
          left-icon="contact"
          placeholder="请输入用户名"
        />

        <van-field
          v-model.trim="password"
          type="password"
          placeholder="请输入密码"
          left-icon="eye-o"
          clearable
          autocomplete
        />
      </van-cell-group>
      <div class="login-pwd">
        <span>验证码登录</span>
        <span @click="fogotPassword">忘记密码?</span>
      </div>
      <van-button type="primary" size="large">登录</van-button>
      <div class="login-register">
        <span class="login-register-account">没有账号？</span>
        <span class="login-register-logon" @click="logon">立即注册</span>
      </div>
    </form>
  </div>
</template>

<script>
import { getUserInfo, getConfigs, getList } from '@/api/user'
import { setCookie } from '../../utils/cookie'
export default {
  data () {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    fogotPassword () {
      this.$router.push('forgotPassword')
    },
    logon () {
      this.$router.push('register')
    },
    commit () {
      if (this.username === '') {
        this.$toast({ message: '请您输入用户名', duration: 1000 })
        return false
      }
      if (this.password === '') {
        this.$toast({ message: '请您输入密码', duration: 1000 })
        return false
      }
      let params = {
        email: this.username,
        password: this.password,
      }
      getUserInfo(params).then(
        res => {
          if (res.isSuccess) {
            // 将token放在本地缓存中
            localStorage.setItem('token', res.data.userToken)
            // 将token放在cookie中
            setCookie('token', res.data.userToken)
            getConfigs().then(
              res => {}
            )
            // 编程式的导航
            // this.$router.push('home')
            // 替换掉当前的history记录
            this.$router.replace('home')
          }
        }
      )
    },
  },
  mounted () {
    getList().then(
      res => {
        if (res.isSuccess) {
          this.username = res.data.username
          this.password = res.data.password
        }
      }
    )
  },
}
</script>

<style lang="less" scoped>
.login {
  background-color: #fff;
    &-poster {
      width: 100%;
      height: 53vw;
      display: block;
      margin: 0 0 15vw 0;
    }
    &-btn {
      margin-top: 10vw;
      width: 90%;
      margin-left: 5%;
    }
    &-pwd {
      display: flex;
      justify-content:space-between;
      margin:6px 16px;
      font-size: 0.3rem;
      color:#003a8c;
      cursor:pointer;
    }
    &-register {
      display: flex;
      justify-content: center;
      font-size: 0.3rem;
      margin: 10px 0;
      color: #003a8c;
      cursor:pointer;
      &-account {
        color: gray;
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

</style>
