# PAGES

This directory contains your Application Views and Routes.
The framework reads all the `*.vue` files inside this directory and creates the router of your application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/routing).

## WordPress Routes

NuxtPress will match WordPress page paths in the following way, stopping at the first record that matches:

| WordPress Page | Handler File Path | Type |
| --- | --- | --- |
| Homepage | index.vue | Front page |
| Page | page.vue | Top level page with matching page file |
| Page | _slug/index.vue | Top level page without matching page file |
| Category/Page | category/page.vue | Multi-path page, with fully matching directory and file structure |
| Category/Page | category/_slug.vue | Multi-path page, with fully matching directory structure but no specific file name |
| Category/Page | _.vue | Multi-path page, with no matching directory structure |

> Note: The first rule that matches will be selected.

Simply put, if the page has a specific file to handle it, that will will be used.

Everything else will fall back to one of the dynamic pages.

## Dynamic Pages

The default dynamic pages are: _slug/index.vue and _.vue.

We also recommend creating a {post_type}/_slug.vue file for all custom post types.

### _slug/index.vue

This page may not be necessary, and we may be able to handle it with _.vue alone?

Right now, it handles all the basic page stuff, but it may coincide with _.vue a lot and we may merge them.

### _.vue

This page is used for pages that we do not have more specific templates to handle.

This page will try to work out what the page is that we're displaying, and request that data from the API.

It will then try to work out if that page has a template, and if so load that, otherwise it will load the default page template.
