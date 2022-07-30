const { versionRunner } = require('../actions/version');

const runner = async () => {
  await versionRunner;
};

module.exports = {
  runner,
};
