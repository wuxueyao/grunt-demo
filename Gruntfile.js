/* global module:true */
module.exports = function(grunt){
  grunt.initConfig({
    eslint:{
      options:{
        htmlhintrc:'./.eslintrc'
      },
      target:['*.js']
    }

  });
  grunt.loadNpmTasks('grunt-eslint');

  grunt.registerTask('default',['eslint']);
}
