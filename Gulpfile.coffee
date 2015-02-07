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
  destJs: [ 'public/**/*.js', '!public/deps.js' ]
  destAssets: [ 'public/**/*.html', 'public/**/*.css' ]
  gc: 'custom_modules/closure_library/'
  t3: 'custom_modules/threejs/'
  testJs: 'test/run/**/*.js',
  testSpec: 'test/spec/**/'


# ===== copy =====

gulp.task 'copy:js', ->
  gulp.src dirs.srcJs
    .pipe gulp.dest 'public'

gulp.task 'copy:goog', ->
  gulp.src dirs.gc + 'closure/goog/**/*'
    .pipe gulp.dest 'public/libs/goog'

gulp.task 'copy:threejs', ->
  gulp.src [
    dirs.t3 + 'build/*.js'
    dirs.t3 + 'examples/js/**/*.js'
  ]
    .pipe gulp.dest 'public/libs/three'

gulp.task 'copy:bower', ->
  gulp.src [
    'bower_modules/bacon/dist/Bacon.js'
  ]
    .pipe gulp.dest 'public/libs'

gulp.task 'copy:libs', [ 'copy:goog', 'copy:threejs', 'copy:bower' ]
gulp.task 'copy:src', [ 'copy:js', 'copy:html' ]
gulp.task 'copy:static', [ 'copy:src', 'copy:libs' ]


# ===== setup =====

gulp.task 'coffee', ->
  gulp.src dirs.srcCs
    .pipe coffee bare: true
    .on 'error', (err) ->
      console.log err.stack
      @emit 'end'
      return
    .pipe coffee2closure()
    .pipe gulp.dest 'public'


gulp.task 'deps', ->
  gulp.src dirs.destJs
    .pipe deps
      fileName: 'deps.js'
      baseDir: 'public/'
      prefix: '../../'
    .pipe gulp.dest 'public'


gulp.task 'clean', (next) ->
  del [
    'public/drafts'
    'public/utils'
    'public/libs'
    'public/src'
    'public/deps.js'
    '_tmp'
  ], next


gulp.task 'connect', ->
  connect.server
    root: 'public'
    livereload: true
  return


gulp.task 'reload', ->
  gulp.src dirs.destAssets
    .pipe connect.reload()
  return


gulp.task 'watch', ->
  gulp.watch dirs.srcCs, ['coffee']
  gulp.watch dirs.testSpec + '*.js', ['copy-test-js']
  gulp.watch dirs.testSpec + '*.coffee', ['coffee-test']
  gulp.watch dirs.srcJs, ['copy:js']
  gulp.watch dirs.destAssets, ['reload']
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
              'copy:static',
              'coffee',
              'deps',
              'copy-test-js',
              'coffee-test',
              'connect',
              'watch'
  return

