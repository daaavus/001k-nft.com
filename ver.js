const p = require('./package.json');
const sha = require('child_process')
  .execSync('git rev-parse HEAD')
  .toString()
  .trim()
  .slice(0, 8);

console.log(`${p.version}-${sha}`);
