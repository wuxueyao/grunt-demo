/* global module:true */
module.exports = function(grunt){
    grunt.initConfig({
        sprite:{
            files:{
                src:['images/*.png'],
                dest:'dist/bundle.png',
                destCss:'dist/sprite.css'
            }

        }
    });

    grunt.loadNpmTasks('grunt-spritesmith');

    //自定义构建任务：
    grunt.registerTask('build','buld task',function(){
      console.log('build task')
    })
} 


