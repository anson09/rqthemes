const fs = require("fs");
const path = require("path");

function getCssVar() {
  const FILES = ["global", "light"];

  let source = FILES.map(file =>
    fs.readFileSync(path.resolve(__dirname, `src/${file}.scss`), "utf8")
  ).join("\n");

  let trans = source
    .match(/--.*:[\s\S]*?;/g)
    .join()
    .replace(/(\s)/g, "")
    .replace(/--(.*?):(.*?);/g, function(match, p1, p2) {
      return `"--${p1}":"${p2}"`;
    });

  return JSON.parse(`{${trans}}`);
}

module.exports = {
  plugins: [require("autoprefixer")({ grid: true })].concat(
    process.env.LEGACY
      ? require("postcss-css-variables")({
          preserve: true,
          preserveInjectedVariables: false,
          variables: getCssVar()
        })
      : []
  )
};
