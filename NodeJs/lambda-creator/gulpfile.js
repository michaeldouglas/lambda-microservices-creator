'use strict';
var gulp = require('gulp');
var tasks = require('./resources/tasks/tasks');

// Tarefas variadas do nosso projeto
gulp.task('sass', tasks.getTask('sass', 'Sass'));
gulp.task('js', tasks.getTask('js', 'Js'));
gulp.task('img', tasks.getTask('img', 'Img'));


// Tarefa Watch
gulp.task('watch', ['sass', 'js', 'img'], function () {
    gulp.watch(tasks.basePaths.sass, ['sass']);
    gulp.watch(tasks.basePaths.js, ['js']);
    gulp.watch(tasks.basePaths.img, ['img']);
});

// Tarefa default
gulp.task('default', ['sass', 'js', 'img'], function () {});