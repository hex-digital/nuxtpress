# NuxtPress - WordPress x Nuxt Development Environment

- [Development Tools](#development-tools)
  - [StoryBook](#storybook)
  - [Jest (Unit + Snapshot Testing)](#jest)
  - [SCSS](#scss)
  - [Lint Staged Files on Commit](#lint-staged)
  - [Scripts](#scripts)
    - [Working with the containers](#scripts-containers)
      - [WP-CLI and yarn](#scripts-containers-tools)
    - [Scaffolding](#scripts-scaffolding)

## Development Tools

<a name="development-tools"/>

**NuxtPress** integrates with some development tools out of the box to help make your software more robust and easier
to work with. We also provide a number of scripts to make working with it easier.

If there are any development tools you do not wish to use, you may simply ignore them. They will not impact site
performance as they are development only.

### StoryBook

<a name="storybook"/>

We provide a Storybook integration out of the box. This is a UI component explorer that allows you to mount and view
your real components outside of your app. For more information, visit the official docs at
[https://storybook.js.org/](https://storybook.js.org/).

Stories can be created in the `nuxt/stories` directory. They can be accessed by the following:

    # Using docker
    yarn run yarn storybook

    # Not using docker
    cd nuxt
    yarn storybook

### Jest (Unit + Snapshot Testing)

<a name="jest"/>

Jest comes pre-configured out of the box with Nuxt, and so it is included with this project.

Everything should feel familiar, so you can continue building great, robust things.

### SCSS

<a name="scss"/>

SCSS comes pre-integrated with Nuxt. On top of this, we have added the **styleResources** plugin for injecting variables,
mixins and functions into all Vue components.

We also include the barebones [**InuitCSS**](https://github.com/inuitcss/inuitcss) framework by default, which adds
helpful project configuration, mixins, functions and objects. Visit the GitHub page to learn more.

If you'd like to work with these, then you're ready to go. However, if you'd like to remove these elements, you can do
so with the following steps:

**Remove InuitCSS**

- `yarn remove inuitcss inuitcss-hex`
- Delete all files from the `assets/scss` directory

**Remove style resources**

- `yarn remove @nuxtjs/style-resources`
- Delete the `styleResources` object from nuxt.config.js
- Remove `@nuxtjs/style-resources` from the `modules` object in nuxt.config.js

### Lint Staged Files on Commit

<a name="lint-staged"/>

We've added Husky to allow the easy creation of scripts that run on git hooks, like pre-commit.

We've also added lint-staged, to allow the linting of just files that are added to the staging area.

The combination of the two allows us to add a pre-commit hook that lints all the staged files with eslint, and prevents
the commit from being made if they fail. 

**Remove Husky and Lint Staged**

- `yarn remove husky lint-staged`
- Delete the `husky` and `lint-staged` keys from package.json

### Scripts

<a name="scripts"/>

There are several scripts included with **NuxtPress** to make working with it easier. Just start by installing the
node modules:

    yarn install

#### Working with the containers

<a name="scripts-containers"/>

**Docker** is awesome, but has some drawbacks. One of them is that changes must be made from inside the container.

To enter the **NuxtPress** containers, you can use the following yarn scripts:

    yarn run enter:mysql
    yarn run enter:wp
    # yarn run enter:front # Only when using the front end container (turned off by default)

You exit a container with `exit`.

##### WP-CLI and yarn

<a name="scripts-containers-tools"/>

Two of the most common tasks are managing **_WordPress_** and installing new packages in the frontend.

**NuxtPress** provides you with the full power of the **_WP-CLI_** tool. Check out all documentation at
[https://developer.wordpress.org/cli/commands/](https://developer.wordpress.org/cli/commands/).

To run any **_WP-CLI_** command inside the `wp.nuxtpress` container, just use the following **_yarn_** script:

    yarn run wp <wp-cli-command>

    # Examples
    yarn run wp plugin list
    yarn run wp plugin install wordpress-seo
    yarn run wp user create hex hex@hexdigital.com

> Note: The commands will check if the containers are running, and will install needed dependencies automatically.
> For example, if **_WP-CLI_** is not installed in the container, it will be installed when running the first `wp` command.

The same concept we use for **_yarn_** in the `front.nuxtpress` container:

    yarn run yarn <yarn-command>

    # Example
    yarn run yarn add nuxt-webfontloader`

> Note: The frontend container is turned off by default, so if you do not use it, you do not need to run commands from
> inside the container.

#### Scaffolding

<a name="scripts-scaffolding"/>

**NuxtPress** allows you to generate custom post types and taxonomies via **_yarn_** scripts. You can pass needed
parameters as arguments. If you don't pass arguments, you will get prompted.

**Scaffolding a post type**

    yarn run scaffold:cpt <name>

    # Examples
    yarn run scaffold:cpt
    yarn run scaffold:cpt Movie

The custom post type definition is created in the `custom-post-types` folder of the NuxtPress theme. It is then loaded automatically
by the theme.

> Note: To query the new post-type you can use the `cpt` method of the **NuxtPress** `$wp` object.

**Scaffolding a taxonomy**

    yarn run scaffold:tax <name> <post-types>

    # Examples:
    yarn run scaffold:tax
    yarn run scaffold:tax Venue event,cafe

The taxonomy definition is created in the `taxonomies` folder of the NuxtPress theme. It is then loaded automatically
by the theme.
