var gulp = require('gulp'),
	gutil = require('gulp-util'),
	runSequence = require('run-sequence'),
	nodemon = require('gulp-nodemon');
	webpack = require('webpack');
	webpackConfig = require('./webpack.config.js');

gulp.task('default', function(callback) {
	runSequence('nodemon', 'webpack:build', callback);
})

gulp.task('webpack:build', function(callback) {
	// run webpack
    webpack(webpackConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        // callback();
    });
})

gulp.task('nodemon', function () {
  nodemon({
    script: 'server.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
})