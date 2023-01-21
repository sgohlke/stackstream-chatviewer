// main.js

const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

let electronWindow;

function createWindow() {
  return new BrowserWindow({
    width: 400,
    height: 450,
    backgroundColor: '#FFFFFF',
    alwaysOnTop: true,
    autoHideMenuBar: true,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
}

function createRoomSelectionWindow() {
  electronWindow.loadFile('index.html').then(() => {
    electronWindow.show();
    //electronWindow.openDevTools()
  })
}

function createShowChatWindow(roomId) {
  if (roomId) {
    electronWindow.loadURL(`https://stack-stream.com/case/${roomId}`)
    const contents = electronWindow.webContents
    contents.setAudioMuted(true)
    contents.on('did-finish-load', () => {
      // Only show chat it div class "str-chat__container" (chat view) and "str-chat__thread" (chat thread view)
      contents.insertCSS('body {visibility:hidden} .str-chat__small-message-input__wrapper{display:none} .str-chat__container, .str-chat__thread { visibility:visible; position:fixed; top: 0px; left: 0px; }')
    })
    //electronWindow.openDevTools()
  }
}

app.on('ready', () => {
  electronWindow = createWindow();
  createRoomSelectionWindow();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    electronWindow = createWindow()
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
});

ipcMain.on('message:showChat', (event, roomId) => {
  createShowChatWindow(roomId);
});