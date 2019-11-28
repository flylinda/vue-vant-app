<template>
  <div class="personalInfo">
    <div class="personalInfo-nav">
      <van-nav-bar title="个人信息" :left-arrow="false" @click-right="mark">
        <van-icon name="cross" slot="left" />
        <van-icon name="ellipsis" slot="right" />
      </van-nav-bar>
    </div>
    <div class="personalInfo-info">
        <van-card title="请完善您的个人信息" class="personalInfo-info-content">
          <div slot="tags" class="personalInfo-data">
            <van-icon name="warning" size="15px" />
            <span>为提高申请成功率，请确保信息真实</span>
          </div>
        </van-card>
        <van-card>
          <div slot="tags">
            <van-cell-group>
              <van-field v-model="unitName" label="单位名称" />
              <van-field :value="industryType" readonly label="行业类别" @click="showPicker = true" right-icon="arrow" />
              <van-field :value="residence" readonly label="居住地址" @click="showAreaList = true" right-icon="arrow" />
              <van-field v-model="detailAddress" label="详细地址" />
              <van-popup v-model="showPicker" position="bottom">
                <van-picker
                  show-toolbar
                  :columns="columns"
                  @cancel="showPicker = false"
                  @confirm="onConfirm"
                  @change="onChange"
                />
              </van-popup>
              <van-popup v-model="showAreaList" position="bottom">
                <van-area :area-list="areaList" value="110101" @confirm="onConfirmArea" />
              </van-popup>
            </van-cell-group>
          </div>
        </van-card>
      </div>
      <van-button type="primary" round size="large">我要借款</van-button>
      <van-popup
        v-model="show"
        position="right"
        :style="{ height: '100%', width: '80%' }"
      >
      <van-divider dashed>实践</van-divider>
      <van-collapse v-model="activeNames">
        <van-collapse-item title="flex布局" name="1">
          <p>display: flex;</p>
          <p>flex-direction: column;</p>
          <p>align-items: center;</p>
        </van-collapse-item>
        <van-collapse-item title="行级标签" name="2">
          <p>span、a、br、b、strong、img</p>
          <p>sup、sub、i、em、del</p>
          <p>u、input、textarea、select</p>
        </van-collapse-item>
        <van-collapse-item title="对象数组转字符串" name="3">
          <p>先将对象数组转换为数组</p>
          <p>arrayObject.join(separator);</p>
          <p>arrayObject.toString();</p>
        </van-collapse-item>
        <van-collapse-item title="css" name="4">
          <p>圆角</p>
          <p>border-radius: 5px;</p>
          <p>虚线</p>
          <p>border-style:dotted solid double dashed;</p>
          <p>点、实、双、虚</p>
        </van-collapse-item>
      </van-collapse>
      </van-popup>
  </div>
</template>

<script>
const citys = {
  '互联网': ['产品', '测试', '程序员', '设计师', '运营/策划'],
  '餐饮': ['厨师', '财务', '大堂经理', '服务员'],
  '政府机构': ['县长', '县委书记'],
}
export default {
  data () {
    return {
      activeNames: ['1'],
      unitName: '',
      industryType: '',
      residence: '',
      detailAddress: '',
      showPicker: false,
      showAreaList: false,
      show: false,
      columns: [
        {
          values: Object.keys(citys),
          className: 'column1',
        },
        {
          values: citys['互联网'],
          className: 'column2',
          defaultIndex: 2,
        },
      ],
      areaList: {
        province_list: {
          110000: '北京市',
          120000: '天津市',
        },
        city_list: {
          110100: '北京市',
          110200: '县',
          120100: '天津市',
          120200: '县',
        },
        county_list: {
          110101: '东城区',
          110102: '西城区',
          110105: '朝阳区',
          110106: '丰台区',
          120101: '和平区',
          120102: '河东区',
          120103: '河西区',
          120104: '南开区',
          120105: '河北区',
        },
      },
    }
  },
  methods: {
    onConfirm (value) {
      this.industryType = value.join('-')
      this.showPicker = false
    },
    onChange (picker, values) {
      picker.setColumnValues(1, citys[values[0]])
    },
    onConfirmArea (value) {
      let temp = []
      value.map(item => {
        if (item.hasOwnProperty('name')) {
          temp.push(item.name)
        }
      })
      this.residence = temp.join('-')
      this.showAreaList = false
    },
    mark () {
      this.show = true
    },
  },
}
</script>

<style lang="less" scoped>
.personalInfo {
  &-nav {
    .van-nav-bar .van-icon {
      vertical-align: middle;
      color: black;
    }
  }
  &-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    &-content {
      height: 60px;
    }
    .van-card{
      background-color: #fff;
      border-radius: 5px;
      width: 90%;
    }
    .van-card__title {
      font-size: 15px;
    }
    .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after {
      border-width: 0 0 0 0;
    }

  }
  &-data {
    display: flex;
    margin: 10px 0 0 0;
    .van-icon {
      color: #FFD7D6;
    }
  }
  span {
    color: gray;
    margin-top: -1px;
  }
  .van-button--primary {
    background-color: #FF595F;
    border-color: #FF595F;
    cursor: pointer;
    span {
      color: #fff;
    }
  }
  .van-button--large {
    width: 80%;
    margin-top: 10vw;
    margin-left: 10%;
    height: 5%;
    line-height: 245%;
  }
}
</style>
