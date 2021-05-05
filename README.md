# 使用手册

## 安装

使用以下命令安装这个包：

```javascript
npm install --save su-vue-slide-verify
```



## 参数配置

|     参数     |  名称   |                       说明                        |
| :----------: | :-----: | :-----------------------------------------------: |
|   是否可见   | visible |               true/false，默认true                |
| 图片路径数组 |  imgs   | 例如：['/static/imgs/1.jpg','/static/imgs/2.jpg'] |



## 事件

| 事件 |  名称   |         说明         |
| :--: | :-----: | :------------------: |
| 成功 | success | 验证成功后的回调函数 |
| 失败 |  error  | 验证失败后的回调函数 |



## 例子

在入口文件src/main.js中全局引入

```javascript
import verify from 'su-vue-slide-verify';
Vue.use(verify)
```

在需要的界面中使用

```vue
<template>
    <verify :imgs="imgs"
            :visible="visible"
            @success="handleSuccess"
            @error="handleError">
    </verify>
</template>
export default{
	data(){
		return {
			imgs:[],//图片路径数组
			visible:true,//滑动验证模块是否可见
		}
	},
	created(){
		for(let i = 1;i <= 10;i++){
			this.imgs.push(`static/imgs/pic${i}.jpg`);
		}
    },
	methods:{
		handleSuccess(){
			alert("验证成功");
			this.visible = false;
		},
		handleError(){
			alert("验证失败");
		}
	}
}
```

**如有建议，欢迎联系我一起进行交流**

**由 meishishang （邮箱：meishishang@outlook.com）创建**