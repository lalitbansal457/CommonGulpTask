let sourcePath:String = "Source path/directory relative to gulpfile.js";
let destinationPath:String = "Destination path/directory relative to gulpfile.js";
let taskName:String = "Name of the task";

var gulp = require('gulp'); // gulp package
var sass = require('gulp-sass'); // gulp sass pacakge 
var minify = require('gulp-minifier'); // gulp minification package
var concat   = require('gulp-concat'); // gulp concat package
var uglify = require('gulp-uglify'); // gulp uglify package

// task for compiling scss to css 
gulp.task(taskName, function(done) { // we generally use 'sass' as taskName 
 gulp.src(sourcePath)
   .pipe(sass()) // sass() is the main function which compile scss files into css file
   .on('error', sass.logError)
   .pipe(gulp.dest(destinationPath))
   .on('end', done);
});



//Task for watching files
let watchPath:String = "Path/directory of files to be watched";
let watchTaskName:String = "Name of task to be run whenever there is any changes in 'watchPath'";

gulp.task(taskName, function() {
 gulp.watch(watchPath, [watchTaskName]);
});

//Task for copying files
gulp.task(taskName, function(){
  return gulp.src(sourcePath).pipe(gulp.dest(destinationPath))
})


// Task for minification of JS and CSS
gulp.task(taskName, function(){
  return gulp.src(sourcePath).pipe(minify({
    minify: true,
    collapseWhitespace: true,
    conservativeCollapse: true, 
    minifyJS: true, // Boolean for minification of JS files
    minifyCSS: true, // Boolean for minification of CSS files
  })).pipe(gulp.dest(destinationPath));
})

// Task for renaming of files
let renamedFileName:String = "Name of the file in which we want to rename file";
gulp.task(taskName, function(){
  return gulp.src(sourcePath).pipe(gulp.rename(renamedFileName)).pipe(gulp.dest(destinationPath)); 
})


// Task for Concatination of files
let concatFileName = "Name of the file in which we want to concatinate files";
gulp.task(taskName, function() {
  return gulp.src(sourcePath).pipe(concat(concatFileName)).pipe(gulp.dest(destinationPath));
});

// Task to uglify files
gulp.task(taskName, function() {
  return gulp.src(sourcePath).pipe(uglify()).pipe(gulp.dest(destinationPath));
});
