const electron = require('electron');
const ipcMain = electron.ipcMain;


//dbcontrol
const dbControl= require('./sqlite3/server.js');
dbControl.on("note:getAllNotes:done",function(result){
    console.log("ipc Main -note:getAllNotes:done ")
    console.log(result);
})

ipcMain.on('note:getAllNotes', function(e){
    //mainWindow.webContents.send('item:add', item);
    //addWindow.close();

    console.log("ipcMain js - start -- note:getAllNotes");
    
    
    const content=dbControl.getAllNotes();    
    
    //console.log("ipcMain js - end -- note:getAllNotes");
    // require('./sqlite3/server.js')
    // Still have a reference to addWindow in memory. Need to reclaim memory (Grabage collection)
    //addWindow = null;
});

