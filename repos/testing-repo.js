const { versionRunner } = require('../version');

const runner = async () => {
  await versionRunner;
};

module.exports = {
  runner,
};
