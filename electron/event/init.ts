import { createWindow } from "../main"
import { BrowserWindow, app } from "electron"

export function initEvent(_win: BrowserWindow) {
  // do something...

}

app.whenReady().then(() => {
  createWindow()

  // macOS
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows.length == 0) {
      createWindow()
    }
  })
})

// Windows or Linux
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})
