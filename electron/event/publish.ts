import { ipcRenderer } from "electron"

export function publishEvent<T = AnyObject>(eventName: ApplicationEventName, args: T) {
  ipcRenderer.send(eventName, args)
}

export function invokeEvent<T = AnyObject>(channel: string, args: T = {} as any) {
  return ipcRenderer.invoke(channel, args)
}
