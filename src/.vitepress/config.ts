import { defineConfig } from 'vitepress';

export default defineConfig({
  title: "赔钱博客",
  titleTemplate: ":title · 赔钱博客 peiqianblog.world",
  description: "2026 稳定机场推荐与梯子测速实验室 - 42家机场深度客观评测、流媒体与AI解锁实测、全平台客户端教程及科学上网蜂巢知识图谱。",
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,

  // 自动生成 sitemap.xml
  sitemap: {
    hostname: 'https://peiqianblog.world'
  },

  head: [
    ['link', { rel: 'icon', href: '/images/avatar/avatar.jpg', type: 'image/jpeg' }],
    ['meta', { name: 'author', content: '赔钱博客 樱花校园极客部' }],
    ['meta', { name: 'keywords', content: '2026机场推荐,稳定梯子推荐,光速云,暮光加速,飞猫云,微风网络,IPLC专线,IEPL物理专线,VLESS,ChatGPT节点,Netflix 4K机场,Clash Verge Rev下载,Shadowrocket教程' }],
    ['meta', { name: 'theme-color', content: '#FF6B9D' }],
    ['meta', { property: 'og:site_name', content: '赔钱博客' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: '赔钱博客',
        url: 'https://peiqianblog.world',
        description: '2026 稳定机场推荐与科学上网可观测性知识图谱实验室',
        publisher: {
          '@type': 'Organization',
          name: '赔钱博客 Cyber Sakura Lab',
          logo: 'https://peiqianblog.world/images/avatar/sakura-logo.svg'
        }
      })
    ]
  ],

  themeConfig: {
    siteTitle: '🌸 赔钱博客',
    logo: '/images/avatar/avatar.jpg',

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索机场 / 客户端 / 教程',
                buttonAriaLabel: '搜索'
              },
              modal: {
                noResultsText: '无法找到相关评测或指南',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },

    nav: [
      { text: '🌸 首页', link: '/' },
      {
        text: '✈️ 机场选型与评测',
        items: [
          { text: '🏆 2026 梯子推荐与红黑榜', link: '/topics/ranking-guide' },
          { text: '🧪 42 家机场实测品牌库', link: '/topics/airport-brands' },
          { text: '💰 极限平价 5.6 元档横评', link: '/topics/ranking-guide#cheap-airports' },
          { text: '🛡️ 晚高峰零丢包物理专线', link: '/topics/ranking-guide#iplc-iepl-stable' }
        ]
      },
      {
        text: '💻 客户端与配置',
        items: [
          { text: '📥 全平台客户端总库', link: '/topics/clients-hub' },
          { text: '🪟 Clash Verge Rev 电脑版', link: '/clients/clash-verge-rev' },
          { text: '🍎 Shadowrocket 小火箭教程', link: '/clients/shadowrocket' },
          { text: '⚡ v2rayN 极客配置教程', link: '/clients/v2rayn' },
          { text: '🌐 OpenClash 软路由透明代理', link: '/clients/openclash' }
        ]
      },
      {
        text: '🔬 协议原理与专线',
        items: [
          { text: '📚 协议原理与专线科普支柱', link: '/topics/protocols-network' },
          { text: '⚡ IPLC 与 IEPL 专线全景拆解', link: '/topics/protocols-network#iplc-vs-iepl' },
          { text: '🛡️ VLESS 与 Reality 协议机制', link: '/topics/protocols-network#vless-reality' },
          { text: '🚀 Hysteria 2 恶劣弱网对抗', link: '/topics/protocols-network#hysteria2' }
        ]
      },
      {
        text: '🌍 场景与出海运营',
        items: [
          { text: '🤖 ChatGPT / Claude AI 专线', link: '/topics/ai-productivity' },
          { text: '🎬 4K 流媒体与 TikTok 跨境', link: '/topics/streaming-overseas' }
        ]
      },
      { text: '✨ 光速云评测（主推）', link: '/brands/guangsu' }
    ],

    sidebar: {
      '/clients/': [
        {
          text: '📥 核心客户端详细教程',
          collapsed: false,
          items: [
            { text: 'Clash Verge Rev 电脑版', link: '/clients/clash-verge-rev' },
            { text: 'Shadowrocket 小火箭教程', link: '/clients/shadowrocket' },
            { text: 'v2rayN 极客配置教程', link: '/clients/v2rayn' },
            { text: 'OpenClash 软路由透明代理', link: '/clients/openclash' }
          ]
        },
        {
          text: '📚 综合导航',
          items: [
            { text: '返回全平台客户端总库', link: '/topics/clients-hub' },
            { text: '查看 2026 梯子排行榜', link: '/topics/ranking-guide' }
          ]
        }
      ],
      '/topics/': [
        {
          text: '📌 六大核心专题支柱',
          collapsed: false,
          items: [
            { text: '🏆 专题 A：2026 梯子推荐与红黑榜', link: '/topics/ranking-guide' },
            { text: '🧪 专题 B：42 家机场品牌库实测', link: '/topics/airport-brands' },
            { text: '📥 专题 C：代理客户端全平台下载', link: '/topics/clients-hub' },
            { text: '🔬 专题 D：翻墙协议与物理专线科普', link: '/topics/protocols-network' },
            { text: '🤖 专题 E：ChatGPT / AI 生产力专线', link: '/topics/ai-productivity' },
            { text: '🎬 专题 F：4K 流媒体与跨境出海生态', link: '/topics/streaming-overseas' }
          ]
        },
        {
          text: '🔥 核心品牌评测直达',
          collapsed: false,
          items: [
            { text: '🥇 光速云（主推第一·IEPL双专线）', link: '/brands/guangsu' },
            { text: '🥈 飞猫云（免配置开箱即用）', link: '/brands/feimao' },
            { text: '🥉 暮光加速（BGP智能调度）', link: '/brands/muguang' },
            { text: '⭐ 微风网络（高性价比IEPL专线）', link: '/brands/weifeng' }
          ]
        }
      ],
      '/brands/': [
        {
          text: '🏆 核心主推前十梯队',
          collapsed: false,
          items: [
            { text: '🥇 01. 光速云 (主推第一)', link: '/brands/guangsu' },
            { text: '🥈 02. 暮光加速', link: '/brands/muguang' },
            { text: '🥉 03. 飞猫云', link: '/brands/feimao' },
            { text: '04. 微风网络', link: '/brands/weifeng' },
            { text: '05. 大佬云', link: '/brands/dalaoyun' },
            { text: '06. 星岛梦', link: '/brands/xingdaomeng' },
            { text: '07. 二猫云', link: '/brands/ermao' },
            { text: '08. 无忧链接', link: '/brands/wuyou' },
            { text: '09. 唯兔云', link: '/brands/weitu' },
            { text: '10. Firefly', link: '/brands/firefly' }
          ]
        },
        {
          text: '⚡ 优质专线与高性价比 (11-28)',
          collapsed: true,
          items: [
            { text: '11. 宇宙云', link: '/brands/yuzhou' },
            { text: '12. U1S1 (2000Mbps)', link: '/brands/u1s1' },
            { text: '13. 灵猫网络', link: '/brands/lingmao' },
            { text: '14. 极连云', link: '/brands/jilian' },
            { text: '15. 光年梯', link: '/brands/guangnian' },
            { text: '16. 一翻云 (原生住宅IP)', link: '/brands/yifan' },
            { text: '17. SOGO云 (15国覆盖)', link: '/brands/sogo' },
            { text: '18. 可信云', link: '/brands/kexin' },
            { text: '19. 速界 (AI大模型专属)', link: '/brands/sujie' },
            { text: '20. 闪跃', link: '/brands/shanyue' },
            { text: '21. 全球云', link: '/brands/quanqiu' },
            { text: '22. 闪电鼠 (5.6元档)', link: '/brands/shandianshu' },
            { text: '23. 云界线', link: '/brands/yunjiexian' },
            { text: '24. 榴莲云', link: '/brands/liulianyun' },
            { text: '25. 神行加速', link: '/brands/shenxing' },
            { text: '26. 环球梯', link: '/brands/huanqiuti' },
            { text: '27. 隐形人', link: '/brands/yinxingren' },
            { text: '28. 梯子云 (一键小白登录)', link: '/brands/tiziyun' }
          ]
        },
        {
          text: '🌐 国际化与老牌高阶 (29-42)',
          collapsed: true,
          items: [
            { text: '29. WgetCloud', link: '/brands/wgetcloud' },
            { text: '30. 白月光', link: '/brands/baiyueguang' },
            { text: '31. FlyingBird (飞鸟)', link: '/brands/flyingbird' },
            { text: '32. CyberGuard', link: '/brands/cyberguard' },
            { text: '33. 龙猫云', link: '/brands/longmaoyun' },
            { text: '34. FATCAT (肥猫云)', link: '/brands/fatcat' },
            { text: '35. TNTCloud', link: '/brands/tntcloud' },
            { text: '36. 青云梯', link: '/brands/qingyunti' },
            { text: '37. 山水云', link: '/brands/shanshuiyun' },
            { text: '38. 灵动云', link: '/brands/lingdongyun' },
            { text: '39. 浪网', link: '/brands/langwang' },
            { text: '40. EdgeNova', link: '/brands/edgenova' },
            { text: '41. 萤火虫', link: '/brands/yinghuochong' },
            { text: '42. sslar', link: '/brands/sslar' }
          ]
        },
        {
          text: '📚 综合专题导航',
          items: [
            { text: '返回 42 家机场品牌库', link: '/topics/airport-brands' },
            { text: '查看 2026 梯子排行榜', link: '/topics/ranking-guide' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],

    footer: {
      message: '🌸 赔钱博客 peiqianblog.world · 樱花校园极客部（Cyber Sakura Lab）权威出品',
      copyright: 'Copyright © 2020-2026 赔钱博客. All Rights Reserved. 包含推广链接声明：通过本站链接注册可能为维护团队带来少许服务器佣金，绝不影响用户实际支付价格与优惠折扣。'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    outline: {
      level: [2, 3],
      label: '🌸 页面知识目录'
    },

    darkModeSwitchLabel: '主题色彩',
    lightModeSwitchTitle: '切换到浅色樱花模式',
    darkModeSwitchTitle: '切换到夜间极客模式',
    returnToTopLabel: '返回顶部'
  }
});
