import { BrowserWindow, app } from 'electron';
import { initWindowListener } from '@electron-lab/title-bar/lib/main';
import { join } from 'path';

const createWindow = (): void => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    webPreferences: {
      webSecurity: false,
      webviewTag: true,
      nodeIntegration: true, // 集合node进程
      contextIsolation: false,
    },
    frame: false,
    titleBarStyle: 'hiddenInset',
  });
  // and load the index.html of the app.
  mainWindow.loadURL(require(join(__dirname, '../entry.js')).index);
  initWindowListener(mainWindow);
};
app.on('ready', createWindow);
