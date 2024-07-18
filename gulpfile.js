const gulp = require('gulp')
const fs = require('fs')
const del = require('del')
const replace = require('gulp-replace')
const rename = require('gulp-rename')
const zip = require('gulp-zip')
const UglifyJS = require('uglify-js')

const enableAd = false

// 是否启用强制广告
const isForceAd = false

// 赞助商
const ssTmpJS = UglifyJS.minify(fs.readFileSync('./ad/ssTmpl.js', 'utf-8'), {
  toplevel: true,
  output: {
    beautify: false
  }
})
const ssTmplScript = `<script>(function(){${ssTmpJS.code}})()</script>`
const sponsorsJS = UglifyJS.minify(fs.readFileSync('./ad/sponsors.js', 'utf-8'), {
  toplevel: true,
  output: {
    beautify: false
  }
})
const sponsorsTmplScript = `<script>(function(){${sponsorsJS.code}})()</script>`

// 广告位
const adTmpJS = UglifyJS.minify(fs.readFileSync('./ad/adTmpl.js', 'utf-8'), {
  toplevel: true,
  output: {
    beautify: false
  }
})
const adTmplScript = `<script>(function(){${adTmpJS.code}})()</script>`
const adCheckJS = UglifyJS.minify(fs.readFileSync('./ad/check.js', 'utf-8'), {
  toplevel: true,
  output: {
    beautify: false
  }
})
const adCheckScript = `<script>(function(){${adCheckJS.code}})()</script>`
const adScript = `<script data-mode="hash" type="text/javascript" charset="UTF-8" src="https://cdn.wwads.cn/js/makemoney.js" async></script>`

// 访问数量统计
const hmScript = `<script>var _hmt=_hmt||[];(function(){if(location.host.indexOf("localhost")===-1){var b=document.createElement("script");b.src="https://hm.baidu.com/hm.js?d7f93b6aca1d7ac7711f6c21b897a62c";b.onload=function(){_hmt.push(["_requirePlugin","UrlChangeTracker",{shouldTrackUrlChange:function(c,d){return c&&d}}])};var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(b,a)}})();</script>`

gulp.task('clear_docs_temp', () => {
  return del([
    '_temp',
    'docs',
    '*.zip'
  ], { force: true })
})

gulp.task('copy_other3_temp', () => {
  return gulp.src('other3/dist/**')
    .pipe(gulp.dest('_temp/other3'))
})

gulp.task('copy_other3_index', gulp.series('copy_other3_temp', () => {
  return gulp.src('other3/dist/index.html')
    .pipe(replace('</head>', enableAd ? `${adScript}${isForceAd ? adCheckScript : ''}</head>`: '</head>'))
    .pipe(replace('</body>', `${ssTmplScript}${sponsorsTmplScript}${enableAd ? adTmplScript : ''}</body>`))
    .pipe(gulp.dest('_temp/other3'))
    .pipe(rename({
      basename: '404'
    }))
    .pipe(gulp.dest('_temp/other3'))
}))

gulp.task('copy_other3_docs', gulp.series('copy_other3_index', () => {
  return gulp.src('_temp/other3/**')
    .pipe(gulp.dest('docs/other3'))
}, () => {
  return gulp.src([
    '_temp/other3/**/*.html',
  ], { base: './_temp/' })
    .pipe(replace('</head>', `${hmScript}</head>`))
    .pipe(gulp.dest('docs'))
}))

gulp.task('copy_other4_temp', () => {
  return gulp.src('other4/dist/**')
    .pipe(gulp.dest('_temp/other4'))
})

gulp.task('copy_other4_index', gulp.series('copy_other4_temp', () => {
  return gulp.src('other4/dist/index.html')
    .pipe(replace('</head>', enableAd ? `${adScript}${isForceAd ? adCheckScript : ''}</head>`: '</head>'))
    .pipe(replace('</body>', `${ssTmplScript}${sponsorsTmplScript}${enableAd ? adTmplScript : ''}</body>`))
    .pipe(gulp.dest('_temp/other4'))
    .pipe(rename({
      basename: '404'
    }))
    .pipe(gulp.dest('_temp/other4'))
}))

