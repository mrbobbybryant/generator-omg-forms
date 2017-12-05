
<?php
if ( !defined( 'OMG_FORMS_<%= namespace.toUpperCase() %>_VERSION' ) ) {
	define( 'OMG_FORMS_<%= namespace.toUpperCase() %>_VERSION', '0.0.1' );
}
if ( !defined( 'OMG_FORMS_<%= namespace.toUpperCase() %>_DIR' ) ) {
	define( 'OMG_FORMS_<%= namespace.toUpperCase() %>_DIR', dirname( __FILE__ ) );
}
if ( !defined( 'OMG_FORMS_<%= namespace.toUpperCase() %>_FILE' ) ) {
	define( 'OMG_FORMS_<%= namespace.toUpperCase() %>_FILE', __FILE__ );
}

\AaronHolbrook\Autoload\autoload( OMG_FORMS_<%= namespace.toUpperCase() %>_DIR . '/includes' );
