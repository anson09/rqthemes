const fs = require("fs");
const path = require("path");
const { colord } = require("colord");

function getCssVar() {
  const FILES = ["vars/light"];

  const source = FILES.map((file) =>
    fs.readFileSync(path.resolve(__dirname, `src/${file}.scss`), "utf8")
  ).join("\n");

  const varLine = source.match(/--.*:[\s\S]*?;/g);
  const variables = Object.fromEntries(
    varLine.map((l) =>
      l
        .replace(";", "")
        .replace(/(var\()\s+([-\w]+)\s+/g, "$1$2")
        .split(":")
    )
  );
  for (let i in variables) {
    if (!variables[i].includes("var")) {
      variables[i] = colord(variables[i]).toRgbString();
    }
  }

  fs.writeFileSync("./lib/light.json", JSON.stringify(variables));
  return variables;
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
