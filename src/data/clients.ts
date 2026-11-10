export interface ProxyClient {
  id: string;
  name: string;
  platforms: string[];
  kernel: string;
  features: string[];
  isPaid: boolean;
  sourceUrl: string;
  downloadSource: string;
  description: string;
  recommendedFor: string;
}

export const PROXY_CLIENTS: ProxyClient[] = [
  {
    id: "clash-verge-rev",
    name: "Clash Verge Rev",
    platforms: ["Windows", "macOS", "Linux"],
    kernel: "Mihomo (Meta)",
    features: ["现代化颜值UI", "TUN虚拟网卡模式", "脚本扩展与覆写", "完整规则分流"],
    isPaid: false,
    sourceUrl: "https://github.com/clash-verge-rev/clash-verge-rev",
    downloadSource: "GitHub Releases",
    description: "当前Windows与macOS平台最为推荐的Clash内核图形客户端，界面精致，原生集成Mihomo新一代内核，TUN模式完美接管全系统流量。",
    recommendedFor: "所有Windows与macOS桌面用户首选推荐"
  },
  {
    id: "v2rayn",
    name: "v2rayN",
    platforms: ["Windows", "Linux"],
    kernel: "Xray / sing-box / Mihomo",
    features: ["多内核自由切换", "VLESS-Reality完美支持", "超强节点管理与测速", "自定义路由"],
    isPaid: false,
    sourceUrl: "https://github.com/2dust/v2rayN",
    downloadSource: "GitHub Releases",
    description: "Windows平台历史悠久且维护极度活跃的多协议客户端，支持Xray、sing-box等多核心自由切换，对新协议适配速度行业最快。",
    recommendedFor: "极客、技术进阶者及需要测试复杂节点协议的用户"
  },
  {
    id: "shadowrocket",
    name: "Shadowrocket（小火箭）",
    platforms: ["iOS", "iPadOS"],
    kernel: "自研多协议引擎",
    features: ["扫码一键导入", "按应用规则分流", "请求抓包与分析", "占用极低省电"],
    isPaid: true,
    sourceUrl: "https://apps.apple.com/",
    downloadSource: "美区 App Store（$2.99）",
    description: "iOS平台普及率最高的代理软件，俗称“小火箭”。功能极其成熟稳定，支持扫码和节点订阅，在海外App Store中即可购入。",
    recommendedFor: "所有iPhone / iPad 用户的首选必备工具"
  },
  {
    id: "v2rayng",
    name: "v2rayNG",
    platforms: ["Android"],
    kernel: "Xray-core",
    features: ["分应用代理", "订阅分组管理", "支持剪贴板快速导入", "真连接延迟测试"],
    isPaid: false,
    sourceUrl: "https://github.com/2dust/v2rayNG",
    downloadSource: "GitHub / Google Play",
    description: "安卓手机最成熟稳定的代理工具之一，基于Xray核心开发，支持分应用代理设置，后台常驻极度稳定省电。",
    recommendedFor: "所有安卓手机新手与进阶主力推荐"
  },
  {
    id: "flclash",
    name: "FlClash",
    platforms: ["Windows", "macOS", "Android", "Linux"],
    kernel: "Mihomo (Clash Meta)",
    features: ["Flutter跨平台统一UI", "简约流畅设计", "规则分流支持", "多平台统一体验"],
    isPaid: false,
    sourceUrl: "https://github.com/chen08209/FlClash",
    downloadSource: "GitHub Releases",
    description: "基于Flutter框架打造的现代跨平台Clash客户端，在安卓、桌面全端拥有完全一致的轻巧交互体验。",
    recommendedFor: "喜欢极简审美与跨端统一操作逻辑的用户"
  },
  {
    id: "sing-box",
    name: "sing-box",
    platforms: ["Windows", "macOS", "Linux", "Android", "iOS"],
    kernel: "sing-box 官方核心",
    features: ["新一代极速内核", "内存占用极低", "现代化规则集体系", "跨全平台官方维护"],
    isPaid: false,
    sourceUrl: "https://sing-box.sagernet.org/",
    downloadSource: "官方文档 / GitHub",
    description: "新一代通用代理平台核心，性能优于传统内核数倍，内存占用低，规则集设计现代化，是开源代理内核的发展风向标。",
    recommendedFor: "追求极致性能、软路由集成与底层研究的高阶玩家"
  },
  {
    id: "openclash",
    name: "OpenClash",
    platforms: ["OpenWrt / 软路由"],
    kernel: "Mihomo / Clash Core",
    features: ["全局透明网关", "全屋设备无感翻墙", "游戏主机低延迟NAT", "DNS防污染分流"],
    isPaid: false,
    sourceUrl: "https://github.com/vernesong/OpenClash",
    downloadSource: "GitHub / 软路由软件包",
    description: "运行在OpenWrt路由器上的Clash客户端，配合Mihomo内核可将整家网络一键实现透明分流，Apple TV、PS5无感连接海外。",
    recommendedFor: "软路由、旁路由及全屋智能家居网络改造"
  }
];
