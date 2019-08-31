<template>
  <div class="finish">
    <form @submit.prevent="finish">
      <img class="finish-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png">
      <van-cell-group>
        <van-field
        v-model="pwd"
        placeholder="请输入8-20位数字、字母组合密码"
        right-icon="closed-eye"
        left-icon="idcard"
        >
        </van-field>
      </van-cell-group>
      <div class="finish-agree">
        <van-checkbox v-model="checked" checked-color="#FF595F" icon-size="15px">
          完成注册即同意<span>《晓风网平台注册协议》</span>
        </van-checkbox>
      </div>
      <van-button type="primary" size="large">确定</van-button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pwd: '',
      checked: false,
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
.finish {
  background-color: #fff;
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
    margin: 0 0 15vw 0;
  }
  &-agree {
    font-size: 0.3rem;
    margin: 30px 16px 0 16px;
    span {
      color: #003a8c;
    }
  }
  .van-button--primary {
      color: #fff;
      background-color: #FF595F;
      border-color: #FF595F;
  }
  .van-button--large {
    width: 90%;
    margin: 1% 0 0 5%;
    height: 5%;
    line-height: 245%;
  }
}
</style>
