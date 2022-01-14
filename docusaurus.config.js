// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PemdaKit',
  tagline: 'Buku Saku Mudah Kumpulan Materi, Peraturan, dan Ketentuan Daerah',
  url: 'https://pemdakit.walid.id',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'walidsj',
  projectName: 'pemdakit',

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        docsRouteBasePath: ['/docs', '/peraturan'],
        docsDir: ['docs', 'peraturan'],
        blogRouteBasePath: "/blog",
        blogDir: 'blog',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'peraturan',
        path: 'peraturan',
        routeBasePath: 'peraturan',
        sidebarPath: require.resolve('./sidebars-peraturan.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true
      }, 
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/walidsj/pemdakit/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/walidsj/pemdakit/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'PemdaKit',
        logo: {
          alt: 'PemdaKit Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '📖 Materi',
          },
          {
            to: '/peraturan/intro',
            label: '📕 Peraturan',
            position: 'left',
            activeBaseRegex: `/peraturan/`,
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://wa.me/6285157626557',
            label: 'WhatsApp',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Konten',
            items: [
              {
                label: 'Materi',
                to: '/docs/intro',
              },
              {
                label: 'Peraturan',
                to: '/peraturan/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Kontak Kami',
            items: [
              {
                label: 'WhatsApp',
                href: 'https://wa.me/6285157626557',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/walidsj',
              },
            ],
          },
          {
            title: 'Lainnya',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/walidsj/pemdakit',
              },
            ],
          },
        ],
        copyright: `
        <p>Hak Cipta © ${new Date().getFullYear()} PemdaKit v1 ❤️</p>
        <a href="https://github.com/walidsj/pemdakit/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/walidsj/pemdakit?color=%23c4635e&style=flat-square"></a>
        <a href="https://github.com/walidsj/pemdakit/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/walidsj/pemdakit?color=%23c4635e&style=flat-square"></a>
        <a href="https://github.com/walidsj/pemdakit/blob/main/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/walidsj/pemdakit?color=%23c4635e&style=flat-square"></a>
        `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
