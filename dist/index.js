class ColorConsole {
    constructor() {
        this._typography = {
            fontSize: 14,
            padding: 5,
        };
        this._defaultSettings = {
            backgroundColor: "transparent",
            textColor: this.isDark() ? "#FFFFFF" : "#000000",
            fontSize: 12,
            padding: 0,
        };
        this._infoColors = {
            backgroundColor: "#FFDC00",
            textColor: "#000000",
        };
        this._warningColors = {
            backgroundColor: "#FF8C00",
            textColor: "#FFFFFF",
        };
        this._successColors = {
            backgroundColor: "#BADA55",
            textColor: "#222222",
        };
        this._errorColors = {
            backgroundColor: "#FF0000",
            textColor: "#FFFFFF",
        };
    }
    set fontSize(size) {
        this._typography.fontSize = size;
    }
    set padding(size) {
        this._typography.padding = size;
    }
    isDark() {
        return (window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    _log(message, settings, fontSize = this._typography.fontSize, padding = this._typography.padding) {
        console.log(`%c${message}`, `background: ${settings.backgroundColor}; 
      color: ${settings.textColor}; 
      font-size: ${fontSize}px; 
      padding: ${padding}px`);
    }
    info(message) {
        this._log(message, this._infoColors);
    }
    warning(message) {
        this._log(message, this._warningColors);
    }
    success(message) {
        this._log(message, this._successColors);
    }
    error(message) {
        this._log(message, this._errorColors);
    }
    custom(message, backgroundColor = this._defaultSettings.backgroundColor, textColor = this._defaultSettings.textColor, fontSize = this._defaultSettings.fontSize, padding = this._defaultSettings.padding) {
        this._log(message, { backgroundColor, textColor }, fontSize, padding);
    }
    log(message) {
        console.log(message);
    }
}
export default new ColorConsole();
//# sourceMappingURL=index.js.map