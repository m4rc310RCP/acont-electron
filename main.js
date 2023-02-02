const { app, BrowserWindow, Menu } = require('electron')
const isDev = require('electron-is-dev');
const path = require('path');
require('dotenv').config()

const createWindow = () => {
    const win = new BrowserWindow({
      show:false,
      title: "Painel",
      frame:false,
      webPreferences: {
        
        nodeIntegration: true,
        woldSafeExecuteJavaScript:true,
        contextIsolation:true,
        preload: path.join(__dirname, 'preload.js')
      },
    })

    //win.loadURL('https://ps.cmo.foundation/gui');
    win.loadFile(path.join('src','index.html'));

    win.webContents.on('before-input-event', (event, input)=>{
        if (input.control && input.key.toLowerCase()==='i'){
            event.preventDefault();
            win.webContents.openDevTools();
        }
    });

    win.maximize();
    win.show();
}

if (isDev){
    require('electron-reload') (__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    });
}
app.on('window-all-closed', () => {
    //if (process.platform !== 'darwin') 
    app.quit();
});

app.whenReady().then(()=>{
    createWindow();
    app.on('activate', ()=>{
        if (BrowserWindow.getAllWindows().length === 0){
            createWindow();
        }
    });
});


const menu = Menu.buildFromTemplate([])
Menu.setApplicationMenu(menu)