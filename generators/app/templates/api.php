<?php
namespace OMGForms\<%= namespace %>\API;

use OMGForms\Helpers as CoreHelpers;

function save_form_as_<%= namespace.toLowerCase() %>( $args, $form ) {
	if ( ! CoreHelpers\is_form_type( '<%= namespace.toLowerCase() %>-form', $form ) || is_wp_error( $args ) ) {
		return $args;
	}

	return $args;
}
add_filter( 'omg_forms_save_data', __NAMESPACE__ .  '\save_form_as_<%= namespace.toLowerCase() %>', 10, 2 );
