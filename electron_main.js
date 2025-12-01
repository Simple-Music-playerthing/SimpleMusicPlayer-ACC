import { app, BrowserWindow } from "electron"
import path from "path"
import { fileURLToPath } from "url";

// https://medium.com/@utkuy.ceng/converting-your-react-app-to-an-electron-desktop-app-5efdafd15d7b
function createWindow() {
    const win = new BrowserWindow({
        width: 360,
        height: 660,
        webPreferences: {
            nodeIntegration: true
        },
        resizable: false
    });

    win.setMenu(null);
    // win.webContents.openDevTools();

    // if (app.isPackaged) {
    //     win.loadFile('index.html');
    // } else {
    //     win.loadURL("http://localhost:5173")
    // }
    const filename = fileURLToPath(import.meta.url);
    const dirname = path.dirname(filename);
    win.loadFile(path.join(dirname, 'dist', 'index.html'));
}

app.whenReady().then(createWindow);