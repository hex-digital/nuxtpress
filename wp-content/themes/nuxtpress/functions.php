<?php
/**
 * Theme setup.
 *
 * @package NuxtPress
 */

require_once 'inc/frontend-origin.php';

require_once 'inc/acf-options.php';

require_once 'inc/admin.php';

require_once 'inc/theme.php';

require_once 'inc/cors.php';

/**
 * Include all files within a directory, optionally filtered by a regexp.
 *
 * @param string $directory A directory to look for files, ending in a trailing slash.
 * @param string $pattern A regex string to test the files against. Any that don't match are not included.
 */
function nuxtpress_require_files_from_directory( string $directory, string $pattern = '' ): void {
    if ( ! is_dir( $directory ) ) return;

    $filenames = ! empty($pattern)
        ? preg_grep($pattern, scandir( $directory ) )
        : scandir( $directory );

    foreach ( $filenames as $filename ) {
        $path = $directory . $filename;
        if ( ! is_file( $path ) ) continue;

        require( $path );
    }
}

/**
 *  Include Custom post types
 */
$custom_post_type_directory = dirname( __FILE__ ) . '/custom-post-types/';
nuxtpress_require_files_from_directory( $custom_post_type_directory, '~\.php$~' );

/**
 *  Include Taxonomies
 */
$taxonomies_directory = dirname( __FILE__ ) . '/taxonomies/';
nuxtpress_require_files_from_directory( $taxonomies_directory, '~\.php$~' );

