/* global module:true */
module.exports = function(grunt){
  grunt.initConfig({
    htmlmin:{
      options:{

      },
    files:{
      src:'./index.html',
      dest:'dist/index.html'
    }
    }
  });
  grunt.loadNpmTasks('grunt-mocha-cli');
  grunt.registerTask('default',['run','mocha','stop']);
}
