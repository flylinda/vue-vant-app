<template>
    <div>
        <div class="card">
            <h1 class="h1">请填写借款金额</h1>
            <!-- field输入框 弹出自定义的键盘 绑定输入的值 -->
            <van-field readonly clickable :value="money" @touchstart.native.stop="show = true" placeholder="借多少" :border="false" class="moneyborder" type="tel">
                 <span slot="left-icon">￥</span>
                 <span slot="right-icon" class="borrowall" @click="showPopup">借全部</span>
            </van-field>
            <hr />
            <h4 class="h4">
                单笔<span style="color:#ff9896">{{minmoney}}</span>元起借，最多可借<span style="color:#ff9896">{{maxMoney}}</span>元
            </h4>
        </div>
        <!-- 按钮 -->
        <van-button size="large" :class="show===true ? 'next3' :'next2'">下一步</van-button>
        <!-- 弹出层 弹出按钮置于键盘之上 -->
        <van-popup
            v-model="show"
            position="bottom"
            :style="{ height: '320px' }"
            :overlay = "false"
        >
            <van-button size="large" class="next">下一步</van-button>
        </van-popup>
        <!-- 弹出层 弹出图片和数字键盘 -->
        <van-popup
            v-model="show"
            position="bottom"
            :style="{ height: '260px' }"
            :overlay = "false"
        >
        <div style="text-align:center;margin-top:7.5px">
            <img src="../../static/haopingping/img.png" />
            <img src="../../static/haopingping/camera.png" style="margin-left:30px" />
            <img src="../../static/haopingping/file.png" style="margin-left:30px" />
            <img src="../../static/haopingping/link.png" style="margin-left:30px" />
        </div>
        <!-- 自定义的数字键盘 -->
        <van-number-keyboard
            v-model="money"
            :show="show"
            theme="custom"
            close-button-text="完成"
            @blur="show = false"
        />
        </van-popup>
    </div>
</template>
<script>
export default {
    data(){
        return{
            // 界面上输入的金额
            money:'',
            // 最小金额
            minmoney:'10000',
            // 最大金额
            maxMoney:'40000',
            // 弹出框是否显示
            show: false
        }
    },
    methods:{
        // 控制弹出层是否显示
        showPopup(){
            this.show = true
        }
    }
}
</script>
<style scoped>
.h1{
    font-size: 18px;
    margin-left: 5%;
    font-weight: bold;
    padding-top: 5%;
    color:  #333333
}
.h4{
    font-size: 12px;
    margin-left: 5%;
    margin-top: 2%;
    color: #999999;
}
.moneyborder{
    margin-top: 10%;
    font-size: 22px;
}
.borrowall{
    border: none;
    color: blue;
    display:inline;
    font-size: 16px;
}
.next{
    width: 86%;
    text-align: center;
    display: inline-block;
    margin-left: 7%;
    margin-top: 5px;
    background-color: rgb(226, 219, 219);
    border-radius: 26px 26px;
    background-color: #FA5552;    
    color: white;
}
.next2{
    width: 86%;
    margin-left: 7%;
    margin-top: 10%;
    background-color: rgb(226, 219, 219);
    border-radius: 26px 26px;
    background-color: #FA5552;    
    color: white;
}
.next3{
    display: none;
}
.card{
    background-color: white;
    border-radius: 10px 10px 10px 10px;
    width: 86%;
    height: 150px;
    margin-left: 7%;
    margin-top: 5%;
}
</style>