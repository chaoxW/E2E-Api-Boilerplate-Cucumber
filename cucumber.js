let common = [
  '--require-module ts-node/register', // Load TypeScript module
  '--require-module tsconfig-paths/register', // Load TypeScript module
  '-r src/steps/**/*.ts', // Load step definitions
  '-r src/support/hooks.ts', // Load hooks
  '-f json:reports/json/test-report.json', // Report
  '--publish-quiet',
  '--parallel 1', //Number of parallel workers
].join(' ');

module.exports = {
  default: common,
}
