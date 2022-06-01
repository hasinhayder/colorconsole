# ColorConsole NPM Package

Colorconsole provides an interesting way to display colored info, success, warning and error messages on the developer console in your browser.

## Available Methods

```javascript
colorconsole.warning("some warning message")
colorconsole.success("some success message")
colorconsole.info("some informations")
colorconsole.error("some error message")
colorconsole.log("normal message")
```

# Use in ESM Projects

```shell
npm install @hasinhayder/colorconsole

or

yarn add @hasinhayder/colorconsole
```

then

```javascript
import colorconsole from '@hasinhayder/colorconsole'
colorconsole.success("ColorConsole is Working!")
```

# Use In Browser

```html
<script src='https://cdn.jsdelivr.net/gh/hasinhayder/colorconsole@latest/colorconsole.js'></script>

<script>
    colorconsole.success("ColorConsole is Working!")
</script>
```