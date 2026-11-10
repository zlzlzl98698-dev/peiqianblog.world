<template>
  <div class="brand-card-box" :class="{ 'is-promoted': brand.rank <= 3 }">
    <div class="card-top-row">
      <div class="card-brand-meta">
        <span class="rank-badge" :class="'rank-' + brand.rank">#{{ brand.rank }}</span>
        <h3 class="brand-title">
          <a :href="'/brands/' + brand.slug">{{ brand.name }}</a>
        </h3>
        <span class="status-indicator" :class="brand.dataStatus">
          {{ brand.dataStatus === 'measured' ? '🟢 实验室实测' : (brand.dataStatus === 'vendor' ? '🟡 官方规格' : '⚪ 待核验') }}
        </span>
      </div>
      <div class="card-price-tag">
        <span class="price-val">{{ brand.minPrice }}</span>
      </div>
    </div>

    <div class="tags-row">
      <span v-for="tag in brand.tags" :key="tag" class="sakura-tag">{{ tag }}</span>
    </div>

    <p class="brand-summary">{{ brand.summary }}</p>

    <div class="specs-grid">
      <div class="spec-item">
        <span class="spec-label">线路架构:</span>
        <span class="spec-value">{{ brand.lineType }}</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">核心协议:</span>
        <span class="spec-value">{{ brand.protocol }}</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">设备限制:</span>
        <span class="spec-value">{{ brand.devices }}</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">流媒体/AI:</span>
        <span class="spec-value">{{ brand.streaming }}</span>
      </div>
    </div>

    <div class="card-footer-row">
      <div class="coupon-box" v-if="brand.coupon && brand.coupon !== '无' && brand.coupon !== '待核实'">
        <span class="coupon-label">优惠码:</span>
        <code class="coupon-code">{{ brand.coupon }}</code>
      </div>
      <div class="actions-group">
        <a :href="'/brands/' + brand.slug" class="review-btn">
          📖 查看实测评测
        </a>
        <a
          :href="brand.affiliateUrl"
          target="_blank"
          rel="nofollow sponsored noopener"
          class="sakura-btn-cta affiliate-btn"
        >
          直达官网注册 ↗
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AirportBrand } from '../../data/brands';

defineProps<{
  brand: AirportBrand;
}>();
</script>

<style scoped>
.brand-card-box {
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-border);
  border-radius: 16px;
  padding: 22px 24px;
  margin: 20px 0;
  box-shadow: var(--sakura-shadow-soft);
  transition: all 0.25s ease;
  position: relative;
}
.brand-card-box:hover {
  transform: translateY(-3px);
  box-shadow: var(--sakura-shadow-hover);
  border-color: var(--vp-c-brand-1);
}
.brand-card-box.is-promoted {
  border-top: 4px solid var(--vp-c-brand-1);
}

.card-top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}
.card-brand-meta {
  display: flex;
  align-items: center;
  gap: 10px;
}
.rank-badge {
  font-size: 13px;
  font-weight: 800;
  padding: 3px 9px;
  border-radius: 8px;
  background: #FFEBF2;
  color: #FF4785;
}
.rank-badge.rank-1 {
  background: #FFD700;
  color: #8B6508;
}
.rank-badge.rank-2 {
  background: #E5E7EB;
  color: #374151;
}
.rank-badge.rank-3 {
  background: #FED7AA;
  color: #9A3412;
}

.brand-title {
  margin: 0 !important;
  padding: 0 !important;
  font-size: 20px !important;
  font-weight: 800;
}
.brand-title a {
  color: var(--vp-c-text-1) !important;
  text-decoration: none !important;
}
.brand-title a:hover {
  color: var(--vp-c-brand-1) !important;
}

.status-indicator {
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: 600;
}
.status-indicator.measured {
  background: rgba(16, 185, 129, 0.12);
  color: #059669;
}
.status-indicator.vendor {
  background: rgba(245, 158, 11, 0.12);
  color: #D97706;
}
.status-indicator.review-required {
  background: rgba(156, 163, 175, 0.15);
  color: #6B7280;
}

.card-price-tag .price-val {
  font-size: 15px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
  padding: 4px 12px;
  border-radius: 20px;
}

.tags-row {
  margin: 12px 0 8px 0;
}

.brand-summary {
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 8px 0 16px 0;
}

.specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 8px 16px;
  background: var(--vp-c-bg-alt);
  padding: 14px 18px;
  border-radius: 10px;
  font-size: 13px;
  margin-bottom: 18px;
}
.spec-item {
  display: flex;
  gap: 6px;
  align-items: baseline;
}
.spec-label {
  color: var(--vp-c-text-3);
  font-weight: 600;
  white-space: nowrap;
}
.spec-value {
  color: var(--vp-c-text-1);
  font-weight: 500;
}

.card-footer-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}
.coupon-box {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
}
.coupon-label {
  color: var(--vp-c-text-3);
}
.coupon-code {
  background: #FFEBF2;
  color: #FF4785;
  padding: 2px 8px;
  border-radius: 4px;
  font-family: var(--vp-font-family-mono);
  font-weight: 700;
}
.dark .coupon-code {
  background: rgba(255, 107, 157, 0.2);
  color: #FF9EBE;
}

.actions-group {
  display: flex;
  align-items: center;
  gap: 10px;
}
.review-btn {
  font-size: 13.5px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid var(--vp-c-border);
  text-decoration: none;
  transition: all 0.2s ease;
}
.review-btn:hover {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
}
.affiliate-btn {
  font-size: 13.5px !important;
  padding: 8px 18px !important;
}
</style>
