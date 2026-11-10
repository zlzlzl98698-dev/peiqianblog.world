<template>
  <div class="cyber-observatory-panel">
    <div class="cyber-panel-header">
      <div class="cyber-header-left">
        <span class="cyber-icon">📡</span>
        <strong>{{ title || '网络质量与解锁观测台实测数据' }}</strong>
        <span v-if="testedAt" class="cyber-date">[{{ testedAt }}]</span>
      </div>
      <div class="cyber-header-right">
        <span class="cyber-status-badge operational">● Operational / 实测归档</span>
      </div>
    </div>

    <!-- 节点性能实测表格 -->
    <div v-if="nodes && nodes.length > 0" class="cyber-table-container">
      <table class="cyber-table">
        <thead>
          <tr>
            <th>落地节点</th>
            <th>平均延迟 (RTT)</th>
            <th>下载带宽</th>
            <th>丢包率</th>
            <th>4K流畅度</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="node in nodes" :key="node.name">
            <td class="node-name-cell">
              <span class="node-dot"></span>
              {{ node.name }}
            </td>
            <td class="node-ping">{{ node.ping }}</td>
            <td class="node-speed">
              <div class="speed-bar-wrapper">
                <span class="speed-text">{{ node.speed }}</span>
                <div class="speed-bar-bg">
                  <div class="speed-bar-fill" :style="{ width: node.speedPercent || '85%' }"></div>
                </div>
              </div>
            </td>
            <td>{{ node.loss || '0%' }}</td>
            <td><span class="badge-tag">秒开 4K/8K</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 流媒体与AI解锁矩阵 -->
    <div class="unlock-matrix-grid">
      <div class="matrix-card">
        <div class="matrix-title">🤖 AI 生产力大模型解锁</div>
        <div class="matrix-items">
          <div class="unlock-item pass">
            <span class="check-icon">✅</span>
            <span class="service-name">ChatGPT 4o / o1</span>
            <span class="service-desc">原生IP直连</span>
          </div>
          <div class="unlock-item pass">
            <span class="check-icon">✅</span>
            <span class="service-name">Claude 3.5 Sonnet</span>
            <span class="service-desc">零降级</span>
          </div>
          <div class="unlock-item partial">
            <span class="check-icon">🟡</span>
            <span class="service-name">Google Gemini</span>
            <span class="service-desc">特定节点</span>
          </div>
        </div>
      </div>

      <div class="matrix-card">
        <div class="matrix-title">🎬 4K 超高清流媒体解锁</div>
        <div class="matrix-items">
          <div class="unlock-item pass">
            <span class="check-icon">✅</span>
            <span class="service-name">Netflix 原创剧</span>
            <span class="service-desc">全区非自制</span>
          </div>
          <div class="unlock-item pass">
            <span class="check-icon">✅</span>
            <span class="service-name">Disney+ / HBO Max</span>
            <span class="service-desc">4K HDR</span>
          </div>
          <div class="unlock-item pass">
            <span class="check-icon">✅</span>
            <span class="service-name">YouTube 4K/8K</span>
            <span class="service-desc">高码率稳定</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 测试环境与免责透明声明 -->
    <div class="cyber-footer-note">
      * 观测实验室说明：数据基于指定网络环境（如珠海/上海BGP千兆出口）单次晚高峰实测快照，不代表各地区各运营商永久状态。AI与流媒体解锁策略受服务商风控动态调整，请以实时测速为准。
    </div>
  </div>
</template>

<script setup lang="ts">
interface NodeStat {
  name: string;
  ping: string;
  speed: string;
  loss?: string;
  speedPercent?: string;
}

defineProps<{
  title?: string;
  testedAt?: string;
  nodes?: NodeStat[];
}>();
</script>

<style scoped>
.cyber-header-left {
  display: flex;
  align-items: center;
  gap: 8px;
}
.cyber-date {
  font-size: 11.5px;
  color: #64748B;
}

.cyber-table-container {
  overflow-x: auto;
  margin: 16px 0;
}
.cyber-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}
.cyber-table th {
  background: #1A202C;
  color: #94A3B8;
  text-align: left;
  padding: 10px 14px;
  border-bottom: 1px solid #2D3748;
}
.cyber-table td {
  padding: 10px 14px;
  border-bottom: 1px solid #1E2633;
}
.node-name-cell {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #F1F5F9;
}
.node-dot {
  width: 8px;
  height: 8px;
  background: #10B981;
  border-radius: 50%;
  box-shadow: 0 0 8px #10B981;
}
.node-ping {
  color: #38BDF8;
  font-weight: 600;
}
.node-speed {
  min-width: 160px;
}
.speed-bar-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.speed-text {
  color: #4ADE80;
  font-weight: 700;
  font-size: 12.5px;
}
.speed-bar-bg {
  width: 100%;
  height: 6px;
  background: #2D3748;
  border-radius: 3px;
  overflow: hidden;
}
.speed-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #10B981, #06B6D4);
  border-radius: 3px;
}

.badge-tag {
  background: rgba(56, 189, 248, 0.15);
  color: #38BDF8;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
}

.unlock-matrix-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin-top: 18px;
}
.matrix-card {
  background: #181E29;
  border: 1px solid #283344;
  border-radius: 10px;
  padding: 14px;
}
.matrix-title {
  font-size: 13px;
  font-weight: 700;
  color: #CBD5E1;
  margin-bottom: 12px;
}
.matrix-items {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.unlock-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #11151C;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12.5px;
}
.service-name {
  font-weight: 600;
  color: #E2E8F0;
}
.service-desc {
  font-size: 11px;
  color: #94A3B8;
}

.cyber-footer-note {
  margin-top: 14px;
  font-size: 11px;
  color: #64748B;
  line-height: 1.5;
}
</style>
