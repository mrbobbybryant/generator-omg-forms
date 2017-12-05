<?php
namespace OMGForms\<%= namespace %>\Validation;

use OMGForms\Helpers as CoreHelpers;

function valid_<%= namespace.toLowerCase() %>_forms( $args ) {
	if ( CoreHelpers\is_form_type( '<%= namespace.toLowerCase() %>-form', $form ) ) {

	}
}
add_action( 'omg_form_validation', __NAMESPACE__ . '\valid_<%= namespace.toLowerCase() %>_forms' );
