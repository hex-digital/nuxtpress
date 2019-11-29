# NuxtPress - WordPress x Nuxt Development Environment

- [WordPress Rest API endpoints](#ep)
  - [Extensions to the API endpoints](#epp)
    - [Front-page](#epp-front)
    - [Menus](#epp-menu)
    - [Slugs](#epp-slugs)
    - [Meta queries](#epp-meta)
    - [Taxonomy queries](#epp-tax)
    - [Geo queries](#epp-geo)
    - [Custom post types](#epp-cpt)

## WordPress Rest API endpoints

<a name="ep"/>

The **_WordPress_** Rest API gives you access to a wide range of native endpoints. Find the docs at:
[https://developer.wordpress.org/rest-api/reference/](https://developer.wordpress.org/rest-api/reference/).
To easily access the endpoints from **_NuxtJS_**, you can use the `$wp` extension, which integrates the
[node-wpapi](https://www.yarnjs.com/package/node-wp) library.

```javascript
// E.G.
async asyncData({ app }) {
  const post = await app.$wp.frontPage().embed().get();
}
```

You can find the full documentation [here](https://github.com/WP-API/node-wpapi).

### Extensions to the API endpoints

<a name="epp"/>

To make **NuxtPress** even more easy to use, there are a bunch of endpoint extensions to the **_WordPress_** Rest API.

#### Front-page

<a name="epp-front"/>

```
$wp.frontPage()
$wp.frontPage().embed()
```

or

```
GET: /wp-json/wuxt/v1/front-page
GET: /wp-json/wuxt/v1/front-page?_embed
```

The front-page endpoint will return details of the static page that has been set as the front page in **_WordPress_**.

If there is no front-page configured, the endpoint will automatically return the result of the default posts query
(`GET /wp-json/wp/v2/posts`).

> The `_embed` parameter works for the `front-page` query, and gives you access to featured media
> (post-thumbnails), author information and more.

#### Menus

<a name="epp-menu"/>

The **_WordPress_** Rest API does not provide an endpoint for menus by default.
This endpoint fills that need, and allows you to retrieve menu data.

```
$wp.menu()
$wp.menu().location(<location>)
```

or

```
GET: /wp-json/wuxt/v1/menu
GET: /wp-json/wuxt/v1/menu?location=<location>
```

Out of the box, there is a standard menu with the location `main`.
If this endpoint is called without a location, it will return the complete menu-tree for `main`.

The endpoint will work for all menus you create, providing they have been added to a location in `wp-admin`.

#### Slugs

<a name="epp-slugs"/>

The **_WordPress_** Rest API does not provide an endpoint to get posts or pages by slug.
That doesn't mirror the **_WordPress_** theme default behaviour, where the url-slug can point to both a page or a post.

```
$wp.slug().name('<post-or-page-slug>')
$wp.slug().name('<post-or-page-slug>').embed()
```

or

```
GET: /wp-json/wuxt/v1/slug/<post-or-page-slug>
GET: /wp-json/wuxt/v1/slug/<post-or-page-slug>?_embed
```

With the `slug` endpoint we add that function. First it will look for a post with the given slug. If not found, it will
look for a page.

> The `_embed` parameter works for the `slug` query, and gives you access to featured media
> (post-thumbnails), author information and more.

#### Meta fields

<a name="epp-meta"/>

The **_WordPress_** Rest API does not include meta fields in the post objects by default.
We have opted to use two existing plugins to handle this for us:

- ACF to REST API ([https://wordpress.org/plugins/acf-to-rest-api/](https://wordpress.org/plugins/acf-to-rest-api/))
- WP REST Yoast Meta ([https://wordpress.org/plugins/wp-rest-yoast-meta/](https://wordpress.org/plugins/wp-rest-yoast-meta/))

These plugins will add Yoast and ACF meta data to each request. Please see their documentation
for details.

#### Taxonomy queries

<a name="epp-tax"/>

Taxonomy queries are limited by the simple WordPress Rest API url structure.
Especially with filtering queries, we struggled with the missing relation
parameter in queries for posts by taxonomy. We added this feature with a new
parameter to the WordPress API:

```
GET: /wp-json/wp/v2/posts/?categories=1,2&and=true
```

**_Note:_** _Setting the relation to "and" will cause all taxonomy queries to
use it. Right now you cant query one taxonomy with "and" and another with "or"._

In Nuxt you just have to use the "and" param after a post query for categories.

```
$wp.posts().categories([1,2]).param('and', true)
```

#### Geo Queries

<a name="epp-geo"/>

If your application has to get posts by geographical proximity, you can use the geo parameters.

    GET /wp-json/wp/v2/posts/?coordinates=<lat>,<lng>&distance=<distance>

The coordinates parameter has to contain lat and lng, comma-separated and each value can be prefixed with the meta-key if has to be compared with (default keys: `lat`, `lng`). The distance is calculated in kilometers, postfix the value with **m** for miles. Some example queries:

     GET /wp-json/wp/v2/posts/?coordinates=52.585,13.373&distance=10
     GET /wp-json/wp/v2/posts/?coordinates=lat_mkey:52.585,lng_mkey:13.373&distance=10
     GET /wp-json/wp/v2/posts/?coordinates=52.585,13.373&distance=10m

#### Custom post types

<a name="epp-cpt"/>

The **_WordPress_** Rest API provides endpoints for custom post types, as long as they are registered the right way
see the _Scaffolding_ section for generating cpt-definitions).

To make querying of your custom post types as easy as everything else, we added the `cpt` method to the `$wp` object.
See post type queries for a fictional 'Movies' post type, below

```
$wp.cpt('movies')
$wp.cpt('movies').id( 7 )
```

The `cpt` function returns cpt-objects similar to the `posts()` or `pages()` queries, with meta fields included.
