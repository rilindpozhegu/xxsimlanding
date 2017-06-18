module.exports = function(grunt) {

	// Configure

	grunt.initConfig({
		// pass in options to pluginsm references to files etc...
		concat:{
			js:{
				src:[
					'js/main_scripts/jquery.js',
					'js/main_scripts/tether.min.js',
					'js/main_scripts/bootstrap.min.js', // Boostrap Script.min General,
					'js/main_scripts/now-ui-kit.js', // Scrolling Nav Default Script,

					// Facts Section Number Counter Scripts/All
					'js/count_numbers/waypoints.min.js',
					'js/count_numbers/jquery.counterup.min.js',
					'js/count_numbers/number-c.js', //Time to count,
					// --------------------------------------// 

					// OWL Carousel 2.0 All.
					'js/owl_carousel/owl_time.js',
					'js/owl_carousel/owl.carousel.js',

					// -------------------// 
					
					//	Slick.
					'js/slick.js',
					'js/slick_edition.js',
					// -------------------// 

					// Animation.css Scripts after scroll
					'js/animate_scripts/wow.min.js',
					'js/animate_scripts/animate.js',
					// --------------------------------// 

					// Gallery Scripts New ONE
					'js/gallery/add_gallery.js',
					'js/gallery/lightgallery.min.js',
					'js/gallery/lg-fullscreen.min.js',
					'js/gallery/lg-thumbnail.min.js',
					'js/gallery/lg-video.min.js',
					'js/gallery/lg-autoplay.min.js',
					'js/gallery/lg-zoom.min.js',
					'js/gallery/lg-hash.min.js',
					'js/gallery/lg-pager.min.js',
					'js/gallery/jquery.mousewheel.min.js',
					// ---------------------------------//

					'js/main_scripts/smoothscroll.js' // Smooth Scroll Script + time to Scroll,

					],

				dest: 'build/scripts.js'
			},
			css: {
				src:['css/**/*.css'],
				dest: 'build/styles.css'
			}
		},
		watch: {
		  scripts: {
		    files: ['css/**/*.css'],
		    tasks: ['concat'],
		    options: {
		      spawn: false,
		    },
		  },
		},

	});


	//  Load Plugins
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Register tasks

	grunt.registerTask('default', ['watch']);
	// grunt.registerTask('concat-css', ['concat:css']);


};