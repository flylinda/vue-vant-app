<template>
  <div class="answer">
  <van-button id="btn" type="primary" size="large" round :class="showPopup===true ? 'answer-btn' : 'answer-btn-origin'">提交</van-button>
  <van-popup
    v-model="showPopup"
    position="bottom"
    :overlay="false"
    :style="{ 'min-height': '40vh', position: 'relative' }"
  >
  <div class="answer-wrapper">
    <div class="answer-header">
      <van-icon name="photo" size="300%" :style="{height: 'auto'}" />
      <van-icon name="photograph" size="300%" />
      <van-icon name="invition" size="300%" />
      <van-icon name="expand" size="300%" />
    </div>
    <div class="answer-content">
      <van-number-keyboard
        id="keyboard"
        :style="{ height: '240px', 'min-height': '240px', position: 'relative'}"
        :show="showKeyboard"
        extra-key="."
        close-button-text="完成"
        @blur="show = false"
        @input="onInput"
        @delete="onDelete"
        @close="onClose"
      />
    </div>
  </div>
    
  </van-popup>
  </div>
</template>

<script>
export default {
  data(){
    return{
      showPopup: true,
      showKeyboard: true
    }
  },
  methods:{
    onInput(value) {
      console.log(value);
      
    },
    onDelete() {
      console.log('删除');
      
    },
    onClose(){
      this.showPopup = false
      var x = document.getElementById('btn')
      x.scrollIntoView()
    }
  }

}
</script>

<style lang="less" scoped>
.answer{
  &-btn{
    margin-top: 45vh;
  }
  &-btn-origin{
    margin-top: 90vh;
  }
  &-wrapper{
    display: flex;
    min-height: 45vh; /*1vh表示浏览器高度的1%，100vh为浏览器高度，感觉这个挺好的*/
    flex-direction: column;/*灵活的项垂直显示*/
  }
  &-header{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}

</style>