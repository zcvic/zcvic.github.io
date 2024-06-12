import{_ as t,o as n,c as a,e as s}from"./app-BR0XYLRb.js";const e={},i=s(`<h1 id="自定义tabbar" tabindex="-1"><a class="header-anchor" href="#自定义tabbar"><span>自定义tabbar</span></a></h1><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h2><p>tabbar页面来回切换会有闪烁的问题</p><p>为了解决这个问题，我使用一个主页面，将tabbar页面以组件的方式引入页面，使用v-show或v-if来决定页面的显示与否。</p><p>今天我使用此方法时，发现一个问题。</p><div class="hint-container tip"><p class="hint-container-title">问题</p><p>一般tabbar页面都需要请求接口，我以前都是将这些接口请求放在mounted周期中，如果主页面使用v-if的方式，那么tabbar页面来回切换，那么mounted周期会被触发多次。</p><p>如果使用v-show的方式，那么主要页面首次加载时，会将所有tabbar页面的mounted都触发一次，来回切换不会再次触发。</p></div><p>这两种方法都感觉有点浪费，于是想了很久，想出了一个解决方案，当然这样写会不会有别的问题，我也不知道，目前我还没有遇到</p><p>给tabbar页面添加一个load方法，只有点击对应页面的tabbar时才触发对应页面的load。</p><h2 id="具体实现" tabindex="-1"><a class="header-anchor" href="#具体实现"><span>具体实现</span></a></h2><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
	</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
		</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>home</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>home<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tabIndex==0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>home</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
		</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>categor</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>categor<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tabIndex==1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>categor</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
		</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>siteMap</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sitemap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tabIndex==2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>siteMap</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
		</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>order</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>order<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tabIndex==3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>order</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
		</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mine</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mine<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tabIndex==4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mine</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
		&lt;tn-tabbar v-model=&quot;tabIndex&quot; :list=&quot;tabList&quot; activeColor=&quot;#838383&quot; inactiveColor=&quot;#AAAAAA&quot; @change=&quot;tabLoad&quot;
			activeIconColor=&quot;tn-cool-bg-color-7&quot; :animation=&quot;true&quot; :safeAreaInsetBottom=&quot;true&quot;&gt;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tn-tabbar</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
	</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
	import home from &#39;@/pagesA/pages/tabbar/home.vue&#39;
	import mine from &#39;@/pagesA/pages/tabbar/mine.vue&#39;
	import categor from &#39;@/pagesA/pages/search/categor.vue&#39;
	import order from &#39;@/pagesA/pages/tabbar/order.vue&#39;
	import siteMap from &#39;@/pagesA/pages/tabbar/siteMap.vue&#39;
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
						title: &#39;首页&#39;,
						activeIcon: &#39;home-smile-fill&#39;,
						inactiveIcon: &#39;home-smile&#39;,
						load: false
					},
					{
						title: &#39; 分类&#39;,
						activeIcon: &#39;menu-circle-fill&#39;,
						inactiveIcon: &#39;menu-circle&#39;,
						load: false
					},
					{
						title: &#39;地图&#39;,
						activeIcon: &#39;map-fill&#39;,
						inactiveIcon: &#39;map&#39;,
						activeIconColor: &#39;#FFFFFF&#39;,
						inactiveIconColor: &#39;#FFFFFF&#39;,
						iconSize: 50,
						out: true,
						load: false
					},
					{
						title: &#39;订单&#39;,
						activeIcon: &#39;order-fill&#39;,
						inactiveIcon: &#39;order&#39;,
						load: false
					},
					{
						title: &#39;我的&#39;,
						activeIcon: &#39;my-fill&#39;,
						inactiveIcon: &#39;my&#39;,
						load: false
					}
				],
			}
		},
		onLoad(e) {
			if (e.index) {
				this.tabIndex = e.index
			}
			this.$nextTick(() =&gt; {
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
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在对应的tabbar页面 methods 中添加load方法即可</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),l=[i];function p(o,c){return n(),a("div",null,l)}const r=t(e,[["render",p],["__file","customTabbar.html.vue"]]),d=JSON.parse('{"path":"/posts/code/front/uniapp/customTabbar.html","title":"自定义tabbar","lang":"zh-CN","frontmatter":{"title":"自定义tabbar","icon":"tabbar","date":"2024-05-14T00:00:00.000Z","category":["前端","uniapp"],"description":"自定义tabbar 问题 tabbar页面来回切换会有闪烁的问题 为了解决这个问题，我使用一个主页面，将tabbar页面以组件的方式引入页面，使用v-show或v-if来决定页面的显示与否。 今天我使用此方法时，发现一个问题。 问题 一般tabbar页面都需要请求接口，我以前都是将这些接口请求放在mounted周期中，如果主页面使用v-if的方式，那么...","head":[["meta",{"property":"og:url","content":"https://blog.zwymw.top/posts/code/front/uniapp/customTabbar.html"}],["meta",{"property":"og:site_name","content":"荒芜blog"}],["meta",{"property":"og:title","content":"自定义tabbar"}],["meta",{"property":"og:description","content":"自定义tabbar 问题 tabbar页面来回切换会有闪烁的问题 为了解决这个问题，我使用一个主页面，将tabbar页面以组件的方式引入页面，使用v-show或v-if来决定页面的显示与否。 今天我使用此方法时，发现一个问题。 问题 一般tabbar页面都需要请求接口，我以前都是将这些接口请求放在mounted周期中，如果主页面使用v-if的方式，那么..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-12T02:18:59.000Z"}],["meta",{"property":"article:author","content":"荒芜"}],["meta",{"property":"article:published_time","content":"2024-05-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-12T02:18:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自定义tabbar\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-14T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-12T02:18:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"荒芜\\",\\"url\\":\\"https://blog.zwymw.top\\",\\"email\\":\\"2484068670@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]},{"level":2,"title":"具体实现","slug":"具体实现","link":"#具体实现","children":[]}],"git":{"createdTime":1715584344000,"updatedTime":1718158739000,"contributors":[{"name":"荒芜","email":"2484068670@qq.com","commits":7}]},"readingTime":{"minutes":1.76,"words":528},"filePathRelative":"posts/code/front/uniapp/customTabbar.md","localizedDate":"2024年5月14日","excerpt":"\\n<h2>问题</h2>\\n<p>tabbar页面来回切换会有闪烁的问题</p>\\n<p>为了解决这个问题，我使用一个主页面，将tabbar页面以组件的方式引入页面，使用v-show或v-if来决定页面的显示与否。</p>\\n<p>今天我使用此方法时，发现一个问题。</p>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">问题</p>\\n<p>一般tabbar页面都需要请求接口，我以前都是将这些接口请求放在mounted周期中，如果主页面使用v-if的方式，那么tabbar页面来回切换，那么mounted周期会被触发多次。</p>\\n<p>如果使用v-show的方式，那么主要页面首次加载时，会将所有tabbar页面的mounted都触发一次，来回切换不会再次触发。</p>\\n</div>","autoDesc":true}');export{r as comp,d as data};