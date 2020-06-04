# NuxtPress - WordPress x Nuxt Development Environment

- [Getting started](#start)
  - [With Docker](#with-docker)
    - [Setup WordPress](#setup-wp-docker)
    - [Setup Nuxt.js](#setup-nuxt-docker)
    - [Custom container configuration](#custom-container-configuration)
  - [Without Docker](#without-docker)
    - [Setup WordPress](#setup-wp-no-docker)
    - [Setup Nuxt.js](#setup-nuxt-no-docker)
    - [Port Configuration](#port-config)

## Getting started

<a name="start"/>

First clone this repository, then decide on whether you will be using docker or not.

### With Docker

<a name="with-docker"/>
 
Start the containers:

    docker-compose up -d

This starts the following containers:

- **_MySQL_** (`mysql.nuxtpress`)  
  Database for the **_WordPress_** installation.  
  The `data` folder the container is mirrored to the `_db` folder of your host system to persist data.

- **_WordPress_** (`wp.nuxtpress`)  
  An **_Apache_** server with the latest **_PHP_** version.  
  Has the **NuxtPress** theme and necessary plugins pre-installed (with a warning displayed if they are not active).  
  The `wp-content` directory of the container is mirrored to the `wp-content` directory on your host to persist data.

By default, your containers are available at:

- back-end: `http://localhost:3080`, `http://localhost:3080/wp-admin`
- database: `docker exec -ti mysql.nuxtpress bash`

There is a third container you can start, to run the node development server in a container as well.

This container is turned off by default. If you would like to use it, you can uncomment it in the docker-compose.yml file.

If activated, it will create this third conatiner:

- **_NuxtJS_** (`front.nuxtpress`)  
  A Nuxt app that runs in development mode with file-monitoring and browser-sync enabled.  
  It contains a complete **_WordPress_** Rest API wrapper via the `$wp` object.  
  It comes with useful pages and components to get you off the ground quickly and efficiently.

This would then be available at `http://localhost:3000`.

#### Setup **_WordPress_**

<a name="setup-wp-docker"/>

In short:

- Install WordPress (`http://localhost:3080/install.php`)
- Set permalinks to _Post name_ (`http://localhost:3080/wp-admin/options-permalink.php`)
- Activate **nuxtpress**-theme (`http://localhost:3080/wp-admin/themes.php`)
- Install any missing plugins (`http://localhost:3080/wp-admin/plugins.php`)

To check if everything is running, visit `http://localhost:3080`.

#### Setup **_NuxtJS_**

<a name="setup-nuxt-docker"/>

    cd nuxt
    cp .env.dist .env
    cp assets/scss/settings/_settings.config.dist.scss assets/scss/settings/_settings.config.scss
    yarn install
    yarn dev

Check if the frontend is running by opening `http://localhost:3000`.  
Making a change should immediately update the page.

#### Custom container configuration

<a name="custom-container-configuration"/>

**NuxtPress** allows you to change the above setup to run multiple projects at the same time, or to adjust to your own
environment.

To change ports and container names, copy the `.env.dist` file to `.env`, in the same directory of your
`docker-compose.yml` file. You can adjust the following values:

    NUXTPRESS_MYSQL_CONTAINER=mysql.nuxtpress

    NUXTPRESS_WP_CONTAINER=wp.nuxtpress
    NUXTPRESS_WP_PORT=3080
    NUXTPRESS_WP_URL=http://wp.nuxtpress:80

    NUXTPRESS_NUXT_CONTAINER=front.nuxtpress
    NUXTPRESS_PORT_FRONTEND=3000
    NUXTPRESS_URL_FRONTEND=http://localhost:3000

    NUXTPRESS_GENERATE_NUXT_CONTAINER=generate.nuxtpress
    NUXTPRESS_PORT_GENERATE=8080

After you created the file, run

    docker-compose down
    docker-compose up -d

### Without Docker

<a name="without-docker"/>

To run this application without docker, you will need:

- Some form of local webserver (such as apache or nginx)
- Sorm form of local database
- PHP 7.2+
- Node 10+

#### Setup **_WordPress_**

<a name="setup-wp-no-docker"/>

Setup a website as you normally would. Then install WordPress in the public root:

    cd /path/to/public/route

    wget http://wordpress.org/latest.tar.gz
    tar xfz latest.tar.gz
    mv ./wordpress/* ./
    rmdir ./wordpress/
    rm -f latest.tar.gz
    cp ./wp-config-sample.php ./wp-config.php
    rm -f ./wp-config-sample.php ./readme.html ./license.txt

Also set up a local database to store the WordPress data in.
  
Once complete, edit the `wp-config.php` file to add your local database credentials.
You may also want to add `define('WP_DEBUG', true);` and `define('DISALLOW_FILE_EDIT', true);`.

Next, delete the wp-content directory, and create a symlink to the wp-content directory included in this repo.

    rm -rf wp-content
    ln -s /path/to/this/repo/wp-content ./wp-content

Now you can follow the rest of the [Setup WordPress](#setup-wp) instructions above.

#### Setup **_NuxtJS_**

<a name="setup-nuxt-no-docker"/>

Setting up the front end is very simple, providing you have Node installed.

    cd nuxt
    yarn install
    yarn dev

Check if the frontend is running by opening `http://localhost:3000`.  
Making a change should immediately update the page.

#### Port Configuration

<a name="port-config"/>

By default, Nuxt will send WordPress requests to http://localhost:3080.
If not using this default location, you'll need to tell Nuxt where to send those requests.

Currently, the only way to do this is by passing environment commands before `yarn dev`.

    NUXTPRESS_WP_URL=http://localhost:3080 yarn dev

We are planning on adding dotenv or some other environment directly to the Nuxt app that will hold these variables.
