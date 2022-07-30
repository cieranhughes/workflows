const repo = process.env.GITHUB_REPOSITORY.split('/')[1];
const runner = require(`./repos/${repo}`);

runner;
