<?php // mu-plugins/load.php
/*
 * This file is required as WordPress only looks for .php files directly inside mu-plugins, and not in sub-directories.
 * Therefore we must manually require the mu-plugins that sit in sub-directories.
 * See: https://wordpress.org/support/article/must-use-plugins/#caveats
 */
require WPMU_PLUGIN_DIR.'/wuxt-headless-wp-api-extensions/wuxt-headless-wp-api-extensions.php';
