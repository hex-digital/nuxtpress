<?php
/**
 * Add ACF options page.
 *
 * @package  NuxtPress
 */

// Add a custom options page to associate ACF fields.
if ( function_exists( 'acf_add_options_page' ) ) {
    acf_add_options_page(
        [
            'page_title' => 'Theme Settings',
            'menu_title' => 'Theme Settings',
            'menu_slug'  => 'theme-settings',
            'capability' => 'manage_options',
            'post_id'    => 'theme-settings',
            'redirect'   => true,
        ]
    );

    acf_add_options_sub_page( [
        'page_title' 	=> 'Sitewide Settings',
        'menu_title'	=> 'Sitewide',
        'parent_slug'	=> 'theme-settings',
    ] );
}

