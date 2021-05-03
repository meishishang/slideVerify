<!--
 * @Author: Suxuli
 * @Date: 2021-05-02 17:50:30
 * @Description: file content
 * @FilePath: \slidingVerify\src\components\verify.vue
-->
<template>
    <div class="verify_wrap" :style="{display:visible?'block':'none'}">
        <div class="box" ref="box">
            <div class="img_box">
                <div class="img_wrap" :style="{backgroundImage:`url('${imgs[index]}')`}"></div>
                <div class="verify_block" :style="{backgroundImage:`url('${imgs[index]}')`,
                    top:`${pointY}px`,
                    left:`${moveLen + relativePointX}px`,
                    backgroundPosition:`-${pointX}px -${pointY}px`
                }"></div>
                <div class="verified" :style="{
                    left:`${pointX}px`,
                    top:`${pointY}px`
                }"></div>
            </div>
            <div ref="handle" class="handle">
                <div class="swiper" ref="swiper" 
                    @mousedown="mouseDownFn"
                    :style="{left:`${moveLen}px`}">
                    &rarr;
                </div>
                <span>滑动验证&gt;&gt;&gt;</span>
            </div>
        </div>
    </div>
</template>
<script>
const relativePointX = 10;
const errorRange = 3;
export default {
    props:{
        imgs:{
            type:Array,
            default:()=>[]
        },
        visible:{
            type:Boolean,
            default:true
        }
    },
    data(){
        return{
            index:0,
            pointX:0,
            pointY:0,
            distanceX:0,
            distanceY:0,
            moveLen:0,
            relativePointX:relativePointX
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        //初始化
        init(){
            this.index = Math.floor(Math.random() * this.imgs.length);//向下取整， 随机下标
            let verImg = document.getElementsByClassName('img_wrap')[0]
            if(verImg){
                let imgH = verImg.clientHeight;
                this.pointX = 150 * (1 + Math.random()) - 40;//取于区间[110,260]
                this.pointY = imgH / 4 + Math.random() * imgH / 2;//取于区间[imgH/4,(3*imgH)/4],即1/4到3/4
            }
        },
        mouseUpFn(e){
            //console.log(this.moveLen,this.pointX)
            //误差 
            if(Math.abs(this.moveLen - this.pointX + relativePointX) > errorRange){
                this.$emit("error")
            }else{
                this.$emit("success")
            }
            this.init();
            this.$refs.box.removeEventListener("mousemove",this.mouseMoveFn)
            document.removeEventListener("mouseup",this.mouseUpFn)
            this.moveLen = 0;
        },
        //鼠标按下
        mouseDownFn(e){
            e.stopPropagation();
            //鼠标到按钮的距离 鼠标的相对距离减去按钮的相对距离
            this.distanceX = e.clientX;
            this.distanceY = e.clientY;
            
            this.$refs.box.addEventListener('mousemove',this.mouseMoveFn);
            document.addEventListener('mouseup',this.mouseUpFn);
        },
        mouseMoveFn(e){
            let len = e.clientX - this.distanceX;
            let maxLen = this.$refs.handle.clientWidth - this.$refs.swiper.clientWidth;
            if(len < 0){
                len = 0
            }else if(len > maxLen){
                len = maxLen;
            }
            this.moveLen = len;
        }

    }
}
</script>
<style scoped>
.verify_wrap{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.26);
    z-index: 99999;
}
.box{
    position:absolute;
    top:50%;
    left:50%;
    width:300px;
    padding:20px;
    box-shadow:0 0 5px 5px rgba(0,0,0,.36);
    background:white;
    transform:translate(-50%,-50%);
}
.img_box{
    position:relative;
    width:100%;
    height:166px;
}
.img_wrap{
    width:300px;
    height:100%;
    box-shadow:0 0 3px 3px rgba(0,0,0,.26);
    background-size:300px auto;
    background-repeat: no-repeat;
}
.verify_block{
    position:absolute;
    top:0;
    left:10px;
    border-radius:5px;
    width:30px;
    height:30px;
    background:white;
    box-shadow:0 0 3px 3px rgba(0,0,0,.3);
    background-size: 300px auto;
    background-repeat: no-repeat;
    z-index:1;
    border: 2px solid white;
}
.verified{
    position:absolute;
    top:0;
    left:100px;
    width:30px;
    height:30px;
    border-radius:5px;
    background:white;
    box-shadow:0 0 10px 0 rgba(0,0,0) inset;
    border: 2px solid white;
}
.handle{
    position:relative;
    height: 50px;
    margin-top:20px;
    text-align:center;
    box-sizing:border-box;
    background:white;
    border:1px solid #ccc;
    line-height:50px;
    box-shadow: 0 0 2px 2px rgb(0 0 0 / 25%) inset;
}
.swiper{
    position:absolute;
    top:0;
    left:0;
    cursor: pointer;
    display:inline-block;
    width:50px;
    height:100%;
    background: #d9f0bf;
    border: 1px solid #d0ff9a;
    box-sizing: border-box;
    color: #769d49;
    font-size: 24px;
    line-height: 44px;
    -webkit-box-sizing: border-box;
}
</style>