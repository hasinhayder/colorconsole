class ColorConsole {
    constructor() {
        this._typography = {
            fontSize: 14,
            padding: 5,
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
    _log(message, settings) {
        console.log(`%c${message}`, `background: ${settings.backgroundColor}; color: ${settings.textColor}; font-size: ${this._typography.fontSize}px; padding: ${this._typography.padding}px`);
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
    log(message) {
        console.log(message);
    }
}
export default new ColorConsole();
//# sourceMappingURL=index.js.map