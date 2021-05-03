<template>
  <div id="app">
    <p style="text-align:center">created by suxueli(meishishang@outlook.com)</p>
    <verify :imgs="imgs" @success="handleSuccess" @error="handleError"></verify>
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
import verify from './components/verify'
export default {
  name: 'App',
  components:{
    verify
  },
  data(){
    return {
      imgs:[]
    }
  },
  created(){
    for(let i = 1; i <= 12;i++){
				this.imgs.push('/static/imgs/pic' + i + '.jpg')
			}//图片名称数组
  },
  methods:{
    handleSuccess(){
      alert("succees")
    },
    handleError(){
      alert("error")
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
