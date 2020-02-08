<?php
/**
 * @link              https://hexdigital.com
 * @since             1.0.0
 * @package           hex-wp-logging
 *
 * @wordpress-plugin
 * Plugin Name:       Hex WordPress Logging
 * Plugin URI:        https://github.com/hex-digital/hex-wp-logging
 * Description:       This plugin adds a helper function to write logs into the wordpress debug file. This plugin can also logs when emails fail to send.
 * Version:           1.0.0
 * Author:            Hex Digital
 * Author URI:        https://hexdigital.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       hex-wp-logging
 */
// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
    die;
}

defined( 'HWPL_PLUGIN_NAME' ) or define( 'HWPL_PLUGIN_NAME', 'HWPL' );
defined( 'HWPL_PLUGIN_VERSION' ) or define( 'HWPL_PLUGIN_VERSION', '1.0.0' );
defined( 'HWPL_BASE_NAME' ) or define( 'HWPL_BASE_NAME', plugin_basename( __FILE__ ) );
defined( 'HWPL_ROOT_PATH' ) or define( 'HWPL_ROOT_PATH', plugin_dir_path( __FILE__ ) );
defined( 'HWPL_ROOT_URL' ) or define( 'HWPL_ROOT_URL', plugin_dir_url( __FILE__ ) );

add_action('wp_mail_failed', 'cbx_action_wp_mail_failed', 10, 1);

if ( ! function_exists( 'write_log' ) ) {
    /**
     * Write log to log file
     *
     * @param string|array|object $log
     * @return bool
     */
    function write_log( $log ) {
        if ( ! defined ( 'WP_DEBUG' ) ) return false;

        if ( true === WP_DEBUG ) {
            if ( is_array( $log ) || is_object( $log ) ) {
                $log = print_r( $log, true );
            }

            error_log( $log );
            return true;
        }

        return false;
    }
}

/**
 * Log email send errors
 *
 * @param $wp_error
 * @return bool
 */
function cbx_action_wp_mail_failed( $wp_error ) {
    return write_log( $wp_error );
}
