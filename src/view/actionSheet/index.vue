<template>
  <div class="actionSheet">
    <van-button @click="test" type="primary" round class="actionSheet-btn">弹出菜单（标题固定，内容滚动）</van-button>
    <van-action-sheet v-model="show" round>
      <van-cell title="还款计划" label="实际还款日期请以放款成功后查询结果为准" :border="true" class="title-class" >
        <van-icon slot="right-icon" name="cross" class="custom-icon" />
      </van-cell>
      <div class="actionSheet-content">
        <div class="actionSheet-content-data" v-for="(item,index) in dataList" :key="index">
          <div class="actionSheet-content-data-remark">
            <span>{{item.date}}</span>
            <span>{{item.remark}}</span>
          </div>
          <div class="actionSheet-content-data-money">
            <span >{{item.money}}</span>
          </div>
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataList: [],
      show: false,
    }
  },
  methods: {
    test () {
      this.show = true
      this.dataList = [
        {
          date: '2019-10-11',
          remark: '首次放款',
          money: '￥100',
        },
        {
          date: '2019-10-11',
          remark: '首次放款',
          money: '￥100',
        },
        {
          date: '2019-10-11',
          remark: '首次放款',
          money: '￥100',
        },
        {
          date: '2019-10-11',
          remark: '首次放款',
          money: '￥100',
        },
        {
          date: '2019-10-11',
          remark: '首次放款',
          money: '￥100',
        },
        {
          date: '2019-10-11',
          remark: '首次放款',
          money: '￥100',
        },
        {
          date: '2019-10-11',
          remark: '首次放款',
          money: '￥100',
        },
      ]
    },
  },

}
</script>

<style lang="less" scoped>

.actionSheet{
  &-btn{
    margin: 20px 50px;
  }
  .custom-icon{
    color: #d9d9d9;
    display: flex;
    align-items: center
  }
  .title-class{
    font-size: 18px;
  }
  &-content{
    height: 40vh;
    overflow: scroll;
    &-data{
      display: flex;
      justify-content: space-between;
      margin: 18px;
      border-bottom: 1px dotted #d9d9d9;
      padding: 0 0 15px 0;
    }
  }
}

</style>