gulp.task('copy_other4_docs', gulp.series('copy_other4_index', () => {
  return gulp.src('_temp/other4/**')
    .pipe(gulp.dest('docs/other4'))
}, () => {
  return gulp.src([
    '_temp/other4/**/*.html',
  ], { base: './_temp/' })
    .pipe(replace('</head>', `${hmScript}</head>`))
    .pipe(gulp.dest('docs'))
}))

gulp.task('copy_v1_temp', () => {
  return gulp.src('v1/dist/**')
    .pipe(gulp.dest('_temp/v1'))
})

gulp.task('copy_v1_index', gulp.series('copy_v1_temp', () => {
  return gulp.src('v1/dist/index.html')
  .pipe(replace('</head>', enableAd ? `${adScript}${isForceAd ? adCheckScript : ''}</head>`: '</head>'))
  .pipe(replace('</body>', `${ssTmplScript}${sponsorsTmplScript}${enableAd ? adTmplScript : ''}</body>`))
  .pipe(gulp.dest('_temp/v1'))
    .pipe(rename({
      basename: '404'
    }))
    .pipe(gulp.dest('_temp/v1'))
}))

gulp.task('copy_v1_docs', gulp.series('copy_v1_index', () => {
  return gulp.src('_temp/v1/**')
    .pipe(gulp.dest('docs/v1'))
}, () => {
  return gulp.src([
    '_temp/v1/**/*.html',
  ], { base: './_temp/' })
    .pipe(replace('</head>', `${hmScript}</head>`))
    .pipe(gulp.dest('docs'))
}))

gulp.task('copy_v2_temp', () => {
  return gulp.src('v2/dist/**')
    .pipe(gulp.dest('_temp/v2'))
})

gulp.task('copy_v2_index', gulp.series('copy_v2_temp', () => {
  return gulp.src('v2/dist/index.html')
  .pipe(replace('</head>', enableAd ? `${adScript}${isForceAd ? adCheckScript : ''}</head>`: '</head>'))
  .pipe(replace('</body>', `${ssTmplScript}${sponsorsTmplScript}${enableAd ? adTmplScript : ''}</body>`))
  .pipe(gulp.dest('_temp/v2'))
    .pipe(rename({
      basename: '404'
    }))
    .pipe(gulp.dest('_temp/v2'))
}))

gulp.task('copy_v2_docs', gulp.series('copy_v2_index', () => {
  return gulp.src('_temp/v2/**')
    .pipe(gulp.dest('docs/v2'))
}, () => {
  return gulp.src([
    '_temp/v2/**/*.html',
  ], { base: './_temp/' })
    .pipe(replace('</head>', `${hmScript}</head>`))
    .pipe(gulp.dest('docs'))
}))

gulp.task('copy_v3_temp', () => {
  return gulp.src('v3/dist/**')
    .pipe(gulp.dest('_temp/v3'))
})

gulp.task('copy_v3_index', gulp.series('copy_v3_temp', () => {
  return gulp.src('v3/dist/index.html')
    .pipe(replace('</head>', enableAd ? `${adScript}${isForceAd ? adCheckScript : ''}</head>`: '</head>'))
    .pipe(replace('</body>', `${ssTmplScript}${sponsorsTmplScript}${enableAd ? adTmplScript : ''}</body>`))
    .pipe(gulp.dest('_temp/v3'))
    .pipe(rename({
      basename: '404'
    }))
    .pipe(gulp.dest('_temp/v3'))
}))

gulp.task('copy_v3_docs', gulp.series('copy_v3_index', () => {
  return gulp.src('_temp/v3/**')
    .pipe(gulp.dest('docs/v3'))
}, () => {
  return gulp.src([
    '_temp/v3/**/*.html',
  ], { base: './_temp/' })
    .pipe(replace('</head>', `${hmScript}</head>`))
    .pipe(gulp.dest('docs'))
}))

