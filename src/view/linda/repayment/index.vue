<template>
  <div class="repayment">
    <van-card>
      <div slot="tags" class="repayment-content" v-for="(item, index) in list" :key="index">
        <div :class="item.status==='已还款'? 'repayment-content-finished' : 'repayment-content-wait'">
          <p>
              <span class="repayment-content-money">{{item.money}}元</span>
              <span>{{item.status}}</span>
          </p>
          <p>
              <span>{{item.date}}</span>
              <span>{{item.type}}</span>
          </p>
        </div>

      </div>
    </van-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          money: 100000,
          status: '已还款',
          date: '2019年1月1日',
          type: '1期/总共6期',
        },
        {
          money: 200000,
          status: '已还款',
          date: '2019年1月1日',
          type: '1期/总共6期',
        },
        {
          money: 300000,
          status: '已还款',
          date: '2019年1月1日',
          type: '1期/总共6期',
        },
        {
          money: 400000,
          status: '待还款',
          date: '2019年1月1日',
          type: '1期/总共6期',
        },
        {
          money: 100000,
          status: '待还款',
          date: '2019年1月1日',
          type: '1期/总共6期',
        },
      ],
    }
  },

}
</script>

<style lang="less" scoped>
.repayment {
  display: flex;
  justify-content: center;
  .van-card {
    margin-top: 10%;
    background-color: #fff;
    width: 90%;
    border-radius: 5px;
  }
  &-content {
      border-style: none none dashed none;
      border-bottom-color: #e8e8e8;
      border-bottom-width: 1px;
      p {
        display: flex;
        justify-content: space-between;
      }
      &-finished {
        color: #bfbfbf;
      }
      &-wait {
        color: #262626;
      }
      &-money {
        font-size: 16px;
      }
  }
}

</style>
