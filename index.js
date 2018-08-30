const electron = require('electron');
const {app, BrowserWindow, Menu, ipcMain} = electron;
const path = require('path')
const url = require('url');

process.env.NODE_ENV = "production";

let window, dockWindow;

function createWindow() {
    // Window creation
    window = new BrowserWindow({
        width:800,
        height:600
    });

    // Load index.html page
    window.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Custom menu
    const mainMenu = Menu.buildFromTemplate(menuItems);
    Menu.setApplicationMenu(mainMenu);

    // Close the app
    window.on('closed', () => {
        if(dockWindow != null) {
            dockWindow.close();
        }
        window = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit();
    }
});

// Create a video docker page
function createDocker(videoURL) {

    // Get the display resolution
    let display = electron.screen.getPrimaryDisplay();
    let displayWidth = display.bounds.width;
    let displayHeight = display.bounds.height;

    if(dockWindow == null) {
        dockWindow = new BrowserWindow({
            width: 400,
            height: 260,
    
            // Minimum resizable limit of dock.
            minWidth: 320,
            minHeight: 180+35,
    
            // Start the dockWindow in the bottom right corner of the monitor.
            x: displayWidth - 450,
            y: displayHeight - 310,  
            transparent: true,
            frame: false
        });    
    }
    
    // Load dock.html page
    dockWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'dock.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Send the video URL to dock.html
    dockWindow.webContents.on('did-finish-load', () => {
        dockWindow.webContents.send('video', videoURL);
    });

    // To keep the dock over all other windows
    dockWindow.setAlwaysOnTop(true);
    dockWindow.setVisibleOnAllWorkspaces(true);

    // Resize the dock with aspect ratio
    dockWindow.on('resize', function () {
        setTimeout(function () {
          var size = dockWindow.getSize();
          dockWindow.setSize(size[0], parseInt((size[0] * 9 / 16)+70));
        }, 0);
    });

    // To close the dockWinddow
    dockWindow.on('close', ()=>{
        dockWindow = null;
    });
}

ipcMain.on('video:url', function(e, videoURL) {
    createDocker(videoURL);
    window.minimize();
})

// To close the dock window.
ipcMain.on('close:dockWindow', function(e, close) {
    dockWindow.close();
})

const menuItems = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Quit',
                click() {
                    app.quit();
                }
            }
        ]
    }
]