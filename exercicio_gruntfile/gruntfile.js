module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    paths: ['src/styles']
                },
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    paths: ['src/styles'],
                    compress: true
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        uglify: {
            options: {
                compress: true,
                mangle: true,
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/scripts/main.min.js': ['src/scripts/*.js']
                }
            }
        }
    });

    // Carregar plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Definir tarefas
    grunt.registerTask('default', ['less:development', 'uglify:dist']);
    grunt.registerTask('build', ['less:production', 'uglify:dist']);
};
