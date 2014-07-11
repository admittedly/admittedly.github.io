module.exports = function(grunt){
	grunt.initConfig({
		jade : {
			compile : {
				options : {
					pretty : true
				}
				, files : {"internet.html" : ["internet.jade"]}
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-jade');
}
