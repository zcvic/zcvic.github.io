import{_ as e,o as n,c as t,f as i}from"./app-CFc1ElOJ.js";const a={},d=i(`<h1 id="ubuntu-docker-安装" tabindex="-1"><a class="header-anchor" href="#ubuntu-docker-安装"><span>Ubuntu Docker 安装</span></a></h1><p>Docker Engine-Community 支持以下的 Ubuntu 版本：</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>Xenial 16.04 (LTS)</p><p>Bionic 18.04 (LTS)</p><p>Cosmic 18.10</p><p>Disco 19.04</p><p>其他更新的版本……</p><p>Docker Engine - Community 支持上 x86_64（或 amd64）armhf，arm64，s390x （IBM Z），和 ppc64le（IBM的Power）架构。</p></div><h2 id="使用官方安装脚本自动安装" tabindex="-1"><a class="header-anchor" href="#使用官方安装脚本自动安装"><span>使用官方安装脚本自动安装</span></a></h2><p>安装命令如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> curl -fsSL https://test.docker.com -o test-docker.sh
 sudo sh test-docker.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="手动安装" tabindex="-1"><a class="header-anchor" href="#手动安装"><span>手动安装</span></a></h2><h3 id="卸载旧版本" tabindex="-1"><a class="header-anchor" href="#卸载旧版本"><span>卸载旧版本</span></a></h3><p>Docker 的旧版本被称为 docker，docker.io 或 docker-engine 。如果已安装，请卸载它们：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> sudo apt-get remove docker docker-engine docker.io containerd runc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当前称为 Docker Engine-Community 软件包 docker-ce 。</p><p>安装 Docker Engine-Community，以下介绍两种方式。</p><h3 id="使用-docker-仓库进行安装" tabindex="-1"><a class="header-anchor" href="#使用-docker-仓库进行安装"><span>使用 Docker 仓库进行安装</span></a></h3><p>在新主机上首次安装 Docker Engine-Community 之前，需要设置 Docker 仓库。之后，您可以从仓库安装和更新 Docker 。</p><h3 id="设置仓库" tabindex="-1"><a class="header-anchor" href="#设置仓库"><span>设置仓库</span></a></h3><p>更新 apt 包索引。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> sudo apt-get update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装 apt 依赖包，用于通过HTTPS来获取仓库:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> sudo apt-get install \\
    apt-transport-https \\
    ca-certificates \\
    curl \\
    gnupg-agent \\
    software-properties-common
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加 Docker 的官方 GPG 密钥：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ curl -fsSL https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C 0EBF CD88 通过搜索指纹的后8个字符，验证您现在是否拥有带有指纹的密钥。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ sudo apt-key fingerprint 0EBFCD88
   
pub   rsa4096 2017-02-22 [SCEA]
      9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
uid           [ unknown] Docker Release (CE deb) &lt;docker@docker.com&gt;
sub   rsa4096 2017-02-22 [S]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用以下指令设置稳定版仓库</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ sudo add-apt-repository \\
   &quot;deb [arch=amd64] https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu/ \\
  $(lsb_release -cs) \\
  stable&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-docker-engine-community" tabindex="-1"><a class="header-anchor" href="#安装-docker-engine-community"><span>安装 Docker Engine-Community</span></a></h3><p>更新 apt 包索引。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ sudo apt-get update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装最新版本的 Docker Engine-Community 和 containerd ，或者转到下一步安装特定版本：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ sudo apt-get install docker-ce docker-ce-cli containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要安装特定版本的 Docker Engine-Community，请在仓库中列出可用版本，然后选择一种安装。列出您的仓库中可用的版本：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ apt-cache madison docker-ce

  docker-ce | 5:18.09.1~3-0~ubuntu-xenial | https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu  xenial/stable amd64 Packages
  docker-ce | 5:18.09.0~3-0~ubuntu-xenial | https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu  xenial/stable amd64 Packages
  docker-ce | 18.06.1~ce~3-0~ubuntu       | https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu  xenial/stable amd64 Packages
  docker-ce | 18.06.0~ce~3-0~ubuntu       | https://mirrors.ustc.edu.cn/docker-ce/linux/ubuntu  xenial/stable amd64 Packages
  ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用第二列中的版本字符串安装特定版本，例如 5:18.09.1<sub>3-0</sub>ubuntu-xenial。</p><p>$ sudo apt-get install docker-ce=&lt;VERSION_STRING&gt; docker-ce-cli=&lt;VERSION_STRING&gt; containerd.io 测试 Docker 是否安装成功，输入以下指令，打印出以下信息则安装成功:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ sudo docker run hello-world

Unable to find image &#39;hello-world:latest&#39; locally
latest: Pulling from library/hello-world
1b930d010525: Pull complete                                                                                                                                  Digest: sha256:c3b4ada4687bbaa170745b3e4dd8ac3f194ca95b2d0518b417fb47e5879d9b5f
Status: Downloaded newer image for hello-world:latest


Hello from Docker!
This message shows that your installation appears to be working correctly.


To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the &quot;hello-world&quot; image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.


To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash


Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/


For more examples and ideas, visit:
 https://docs.docker.com/get-started/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-shell-脚本进行安装" tabindex="-1"><a class="header-anchor" href="#使用-shell-脚本进行安装"><span>使用 Shell 脚本进行安装</span></a></h2><p>Docker 在 get.docker.com 和 test.docker.com 上提供了方便脚本，用于将快速安装 Docker Engine-Community 的边缘版本和测试版本。脚本的源代码在 docker-install 仓库中。 不建议在生产环境中使用这些脚本，在使用它们之前，您应该了解潜在的风险：</p><p>脚本需要运行 root 或具有 sudo 特权。因此，在运行脚本之前，应仔细检查和审核脚本。</p><p>这些脚本尝试检测 Linux 发行版和版本，并为您配置软件包管理系统。此外，脚本不允许您自定义任何安装参数。从 Docker 的角度或您自己组织的准则和标准的角度来看，这可能导致不支持的配置。</p><p>这些脚本将安装软件包管理器的所有依赖项和建议，而无需进行确认。这可能会安装大量软件包，具体取决于主机的当前配置。</p><p>该脚本未提供用于指定要安装哪个版本的 Docker 的选项，而是安装了在 edge 通道中发布的最新版本。</p><p>如果已使用其他机制将 Docker 安装在主机上，请不要使用便捷脚本。</p><p>本示例使用 get.docker.com 上的脚本在 Linux 上安装最新版本的Docker Engine-Community。要安装最新的测试版本，请改用 test.docker.com。在下面的每个命令，取代每次出现 get 用 test。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ curl -fsSL https://get.docker.com -o get-docker.sh
$ sudo sh get-docker.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要使用 Docker 作为非 root 用户，则应考虑使用类似以下方式将用户添加到 docker 组：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ sudo usermod -aG docker your-user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>卸载 docker 删除安装包：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo apt-get purge docker-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除镜像、容器、配置文件等内容：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo rm -rf /var/lib/docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,50),s=[d];function r(l,c){return n(),t("div",null,s)}const u=e(a,[["render",r],["__file","dockerInstall.html.vue"]]),m=JSON.parse('{"path":"/posts/other/docker/dockerInstall.html","title":"Ubuntu Docker 安装","lang":"zh-CN","frontmatter":{"icon":"docker","date":"2024-05-25T00:00:00.000Z","category":["docker"],"description":"Ubuntu Docker 安装 Docker Engine-Community 支持以下的 Ubuntu 版本： 相关信息 Xenial 16.04 (LTS) Bionic 18.04 (LTS) Cosmic 18.10 Disco 19.04 其他更新的版本…… Docker Engine - Community 支持上 x86_64（或 am...","head":[["meta",{"property":"og:url","content":"https://blog.zwymw.top/posts/other/docker/dockerInstall.html"}],["meta",{"property":"og:site_name","content":"荒芜"}],["meta",{"property":"og:title","content":"Ubuntu Docker 安装"}],["meta",{"property":"og:description","content":"Ubuntu Docker 安装 Docker Engine-Community 支持以下的 Ubuntu 版本： 相关信息 Xenial 16.04 (LTS) Bionic 18.04 (LTS) Cosmic 18.10 Disco 19.04 其他更新的版本…… Docker Engine - Community 支持上 x86_64（或 am..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-12T02:18:59.000Z"}],["meta",{"property":"article:author","content":"荒芜"}],["meta",{"property":"article:published_time","content":"2024-05-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-12T02:18:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Ubuntu Docker 安装\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-25T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-12T02:18:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"荒芜\\",\\"url\\":\\"https://blog.zwymw.top\\",\\"email\\":\\"2484068670@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"使用官方安装脚本自动安装","slug":"使用官方安装脚本自动安装","link":"#使用官方安装脚本自动安装","children":[]},{"level":2,"title":"手动安装","slug":"手动安装","link":"#手动安装","children":[{"level":3,"title":"卸载旧版本","slug":"卸载旧版本","link":"#卸载旧版本","children":[]},{"level":3,"title":"使用 Docker 仓库进行安装","slug":"使用-docker-仓库进行安装","link":"#使用-docker-仓库进行安装","children":[]},{"level":3,"title":"设置仓库","slug":"设置仓库","link":"#设置仓库","children":[]},{"level":3,"title":"安装 Docker Engine-Community","slug":"安装-docker-engine-community","link":"#安装-docker-engine-community","children":[]}]},{"level":2,"title":"使用 Shell 脚本进行安装","slug":"使用-shell-脚本进行安装","link":"#使用-shell-脚本进行安装","children":[]}],"git":{"createdTime":1716706882000,"updatedTime":1718158739000,"contributors":[{"name":"荒芜","email":"2484068670@qq.com","commits":2}]},"readingTime":{"minutes":3.94,"words":1182},"filePathRelative":"posts/other/docker/dockerInstall.md","localizedDate":"2024年5月25日","excerpt":"\\n<p>Docker Engine-Community 支持以下的 Ubuntu 版本：</p>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">相关信息</p>\\n<p>Xenial 16.04 (LTS)</p>\\n<p>Bionic 18.04 (LTS)</p>\\n<p>Cosmic 18.10</p>\\n<p>Disco 19.04</p>\\n<p>其他更新的版本……</p>\\n<p>Docker Engine - Community 支持上 x86_64（或 amd64）armhf，arm64，s390x （IBM Z），和 ppc64le（IBM的Power）架构。</p>\\n</div>","autoDesc":true}');export{u as comp,m as data};