import { BrowserWindow } from "electron"
import path from "path"
import { initEvent } from "./event/init"

export function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, `preload.js`),
    },
  })

  initEvent(win)
  win.loadFile(path.join(__dirname, "../dist/index.html"))
}
