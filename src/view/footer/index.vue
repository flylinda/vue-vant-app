<template>
  <div class="box">

    <!-- <div class="roll">
      滚动区域
      滚动区域
      滚动区域
      滚动区域
      滚动区域
      滚动区域
      滚动区域
      滚动区域
      滚动区域
      滚动区域
      滚动区域
      滚动区域
      滚动区域
    </div>
    <footer>底部固定菜单</footer> -->

    <div id="wrapper">
        <div id="header">导航栏</div>
        <div id="content">核心内容</div>
        <div id="footer">底部栏</div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
#wrapper {
  display: flex;
  min-height: 100vh; /*1vh表示浏览器高度的1%，100vh为浏览器高度，感觉这个挺好的*/
  flex-direction: column;/*灵活的项垂直显示*/
}
#header {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 50px;
  background-color: #531dab;
}
#content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}
#footer{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 50px;
  background-color: #531dab;
}
// .box {
//   .roll {
//     padding-bottom: 1rem;
//   }
//   footer {
//     position: fixed;
//     bottom: 0;
//     z-index: 999;
//     width: 100%;
//     background-color: black;
//   }
// }

// .box{
//   position: relative;height: 100%;
//   .roll{
//     position: absolute;bottom:1rem;top: 0;overflow-y: scroll;-webkit-overflow-scrolling: touch;height: auto;
//   }
//   footer{
//     position: absolute;bottom:0;
//   }
// }
// .box{
//   display:flex;
//   display: -webkit-flex;
//   height:100%;
//   flex-direction:column;
//   .roll{
//     flex: 1;
//     width: 100%;
//     overflow-y: scroll;
//     -webkit-overflow-scrolling: touch;
//     height: auto;
//   }
// }

// 1、底部定位为fixed或absolute的时候，出现优先级别较低，导致被其他div覆盖的情况，那么这里就需要用到z-index，来让他成为最高级别，不至于被覆盖。

// 2、底部定位为fixed或absolute，存在输入框的时候，会出现如下情况：

// ios：激活输入框时，底部不会弹出来（合理）。
// Android：激活输入框时，底部会跟着输入框弹出来（不合理)
// 传统解决办法：通常将底部设置为fixed，当激活输入框的时候，将底部定位改为relative，即可兼容ios和Android。

// 3、使用方法二或者方法三，需要设置-webkit-overflow-scrolling 属性。这样才能保证滚动区域的流畅性，-webkit-overflow-scrolling控制元素在移动设备上是否使用滚动回弹效果。

// 4、在部分浏览器中设置overflow-y: scroll;会出现滚动条，这时候我们需要全局定义如下样式：

// ::-webkit-scrollbar{//scroll滚动条设置
//         width: 0px; height: 0px;background-color: #fff;
// }
// 5、移动端推荐使用方法三的布局形式。
</style>
