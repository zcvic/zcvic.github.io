import{_ as e,o as t,c as s,e as o}from"./app-2Vo1O7zq.js";const a="/assets/images/other/develop/cross/explorer_a0KJVMlKsQ.png",p="/assets/images/other/develop/cross/chrome_pqG9Zrncpf.png",r="/assets/images/other/develop/cross/chrome_ooP1aSvEDj.png",n="/assets/images/other/develop/cross/chrome_JnOgM7SuQe.png",i="/assets/images/other/develop/cross/msedge_cteX5PuHFM.png",c="/assets/images/other/develop/cross/xEI5GTacRp.png",l={},g=o(`<h1 id="谷歌浏览器跨域问题解决" tabindex="-1"><a class="header-anchor" href="#谷歌浏览器跨域问题解决"><span>谷歌浏览器跨域问题解决</span></a></h1><h2 id="访问跨域的原因" tabindex="-1"><a class="header-anchor" href="#访问跨域的原因"><span>访问跨域的原因</span></a></h2><p>访问跨域的原因：同源策略</p><p>同源策略是指在浏览器端出于安全考量，向服务端发起请求必须满足：协议相同、Host(ip)相同、端口相同的条件，否则访问将被禁止，不满足要求的访问也就被称为跨域访问。</p><p>虽然跨域访问被禁止之后，可以在一定程度上提高了应用的安全性，但也为开发带来了一定的麻烦。</p><h2 id="跨域解决方案一-推荐" tabindex="-1"><a class="header-anchor" href="#跨域解决方案一-推荐"><span>跨域解决方案一（推荐）</span></a></h2><p>1.首先关闭谷歌浏览器</p><p>2.创建一个目录，例如我在D盘创建ChromeDevUserData</p><p>3.在桌面选择谷歌浏览器右键 -&gt; 属性 -&gt; 快捷方式 -&gt; 目标，添加</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code> <span class="token operator">--</span>disable<span class="token operator">-</span>web<span class="token operator">-</span>security <span class="token operator">--</span>user<span class="token operator">-</span>data<span class="token operator">-</span>dir<span class="token operator">=</span><span class="token constant">D</span><span class="token operator">:</span>\\ChromeDevUserData 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(刚刚创建的目录)</p><figure><img src="`+a+'" alt="explorer_a0KJVMlKsQ.png" tabindex="0" loading="lazy"><figcaption>explorer_a0KJVMlKsQ.png</figcaption></figure><p>4.打开谷歌浏览器验证，出现下图则表示修改成功</p><figure><img src="'+p+'" alt="chrome_pqG9Zrncpf.png" tabindex="0" loading="lazy"><figcaption>chrome_pqG9Zrncpf.png</figcaption></figure><h2 id="跨域解决方案二" tabindex="-1"><a class="header-anchor" href="#跨域解决方案二"><span>跨域解决方案二</span></a></h2><p>1.谷歌浏览器 打开chrome://flags/#block-insecure-private-network-requests</p><figure><img src="'+r+'" alt="chrome_ooP1aSvEDj.png" tabindex="0" loading="lazy"><figcaption>chrome_ooP1aSvEDj.png</figcaption></figure><p>2.将Block insecure private network requests. 设置为Disabled`</p><figure><img src="'+n+'" alt="chrome_JnOgM7SuQe.png" tabindex="0" loading="lazy"><figcaption>chrome_JnOgM7SuQe.png</figcaption></figure><p>3.关闭谷歌浏览器重新打开网页 即可以解决问题。</p><h2 id="跨域解决方案三" tabindex="-1"><a class="header-anchor" href="#跨域解决方案三"><span>跨域解决方案三</span></a></h2><p>安装插件 Allow CORS_ Access-Control-Allow-Origin</p><figure><img src="'+i+'" alt="msedge_cteX5PuHFM.png" tabindex="0" loading="lazy"><figcaption>msedge_cteX5PuHFM.png</figcaption></figure><p>点击图标开启即可</p><figure><img src="'+c+'" alt="xEI5GTacRp.png" tabindex="0" loading="lazy"><figcaption>xEI5GTacRp.png</figcaption></figure>',25),m=[g];function d(h,_){return t(),s("div",null,m)}const f=e(l,[["render",d],["__file","cross.html.vue"]]),v=JSON.parse('{"path":"/posts/other/develop/cross.html","title":"谷歌浏览器跨域问题解决","lang":"zh-CN","frontmatter":{"icon":"cross","date":"2024-06-03T00:00:00.000Z","category":["开发"],"description":"谷歌浏览器跨域问题解决 访问跨域的原因 访问跨域的原因：同源策略 同源策略是指在浏览器端出于安全考量，向服务端发起请求必须满足：协议相同、Host(ip)相同、端口相同的条件，否则访问将被禁止，不满足要求的访问也就被称为跨域访问。 虽然跨域访问被禁止之后，可以在一定程度上提高了应用的安全性，但也为开发带来了一定的麻烦。 跨域解决方案一（推荐） 1.首先...","head":[["meta",{"property":"og:url","content":"https://blog.zwymw.top/posts/other/develop/cross.html"}],["meta",{"property":"og:site_name","content":"荒芜blog"}],["meta",{"property":"og:title","content":"谷歌浏览器跨域问题解决"}],["meta",{"property":"og:description","content":"谷歌浏览器跨域问题解决 访问跨域的原因 访问跨域的原因：同源策略 同源策略是指在浏览器端出于安全考量，向服务端发起请求必须满足：协议相同、Host(ip)相同、端口相同的条件，否则访问将被禁止，不满足要求的访问也就被称为跨域访问。 虽然跨域访问被禁止之后，可以在一定程度上提高了应用的安全性，但也为开发带来了一定的麻烦。 跨域解决方案一（推荐） 1.首先..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://blog.zwymw.top/assets/images/other/develop/cross/explorer_a0KJVMlKsQ.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-03T08:02:46.000Z"}],["meta",{"property":"article:author","content":"荒芜"}],["meta",{"property":"article:published_time","content":"2024-06-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-03T08:02:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"谷歌浏览器跨域问题解决\\",\\"image\\":[\\"https://blog.zwymw.top/assets/images/other/develop/cross/explorer_a0KJVMlKsQ.png\\",\\"https://blog.zwymw.top/assets/images/other/develop/cross/chrome_pqG9Zrncpf.png\\",\\"https://blog.zwymw.top/assets/images/other/develop/cross/chrome_ooP1aSvEDj.png\\",\\"https://blog.zwymw.top/assets/images/other/develop/cross/chrome_JnOgM7SuQe.png\\",\\"https://blog.zwymw.top/assets/images/other/develop/cross/msedge_cteX5PuHFM.png\\",\\"https://blog.zwymw.top/assets/images/other/develop/cross/xEI5GTacRp.png\\"],\\"datePublished\\":\\"2024-06-03T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-03T08:02:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"荒芜\\",\\"url\\":\\"https://blog.zwymw.top\\",\\"email\\":\\"2484068670@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"访问跨域的原因","slug":"访问跨域的原因","link":"#访问跨域的原因","children":[]},{"level":2,"title":"跨域解决方案一（推荐）","slug":"跨域解决方案一-推荐","link":"#跨域解决方案一-推荐","children":[]},{"level":2,"title":"跨域解决方案二","slug":"跨域解决方案二","link":"#跨域解决方案二","children":[]},{"level":2,"title":"跨域解决方案三","slug":"跨域解决方案三","link":"#跨域解决方案三","children":[]}],"git":{"createdTime":1717401766000,"updatedTime":1717401766000,"contributors":[{"name":"荒芜","email":"2484068670@qq.com","commits":1}]},"readingTime":{"minutes":1.11,"words":334},"filePathRelative":"posts/other/develop/cross.md","localizedDate":"2024年6月3日","excerpt":"\\n<h2>访问跨域的原因</h2>\\n<p>访问跨域的原因：同源策略</p>\\n<p>同源策略是指在浏览器端出于安全考量，向服务端发起请求必须满足：协议相同、Host(ip)相同、端口相同的条件，否则访问将被禁止，不满足要求的访问也就被称为跨域访问。</p>\\n<p>虽然跨域访问被禁止之后，可以在一定程度上提高了应用的安全性，但也为开发带来了一定的麻烦。</p>\\n<h2>跨域解决方案一（推荐）</h2>\\n<p>1.首先关闭谷歌浏览器</p>\\n<p>2.创建一个目录，例如我在D盘创建ChromeDevUserData</p>\\n<p>3.在桌面选择谷歌浏览器右键 -&gt; 属性 -&gt; 快捷方式 -&gt; 目标，添加</p>","autoDesc":true}');export{f as comp,v as data};
