const electron = require('electron');
const ipcMain = electron.ipcMain;
const db= require('./sqlite3/server.js');
ipcMain.on('item:add', function(e, item){
    //mainWindow.webContents.send('item:add', item);
    //addWindow.close();

    console.log("ipcMain"+item);
    db.insert(item)
    // require('./sqlite3/server.js')
    // Still have a reference to addWindow in memory. Need to reclaim memory (Grabage collection)
    //addWindow = null;
});

ipcMain.on('getContent', function(e, item){
    //mainWindow.webContents.send('item:add', item);
    //addWindow.close();

    console.log("ipcMain"+item);
    let id=1
    const content=db.getContent(id)
    // require('./sqlite3/server.js')
    // Still have a reference to addWindow in memory. Need to reclaim memory (Grabage collection)
    //addWindow = null;
});