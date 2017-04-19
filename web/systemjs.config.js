/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
	// map tells the System loader where to look for things
	var map = {
		'app':									'app', // 'dist',
		'@angular':								'node_modules/@angular',
		'angular2-in-memory-web-api':		 	'node_modules/angular2-in-memory-web-api',
		'rxjs':									'node_modules/rxjs',
		'rxjs/add/observable/*': 				'node_modules/rxjs/add/observable/*.js',
        'rxjs/add/operator/*': 					'node_modules/rxjs/add/operator/*.js',
        'rxjs/*': 								'node_modules/rxjs/*.js',
		// ng2-bootstrap
		'moment':								'node_modules/moment',
		'ng2-bootstrap':						'node_modules/ng2-bootstrap',
		'@angular/material':					'node_modules/@angular/material/bundles/',
		'@angular/http/testing': 				'node_modules/@angular/http/bundles/http-testing.umd.js',
		'lodash': 'vendor/lodash',
	};
	// packages tells the System loader how to load when no filename and/or no extension
	var packages = {
		'app':									{ main: 'main.js',	defaultExtension: 'js' },
		'rxjs':									{ defaultExtension: 'js' },
		'angular2-in-memory-web-api':			{ main: 'index.js', defaultExtension: 'js' },
		// ng2-bootstrap
		'ng2-bootstrap':						{ format: 'cjs', main: 'bundles/ng2-bootstrap.umd.js', defaultExtension: 'js' },
		'moment':								{ main: 'moment.js', defaultExtension: 'js' },
		'@angular2-material/core': 				{ main: 'core.js' },
		'@angular2-material/card': 				{ main: 'card.js' },
		'@angular2-material/button': 			{ main: 'button.js' },
		'@angular2-material/toolbar': 			{ main: 'toolbar.js' },
		'@angular2-material/slide-toggle': 		{ main: 'slide-toggle.js' },
		'lodash': 								{ format: 'cjs', defaultExtension: 'js', main: 'index.js' },
	};
	var ngPackageNames = [
		'common',
		'compiler',
		'core',
		'forms',
		'http',
		'platform-browser',
		'platform-browser-dynamic',
		'router',
		'router-deprecated',
		'upgrade',
		'material',
	];
	// Individual files (~300 requests):
	function packIndex(pkgName) {
		packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
	}

	/*
	// Bundled (~40 requests):
	function packUmd(pkgName) {
		packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
	}
	*/

	function packUmd(pkgName) {
	 packages['@angular/'+pkgName] = { 
		 main: (pkgName !== 'material' ? 'bundles/' : '') + pkgName + '.umd.js', 
		 defaultExtension: 'js' 
	 };
	}
	// Most environments should use UMD; some (Karma) need the individual index files
	var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
	// Add package entries for angular packages
	ngPackageNames.forEach(setPackageConfig);
	var config = {
		map: map,
		packages: packages
	};
	System.config(config);
})(this);
