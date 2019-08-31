<template>
  <div class="login">
    <form @submit.prevent="finish">
      <img class="login-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png">
      <van-cell-group class="login-info">
        <van-field
          v-model.trim="username"
          clearable
          left-icon="contact"
          placeholder="请输入8-20位数字、字母组合密码"
        />

        <van-field
          v-model.trim="password"
          type="password"
          placeholder="请再次输入新设置的密码"
          left-icon="idcard"
          right-icon="closed-eye"
          clearable
          autocomplete
        />
      </van-cell-group>
      <van-button type="primary" size="large">完成</van-button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    finish () {
      this.$router.push('login')
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
      margin: 0 0 15vw 0;
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
