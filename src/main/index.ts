import { BrowserWindow, app } from 'electron';
import { initWindowListener } from '@electron-lab/title-bar/lib/main';

declare const WEBPACK_ENTRY: string;
const createWindow = (): void => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 1280,
    minHeight: 720,
    webPreferences: {
      webSecurity: false,
      webviewTag: true,
      nodeIntegration: true, // 集合node进程
      contextIsolation: false,
    },
    closable: true,
    frame: false,
  });
  // and load the index.html of the app.
  mainWindow.loadURL(WEBPACK_ENTRY);
  mainWindow.webContents.openDevTools();
  initWindowListener(mainWindow);
};
app.on('ready', createWindow);
