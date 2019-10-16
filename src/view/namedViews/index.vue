<template>
  <div>
    <h1>Named Views</h1>
    <ul>
      <li>
        <router-link to="/now">/now</router-link>
      </li>
      <li>
        <router-link to="/other">/other</router-link>
      </li>
    </ul>
    <router-view class="view one"></router-view>
    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view>
    <button @click="skip">离开守卫</button>
  </div>
</template>
<script>
export default {
  methods: {
    skip () {
      this.$router.push('login')
    },
  },
  // 离开守卫通常用来禁止用户在还未保存修改前突然离开。该导航可以通过next(false)来取消
  beforeRouteLeave (to, from, next) {
    const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    if (answer) {
      next()
    } else {
      next(false)
    }
  },
}
</script>
