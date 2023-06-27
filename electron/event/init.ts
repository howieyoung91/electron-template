import { createWindow } from "../main"
import { BrowserWindow, app } from "electron"

export function initEvent(_win: BrowserWindow) {
  // listenEvent("setTitle", ({ title }, event) => {
  //   const webContents = event.sender
  //   const win = BrowserWindow.fromWebContents(webContents)
  //   win?.setTitle(title)
  // })
  // handleEvent("dialog:openFile", async () => {
  //   const { canceled, filePaths } = await dialog.showOpenDialog(win)
  //   if (!canceled) {
  //     return filePaths[0]
  //   }
  // })
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
