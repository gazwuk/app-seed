// Grunt configuration
// http://gruntjs.com/sample-gruntfile

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  // project Configuration
  grunt.initConfig({

    // app config
    app: {
      base: require('./bower.json').appPath || 'app',
      dist: 'dist'
    },

    // read package file
    pkg: grunt.file.readJSON('package.json'),

    // grunt server.
    // connect:livereload - live reloads when changes occur in dev environment
    connect: {
      options: {
        port: 9000,
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: '<%= app.base %>',
        }
      }
    },

    // watch all html, styles, js and images and reload the server
    // when they change
    watch: {
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= app.base %>/{,*/}*.html',
          '<%= app.base %>/styles/{,*/}*.css',
          '<%= app.base %>/scripts/{,*/}*.js',
          '<%= app.base %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

  });

  // grunt server task.
  grunt.registerTask('server', function (target) {
    grunt.task.run([
      'connect:livereload',
      'watch'
    ]);
  });

};
