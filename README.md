# is-image-loaded-async
Return a Promise when one or more images, is loaded. &lt;1KB, for the browser, no dependencies.

# Install
At your choice
```
npm install --save is-image-loaded-async
```
```
yarn add is-image-loaded-async
```
```html
<script src="https://unpkg.com/is-image-loaded-async"></script>
```

# Usage
```js
is-image-loaded-async(/* Node or NodeList*/)
```

# Exemple
```js
var isImageLoadedAsync = require("is-image-loaded-async")

// Multiple image
isImageLoadedAsync(document.querySelectorAll("img"))
  .then(v => console.log(v))
  .catch(e => console.log(e))
```


```js
import isImageLoadedAsync from "is-image-loaded-async"

// Single image
isImageLoadedAsync(document.querySelector("img"))
  .then(v => console.log(v))
  .catch(e => console.log(e))
```

```html
<script src="https://unpkg.com/is-image-loaded-async"></script>
<script type="text/javascript">
  window.isImageLoadedAsync(document.querySelector("img"))
</script>
```
