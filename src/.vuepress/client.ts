import { defineAsyncComponent } from 'vue';
import { defineClientConfig } from "vuepress/client";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";

import 'vuepress-theme-hope/presets/bounce-icon.scss';

import 'vuepress-theme-hope/presets/hr-driving-car.scss'

const NavMusic=defineAsyncComponent(()=>import('./components/NavMusic.vue'))

export default defineClientConfig({
    enhance({ app, router, siteData }) {},
    setup: () => {
      // setupTransparentNavbar({ type: "blog-homepage" });
    },
    rootComponents: [
      NavMusic,
    ],
  });