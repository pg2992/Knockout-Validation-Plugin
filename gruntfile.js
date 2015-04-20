module.exports = function(grunt){
	//grunt related things go here
	'use strict';
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		concat : {
			dist:{
					options:{
						separator : "\n\r",
						banner:"/*\nConcatinated JS files"+
							"Author : Pawan" +
							'Created Date <%= grunt.template.today("yyyy-mm-dd") %>' +
							"\n */ \n"
					},

				src : ["src/KnockValidation.js","src/extension.js"],
				dest : 	"KnockOutValidation.js" 
			}

		},
		uglify : {
			options:{
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			build:{
				src:"KnockOutValidation.js",
				dest : "KnockOutValidation.min.js"

			}
		},
		jshint: {
  	  		all: ['Gruntfile.js','*.js', 'src/*.js']
  		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	grunt.loadNpmTasks("grunt-contrib-concat");

	grunt.loadNpmTasks("grunt-contrib-uglify");

	grunt.registerTask('default',['concat','uglify','jshint']);


};