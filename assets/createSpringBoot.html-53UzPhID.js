import{_ as p,r as e,o,c as i,a as n,b as a,d as t,e as c}from"./app-CJSfxXXa.js";const l="/assets/images/code/end/java/createSpringBoot/msedge_ZUHHNquBvS.png",u="/assets/images/code/end/java/createSpringBoot/idea64_gv48Qtz4Vi.png",r="/assets/images/code/end/java/createSpringBoot/idea64_XTHXwkOWDL.png",g="/assets/images/code/end/java/createSpringBoot/idea64_3JvPWBLSYq.png",d="/assets/images/code/end/java/createSpringBoot/idea64_NT0EtpGEbA.png",k="/assets/images/code/end/java/createSpringBoot/msedge_AXs5SktKWk.png",m={},v=n("h1",{id:"springboot项目创建",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#springboot项目创建"},[n("span",null,"SpringBoot项目创建")])],-1),b=n("h2",{id:"在线创建",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#在线创建"},[n("span",null,"在线创建")])],-1),x={href:"https://start.spring.io/",target:"_blank",rel:"noopener noreferrer"},h=n("ul",null,[n("li",null,"选择开发语言，版本号，填写项目名，打包方式，指定 Java 版本等，点击 GENERATE，网站自动生成并下载 SpringBoot 项目"),n("li",null,"解压下载的文件，用开发工具打开即可。")],-1),f=c('<figure><img src="'+l+'" alt="spring initializr" tabindex="0" loading="lazy"><figcaption>spring initializr</figcaption></figure><h2 id="通过maven创建" tabindex="-1"><a class="header-anchor" href="#通过maven创建"><span><strong>通过Maven创建</strong></span></a></h2><p>选择Maven</p><p>设置组ID和工件ID（可省略）</p><figure><img src="'+u+`" alt="Maven" tabindex="0" loading="lazy"><figcaption>Maven</figcaption></figure><p>在pom.xml 文件中引入：</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">org.springframework.boot</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">spring-boot-starter-parent</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">2.7.18</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">org.springframework.boot</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">spring-boot-starter-web</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整的pom.xml:</p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">4.0.0</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">

    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">top.zwymw</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">test</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">1.0-SNAPSHOT</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">

    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">org.springframework.boot</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">spring-boot-starter-parent</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">2.7.18</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">

    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">org.springframework.boot</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">spring-boot-starter-web</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">

</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加软件包和启动类</p><figure><img src="`+r+`" alt="软件包和启动类" tabindex="0" loading="lazy"><figcaption>软件包和启动类</figcaption></figure><p>编写启动类<code>TestApplication</code></p><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">package</span> top<span class="token punctuation">.</span>zwymw<span class="token punctuation">;</span>

<span class="token keyword">import</span> org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>SpringApplication<span class="token punctuation">;</span>
<span class="token keyword">import</span> org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span>SpringBootApplication<span class="token punctuation">;</span>

@SpringBootApplication
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestApplication</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token parameter">String<span class="token punctuation">[</span><span class="token punctuation">]</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        SpringApplication<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>TestApplication<span class="token punctuation">.</span>class<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加一个测试Controller<code>TestController</code></p><figure><img src="`+g+`" alt="Controller" tabindex="0" loading="lazy"><figcaption>Controller</figcaption></figure><div class="language-jsx line-numbers-mode" data-ext="jsx" data-title="jsx"><pre class="language-jsx"><code><span class="token keyword">package</span> top<span class="token punctuation">.</span>zwymw<span class="token punctuation">.</span>test<span class="token punctuation">.</span>controller<span class="token punctuation">;</span>

<span class="token keyword">import</span> org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>RequestMapping<span class="token punctuation">;</span>
<span class="token keyword">import</span> org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span>RestController<span class="token punctuation">;</span>

@RestController
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestController</span> <span class="token punctuation">{</span>
    @<span class="token function">RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/test&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> String <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;测试&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动<code>TestApplication</code> 中的<code>main</code> 方法</p><figure><img src="`+d+'" alt="启动" tabindex="0" loading="lazy"><figcaption>启动</figcaption></figure><p>如上所示，启动成功，默认在8080端口</p>',19),_={href:"http://localhost:8080/test",target:"_blank",rel:"noopener noreferrer"},w=n("figure",null,[n("img",{src:k,alt:"启动成功",tabindex:"0",loading:"lazy"}),n("figcaption",null,"启动成功")],-1),y=n("p",null,"创建成功",-1);function S(B,j){const s=e("ExternalLinkIcon");return o(),i("div",null,[v,b,n("ul",null,[n("li",null,[a("官方推荐方式： "),n("a",x,[a("spring initializr"),t(s)]),h])]),f,n("p",null,[a("打开"),n("a",_,[a("localhost:8080/test"),t(s)])]),w,y])}const q=p(m,[["render",S],["__file","createSpringBoot.html.vue"]]),T=JSON.parse('{"path":"/posts/code/end/java/createSpringBoot.html","title":"SpringBoot项目创建","lang":"zh-CN","frontmatter":{"icon":"SpringBoot","date":"2024-06-08T00:00:00.000Z","category":["java"],"tag":["SpringBoot"],"description":"SpringBoot项目创建 在线创建 官方推荐方式： spring initializr 选择开发语言，版本号，填写项目名，打包方式，指定 Java 版本等，点击 GENERATE，网站自动生成并下载 SpringBoot 项目 解压下载的文件，用开发工具打开即可。 spring initializrspring initializr 通过Maven...","head":[["meta",{"property":"og:url","content":"https://blog.zwymw.top/posts/code/end/java/createSpringBoot.html"}],["meta",{"property":"og:site_name","content":"荒芜blog"}],["meta",{"property":"og:title","content":"SpringBoot项目创建"}],["meta",{"property":"og:description","content":"SpringBoot项目创建 在线创建 官方推荐方式： spring initializr 选择开发语言，版本号，填写项目名，打包方式，指定 Java 版本等，点击 GENERATE，网站自动生成并下载 SpringBoot 项目 解压下载的文件，用开发工具打开即可。 spring initializrspring initializr 通过Maven..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://blog.zwymw.top/assets/images/code/end/java/createSpringBoot/msedge_ZUHHNquBvS.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-08T12:34:46.000Z"}],["meta",{"property":"article:author","content":"荒芜"}],["meta",{"property":"article:tag","content":"SpringBoot"}],["meta",{"property":"article:published_time","content":"2024-06-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-08T12:34:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot项目创建\\",\\"image\\":[\\"https://blog.zwymw.top/assets/images/code/end/java/createSpringBoot/msedge_ZUHHNquBvS.png\\",\\"https://blog.zwymw.top/assets/images/code/end/java/createSpringBoot/idea64_gv48Qtz4Vi.png\\",\\"https://blog.zwymw.top/assets/images/code/end/java/createSpringBoot/idea64_XTHXwkOWDL.png\\",\\"https://blog.zwymw.top/assets/images/code/end/java/createSpringBoot/idea64_3JvPWBLSYq.png\\",\\"https://blog.zwymw.top/assets/images/code/end/java/createSpringBoot/idea64_NT0EtpGEbA.png\\",\\"https://blog.zwymw.top/assets/images/code/end/java/createSpringBoot/msedge_AXs5SktKWk.png\\"],\\"datePublished\\":\\"2024-06-08T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-08T12:34:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"荒芜\\",\\"url\\":\\"https://blog.zwymw.top\\",\\"email\\":\\"2484068670@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"在线创建","slug":"在线创建","link":"#在线创建","children":[]},{"level":2,"title":"通过Maven创建","slug":"通过maven创建","link":"#通过maven创建","children":[]}],"git":{"createdTime":1717850086000,"updatedTime":1717850086000,"contributors":[{"name":"荒芜","email":"2484068670@qq.com","commits":1}]},"readingTime":{"minutes":1.08,"words":324},"filePathRelative":"posts/code/end/java/createSpringBoot.md","localizedDate":"2024年6月8日","excerpt":"\\n<h2>在线创建</h2>\\n<ul>\\n<li>官方推荐方式：&nbsp;<a href=\\"https://start.spring.io/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">spring initializr</a>\\n<ul>\\n<li>选择开发语言，版本号，填写项目名，打包方式，指定 Java 版本等，点击 GENERATE，网站自动生成并下载 SpringBoot 项目</li>\\n<li>解压下载的文件，用开发工具打开即可。</li>\\n</ul>\\n</li>\\n</ul>\\n<figure><img src=\\"/assets/images/code/end/java/createSpringBoot/msedge_ZUHHNquBvS.png\\" alt=\\"spring initializr\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>spring initializr</figcaption></figure>","autoDesc":true}');export{q as comp,T as data};
