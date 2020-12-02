const fs = require("fs");
const path = require("path");

function getCssVar() {
  const FILES = ["global", "vars/light", "vars/compatibility"];

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
