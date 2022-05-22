// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const roomId = 'test-room-3'

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 450,
    backgroundColor: '#FFFFFF',
    alwaysOnTop: true,
    autoHideMenuBar: true,
  })

  // and load the index.html of the app.
  mainWindow.loadURL(`https://stack-stream.com/case/${roomId}`)

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  const contents = mainWindow.webContents
  contents.setAudioMuted(true)
  contents.on('did-finish-load', () => {
      // Only show chat it div class "str-chat__container"
    contents.insertCSS('body {visibility:hidden} .str-chat__container { visibility:visible; position:fixed; top: 0px; left: 0px; }')
  })

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
