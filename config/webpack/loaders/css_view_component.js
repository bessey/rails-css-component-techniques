/*
Rewrites the non-standard ::component CSS pseudo-element selector into the current component's path, corresponding
with the EncapsulateStyles#component_class on the template side

E.g. in app/components/my_component.scss
    // becomes .app--components--my-component
    ::component {
      color: yellow;
    }

    // becomes .app--components--example--button-component
    ::component("example/button_component") {
      color: red;
    }
*/

// TODO make configurable
const componentsDirectory = "app/components/";

function pathToClass(path) {
  return path.replace(/\//g, "--").replace(/_/g, "-");
}

module.exports = function CssViewComponentLoader(content, map, meta) {
  const finder = new RegExp(`^${this.rootContext}/(.+)\\.(css|scss|sass)`);
  const found = this.resourcePath.match(finder);
  const pathWithoutFileExtension = found[1];
  const cssClass = "." + pathToClass(pathWithoutFileExtension);
  const newContent = content
    .replace(
      /::component\("([\w\d_\-\/]+)"\)/g,
      (_match, path) => "." + pathToClass(componentsDirectory + path)
    )
    .replace(/::component/g, cssClass);
  console.log(`I RAN \n\n${content}\n\n${newContent}`);
  this.callback(null, newContent, map, meta);
};
