const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    showChat: (roomId) => ipcRenderer.send('message:showChat', roomId)
})