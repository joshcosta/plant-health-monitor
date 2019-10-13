let wrapper;

try {
  wrapper = require('../wrapper/compiled');
} catch(error) {
  console.error('Failed to load backend. Please make sure it was compiled properly');
  process.exit(1);
}

module.exports = wrapper;