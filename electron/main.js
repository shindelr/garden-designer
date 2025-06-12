import { create } from 'domain';
import { app, BrowserWindow } from 'electron';
import path from 'path';

function createWindow(){
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            contextIsolation: true,
        },
    });

    // Load vite, dev or production?
    const isDev = !app.isPackaged;
    if (isDev){
        win.loadURL('http://localhost:5173');
    }
    else {
        win.loadFile(path.join(__dirname, '../dist/index.html'));
    }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
