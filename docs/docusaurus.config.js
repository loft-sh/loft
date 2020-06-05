__webpack_public_path__ = "/"

module.exports = {
  title: 'LOFT - Multi-Tenancy Manager for Kubernetes | Documentation',
  tagline: 'The tagline of my site',
  url: 'https://loft.sh',
  baseUrl: __webpack_public_path__,
  favicon: '/img/loft-favicon.png',
  organizationName: 'devspace-cloud', // Usually your GitHub org/user name.
  projectName: 'loft', // Usually your repo name.
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      logo: {
        alt: 'loft',
        src: '/img/loft-logo.svg',
        href: 'https://loft.sh/',
        target: '_self',
      },
      links: [
        {
          href: 'https://loft.sh/',
          label: 'Website',
          position: 'left',
          target: '_self'
        },
        {
          to: 'docs/introduction',
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
          href: 'https://github.com/devspace-cloud/loft',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
      apiKey: "fa9d64814055574ca7f02d3aa0271667",
      indexName: "loft",
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
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/devspace-cloud/loft/edit/master/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    {
      src:
        'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
      async: true,
    },
    {
      src:
        'https://static.devspace.cloud/js/docs/highlight-active-sections.js',
      async: true,
    },
    {
      src:
        'https://static.devspace.cloud/js/docs/gtm.js',
      async: true,
    },
  ],
};
