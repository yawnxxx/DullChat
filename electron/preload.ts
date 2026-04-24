import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
  window: {
    minimize: () => ipcRenderer.send('window:minimize'),
    maximize: () => ipcRenderer.send('window:maximize'),
    close: () => ipcRenderer.send('window:close')
  },
  db: {
    getSessions: () => ipcRenderer.invoke('db:getSessions'),
    saveSession: (session: any) => ipcRenderer.invoke('db:saveSession', session),
    deleteSession: (id: string) => ipcRenderer.invoke('db:deleteSession', id),
    getMessages: (sessionId: string) => ipcRenderer.invoke('db:getMessages', sessionId),
    saveMessage: (message: any) => ipcRenderer.invoke('db:saveMessage', message),
    getPrompts: () => ipcRenderer.invoke('db:getPrompts'),
    savePrompt: (prompt: any) => ipcRenderer.invoke('db:savePrompt', prompt),
    deletePrompt: (id: string) => ipcRenderer.invoke('db:deletePrompt', id),
    getSettings: () => ipcRenderer.invoke('db:getSettings'),
    saveSetting: (key: string, value: any) => ipcRenderer.invoke('db:saveSetting', key, value),
    getModels: () => ipcRenderer.invoke('db:getModels'),
    saveModel: (model: any) => ipcRenderer.invoke('db:saveModel', model)
  },
  file: {
    export: (data: any, path: string) => ipcRenderer.invoke('file:export', data, path),
    import: (path: string) => ipcRenderer.invoke('file:import', path),
    selectFile: () => ipcRenderer.invoke('file:select'),
    selectDirectory: () => ipcRenderer.invoke('file:selectDirectory')
  }
})
