const __vite__fileDeps=["assets/APlayer.min-CAgWaKXK.js","assets/commonjsHelpers-Cpj98o6Y.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{g as p,h as y,i as v,j as f,u as _,k as h,n as P,r as g,o as A,c as E,a as c,l as w,d as x,_ as k}from"./app-BR0XYLRb.js";const B={class:"music-container"},I=c("div",{id:"musicAPlayer"},null,-1),L=p({__name:"NavMusic",setup(M){let i,a=y([]);const o=v(!1),r=()=>{const t=document.querySelector(".vp-navbar-end");if(!t)return;if(!document.querySelector("#music-btn")){const e=document.createElement("div");e.id="music-btn",e.classList.add("nav-item"),e.innerHTML='<div id="music-icon" class="btnImg"/>',t.appendChild(e)}const s=document.querySelector("#music-btn");s.onclick=e=>{o.value=!o.value,e.stopPropagation()};const n=document.querySelector(".music-container");n.onclick=e=>{e.stopPropagation()}},m=()=>{if(!i)return;const t=document.getElementById("musicAPlayer");if(!t||a.length<1||(l(),t.classList.contains("aplayer")))return;const n=window;n.musicAPlayer=new i({container:document.getElementById("musicAPlayer"),audio:a,lrcType:3,listFolded:!1,listMaxHeight:"324px",mini:!1,fixed:!1,volume:1,storageName:"musicAPlayer"}),n.musicAPlayer.on("play",function(){l()}),n.musicAPlayer.on("pause",function(){l()})},u=()=>{fetch(`https://api.i-meto.com/meting/api?server=netease&type=playlist&id=${10162182605}&r=${Math.random()}`).then(e=>e.json()).then(e=>{e&&e.length>0&&(a=e,console.log(e),m())})},l=()=>{var s,n;const t=window;t.musicAPlayer&&t.musicAPlayer.mode&&(t.musicAPlayer.paused?(s=document.getElementById("music-icon"))==null||s.classList.remove("spin"):(n=document.getElementById("music-icon"))==null||n.classList.add("spin"))},d=()=>{o.value=!1};return f(()=>{const t=_();h(()=>import("./APlayer.min-CAgWaKXK.js").then(s=>s.A),__vite__mapDeps([0,1])).then(s=>{P(()=>{i=s.default,r(),u(),window.document.body.onclick=()=>{o.value=!1}}),t.beforeEach(()=>{setTimeout(()=>{r(),u()},50)})})}),(t,s)=>{const n=g("HopeIcon");return A(),E("div",null,[c("div",B,[c("div",{class:w(["music-box",{hide:!o.value}])},[c("div",{class:"close",onClick:d},[x(n,{icon:"close"})]),I],2)])])}}}),C=k(L,[["__file","NavMusic.vue"]]);export{C as default};
