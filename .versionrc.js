const URL = "http://git.ricequant.com/projects/NODE/repos/rqthemes";
module.exports = {
  types: [
    { type: "feat", section: "Features" },
    { type: "fix", section: "Bug Fixes" },
    { type: "perf", section: "Performance" },
    { type: "test", section: "Tests" },
    { type: "build", section: "Build Flow" },
    { type: "ci", section: "CI" },
    { type: "docs", section: "Docs" },
    { type: "refactor", section: "Refactors" },
    { type: "style", section: "Code Style" },
    { type: "chore", section: "Chores" },
  ],
  commitUrlFormat: `${URL}/commits/{{hash}}`,
  compareUrlFormat: `${URL}/compare/diff?targetBranch=refs/tags/{{previousTag}}&sourceBranch=refs/tags/{{currentTag}}`,
};
