<template>
  <div class="login">
    <form @submit.prevent="commit">
      <img class="login-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png">
      <van-cell-group class="login-info">
        <van-field
          v-model.trim="username"
          required
          clearable
          label="用户名"
          placeholder="请输入用户名"
        />

        <van-field
          v-model.trim="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          right-icon="question-o"
          @click-right-icon="$toast('忘记密码')"
          required
          clearable
          autocomplete
        />
      </van-cell-group>
    <van-button type="primary" size="large" @click="commit">登录</van-button>
    </form>
  </div>
</template>

<script>
import { getUserInfo, getConfigs } from '@/api/user'
import { setCookie } from '../../utils/cookie'
export default {
  data () {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
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
              res => {
                console.log('res---', res)
              }
            )
            this.$router.push('user')
          }
        }
      )
    },
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
    }
    &-info {
      margin-top: 15vw;
    }
    &-btn {
      margin-top: 10vw;
      width: 90%;
      margin-left: 5%;
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
