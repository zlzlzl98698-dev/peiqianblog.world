<template>
  <div class="sakura-mascot-card">
    <div class="mascot-avatar-wrapper">
      <img src="/images/avatar/avatar.jpg" alt="樱花极客学妹 · 奈奈" class="mascot-img" />
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
  width: 76px;
  height: 76px;
  background: #FFF8FA;
  border-radius: 50%;
  border: 3px solid #FFD6E7;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(255, 107, 157, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
}
.mascot-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
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
