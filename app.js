const {app, BrowserWindow} = require('electron')

function createWindow() {
    win = new BrowserWindow({width: 376, height: 475, resizable: false})

    win.loadFile("calculator.html")
    win.setMenu(null);
    win.on('closed', () => {
        win = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
    {
        app.quit();
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
})