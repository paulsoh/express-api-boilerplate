import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import babel from 'gulp-babel';
import newer from 'gulp-newer';
import debug from 'gulp-debug';
import del from 'del';
import runSequence from 'run-sequence';

const paths = {
  js: ['./**/*.js', '!dist/**', '!node_modules/**', '!coverage/**'],
  nonJs: ['./package.json', './.gitignore'],
};

// Clean up dist and coverage directory
gulp.task('clean', () =>
  del(['dist/**', 'coverage/**', '!dist', '!coverage'])
);

// Copy non-js files to dist
gulp.task('copy', () =>
  gulp.src(paths.nonJs)
    .pipe(newer('dist'))
    .pipe(gulp.dest('dist'))
);

gulp.task('babel', () => {
  const stream = gulp.src([
    ...paths.js, 
    '!gulpfile.babel.js'
  ])
    .pipe(newer('dist'))
    .pipe(babel())
    .pipe(gulp.dest('dist'))

  return stream;
});

gulp.task('nodemon', ['copy', 'babel'], () => 
  nodemon({
    script: 'dist/server.js',
    ext: 'js',
    ignore: [
      'node_modules/**/*.js', 
      'dist/**/*.js', 
    ],
    tasks: ['babel'],
  })
);

gulp.task('serve', ['clean'], () => runSequence('nodemon'));
