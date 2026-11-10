import { defineConfig } from 'vitepress';

export default defineConfig({
  title: "赔钱博客",
  titleTemplate: ":title · 赔钱博客 peiqianblog.world",
  description: "2026 稳定机场推荐与梯子测速实验室 - 42家机场深度客观评测、流媒体与AI解锁实测、全平台客户端教程及科学上网蜂巢知识图谱。",
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  appearance: 'dark',

  transformHead({ pageData }) {
    const cleanPath = pageData.relativePath === 'index.md'
      ? ''
      : pageData.relativePath.replace(/\.md$/, '').replace(/\/index$/, '');
    const canonicalUrl = cleanPath ? `https://peiqianblog.world/${cleanPath}` : 'https://peiqianblog.world/';

    const head: any[] = [
      ['link', { rel: 'canonical', href: canonicalUrl }],
      ['meta', { property: 'og:url', content: canonicalUrl }]
    ];

    if (cleanPath) {
      const parts = cleanPath.split('/');
      const breadcrumbItems: any[] = [
        {
          '@type': 'ListItem',
          position: 1,
          name: '首页',
          item: 'https://peiqianblog.world/'
        }
      ];

      if (parts[0] === 'brands') {
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 2,
          name: '42家机场品牌评测库',
          item: 'https://peiqianblog.world/topics/airport-brands'
        });
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 3,
          name: pageData.title || '品牌独立评测',
          item: canonicalUrl
        });
      } else if (parts[0] === 'clients') {
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 2,
          name: '客户端使用教程总库',
          item: 'https://peiqianblog.world/topics/clients-hub'
        });
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 3,
          name: pageData.title || '客户端教程',
          item: canonicalUrl
        });
      } else if (parts[0] === 'topics') {
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 2,
          name: '六大核心 SEO/GEO 知识矩阵',
          item: 'https://peiqianblog.world/topics/ranking-guide'
        });
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 3,
          name: pageData.title || '专题矩阵',
          item: canonicalUrl
        });
      } else if (parts[0] === 'about') {
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 2,
          name: '实验室与评测标准',
          item: canonicalUrl
        });
      }

      head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbItems
        })
      ]);
    }

    return head;
  },

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
    logo: {
      src: '/images/avatar/avatar.jpg',
      alt: '赔钱博客 Cyber Sakura Lab - 2026 梯子测速实验室'
    },

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
        text: '🏆 机场推荐与评测',
        items: [
          { text: '📊 42 家机场综合推荐大矩阵', link: '/topics/ranking-guide' },
          { text: '🧪 42 家深度机场评测大矩阵', link: '/topics/airport-brands' },
          { text: '💰 极限平价 5.6 元档横评', link: '/topics/ranking-guide#二极限平价阵营56-元档横向大比拼' },
          { text: '🛡️ 晚高峰零丢包物理专线', link: '/topics/ranking-guide#一2026-年度梯子推荐总红榜前-10-梯队' }
        ]
      },
      {
        text: '🎁 免费与避坑预警',
        items: [
          { text: '⚡ 免费节点与订阅实测', link: '/topics/free-nodes' },
          { text: '🎁 免费试用与一元尝鲜', link: '/topics/free-trials' },
          { text: '🚨 跑路预警与黑名单避坑', link: '/topics/scam-warnings' }
        ]
      },
      {
        text: '📚 百科 FAQ 与科普',
        items: [
          { text: '❓ 机场百科与全景 FAQ', link: '/topics/airport-faq' },
          { text: '🔬 翻墙协议原理与物理专线', link: '/topics/protocols-network' },
          { text: '🤖 ChatGPT / AI 生产力专线', link: '/topics/ai-productivity' },
          { text: '🎬 4K 流媒体与 TikTok 出海', link: '/topics/streaming-overseas' },
          { text: '🔬 实验室测试标准与规范', link: '/about/methodology' }
        ]
      },
      {
        text: '💻 客户端教程',
        items: [
          { text: '📥 全平台客户端总库', link: '/topics/clients-hub' },
          { text: '🪟 Clash Verge Rev 电脑版', link: '/clients/clash-verge-rev' },
          { text: '🍎 Shadowrocket 小火箭教程', link: '/clients/shadowrocket' },
          { text: '⚡ v2rayN 极客配置教程', link: '/clients/v2rayn' },
          { text: '🌐 OpenClash 软路由透明代理', link: '/clients/openclash' }
        ]
      },
      { text: '🥇 光速云评测（第一主推）', link: '/brands/guangsu' }
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
          text: '🏆 六大核心 SEO/GEO 知识矩阵',
          collapsed: false,
          items: [
            { text: '📊 专题 1：42 家机场综合推荐矩阵', link: '/topics/ranking-guide' },
            { text: '🧪 专题 2：42 家深度机场评测矩阵', link: '/topics/airport-brands' },
            { text: '⚡ 专题 3：免费节点与订阅实测矩阵', link: '/topics/free-nodes' },
            { text: '❓ 专题 4：机场百科与全景 FAQ 矩阵', link: '/topics/airport-faq' },
            { text: '🚨 专题 5：跑路预警与黑名单避坑矩阵', link: '/topics/scam-warnings' },
            { text: '🎁 专题 6：免费试用与一元尝鲜矩阵', link: '/topics/free-trials' }
          ]
        },
        {
          text: '🔬 进阶协议与应用场景',
          collapsed: true,
          items: [
            { text: '📥 代理客户端全平台下载库', link: '/topics/clients-hub' },
            { text: '🔬 翻墙协议原理与物理专线科普', link: '/topics/protocols-network' },
            { text: '🤖 ChatGPT / AI 生产力专线指南', link: '/topics/ai-productivity' },
            { text: '🎬 4K 流媒体与跨境出海运营生态', link: '/topics/streaming-overseas' }
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
      message: '🌸 赔钱博客 peiqianblog.world · <a href="/about/methodology">实验室评测规范与方法论</a> · 樱花校园极客部出品',
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
