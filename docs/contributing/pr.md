---
sidebar_position: 2
---

# Pull Requests

You can file a Pull Request on the [➡️`GitHub`](https://github.com/UltimatChamp/optimum-fuse/pulls) page.

### Translation

Help us translate this site to your language, here's the documentation:

<details>
<summary>Translating the site</summary>

# Translating the site

Let's translate `docs/intro.md` to French.

## Configure i18n

Modify `docusaurus.config.js` to add support for the `fr` locale:

```js title="docusaurus.config.js"
export default {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
```

## Translate a doc

Copy the `docs/intro.md` file to the `i18n/fr` folder:

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

Translate `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` in French.

## Start your localized site

Start your site on the French locale:

```bash
npm run start -- --locale fr
```

Your localized site is accessible at [http://localhost:3000/fr/](http://localhost:3000/fr/) and the `Getting Started` page is translated.

:::caution

In development, you can only use one locale at a time.

:::

## Add a Locale Dropdown

To navigate seamlessly across languages, add a locale dropdown.

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'localeDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

The locale dropdown now appears in your navbar:

![Locale Dropdown](./img/localeDropdown.png)

## Build your localized site

Build your site to include all the locales at once:

```bash
npm run build
```
</details>

_Other resources:_<br />
[Docusaurus Documentation](https://v1.docusaurus.io/docs/en/translation)

<hr />

### Improve the documentation

Help us improve the documentation! On every page of this documentation, there is an `✏️Edit this page` option!

<hr />

### Update Mods
You can create a PR on GitHub, to update **mods/resource-packs** for the next release.
