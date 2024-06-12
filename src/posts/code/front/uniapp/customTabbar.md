---
title: 自定义tabbar
icon: tabbar
date: 2024-05-14
category:
  - 前端
  - uniapp
---
# 自定义tabbar

## 问题
tabbar页面来回切换会有闪烁的问题

为了解决这个问题，我使用一个主页面，将tabbar页面以组件的方式引入页面，使用v-show或v-if来决定页面的显示与否。

今天我使用此方法时，发现一个问题。

::: tip 问题
一般tabbar页面都需要请求接口，我以前都是将这些接口请求放在mounted周期中，如果主页面使用v-if的方式，那么tabbar页面来回切换，那么mounted周期会被触发多次。

如果使用v-show的方式，那么主要页面首次加载时，会将所有tabbar页面的mounted都触发一次，来回切换不会再次触发。
:::
这两种方法都感觉有点浪费，于是想了很久，想出了一个解决方案，当然这样写会不会有别的问题，我也不知道，目前我还没有遇到

给tabbar页面添加一个load方法，只有点击对应页面的tabbar时才触发对应页面的load。

## 具体实现

```jsx
<template>
	<view>
		<home ref="home" v-show="tabIndex==0"></home>
		<categor ref="categor" v-show="tabIndex==1"></categor>
		<siteMap ref="sitemap" v-show="tabIndex==2"></siteMap>
		<order ref="order" v-show="tabIndex==3"></order>
		<mine ref="mine" v-show="tabIndex==4"></mine>
		<tn-tabbar v-model="tabIndex" :list="tabList" activeColor="#838383" inactiveColor="#AAAAAA" @change="tabLoad"
			activeIconColor="tn-cool-bg-color-7" :animation="true" :safeAreaInsetBottom="true"></tn-tabbar>
	</view>
</template>

<script>
	import home from '@/pagesA/pages/tabbar/home.vue'
	import mine from '@/pagesA/pages/tabbar/mine.vue'
	import categor from '@/pagesA/pages/search/categor.vue'
	import order from '@/pagesA/pages/tabbar/order.vue'
	import siteMap from '@/pagesA/pages/tabbar/siteMap.vue'
	export default {
		components: {
			home,
			mine,
			categor,
			order,
			siteMap
		},
		data() {
			return {
				tabIndex: 0,
				tabList: [{
						title: '首页',
						activeIcon: 'home-smile-fill',
						inactiveIcon: 'home-smile',
						load: false
					},
					{
						title: ' 分类',
						activeIcon: 'menu-circle-fill',
						inactiveIcon: 'menu-circle',
						load: false
					},
					{
						title: '地图',
						activeIcon: 'map-fill',
						inactiveIcon: 'map',
						activeIconColor: '#FFFFFF',
						inactiveIconColor: '#FFFFFF',
						iconSize: 50,
						out: true,
						load: false
					},
					{
						title: '订单',
						activeIcon: 'order-fill',
						inactiveIcon: 'order',
						load: false
					},
					{
						title: '我的',
						activeIcon: 'my-fill',
						inactiveIcon: 'my',
						load: false
					}
				],
			}
		},
		onLoad(e) {
			if (e.index) {
				this.tabIndex = e.index
			}
			this.$nextTick(() => {
				this.$refs.home.load()
				this.tabList[0].load = true
			})
		},
		methods: {
			tabLoad(e) {
				if (!this.tabList[e].load) {
					if (e == 1) {
						this.$refs.categor.load()
					} else if (e == 2) {
						this.$refs.sitemap.load()
					} else if (e == 3) {
						this.$refs.order.load()
					}else if (e == 4) {
						this.$refs.mine.load()
					}
					this.tabList[e].load = true
				}
			},

		}
	}
</script>
```

在对应的tabbar页面 methods 中添加load方法即可
```jsx
methods: {
	load() {

	},
}
```