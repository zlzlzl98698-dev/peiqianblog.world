import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import type { Theme } from 'vitepress';
import './custom.css';

import SakuraRain from './components/SakuraRain.vue';
import StickyNote from './components/StickyNote.vue';
import BrandCard from './components/BrandCard.vue';
import SpeedMatrix from './components/SpeedMatrix.vue';

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 插入樱花飘落画布到页面底层
      'layout-bottom': () => h(SakuraRain)
    });
  },
  enhanceApp({ app }) {
    app.component('SakuraRain', SakuraRain);
    app.component('StickyNote', StickyNote);
    app.component('BrandCard', BrandCard);
    app.component('SpeedMatrix', SpeedMatrix);
  }
} satisfies Theme;
