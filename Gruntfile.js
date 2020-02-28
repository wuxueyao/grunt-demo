/* global module:true */
module.exports = function(grunt){
  grunt.initConfig({
    run:{
      api:{
        options:{wait:false},
        args:['./app.js']
      }
    },
    mochacli:{
      all:['test/*.js']
      options: {
        repoter:'spec',
        bail: true
    }
  });
  grunt.loadNpmTasks('grunt-mocha-cli');
  grunt.loadNpmTasks('grunt-run');
  grunt.registerTask('default',['run','mocha','stop']);
}
