const fs = require("fs");
const path = require("path");

function getCssVar() {
  const FILES = ["global", "vars/light", "vars/compatibility"];

  let source = FILES.map((file) =>
    fs.readFileSync(path.resolve(__dirname, `src/${file}.scss`), "utf8")
  ).join("\n");

  let trans = source
    .match(/--.*:[\s\S]*?;/g)
    .join()
    .replace(/(\s)/g, "")
    .replace(/--(.*?):(.*?);/g, function (match, p1, p2) {
      return `"--${p1}":"${p2}"`;
    });

  const json = `{${trans}}`;

  fs.writeFileSync("./lib/light.json", json);

  return JSON.parse(json);
}

module.exports = {
  plugins: [require("autoprefixer")({ grid: true })].concat(
    process.env.LEGACY
      ? require("postcss-css-variables")({
          preserve: true,
          preserveInjectedVariables: false,
          variables: getCssVar(),
        })
      : []
  ),
};
