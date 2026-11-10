<template>
  <div class="sakura-sticky-card">
    <div v-if="title" class="sticky-title">
      <span class="sticker-emoji">{{ emoji || '📌' }}</span>
      <span class="sticker-text">{{ title }}</span>
    </div>
    <div class="sticky-body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  emoji?: string;
}>();
</script>

<style scoped>
.sticky-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 15px;
  color: var(--vp-c-brand-1);
  margin-bottom: 8px;
}
.sticker-emoji {
  font-size: 16px;
}
.sticky-body {
  font-size: 14.5px;
  line-height: 1.7;
  color: var(--vp-c-text-1);
}
</style>
