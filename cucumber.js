let common = [
    'tests/features/**/*.feature',
    '--require-module ts-node/register',
    '--require tests/features/steps/*.ts',
  ].join(' ')
  
  module.exports = {
    default: common,
  }
