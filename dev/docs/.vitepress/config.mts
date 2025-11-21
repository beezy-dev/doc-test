import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/doc-test/",
  ignoreDeadLinks: true,
  title: "NetApp Innovation Labs",
  description: "This is the gateway to explore and experiment with our Early Access Software. By participating, you can help shape the future development and direction of these cutting-edge solutions.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "Innovation Labs",
    logo: {
      light: '/n-black.svg',
      dark: '/n-white.svg',
      alt: 'NetApp Logo'
    },
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Docs', link: '/docs' },
      { text: 'Neo Connector', link: '/docs/neo/neo.md' },
      { text: 'Neo UI', link: '/docs/nui/nui.md' },
      { text: 'OpenShift Consoles', link: '/docs/noc/noc.md' },
      
    ],

    sidebar: [
      { 
        text: 'Docs', 
        items: [
          { text: 'Introduction', link: '/docs/index.md' },
        ] 
      },
      {
        text: 'Neo Connector',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/docs/neo/neo.md' },
          { text: 'Prerequisites', link: '/docs/neo/prerequisites.md' },
          { text: 'Podman/Docker', link: '/docs/neo/compose.md' },
          { text: 'Kubernetes', link: '/docs/neo/helm.md' },
          { text: 'First Share', link: '/docs/neo/firstshare.md' },
          { text: 'Security', link: '/docs/neo/security.md' },
          { text: 'FAQ', link: '/docs/neo/faq.md' },
          { text: 'Legacy v2', link: '/docs/neo/v2.md' }
        ]
      },
      {
        text: 'Neo UI Framework',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/docs/nui/nui.md' },
          { text: 'Quick Start', link: '/docs/nui/qs.md' },
          { text: 'Contribute', link: '/docs/nui/contribute.md' },
          { text: 'Security', link: '/docs/nui/security.md' },
          
        ]
      },      
      {
        text: 'Kubernetes Consoles',
        collapsed: true,
        items: [
          { text: 'OpenShift Consoles', link: '/docs/noc/noc.md' },
          { text: 'Deployment', link: '/docs/noc/deploy.md' },

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NetApp/Innovation-Labs', ariaLabel: 'GitHub' }
    ],
    footer: {
      copyright: 'Copyright © 2025 NetApp'
    }
  }
})
