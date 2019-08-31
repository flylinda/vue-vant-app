<template>
  <div class="help">
    <van-nav-bar
      title="帮助中心"
      right-text="意见反馈"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="helo-info" v-for="(item, index) in data" :key="index">
      <van-collapse v-model="activeNames">
        <van-collapse-item :title="item.name" :name="item.id"></van-collapse-item>
      </van-collapse>
    </div>
    <p>客服服务时间：09:00-18:00(法定工作日)</p>
  </div>
</template>

<script>
import { getHelp } from '@/api/user'
export default {
  data () {
    return {
      activeNames: [],
      data: [],
    }
  },
  methods: {
    onClickLeft () {
      this.$toast('返回')
    },
  },
  mounted () {
    getHelp().then(
      res => {
        if (res.isSuccess) {
          this.data = res.data
        }
      }
    )
  },

}
</script>

<style lang="less" scoped>
.help {
  .van-nav-bar {
    position: relative;
    height: 52px;
    line-height: 46px;
    text-align: center;
    background-color: #fff;
    -webkit-user-select: none;
    user-select: none;
  }
  .van-nav-bar__text {
    display: inline-block;
    margin: 0 -16px;
    padding: 0 16px;
    color: gray;
    vertical-align: middle;
    font-size: 10px;
  }
  .van-nav-bar .van-icon {
    color: gray;
    vertical-align: middle;
    color: gray;
  }
  .van-nav-bar__title {
    max-width: 60%;
    margin: 0 auto;
    color: #323233;
    font-weight: 350;
    font-size: 16px;
    padding-top: 5px;
  }
  p {
    font-size: 1px;
    color: gray;
    margin-left: 4%;
  }
}

</style>
