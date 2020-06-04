# NuxtPress - WordPress x Nuxt Development Environment

<p align="center">
  <img width="300" height="300" src="https://user-images.githubusercontent.com/2754728/74832907-462a9780-5310-11ea-9cc7-9a581fcde91d.png">
</p>

**NuxtPress** combines [**_WordPress_**](https://wordpress.com/), the worlds biggest CMS with [**_NuxtJS_**](https://nuxtjs.org/),
a brilliant front-end application framework, built on top of [**_Vue_**](https://vuejs.org/v2/guide/).

This README contains the quick start and intro documentation.  
Check out [the documentation directory](docs) for more detailed information on NuxtPress.

- [Quick Start](#quick)
- [Introduction](#intro)
- [Getting started](docs/1-GettingStarted.md#start)
  - [With Docker](docs/1-GettingStarted.md#with-docker)
    - [Setup WordPress](docs/1-GettingStarted.md#setup-wp)
    - [Setup Nuxt.js](docs/1-GettingStarted.md#setup-nuxt-docker)
    - [Custom container configuration](docs/1-GettingStarted.md#custom-container-configuration)
  - [Without Docker](docs/1-GettingStarted.md#without-docker)
    - [Setup WordPress](docs/1-GettingStarted.md#setup-wp-no-docker)
    - [Setup Nuxt.js](docs/1-GettingStarted.md#setup-nuxt-no-docker)
    - [URL and Port Configuration](docs/1-GettingStarted.md#port-config)
- [WordPress Rest API endpoints](docs/2-WordPressRestApi.md#ep)
  - [Extensions to the API endpoints](docs/2-WordPressRestApi.md#epp)
    - [Front-page](docs/2-WordPressRestApi.md#epp-front)
    - [Menus](docs/2-WordPressRestApi.md#epp-menu)
    - [Slugs](docs/2-WordPressRestApi.md#epp-slugs)
    - [Meta queries](docs/2-WordPressRestApi.md#epp-meta)
    - [Taxonomy queries](docs/2-WordPressRestApi.md#epp-tax)
    - [Geo queries](docs/2-WordPressRestApi.md#epp-geo)
    - [Custom post types](docs/2-WordPressRestApi.md#epp-cpt)
- [Development Tools](docs/3-DevelopmentTools.md#development-tools)
  - [StoryBook](docs/3-DevelopmentTools.md#storybook)
  - [Jest (Unit + Snapshot Testing)](docs/3-DevelopmentTools.md#jest)
  - [SCSS](docs/3-DevelopmentTools.md#scss)
  - [Lint Staged Files on Commit](docs/3-DevelopmentTools.md#lint-staged)
  - [Scripts](docs/3-DevelopmentTools.md#scripts)
    - [Working with the containers](docs/3-DevelopmentTools.md#scripts-containers)
      - [WP-CLI and yarn](docs/3-DevelopmentTools.md#scripts-containers-tools)
    - [Scaffolding](docs/3-DevelopmentTools.md#scripts-scaffolding)
- [Generate and Deploy](docs/4-GenerateStaticSite.md#deploy)
- [Links](#links)
- [Credits](#cred)

## Quick start

<a name="quick"/>

    git clone https://github.com/hex-digital/nuxtpress.git
    cd nuxtpress
    docker-compose up -d wp.nuxtpress
    cd nuxt && cp .env.dist .env && cp assets/scss/settings/_settings.config.dist.scss assets/scss/settings/_settings.config.scss
    yarn install && yarn dev

- [http://localhost:3080/install.php](http://localhost:3080/install.php) - Install WordPress
- [http://localhost:3080/wp-admin/options-permalink.php](http://localhost:3080/wp-admin/options-permalink.php) - Set permalinks to _Post name_
- [http://localhost:3080/wp-admin/themes.php](http://localhost:3080/wp-admin/themes.php) - Activate **nuxtpress**-theme
- [http://localhost:3000](http://localhost:3000) - Done

## Introduction

<a name="intro"/>

NuxtPress aims to provide a ready to use development environment, combining WordPress with Nuxt.
Included are:

- Fully dockerized **_WordPress_** and **_NuxtJS_** containers, setup in one command: `docker-compose up -d`

- Extended Rest API gives easy access to meta-fields, featured media menus and front-page config.

- Latest **_NuxtJS_**, with a WordPress `$wp` object, to connect to the extended **_WordPress_** Rest API.

This allows you to skip all the backend coding, but provides the flexibility to extend the backend if you want to.

## Showcase

<a name="showcase"/>

The following sites are powered by NuxtPress:

[https://prostack.uk](https://prostack.uk)

Get in touch to have your site listed here.

## Links

<a name="links"/>

[WUXT Headless WordPress API Extensions](https://wordpress.org/plugins/wuxt-headless-wp-api-extensions/): Plugin which includes all our API extensions.

## Credits

<a name="cred"/>

[@northosts](https://github.com/northosts) for the fantastic Wuxt framework on which NuxtPress is hugely dependent. [https://github.com/northosts/wuxt](https://github.com/northosts/wuxt)  
[@yashha](https://github.com/yashha/wp-nuxt/commits?author=yashha) for the excellent idea with the `$wp` object, first implemented in [https://github.com/yashha/wp-nuxt](https://github.com/yashha/wp-nuxt)
