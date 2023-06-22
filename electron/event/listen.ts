import { ipcMain } from "electron"

export function listenEvent<T = AnyObject>(eventName: ApplicationEventName, handler: ApplicationEventMainHandler<T>) {
  ipcMain.on(eventName, (event, args: T) => handler(args, event))
}

export function handleEvent<T = AnyObject>(channel: string, handler: ApplicationEventInvokeHandler<T>) {
  ipcMain.handle(channel, (event, args: T) => handler(args, event))
}
