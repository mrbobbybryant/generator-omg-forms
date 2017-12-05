<?php
namespace OMGForms\<%= namespace %>\Core;

function setup() {
	add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\load_scripts' );
}

function load_scripts() {
	wp_enqueue_script(
		'<%= projectName.replace(/\s+/g, '-').toLowerCase() %>-js',
		get_stylesheet_directory_uri() . '/vendor/developwithwp/projectName.replace(/\s+/g, '-').toLowerCase()/dist/index.bundle.js',
		array(),
		OMG_FORMS_<%= namespace.toUpperCase() %>_VERSION,
		true
	);
}
