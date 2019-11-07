import Vue from 'vue'
import Router from 'vue-router'
import foo from './view/namedViews/components/foo.vue'
import bar from './view/namedViews/components/bar.vue'
import baz from './view/namedViews/components/baz.vue'
import UserProfile from './view/nastedNamedViews/components/userProfile.vue'
import UserProfilePreview from './view/nastedNamedViews/components/userProfilePreview.vue'

Vue.use(Router)

const routes = [
  {
    path: '*',
    redirect: '/login',
  },
  {
    name: 'login',
    component: () => import('./view/login'),
    meta: {
      title: '登录',
    },
  },
  // 嵌套路由
  {
    path: '/register',
    // 通过一个名称来标识一个路由显得更方便，尤其是在链接一个路由或者在执行路由跳转的时候
    // <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
    // router.push({ name: 'user', params: { userId: 123 }})
    // 这两种方式都会把路由导航到/user/123路径
    // name: 'register',
    component: () => import('./view/register'),
    meta: {
      title: '注册',
    },
    children: [
      {
        path: '',
        component: () => import('./view/register/components/register'),
      },
      {
        path: 'finishRegister',
        component: () => import('./view/register/components/finishRegister'),
        meta: {
          title: '完成注册',
        },
      },
    ],
  },
  // 命名视图
  {
    path: '/namedViews',
    component: () => import('./view/namedViews'),
    children: [
      {
        path: '/now',
        components: {
          default: foo,
          a: bar,
          b: baz,
        },
      },
      {
        path: '/other',
        components: {
          default: baz,
          a: bar,
          b: foo,
        },
      },
    ],
  },
  // 嵌套命名视图
  {
    path: '/settings',
    component: () => import('./view/nastedNamedViews'),
    children: [
      {
        path: 'emails',
        component: () => import('./view/nastedNamedViews/components/userEmailsSubscriptions.vue'),
      },
      {
        path: 'profile',
        components: {
          default: UserProfile,
          helper: UserProfilePreview,
        },
      },
    ],

  },
  {
    name: 'forgotPassword',
    component: () => import('./view/forgotPassword'),
    meta: {
      title: '忘记密码',
    },
  },
  {
    name: 'resetPassword',
    component: () => import('./view/resetPassword'),
    meta: {
      title: '重置密码',
    },
  },
  {
    name: 'home',
    component: () => import('./view/home'),
    meta: {
      title: '首页',
    },
  },
  {
    name: 'loanHome',
    component: () => import('./view/loanHome'),
    meta: {
      title: '借款首页',
    },
  },
  {
    name: 'applyMoney',
    component: () => import('./view/applyMoney'),
    meta: {
      title: '申请借款',
    },
  },
  {
    name: 'personalInfo',
    component: () => import('./view/personalInfo'),
    meta: {
      title: '个人信息',
    },
  },
  {
    name: 'help',
    component: () => import('./view/help'),
    meta: {
      title: '帮助中心',
    },
  },
  {
    name: 'success',
    component: () => import('./view/success'),
    meta: {
      title: '提现申请成功',
    },
  },
  {
    name: 'repayment',
    component: () => import('./view/repayment'),
    meta: {
      title: '还款计划',
    },
  },
  {
    name: 'contact',
    component: () => import('./view/contact'),
    meta: {
      title: '联系人信息',
    },
  },
  {
    name: 'choosePaymentCard',
    component: () => import('./view/choosePaymentCard'),
    meta: {
      title: '选择支付卡',
    },
  },
  {
    name: 'dailyAnalysis',
    component: () => import('./view/dailyAnalysis'),
    meta: {
      title: '日分析',
    },
  },
  {
    name: 'user',
    component: () => import('./view/user'),
    meta: {
      title: '会员中心',
    },
  },
  {
    name: 'cart',
    component: () => import('./view/cart'),
    meta: {
      title: '购物车',
    },
  },
  {
    name: 'goods',
    component: () => import('./view/goods'),
    meta: {
      title: '商品详情',
    },
  },
  {
    name: 'footer',
    component: () => import('./view/footer'),
    meta: {
      title: '底部栏',
    },
  },
  {
    name: 'holyGrail',
    component: () => import('./view/holyGrail'),
    meta: {
      title: '圣杯布局',
    },
  },
  {
    name: 'actionSheet',
    component: () => import('./view/actionSheet'),
    meta: {
      title: '上拉菜单',
    },
  },
]

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '')
})

// 修改路由模式，默认为hash
// const router = new Router({ routes, mode: 'history' })
const router = new Router({ routes })

router.beforeEach((to, from, next) => {
  const fromRoute = ['finishRegister']
  const nextRoute = ['register']
  const title = to.meta && to.meta.title
  if (title) {
    document.title = title
  }
  // 场景：现在是首页，申请金额，个人信息，联系人信息，
  // 这几个界面可以回退，在联系人信息界面时按手机上的返回键时可以回到个人信息界面。
  // 联系人信息之后的界面就不能回退了，如果我在联系人信息之后的界面，按手机上的返回键应该退出这个系统了，所以我需要把首页，申请金额，个人信息，联系人信息这四个界面的路由删掉

  if (fromRoute.indexOf(from.name) >= 0) {
    if (nextRoute.indexOf(to.name) >= 0) {
      router.replace({ name: 'login' })
      // 关闭源（父）窗口
      window.opener = null
      window.close()
    }
  }
  next()
})

export {
  router,
}
