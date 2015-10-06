var gulp    = require('gulp'),                 //基础库
    minifycss = require('gulp-minify-css'),    //css压缩
    less = require('gulp-less'),               //less编译
    jshint = require('gulp-jshint'),           //js检查
    uglify  = require('gulp-uglify'),          //js压缩
    rename = require('gulp-rename'),           //重命名
    concat  = require('gulp-concat'),          //合并文件
    clean = require('gulp-clean'),             //清空文件夹
    tinylr = require('tiny-lr'),               //livereload
    server = tinylr(),
    port = 8080,
    livereload = require('gulp-livereload');   //livereload
// HTML处理
gulp.task('html', function() {
    var htmlSrc = './app/templet/*.html',
        htmlDst = './build/templet/';

    gulp.src(htmlSrc)
        .pipe(livereload(server))
        .pipe(gulp.dest(htmlDst))
});
// 样式处理
gulp.task('css', function () {
    var cssSrc = './app/less/*.less',
        cssDst = './app/css/',
        cssMinDst = './build/css/';

    gulp.src(cssSrc)
        .pipe(less({ style: 'expanded'}))
        .pipe(gulp.dest(cssDst))
        .pipe(gulp.dest(cssMinDst))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(livereload(server))
        .pipe(gulp.dest(cssMinDst));
});

// js处理
gulp.task('js', function () {
    var jsSrc = './app/js/*.js',
        jsDst ='./build/js/';

    gulp.src(jsSrc)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        //.pipe(concat('main.js'))
        .pipe(gulp.dest(jsDst))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(livereload(server))
        .pipe(gulp.dest(jsDst));
});

// 清空样式、js
gulp.task('clean', function() {
    gulp.src(['./build/css', './build/js'], {read: false})
        .pipe(clean());
});

// 重建任务 清空图片、样式、js并重建 
gulp.task('rebuild', ['clean'], function(){
    gulp.start('html','css','js');
});

// 监听任务 运行语句 gulp watch
gulp.task('default', function(){

    server.listen(port, function(err){
        if (err) {
            return console.log(err);
        }

        // 监听html
        gulp.watch('./app/*.html', function(event){
            gulp.run('html');
        })

        // 监听css
        gulp.watch('./app/less/*.less', function(){
            gulp.run('css');
        });

        // 监听js
        gulp.watch('./app/js/*.js', function(){
            gulp.run('js');
        });

    });
});