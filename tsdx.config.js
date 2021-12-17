const css = require('rollup-plugin-css-only');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      css ({
        output: 'onc-components.css',
      })
    );
    return config;
  },
};