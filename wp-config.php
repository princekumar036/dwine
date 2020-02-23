<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'dwine_db' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         's{?*8koU>3CA(]m9^lWI6RT:Bi!v+}uzZ4T}U|Y7HhHNe]@axu_jG{?WQ @w*:,Q' );
define( 'SECURE_AUTH_KEY',  '+{P4T!hxrJX[3ZKOkO8Aoe>n6W@M.LpP]Vv#;|;1]/j[vDW;6t41o;oX$ZC2}VNN' );
define( 'LOGGED_IN_KEY',    'GhwQ_R,et2xN*4eL@_JA%tz?i Ux@hLx <4<Lxo>Y~:Ow|m|wZ[j Aul]U$I<U9H' );
define( 'NONCE_KEY',        ',-il*</A4vHDRaxphs4GU-EEG?Z>29n{`BYPn`g`,wa(>LSYM?7R(Jb^6SDqA3ya' );
define( 'AUTH_SALT',        '2;Gm _+T~-+(9`~?@ U,d<6F}@]PU]Vpx.7NO{l#3Y7%wc*6gjyds!:L4a~w[R:!' );
define( 'SECURE_AUTH_SALT', '#?dx}8D/HW]<0rDe!2Cgcl7]{>;f^?Y}YBT _31XStZFs(<muRN#DLJ]}ZB8kKXU' );
define( 'LOGGED_IN_SALT',   'kY$=IFX&CtS}SY<(<j$Zf$$; FB]#=YHvjwo(YZEGWTyKPus--nLFV#t@O:6VCrE' );
define( 'NONCE_SALT',       'tn+@AHkc(#soRw>O~_{S0&>M[1X1j0_6TqNp+gb8hbGg%Q`$I}e/uKM@Sv6LX N:' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
