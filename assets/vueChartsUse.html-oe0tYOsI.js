import{_ as p,r as i,o,c,a as s,b as n,d as e,f as t}from"./app-BmYcT1GB.js";const l="/assets/images/code/front/vue2/vueChartsUse/msedge_WpFubl0d1K.png",r={},u=t(`<h1 id="vue2中vue-echarts的使用" tabindex="-1"><a class="header-anchor" href="#vue2中vue-echarts的使用"><span>vue2中vue-echarts的使用</span></a></h1><p>首先通过npm安装echarts和vue-echarts</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code>npm i echarts vue<span class="token operator">-</span>echarts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>main.js全局引入注册</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token string">&#39;echarts&#39;</span>
<span class="token keyword">import</span> ECharts <span class="token keyword">from</span> <span class="token string">&#39;vue-echarts&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;v-chart&#39;</span><span class="token punctuation">,</span> ECharts<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue页面使用</p>`,6),d={href:"https://echarts.apache.org/zh/option.html#title",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/ecomfe/vue-echarts#readme",target:"_blank",rel:"noopener noreferrer"},m=t(`<div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-chart</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chart<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:option</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>option<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
export default {
    data() {
        return {
            option: {
                xAxis: {
                    type: &#39;category&#39;,
                    data: [&#39;Mon&#39;, &#39;Tue&#39;, &#39;Wed&#39;, &#39;Thu&#39;, &#39;Fri&#39;, &#39;Sat&#39;, &#39;Sun&#39;]
                },
                yAxis: {
                    type: &#39;value&#39;
                },
                series: [
                    {
                        data: [150, 230, 224, 218, 135, 147, 260],
                        type: &#39;line&#39;
                    }
                ]
            }
        }
    },
    methods: {

    }
}

</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
.chart {
    height: 250px;
    width: 370px;
}
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最好设置v-chart组件的宽高，否则页面不会显示且出现以下警告</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token punctuation">[</span>ECharts<span class="token punctuation">]</span> Can&#39;t <span class="token keyword">get</span> <span class="token constant">DOM</span> width or height<span class="token punctuation">.</span> Please check dom<span class="token punctuation">.</span>clientWidth and dom<span class="token punctuation">.</span>clientHeight<span class="token punctuation">.</span> They should not be <span class="token number">0</span><span class="token punctuation">.</span>For example<span class="token punctuation">,</span> you may need to call <span class="token keyword">this</span> <span class="token keyword">in</span> the callback <span class="token keyword">of</span> window<span class="token punctuation">.</span>onload<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>效果图：</p><figure><img src="`+l+'" alt="效果图" tabindex="0" loading="lazy"><figcaption>效果图</figcaption></figure>',5);function h(k,g){const a=i("ExternalLinkIcon");return o(),c("div",null,[u,s("p",null,[n("设置好option即可显示，"),s("a",d,[n("option的设置文档"),e(a)]),n("，"),s("a",v,[n("vue-charts文档"),e(a)])]),m])}const x=p(r,[["render",h],["__file","vueChartsUse.html.vue"]]),y=JSON.parse(`{"path":"/posts/code/front/vue2/vueChartsUse.html","title":"vue2中vue-echarts的使用","lang":"zh-CN","frontmatter":{"icon":"ECharts","date":"2024-05-31T00:00:00.000Z","category":["前端","vue2"],"tag":["echarts"],"description":"vue2中vue-echarts的使用 首先通过npm安装echarts和vue-echarts main.js全局引入注册 vue页面使用 设置好option即可显示，option的设置文档，vue-charts文档 最好设置v-chart组件的宽高，否则页面不会显示且出现以下警告 效果图： 效果图效果图","head":[["meta",{"property":"og:url","content":"https://blog.zwymw.top/posts/code/front/vue2/vueChartsUse.html"}],["meta",{"property":"og:site_name","content":"荒芜"}],["meta",{"property":"og:title","content":"vue2中vue-echarts的使用"}],["meta",{"property":"og:description","content":"vue2中vue-echarts的使用 首先通过npm安装echarts和vue-echarts main.js全局引入注册 vue页面使用 设置好option即可显示，option的设置文档，vue-charts文档 最好设置v-chart组件的宽高，否则页面不会显示且出现以下警告 效果图： 效果图效果图"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://blog.zwymw.top/assets/images/code/front/vue2/vueChartsUse/msedge_WpFubl0d1K.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-12T02:18:59.000Z"}],["meta",{"property":"article:author","content":"荒芜"}],["meta",{"property":"article:tag","content":"echarts"}],["meta",{"property":"article:published_time","content":"2024-05-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-12T02:18:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vue2中vue-echarts的使用\\",\\"image\\":[\\"https://blog.zwymw.top/assets/images/code/front/vue2/vueChartsUse/msedge_WpFubl0d1K.png\\"],\\"datePublished\\":\\"2024-05-31T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-12T02:18:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"荒芜\\",\\"url\\":\\"https://blog.zwymw.top\\",\\"email\\":\\"2484068670@qq.com\\"}]}"]]},"headers":[],"git":{"createdTime":1717125462000,"updatedTime":1718158739000,"contributors":[{"name":"荒芜","email":"2484068670@qq.com","commits":2}]},"readingTime":{"minutes":0.67,"words":202},"filePathRelative":"posts/code/front/vue2/vueChartsUse.md","localizedDate":"2024年5月31日","excerpt":"\\n<p>首先通过npm安装echarts和vue-echarts</p>\\n<div class=\\"language-jsx\\" data-ext=\\"jsx\\" data-title=\\"jsx\\"><pre class=\\"language-jsx\\"><code>npm i echarts vue<span class=\\"token operator\\">-</span>echarts\\n</code></pre></div><p>main.js全局引入注册</p>\\n<div class=\\"language-jsx\\" data-ext=\\"jsx\\" data-title=\\"jsx\\"><pre class=\\"language-jsx\\"><code><span class=\\"token keyword\\">import</span> <span class=\\"token string\\">'echarts'</span>\\n<span class=\\"token keyword\\">import</span> ECharts <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'vue-echarts'</span>\\n\\nVue<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">component</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'v-chart'</span><span class=\\"token punctuation\\">,</span> ECharts<span class=\\"token punctuation\\">)</span>\\n</code></pre></div>","autoDesc":true}`);export{x as comp,y as data};