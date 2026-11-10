<template>
  <div class="sakura-mascot-card">
    <div class="mascot-avatar-wrapper">
      <svg class="mascot-svg" viewBox="0 0 120 120" width="80" height="80" xmlns="http://www.w3.org/2000/svg">
        <!-- Cute anime school girl avatar SVG -->
        <defs>
          <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#4A3B4E" />
            <stop offset="100%" stop-color="#2D1F30" />
          </linearGradient>
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFF5F0" />
            <stop offset="100%" stop-color="#FFEBE3" />
          </linearGradient>
          <linearGradient id="uniformGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#2B3A4A" />
            <stop offset="100%" stop-color="#1B242E" />
          </linearGradient>
        </defs>

        <!-- Back Hair -->
        <path d="M 30,50 Q 20,85 30,110 Q 60,115 90,110 Q 100,85 90,50 Z" fill="url(#hairGrad)" />

        <!-- Face / Neck -->
        <path d="M 52,70 L 52,82 L 68,82 L 68,70 Z" fill="url(#skinGrad)" />
        <ellipse cx="60" cy="54" rx="26" ry="24" fill="url(#skinGrad)" />

        <!-- School Sailor Uniform (Sailor Collar & Red Bowtie) -->
        <path d="M 40,82 L 80,82 L 95,120 L 25,120 Z" fill="url(#uniformGrad)" />
        <!-- White Inner Collar -->
        <path d="M 50,82 L 60,98 L 70,82 Z" fill="#FFFFFF" />
        <!-- Sailor Flap -->
        <path d="M 42,82 L 32,105 L 48,102 L 56,92 L 64,92 L 72,102 L 88,105 L 78,82 Z" fill="#3A4D63" stroke="#FFF" stroke-width="1.2" />
        <!-- Red Silk Ribbon / Bow -->
        <path d="M 60,94 C 54,92 50,96 52,102 C 54,107 58,104 60,98 C 62,104 66,107 68,102 C 70,96 66,92 60,94 Z" fill="#FF4785" />
        <circle cx="60" cy="95" r="3.5" fill="#FF6B9D" />

        <!-- Blush -->
        <ellipse cx="44" cy="58" rx="4" ry="2.5" fill="#FF9EBE" opacity="0.6" />
        <ellipse cx="76" cy="58" rx="4" ry="2.5" fill="#FF9EBE" opacity="0.6" />

        <!-- Eyes -->
        <!-- Left Eye -->
        <ellipse cx="46" cy="52" rx="4.5" ry="6" fill="#4A2E35" />
        <circle cx="45" cy="50" r="2" fill="#FFF" />
        <circle cx="47.5" cy="54" r="1" fill="#FF9EBE" />
        <path d="M 41,45 Q 46,43 51,46" stroke="#2D1F30" stroke-width="2" fill="none" stroke-linecap="round" />
        
        <!-- Right Eye (Winking or Open) -->
        <ellipse cx="74" cy="52" rx="4.5" ry="6" fill="#4A2E35" />
        <circle cx="73" cy="50" r="2" fill="#FFF" />
        <circle cx="75.5" cy="54" r="1" fill="#FF9EBE" />
        <path d="M 69,46 Q 74,43 79,45" stroke="#2D1F30" stroke-width="2" fill="none" stroke-linecap="round" />

        <!-- Smile Mouth -->
        <path d="M 57,63 Q 60,66 63,63" stroke="#D1667A" stroke-width="1.8" fill="none" stroke-linecap="round" />

        <!-- Front Hair & Bangs -->
        <path d="M 34,42 Q 40,24 60,24 Q 80,24 86,42 Q 78,34 60,34 Q 42,34 34,42 Z" fill="url(#hairGrad)" />
        <!-- Bang Strands -->
        <path d="M 42,34 Q 46,46 48,48 Q 48,42 50,34" fill="url(#hairGrad)" />
        <path d="M 52,34 Q 60,50 62,48 Q 60,40 64,34" fill="url(#hairGrad)" />
        <path d="M 68,34 Q 72,46 76,46 Q 74,40 76,34" fill="url(#hairGrad)" />
        <!-- Side Locks -->
        <path d="M 33,40 Q 30,55 32,70 Q 35,62 36,48 Z" fill="url(#hairGrad)" />
        <path d="M 87,40 Q 90,55 88,70 Q 85,62 84,48 Z" fill="url(#hairGrad)" />

        <!-- Hair Accessory: Sakura Blossom -->
        <g transform="translate(78,32) scale(0.4)">
          <circle cx="0" cy="0" r="14" fill="#FF6B9D" />
          <circle cx="0" cy="0" r="5" fill="#FFF8FA" />
        </g>
      </svg>
    </div>
    <div class="mascot-text-area">
      <div class="mascot-name">
        <span class="mascot-badge">Cyber Sakura Lab</span>
        <strong>樱花极客学妹 · 奈奈 (Nana)</strong>
      </div>
      <p class="mascot-bubble">
        {{ message || '科学上网遇到疑难杂症？翻墙协议搞不懂？别慌，学妹在各个专题都准备了图文拆解便签，跟着教程一步步来就好啦~🌸' }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  message?: string;
}>();
</script>

<style scoped>
.sakura-mascot-card {
  display: flex;
  align-items: center;
  gap: 16px;
  background: linear-gradient(135deg, #FFFDFE, #FFF0F5);
  border: 1px solid #FFD6E7;
  border-radius: 16px;
  padding: 16px 20px;
  margin: 24px 0;
  box-shadow: var(--sakura-shadow-soft);
  position: relative;
  overflow: hidden;
}
.dark .sakura-mascot-card {
  background: linear-gradient(135deg, #181B22, #1F232D);
  border-color: #3A2F37;
}

.mascot-avatar-wrapper {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  background: #FFF8FA;
  border-radius: 50%;
  border: 2px solid #FFD6E7;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(255, 107, 157, 0.2);
}
.dark .mascot-avatar-wrapper {
  background: #141820;
  border-color: #FF7AA8;
}

.mascot-text-area {
  flex: 1;
}

.mascot-name {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14.5px;
  color: var(--vp-c-brand-1);
  margin-bottom: 6px;
}
.mascot-badge {
  font-size: 11px;
  background: #FFEBF2;
  color: #FF4785;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: 700;
  font-family: var(--vp-font-family-mono);
}
.dark .mascot-badge {
  background: rgba(255, 107, 157, 0.2);
  color: #FF9EBE;
}

.mascot-bubble {
  margin: 0;
  font-size: 13.5px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}
</style>
