__webpack_public_path__ = "/docs/"

module.exports = {
  title: 'LOFT - Multi-Tenancy Manager for Kubernetes | Documentation',
  tagline: 'The tagline of my site',
  url: 'https://loft.sh',
  baseUrl: __webpack_public_path__,
  favicon: '/media/loft-favicon.png',
  organizationName: 'loft-sh', // Usually your GitHub org/user name.
  projectName: 'loft', // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      logo: {
        alt: 'loft',
        src: '/media/loft-logo.svg',
        href: 'https://loft.sh/',
        target: '_self',
      },
      items: [
        {
          href: 'https://loft.sh/',
          label: 'Website',
          position: 'left',
          target: '_self'
        },
        {
          to: 'introduction',
          label: 'Docs',
          position: 'left'
        },
        {
          href: 'https://loft.sh/blog',
          label: 'Blog',
          position: 'left',
          target: '_self'
        },
        {
          href: 'https://slack.k8s.io/#kiosk',
          className: 'slack-link',
          'aria-label': 'Slack',
          position: 'right',
        },
        {
          href: 'https://github.com/loft-sh/loft',
          className: 'github-link',
          'aria-label': 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
      apiKey: "09508883e8b218e06b0e1aacc0867550",
      indexName: "loft-sh",
      placeholder: "Search...",
      algoliaOptions: {}
    },
    footer: {
      style: 'light',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} DevSpace Technologies Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'pages',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/loft-sh/loft/edit/master/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [],
  scripts: [
    {
      src:
        'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
      async: true,
    },
    {
      src:
        '/docs/js/custom.js',
      async: true,
    },
  ],
};
