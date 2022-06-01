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

colorconsole.success("ColorConsole is Working")
colorconsole.log("A Simple Message, just like console.log")
colorconsole.warning("This is a warning")
colorconsole.info("ColorConsole is an NPM package")
colorconsole.log("Available at https://www.npmjs.com/package/@hasinhayder/colorconsole")
colorconsole.log("Github Repo: https://github.com/hasinhayder/colorconsole")
colorconsole.error("Sample Error Message")
colorconsole.log("Isn't this beautiful?")
colorconsole.log("Check github repo url for documentation")
```

# Use In Browser

```html
<script src='https://cdn.jsdelivr.net/npm/@hasinhayder/colorconsole@latest/dist/colorconsole.min.js'></script>

<script>
    colorconsole.success("ColorConsole is Working")
    colorconsole.log("A Simple Message, just like console.log")
    colorconsole.warning("This is a warning")
    colorconsole.info("ColorConsole is an NPM package")
    colorconsole.log("Available at https://www.npmjs.com/package/@hasinhayder/colorconsole")
    colorconsole.log("Github Repo: https://github.com/hasinhayder/colorconsole")
    colorconsole.error("Sample Error Message")
    colorconsole.log("Isn't this beautiful?")
    colorconsole.log("Check github repo url for documentation")
</script>
```
