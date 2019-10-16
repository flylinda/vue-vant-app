<template>
  <div class="main">
    <br/>
    <div class="main-display" v-for="(item, index) in bankCardList" :key="index">
      <van-card :style="'background-color:' + item.backColor">
        <div slot="tags" class="main-display-content">
          <div class="main-display-content-backName">
            <van-image round width="2rem" height="2rem" :src="item.logoURL"/>
            <span>{{item.backName}}</span>
          </div>
          <div class="main-display-content-backCard">
            <span>{{item.backCard}}</span>
          </div>
        </div>
      </van-card>
      <br/>
    </div>
    <div class="main-add">
      <van-card class="">
        <div slot="tags">
        </div>
      </van-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bankCardList: [
        {
          key: 'gongshang',
          backName: '中国工商银行',
          backCard: '****1205',
        },
        {
          key: 'jiaotong',
          backName: '交通银行',
          backCard: '****1206',
        },
        {
          key: 'nongye',
          backName: '农业银行',
          backCard: '****1207',
        },
        {
          key: 'guangda',
          backName: '广大银行',
          backCard: '****1208',
        },
      ],
      backColorList: [
        {
          key: 'gongshang',
          color: '#ff4d4f',
        },
        {
          key: 'jiaotong',
          color: '#40a9ff',
        },
        {
          key: 'nongye',
          color: '#13c2c2',
        },
        {
          key: 'guangda',
          color: '#faad14',
        },
      ],
      logoList: [
        {
          key: 'gongshang',
          url: 'https://img.yzcdn.cn/vant/cat.jpeg',
        },
        {
          key: 'jiaotong',
          url: 'https://img.yzcdn.cn/vant/cat.jpeg',
        },
        {
          key: 'nongye',
          url: 'https://img.yzcdn.cn/vant/cat.jpeg',
        },
        {
          key: 'guangda',
          url: 'https://img.yzcdn.cn/vant/cat.jpeg',
        },
      ],
    }
  },
  created () {
    this.bankCardList = this.bankCardList.map((item) => {
      let backColor = this.backColorList.find(x => x.key === item.key).color
      let logoURL = this.logoList.find(x => x.key === item.key).url
      return Object.assign(item, { backColor: backColor, logoURL: logoURL })
    })
    console.log(this.bankCardList)
  },
  methods: {

  },

}
</script>

<style lang="less" scoped>
.main {
  &-display {
    display: flex;
    flex-direction: column;
    align-items:center;
    .van-card{
      background-color: #fff;
      border-radius: 5px;
      width: 90%;
      height: 4rem;
    }
    &-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &-backName {
        display: flex;
        justify-content: flex-start;
        padding: 0.5rem;
        span {
          display: flex;
          align-items: center;
          padding: 0 0 0 0.5rem;
        }
      }
    }
  }
}

</style>
