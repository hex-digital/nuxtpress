#!/usr/bin/env sh

set -e

mysql_ready='nc -z mysql.nuxtpress 3306'

if ! $mysql_ready
then
    printf 'Waiting for MySQL.'
    while ! $mysql_ready
    do
        printf '.'
        sleep 1
    done
    echo
fi

echo '-=- Setting up WP -=-'

echo 'Updating options'

wp option update blogdescription "$WORDPRESS_DESCRIPTION"
wp rewrite structure "$WORDPRESS_PERMALINK_STRUCTURE"

echo 'Deleting themes and activating nuxtpress theme'

wp theme delete twentysixteen twentyseventeen twentynineteen twentytwenty

echo 'Managing plugins'

wp plugin delete akismet hello
#wp plugin install --activate --force \
#    acf-to-wp-api \
#    advanced-custom-fields \
#    custom-post-type-ui \
#    wordpress-importer \
#    wp-rest-api-v2-menus \
#    jwt-authentication-for-wp-rest-api \
#    https://github.com/wp-graphql/wp-graphql/archive/v0.3.6.zip \
#    https://github.com/wp-graphql/wp-graphql-jwt-authentication/archive/V0.3.2.zip \
#    /var/www/plugins/*.zip

#wp term update category 1 --name="Sample Category"
#wp menu create "Header Menu"
#wp menu item add-post header-menu 1
#wp menu item add-post header-menu 2
#wp menu item add-term header-menu category 1
#wp menu item add-custom header-menu "Read about the Starter Kit" https://postlight.com/trackchanges/introducing-postlights-wordpress-react-starter-kit
#wp menu location assign header-menu header-menu
#wp post update 1 --post_title="Sample Post" --post_name=sample-post
#wp import /var/www/postlightheadlesswpstarter.wordpress.xml --authors=skip

echo "Great. You can now log into WordPress at: http://localhost:$NUXTPRESS_WP_PORT/wp-admin ($WORDPRESS_ADMIN_USER/$WORDPRESS_ADMIN_PASSWORD)"
