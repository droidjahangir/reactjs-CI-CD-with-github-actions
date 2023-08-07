module.exports = {
  branches: "master",
  repositoryUrl:
    "https://github.com/droidjahangir/reactjs-CI-CD-with-github-actions",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/git",
  ],
};
