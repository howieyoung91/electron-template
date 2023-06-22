// type AnyObject = { [key: string | number | symbol]: any }
type AnyObject = Record<string | number | symbol, any>

type ApplicationEventName = "setTitle"

type ApplicationEventHandler<ARGS, EVT> = (args: ARGS, event: EVT) => void
type ApplicationEventMainHandler<T = object> = ApplicationEventHandler<T, Electron.IpcMainEvent>
type ApplicationEventInvokeHandler<T = object> = ApplicationEventHandler<T, Electron.IpcMainInvokeEvent>
