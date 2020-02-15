<?php

/**
 * Theme functions.
 *
 * @package NuxtPress
 */

add_action( 'after_setup_theme', 'nuxtpress_setup' );
add_action( 'init', 'nuxtpress_register_menu' );

function nuxtpress_setup(): void {
    add_theme_support( 'post-thumbnails' );
}

function nuxtpress_register_menu(): void {
    register_nav_menu('main', __('Main menu'));
}
