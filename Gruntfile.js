module.exports = function (grunt) {
    require('google-closure-compiler').grunt(grunt);
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.initConfig({
        'closure-compiler': {
            my_target: {
                files: {
                    'build/script.min.js': ['src/**/*.js']
                },
                options: {
                    compilation_level: 'WHITESPACE_ONLY', //should be 'SIMPLE', // should be 'ADVANCED'
                    language_in: 'ECMASCRIPT5_STRICT',
                    language_out: 'ECMASCRIPT5_STRICT',
                    warning_level: 'VERBOSE',
                    create_source_map: 'build/script.min.js.map',
                }
            }
        },
        'copy': {
            'main': {
                options: {
                    punctuation: '',
                    processContentExclude: [
                        '**/*.{png,gif,jpg,ico,psd}'
                    ]
                },
                'files': [
                    {src: ['src/manifest.json'], dest: 'build/manifest.json'},
                    {expand: true, cwd: 'src/', src: ['icon_*.png'], dest: 'build/'},
                    {expand: true, cwd: 'src/popup/', src: ['**/*'], dest: 'build/popup/'}
                ]
            }
        }
    });

    // Default task(s).

    grunt.registerTask('build', ['closure-compiler', 'copy']);
    grunt.registerTask('default', ['build']);

};
