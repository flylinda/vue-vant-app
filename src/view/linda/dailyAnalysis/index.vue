<template>
  <div class="dailyAnalysis">
    <van-nav-bar title="日分析" left-arrow>
      <van-icon name="notes-o" slot="right" color="black"/>
    </van-nav-bar>
    <div class="dailyAnalysis-content">
      <van-card>
        <div slot="tags">
          <van-divider :style="{ color: 'black' }">今日收益25分</van-divider>
          <div class="dailyAnalysis-content-detail">
            <div class="dailyAnalysis-content-detail-income">
              <p :style="flag===true ? { color: 'black' } : {color: '#003a8c'}" @click="change">总收入</p>
              <p>25分</p>
            </div>
            <div style="float:left;margin-top: 18px;width: 1px;height: 40px; background: #e8e8e8;"></div>
            <div class="dailyAnalysis-content-detail-pay">
              <p :style="flag===false ? { color: 'black' } : {color: '#003a8c'}"  @click="changeColor">总支出</p>
              <p>40分</p>
            </div>
          </div>
          <van-divider :style="{ color: 'black' }">收入来源</van-divider>
          <div class="dailyAnalysis-content-chart">
            <v-chart :forceFit="true" :height="height" :data="data" :scale="scale" class="dailyAnalysis-content-chart-pie">
              <v-tooltip :showTitle="false" dataKey="item*percent" />
              <v-axis />
              <v-pie position="percent" color="item" :v-style="pieStyle" :label="labelConfig" />
              <v-coord type="theta" />
            </v-chart>
          </div>
        </div>
      </van-card>
      <van-card>
        <div slot="tags">
        <van-collapse v-model="activeName" accordion>
          <van-collapse-item title="收入详情（24笔）" name="1">
            <div v-for="(item,index) in list" :key="index" class="dailyAnalysis-content-table">
              <div class="dailyAnalysis-content-table-info">
                <van-icon name="gold-coin" size="30px" color="#003a8c" />
                <p class="dailyAnalysis-content-table-info-text">
                  <span class="dailyAnalysis-content-table-info-text-name">{{item.name}}</span>
                  <span class="dailyAnalysis-content-table-info-text-date">{{item.tel}}</span>
                </p>
              </div>
              <div class="dailyAnalysis-content-table-score">
                +20分
              </div>
            </div>
          </van-collapse-item>
        </van-collapse>
        </div>
      </van-card>
    </div>
  </div>
</template>

<script>

const DataSet = require('@antv/data-set')

const sourceData = [
  { item: '自由加分', count: 40 },
  { item: '钉钉考勤', count: 21 },
  { item: '番茄学习', count: 17 },
  { item: '钉钉运动', count: 22 },
]

const scale = [{
  dataKey: 'percent',
  min: 0,
  formatter: '.0%',
}]

const dv = new DataSet.View().source(sourceData)
dv.transform({
  type: 'percent',
  field: 'count',
  dimension: 'item',
  as: 'percent',
})
const data = dv.rows

export default {
  data () {
    return {
      flag: false,
      activeName: '1',
      list: [
        {
          id: '1',
          name: '赠分来自-张三',
          tel: '8月3日',
        },
        {
          id: '2',
          name: '赠分来自-李四',
          tel: '8月4日',
        },
        {
          id: '3',
          name: '赠分来自-王五',
          tel: '8月5日',
        },
      ],
      data,
      scale,
      height: 200,
      pieStyle: {
        stroke: '#fff',
        lineWidth: 1,
        width: '100%',
      },
      labelConfig: ['percent', {
        formatter: (val, item) => {
          return item.point.item
        },
      }],
    }
  },
  methods: {
    changeColor () {
      this.flag = true
    },
    change () {
      this.flag = false
    },
  },
}
</script>

<style lang="less" scoped>
.dailyAnalysis{
  .van-nav-bar .van-icon {
    color: black;
    vertical-align: middle;
  }
  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3%;
    .van-card{
      background-color: #fff;
      border-radius: 5px;
      width: 90%;
    }
    &-chart {
      height: 150px;
    }
    &-detail {
      display: flex;
      justify-content: space-around;
    }
    &-table {
      display: flex;
      justify-content: space-between;
      &-info {
        display: flex;
        margin-bottom: 15px;
        &-text {
          display: flex;
          flex-direction: column;
          margin: -3px 0 0 10px;
          &-name {
            color: black;
          }
          &-date {
            font-size: 8px;
          }
        }
      }
      &-score {
        color: #faad14;
      }
    }
  }

}

</style>
