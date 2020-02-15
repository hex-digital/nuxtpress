<?php
/**
 * Admin filters.
 *
 * @package  NuxtPress
 */

add_filter( 'wp_terms_checklist_args', 'taxonomy_checklist_checked_ontop_filter' );
add_filter( 'preview_post_link', 'nuxtpress_headless_preview_link' );
add_filter( 'preview_page_link', 'nuxtpress_headless_preview_link' );

add_filter( 'rest_prepare_post', 'nuxtpress_preview_link_in_rest_response', 10, 2 );
add_filter( 'rest_prepare_page', 'nuxtpress_preview_link_in_rest_response', 10, 2 );

add_action( 'init', 'nuxtpress_remove_comment_support', 100 );
add_action( 'admin_menu', 'nuxtpress_remove_admin_menus' );
add_action( 'wp_before_admin_bar_render', 'nuxtpress_admin_bar_render' );

/** Remove comments from Admin Menu */
function nuxtpress_remove_admin_menus() {
    remove_menu_page( 'edit-comments.php' );
}

/** Remove comments from posts and pages */
function nuxtpress_remove_comment_support() {
    remove_post_type_support( 'post', 'comments' );
    remove_post_type_support( 'page', 'comments' );
}

/** Remove comments from admin bar */
function nuxtpress_admin_bar_render() {
    global $wp_admin_bar;
    $wp_admin_bar->remove_menu('comments');
}

/**
 * By default, in Add/Edit Post, WordPress moves checked categories to the top of the list and unchecked to the bottom.
 * When you have subcategories that you want to keep below their parents at all times, this makes no sense.
 * This function removes automatic reordering so the categories widget retains its order regardless of checked state.
 * Thanks to https://stackoverflow.com/a/12586404
 *
 * @param array $args Array of arguments.
 * @return array
 */
function taxonomy_checklist_checked_ontop_filter( array $args ): array {
    $args['checked_ontop'] = false;
    return $args;
}

/**
 * Customize the preview button in the WordPress admin to point to the headless client.
 *
 * @param  string $link The WordPress preview link.
 * @return string The headless WordPress preview link.
 */
function nuxtpress_headless_preview_link( string $link ): string {
    $post = get_post();
    if ( ! $post ) {
        return $link;
    }

    $parent_id = $post->post_parent;
    $frontend = get_frontend_origin();
    $revision_id = $post->ID;
    $type = get_post_type( $parent_id );
    $nonce = wp_create_nonce( 'wp_rest' );
    $status = 0 === $parent_id ? 'draft' : 'revision';

    return "$frontend/_preview/$parent_id/$revision_id/$type/$status/$nonce";
}

/**
 * Includes preview link in post data for a response.
 *
 * @param \WP_REST_Response $response The response object.
 * @param \WP_Post          $post     Post object.
 * @return \WP_REST_Response The response object.
 */
function nuxtpress_preview_link_in_rest_response( \WP_REST_Response $response, \WP_Post $post ): \WP_REST_Response {
    if ( 'draft' === $post->post_status ) {
        $response->data['preview_link'] = get_preview_post_link( $post );
    }

    return $response;
}
