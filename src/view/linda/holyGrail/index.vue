<template>
  <div class="HolyGrail">
    <header></header>
    <div class="HolyGrail-body">
      <div class="HolyGrail-body-nav"></div>
      <div class="HolyGrail-body-content"></div>
      <div class="HolyGrail-body-side"></div>
    </div>
    <footer></footer>
  </div>
  <!-- <div class="HolyGrail">
    <header></header>
    <div class="HolyGrail-body">
      <main class="HolyGrail-content"></main>
      <nav class="HolyGrail-nav"></nav>
      <aside class="HolyGrail-ads"></aside>
    </div>
    <footer></footer>
  </div> -->
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>

// .HolyGrail {
//   display: flex;
//   min-height: 100vh;
//   flex-direction: column;
// }

// header,
// footer {
//   flex: 1;
//   background-color: red;
// }

// .HolyGrail-body {
//   display: flex;
//   flex: 1;
// }

// .HolyGrail-content {
//   flex: 1;
// }

// .HolyGrail-nav, .HolyGrail-ads {
//   /* 两个边栏的宽度设为12em */
//   flex: 0 0 12em;
//   background-color: burlywood;
// }

// .HolyGrail-nav {
//   /* 导航放到最左边 */
//   order: -1;(这个样式在于HolyGrail-content是否在nav和ads之间，如果在中间的话，就不需要order：-1，如果不在中间的话，就需要)
//   background-color: burlywood;
// }

.HolyGrail{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  header{
    background-color: #595959;
  }

  footer{
    background-color: #595959;
  }
  &-body{
    display: flex;
    flex: 1;
    &-nav, &-side{
      flex: 0 0 5em;
    }
    &-nav {
      background-color: #91d5ff;
    }
    &-side{
      background-color: #fa541c;
    }
    &-content{
      flex: 1;
      background-color: #d9d9d9;
    }
  }
}
header, footer{
  height: 45px;
}
</style>
