// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PemdaKit',
  tagline: 'Buku Saku Berisi Kumpulan Materi, Peraturan, dan Ketentuan Daerah Mudah melalui Website',
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
            label: 'Materi',
          },
          // {
          //   to: '/materi/intro',    // ./docs/Intro.md
          //   label: 'Materi',
          //   position: 'left',
          //   activeBaseRegex: `/materi/`,
          // },
          {
            to: '/peraturan/intro',    // ./docs/Intro.md
            label: 'Peraturan',
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
