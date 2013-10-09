module.exports = function (grunt) {

  var packageJSON = grunt.file.readJSON('package.json');

  // configurable paths
  var appConfig = {
    app: 'app',
    assets: 'app/public',
    dist: 'app/public',
    packaged: packageJSON.name + '-' + packageJSON.version
  };

  // try {
  //   appConfig.app = require('./component.json').appPath || appConfig.app;
  // } catch (e) {}

  grunt.initConfig({
    appConfig: appConfig,

    stylus: {
      dist: {
        options: {
          compress: false //switch to true for production
        },
        files: {
          '<%= appConfig.dist %>/css/style.css': ['<%= appConfig.assets %>/css/*.styl']
        }
      }
    },

    watch: {
      coffee: {
        files: ['<%= appConfig.assets %>/css/{,*/}*.styl'],
        tasks: ['stylus']
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['stylus']);


};