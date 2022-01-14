// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PemdaKit',
  tagline: 'Buku Saku Berisi Kumpulan Materi, Peraturan, dan Ketentuan Daerah Provinsi Kalimantan Timur Mudah melalui Website',
  url: 'https://pemdakit.walid.id',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'walidsj', // Usually your GitHub org/user name.
  projectName: 'pemdakit', // Usually your repo name.

  plugins: [
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'materi',
    //     path: 'materi',
    //     routeBasePath: 'materi',
    //     sidebarPath: require.resolve('./sidebars-materi.js'),
    //   }, 
    // ],
    // [
    //   require.resolve("@easyops-cn/docusaurus-search-local"),
    //   {
    //     // ... Your options.
    //     // `hashed` is recommended as long-term-cache of index file is possible.
    //     hashed: true,
    //     docsDir: ['docs', 'peraturan'],
    //     // For Docs using Chinese, The `language` is recommended to set to:
    //     // ```
    //     // language: ["en", "zh"],
    //     // ```
    //     // When applying `zh` in language, please install `nodejieba` in your project.
    //   },
    // ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'peraturan',
        path: 'peraturan',
        routeBasePath: 'peraturan',
        sidebarPath: require.resolve('./sidebars-peraturan.js'),
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
          // Please change this to your repo.
          editUrl: 'https://github.com/walidsj/pemdakit/tree/main/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
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
      algolia: {
        // If Algolia did not provide you any appId, use 'BH4D9OD16A'
        appId: 'XPUU34ZB8P',
  
        // Public API key: it is safe to commit it
        apiKey: '2bd5c1897d0c64cecd380573f825f789',
  
        indexName: 'pemdakit',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        //... other Algolia params
      },
      navbar: {
        title: 'PemdaKit',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '📖 Materi',
          },
          // {
          //   to: '/materi/intro',    // ./docs/Intro.md
          //   label: 'Materi',
          //   position: 'left',
          //   activeBaseRegex: `/materi/`,
          // },
          {
            to: '/peraturan/intro',    // ./docs/Intro.md
            label: '📕 Peraturan',
            position: 'left',
            activeBaseRegex: `/peraturan/`,
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/walidsj/pemdakit',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Dokumen',
            items: [
              {
                label: 'Materi',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Media Sosial',
            items: [
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
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/walidsj/pemdakit',
              },
            ],
          },
        ],
        copyright: `Hak Cipta © ${new Date().getFullYear()} PemdaKit`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
