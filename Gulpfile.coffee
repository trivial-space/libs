gulp = require 'gulp'
del = require 'del'
runSequence = require 'run-sequence'
coffee = require 'gulp-coffee'
coffee2closure = require 'gulp-coffee2closure'
deps = require 'gulp-closure-deps'
connect = require 'gulp-connect'


dirs =
  srcJs: 'src/**/*.js'
  srcCs: 'src/**/*.coffee'
  destJs: [ 'dist/**/*.js', '!public/deps.js' ]
  gc: 'custom_modules/closure/closure/goog/**/*.js'
  testJs: 'test/run/**/*.js',
  testSpec: 'test/spec/**/'


gulp.task 'copy:js', ->
  gulp.src dirs.srcJs
    .pipe gulp.dest 'dist'


gulp.task 'coffee', ->
  gulp.src dirs.srcCs
    .pipe coffee bare: true
    .on 'error', (err) ->
      console.log err.stack
      @emit 'end'
      return
    .pipe coffee2closure()
    .pipe gulp.dest 'dist'


gulp.task 'deps', ->
  gulp.src dirs.destJs.concat dirs.gc
    .pipe deps
      fileName: 'deps.js'
      baseDir: 'dist/'
    .pipe gulp.dest 'dist'


gulp.task 'clean', (next) ->
  del [
    'dist',
    'test/run'
  ], next


gulp.task 'watch', ->
  gulp.watch dirs.srcCs, ['coffee']
  gulp.watch dirs.testSpec + '*.js', ['copy-test-js']
  gulp.watch dirs.testSpec + '*.coffee', ['coffee-test']
  gulp.watch dirs.srcJs, ['copy:js']
  return


# ===== Test =====

gulp.task 'copy-test-js', ->
  gulp.src dirs.testSpec + '*.js'
    .pipe gulp.dest 'test/run'


gulp.task 'coffee-test', ->
  gulp.src dirs.testSpec + '*.coffee'
    .pipe coffee bare: true
    .on 'error', (err) ->
      console.log err.stack
      @emit 'end'
      return
    .pipe coffee2closure()
    .pipe gulp.dest 'test/run'


gulp.task 'default', ->
  runSequence 'clean',
              'copy:js',
              'coffee',
              'deps',
              'copy-test-js',
              'coffee-test',
              'watch'
  return

