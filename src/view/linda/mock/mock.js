const Mock = require('mockjs')

const Random = Mock.Random

Mock.mock('/api/mock/help', 'get',
  {
    'data': [
      {
        'id': '1',
        'name': '产品说明',
      },
      {
        'id': '2',
        'name': '申请条件',
      },
      {
        'id': '3',
        'name': '身份认证',
      },
      {
        'id': '4',
        'name': '借款审核',
      },
      {
        'id': '5',
        'name': '体现放款',
      },
    ],
    isSuccess: true,
    resultMsg: '',
  })

// 承办地列表
Mock.mock('/api/mock/place', 'get',
  {
    'data|100': [{
      'id|1000-9999': 1000,
      'name': '@cname',
      'classifyId|1-4': 1,
      'purchaseAtDayone|0-1': 1,
      'needsPerson|0-1': 1,
      'needsDays|0-1': 1,
      'perCount|0-10': 1,
      'createUserId': '@name',
      'modifyUserId': '@name',
      'gmtCreate': '@date',
      'gmtModify': '@date',
      'thumbnail_pic_s': Random.dataImage('300x250', 'mock的图片'),
    },
    ],
    isSuccess: true,
    resultMsg: '',
  })
// 该活动下列表
Mock.mock('/api/mock/getActivityList', 'get',
  {
    'data|5': [{
      'id|1000-9999': 1000,
      'name': '@cname',
    },
    ],
    isSuccess: true,
    resultMsg: '',
  })

/**
* 订单相关接口
*/
// 获取订单列表
Mock.mock('/api/mock/orderlist', 'get',
  {
    'data': {
      'id': 1000,
      'username': 'lixiang@icourt.cc',
      'password': '123456',
    },
    isSuccess: true,
    resultMsg: '',
  })
