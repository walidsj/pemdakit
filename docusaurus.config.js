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
        highlightSearchTermsOnTargetPage: true,
        translations: {
          "search_placeholder": "Cari",
          "see_all_results": "Lihat semua hasil",
          "no_results": "Tidak ada hasil.",
          "search_results_for": "Hasil pencarian \"{{ keyword }}\"",
          "search_the_documentation": "Pencarian",
          "count_documents_found": "{{ count }} hasil ditemukan",
          "count_documents_found_plural": "{{ count }} hasil ditemukan",
          "no_documents_were_found": "Tidak ada hasil ditemukan."
        }
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
      image: 'img/pemdakit.png',
      hideableSidebar: true,
      announcementBar: {
        id: 'support_us',
        content:
          `⭐️ Sedang mencari kontributor untuk rangkuman materi, <a target="_blank" rel="noopener noreferrer" href="https://wa.me/6285157626557">hubungi</a> <svg style="vertical-align: middle;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16" height="16" viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;" xml:space="preserve"><g><path style="fill:#2CB742;" d="M0,58l4.988-14.963C2.457,38.78,1,33.812,1,28.5C1,12.76,13.76,0,29.5,0S58,12.76,58,28.5 S45.24,57,29.5,57c-4.789,0-9.299-1.187-13.26-3.273L0,58z"/><path style="fill:#FFFFFF;" d="M47.683,37.985c-1.316-2.487-6.169-5.331-6.169-5.331c-1.098-0.626-2.423-0.696-3.049,0.42 c0,0-1.577,1.891-1.978,2.163c-1.832,1.241-3.529,1.193-5.242-0.52l-3.981-3.981l-3.981-3.981c-1.713-1.713-1.761-3.41-0.52-5.242 c0.272-0.401,2.163-1.978,2.163-1.978c1.116-0.627,1.046-1.951,0.42-3.049c0,0-2.844-4.853-5.331-6.169 c-1.058-0.56-2.357-0.364-3.203,0.482l-1.758,1.758c-5.577,5.577-2.831,11.873,2.746,17.45l5.097,5.097l5.097,5.097 c5.577,5.577,11.873,8.323,17.45,2.746l1.758-1.758C48.048,40.341,48.243,39.042,47.683,37.985z"/>
          </g></svg>`,
        isCloseable: false,
      },
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
            link: {
              type: "generated-index"
            },
            to: '/peraturan/intro',
            label: '📕 Peraturan',
            position: 'left',
            activeBaseRegex: `/peraturan/`,
          },
          {to: '/blog', label: 'Blog', position: 'left'},
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
        copyright: `Hak Cipta © ${new Date().getFullYear()} PemdaKit v1 ❤️
        <br/>
        <br/>
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
