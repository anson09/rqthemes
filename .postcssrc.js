const fs = require("fs");
const path = require("path");

let once = false;
function getCssVar() {
  if (once) {
    const json = fs.readFileSync(path.resolve(__dirname, `src/light.json`), "utf8");
    return JSON.parse(json);
  }
  once = true;
  const FILES = ["global", "light", "compatibility"];

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

  const json = `{${trans}}`;
  fs.writeFileSync("./light.json", json, () => {
    console.log("<collecting vars to light.json success>");
  });

  return JSON.parse(json);
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
