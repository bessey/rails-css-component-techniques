# Rails View Component based CSS encapsulation

Demonstrates a technique to automatically encapsulate View Component sidecar CSS. When writing sidecar css simply use the `::component` psuedo-element selector to reference the component under development, and a class will be generated and your component will be wrapped in it.

See [the feature's PR](https://github.com/bessey/rails-css-component-techniques/pull/1) to find the interesting bits from the Rails cruft.

If you don't want to download and run yourself, here's the relevant results:

## Rendered

![Rendered output](./docs/rendered-html.png)

## CSS Output

![CSS output](./docs/css.png)

## HTML Output

![HTML output](./docs/html.png)
