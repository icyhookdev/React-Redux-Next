const withSass = require('@zeit/next-sass');
module.exports = withSass({
  cssModules: true
});

// const withSass = require('@zeit/next-sass');
// const withCss = require('@zeit/next-css');

// module.exports = withSass(
//   withCss({
//     webpack: config => {
//       config.module.rules.push({ test: /\.scss$/, loader: ['css-loader'] });
//       return config;
//     }
//   })
// );
