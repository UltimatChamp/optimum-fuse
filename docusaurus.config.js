// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OptimumFuse',
  tagline: 'An optimization and QoL modpack for Fabric🧵, Quilt🧩, Neoforge🦊 and Forge⚒️, based on Simply Optimized!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ultimatchamp.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/optimum-fuse/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ultimatchamp', // Usually your GitHub org/user name.
  projectName: 'optimum-fuse', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ultimatchamp/optimum-fuse/tree/web/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ultimatchamp/optimum-fuse/tree/web/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'OptimumFuse',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://modrinth.com/modpack/optimum-fuse',
            label: 'Modrinth',
            position: 'right',
          },
          {
            href: 'https://github.com/ultimatchamp/optimum-fuse',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.gg/kfKjjhv3pn',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/main',
              },
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/UltimatChamp/optimum-fuse',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/kfKjjhv3pn',
              },
            ],
          },
          {
            title: 'Releases',
            items: [
              {
                label: 'on Modrinth',
                href: 'https://modrinth.com/modpack/optimum-fuse',
              },
              {
                label: 'on GitHub',
                href: 'https://github.com/UltimatChamp/optimum-fuse/releases',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UltimatChamp | Built with Docusaurus`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