gulp.task('copy_v4_temp', () => {
  return gulp.src('v4/dist/**')
    .pipe(gulp.dest('_temp/v4'))
})

gulp.task('copy_v4_index', gulp.series('copy_v4_temp', () => {
  return gulp.src('v4/dist/index.html')
    .pipe(replace('</head>', enableAd ? `${adScript}${isForceAd ? adCheckScript : ''}</head>`: '</head>'))
    .pipe(replace('</body>', `${ssTmplScript}${sponsorsTmplScript}${enableAd ? adTmplScript : ''}</body>`))
    .pipe(gulp.dest('_temp/v4'))
    .pipe(rename({
      basename: '404'
    }))
    .pipe(gulp.dest('_temp/v4'))
}))

gulp.task('copy_v4_docs', gulp.series('copy_v4_index', () => {
  return gulp.src('_temp/v4/**')
    .pipe(gulp.dest('docs/v4'))
}, () => {
  return gulp.src([
    '_temp/v4/**/*.html',
  ], { base: './_temp/' })
    .pipe(replace('</head>', `${hmScript}</head>`))
    .pipe(gulp.dest('docs'))
}))

const unicodeRE = /[^\x00-\xff]/g
const contentRE = /(?<!-)content\s*:\s*([^;}]+)/g

gulp.task('build_css_unicode', () => {
  return gulp.src([
    '_temp/**/**.css'
  ])
    .pipe(replace(contentRE, (u) => {
      return u.replace(unicodeRE, (m) => {
        return '\\' + m.charCodeAt(0).toString(16)
      })
    }))
    .pipe(gulp.dest('docs'))
})

gulp.task('build_latest_docs', () => {
  return gulp.src([
    'docs/v4/*.html',
    'docs/v4/*.ico',
    'docs/v4/*.png'
  ])
    .pipe(gulp.dest('docs'))
})

gulp.task('build_other3_docs', gulp.series('clear_docs_temp', 'copy_other3_docs', 'build_css_unicode', () => {
  return del([
    '_temp'
  ], { force: true })
}))

gulp.task('build_other4_docs', gulp.series('clear_docs_temp', 'copy_other4_docs', 'build_css_unicode', () => {
  return del([
    '_temp'
  ], { force: true })
}))

gulp.task('build_v3_docs', gulp.series('clear_docs_temp', 'copy_v3_docs', 'build_css_unicode', () => {
  return del([
    '_temp'
  ], { force: true })
}))

gulp.task('build_v4_docs', gulp.series('clear_docs_temp', 'copy_v4_docs', 'build_latest_docs', 'build_css_unicode', () => {
  return del([
    '_temp'
  ], { force: true })
}))

gulp.task('copy_all_docs', gulp.parallel('copy_v4_docs', 'copy_other4_docs', 'build_latest_docs'))
gulp.task('build_all_docs', gulp.series('clear_docs_temp', 'copy_all_docs', 'build_css_unicode', () => {
  return del([
    '_temp'
  ], { force: true })
}))

gulp.task('build_other3_zip', () => {
  return gulp.src([
    'docs/other3/**'
  ], { base: './docs/' })
    .pipe(zip('docs_other3.zip'))
    .pipe(gulp.dest('./'))
})

gulp.task('build_other4_zip', () => {
  return gulp.src([
    'docs/other4/**'
  ], { base: './docs/' })
    .pipe(zip('docs_other4.zip'))
    .pipe(gulp.dest('./'))
})

gulp.task('build_v3_zip', () => {
  return gulp.src([
    'docs/v3/**'
  ], { base: './docs/' })
    .pipe(zip('docs_v3.zip'))
    .pipe(gulp.dest('./'))
})

gulp.task('build_v4_zip', () => {
  return gulp.src([
    'docs/v4/**',
    'docs/*'
  ], { base: './docs/' })
    .pipe(zip('docs_v4.zip'))
    .pipe(gulp.dest('./'))
})

gulp.task('build_all_zip', () => {
  return gulp.src('docs/**')
    .pipe(zip('docs_all.zip'))
    .pipe(gulp.dest('./'))
})
