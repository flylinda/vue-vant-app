import Vue from 'vue'
import Router from 'vue-router'

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
  {
    path: '/register',
    name: 'register',
    component: () => import('./view/register'),
    meta: {
      title: '注册',
    },
  },
  {
    name: 'finishRegister',
    component: () => import('./view/register/components/finishRegister'),
    meta: {
      title: '完成注册',
    },
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
]

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '')
})

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
