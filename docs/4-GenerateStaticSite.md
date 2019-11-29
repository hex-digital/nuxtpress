# NuxtPress - WordPress x Nuxt Development Environment

- [Generate and Deploy](#deploy)

## Generate and Deploy

<a name="deploy"/>

As an alternative to running WordPress on a production server, NuxtPress provides the ability to generate a static site.

> Note: This is only possible if there is no on-site, user generated content, such as comments.

Northosts have tweaked the **_NuxtJS_** _generate_ command, so that a fully static site with all content, posts and
pages can be generated inside the `dist` directory of **_Nuxt_**.

This static HTML site can then be uploaded to a webserver of choice.

> This generation script was built by Northosts. See https://github.com/northosts/wuxt/

### Generating a fully static site

First be sure your containers are running

    docker-compose up -d

Then go to the NuxtPress root-directory and run _generate_ with yarn

    yarn generate

This command spins up a new docker container that is used to generate the static site. Your original contains will be
restarted during this process.

When the generation is complete, a small local web-server will be available with the static site on it:

    http://localhost:8080

And the generated files can be found in the `dist` directory, inside `nuxtpress/nuxt`:

    nuxtpress/nuxt/dist

To shut down the local web-server you have to run the following command inside the
`nuxtpress` directory:

    docker-compose -f generate.yml down

### How it works

The `generate` command has been extended, so that it handles its original task, and completes a secondary task as well.

The original command scrapes all URLs added to **_NuxtJS_** and creates html-output.

It now will also scrape all WordPress URLs, storing the responses, as well as caching the responses for any WP calls
made on the Nuxt pages.

In order to find out these WordPress URLs, the generate command asks the **_WordPress_** Rest API for a list of existing
endpoints, and all links used in the **_WordPress_** menus. You can view that list with the following endpoint:

    localhost:3080/wp-json/wuxt/v1/generate

Since **_NuxtJS_** doesn't fully support 100% static sites yet, we have to get help of the `static` plugin used on
**_nuxt.org_**, which takes care of the payload caching. Read more [here](https://github.com/nuxt/rfcs/issues/22)
and [here](https://github.com/nuxt/nuxtjs.org/tree/master/modules/static).
