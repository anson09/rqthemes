const fs = require("fs");
const path = require("path");

let json = null;
function getCssVar() {
  if (json) {
    return json;
  } else {
    once = true;
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

    jsonStr = `{${trans}}`;
    fs.writeFileSync("./lib/light.json", jsonStr, () => {
      console.log("<collecting vars to light.json success>");
    });

    json = JSON.parse(jsonStr);
  }
  return json;
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
