import { app, BrowserWindow } from "electron"

// https://medium.com/@utkuy.ceng/converting-your-react-app-to-an-electron-desktop-app-5efdafd15d7b
function createWindow() {
    const win = new BrowserWindow({
        width: 360,
        width: 640,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadURL("http://localhost:5173")
}

app.whenReady().then(createWindow);