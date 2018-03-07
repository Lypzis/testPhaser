const electron = require('electron');
const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

////////////////////////////////////////////////////////////////////////////////////
// Main Window
app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        width: 800, 
        height: 600,
        resizable: false,
        frame: false,
        show: false,
        //fullscreen: true,
        icon: __dirname + '/img/icon2.png'
    });
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    mainWindow.once('ready-to-show', () => { 
        mainWindow.show(); 
    });
});

ipcMain.on('quit', () => {
    app.quit();
});