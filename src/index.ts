type ColorLog = {
  backgroundColor: String
  textColor: String
}
type ColorTypography = {
  fontSize: number
  padding: number
}
class ColorConsole {
  private _typography: ColorTypography = {
    fontSize: 14,
    padding: 5,
  }

  private _infoColors: ColorLog = {
    backgroundColor: "#FFDC00",
    textColor: "#000000",
  }

  private _warningColors: ColorLog = {
    backgroundColor: "#FF8C00",
    textColor: "#FFFFFF",
  }

  private _successColors: ColorLog = {
    backgroundColor: "#BADA55",
    textColor: "#222222",
  }

  private _errorColors: ColorLog = {
    backgroundColor: "#FF0000",
    textColor: "#FFFFFF",
  }

  public set fontSize(size: number) {
    this._typography.fontSize = size
  }

  public set padding(size: number) {
    this._typography.padding = size
  }

  private _log(message: string, settings: ColorLog) {
    console.log(`%c${message}`, `background: ${settings.backgroundColor}; color: ${settings.textColor}; font-size: ${this._typography.fontSize}px; padding: ${this._typography.padding}px`)
  }

  public info(message: string) {
    this._log(message, this._infoColors)
  }

  public warning(message: string) {
    this._log(message, this._warningColors)
  }

  public success(message: string) {
    this._log(message, this._successColors)
  }

  public error(message: string) {
    this._log(message, this._errorColors)
  }

  public log(message: string) {
    console.log(message)
  }
}

export default new ColorConsole()
