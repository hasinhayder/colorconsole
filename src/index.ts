type ObjectLiteral = {
  [key: string]: any;
};
type ColorLog = {
  backgroundColor: String;
  textColor: String;
};
type ColorTypography = {
  fontSize: number;
  padding: number;
};
class ColorConsole {
  private _typography: ColorTypography = {
    fontSize: 14,
    padding: 5,
  };

  private _defaultSettings: ObjectLiteral = {
    backgroundColor: "transparent",
    textColor: this.isDark() ? "#FFFFFF" : "#000000",
    fontSize: 12,
    padding: 0,
  };

  private _infoColors: ColorLog = {
    backgroundColor: "#FFDC00",
    textColor: "#000000",
  };

  private _warningColors: ColorLog = {
    backgroundColor: "#FF8C00",
    textColor: "#FFFFFF",
  };

  private _successColors: ColorLog = {
    backgroundColor: "#BADA55",
    textColor: "#222222",
  };

  private _errorColors: ColorLog = {
    backgroundColor: "#FF0000",
    textColor: "#FFFFFF",
  };

  public set fontSize(size: number) {
    this._typography.fontSize = size;
  }

  public set padding(size: number) {
    this._typography.padding = size;
  }

  private isDark(): Boolean {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }

  private _log(
    message: string,
    settings: ColorLog,
    fontSize = this._typography.fontSize,
    padding = this._typography.padding
  ) {
    console.log(
      `%c${message}`,
      `background: ${settings.backgroundColor}; 
      color: ${settings.textColor}; 
      font-size: ${fontSize}px; 
      padding: ${padding}px`
    );
  }

  public info(message: string) {
    this._log(message, this._infoColors);
  }

  public warning(message: string) {
    this._log(message, this._warningColors);
  }

  public success(message: string) {
    this._log(message, this._successColors);
  }

  public error(message: string) {
    this._log(message, this._errorColors);
  }

  public custom(
    message: string,
    backgroundColor = this._defaultSettings.backgroundColor,
    textColor = this._defaultSettings.textColor,
    fontSize = this._defaultSettings.fontSize,
    padding = this._defaultSettings.padding
  ) {
    this._log(message, { backgroundColor, textColor }, fontSize, padding);
  }

  public log(message: string) {
    console.log(message);
  }
}

export default new ColorConsole();
