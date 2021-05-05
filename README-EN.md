# Service Manual

## install

Install the package using the following command:

```javascript
npm install --save su-vue-slide-verify
```



## Configuration

|         param          |  name   |                       instructions                       |
| :--------------------: | :-----: | :------------------------------------------------------: |
| Whether or not visible | visible |               true /false, default to true               |
|    Image path array    |  imgs   | for example：['/static/imgs/1.jpg','/static/imgs/2.jpg'] |



## Event

|    events     |  name   |               instructions                |
| :-----------: | :-----: | :---------------------------------------: |
| success event | success | Validate the callback function on success |
| failed event  |  error  | Validate the callback function on failed  |



## Example

Imported globally in the entry file src/main.js

```javascript
import verify from 'su-vue-slide-verify';
Vue.use(verify)
```

Use it where needed

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



**If you have any suggestions, please feel free to contact me for communication.**

**created by meishishang(email:meishishang@outlook.com)**

