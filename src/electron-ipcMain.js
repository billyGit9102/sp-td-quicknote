const electron = require('electron');
const ipcMain = electron.ipcMain;
const ipcMainControl={};

//set mainWindow later in electron starter js
let mainWindow;
ipcMainControl.setMainWindow=(mWin)=>{
    console.log("ipcMain - ipcMainControl.setMainWindow")
    mainWindow=mWin;
}

//dbcontrol
const dbControl= require('./sqlite3/server.js');
dbControl.on("note:getAllNotes:done", function(result){
    console.log("ipc Main - note:getAllNotes:done ")
    console.log(result);
    mainWindow.webContents.send('note:getAllNotes:done', result);
})

ipcMain.on('note:getAllNotes', function(e){
    //mainWindow.webContents.send('item:add', item);
    //addWindow.close();

    console.log("ipcMain js - start -- note:getAllNotes");
    
    const content=dbControl.getAllNotes();  
    //--dbControl will then invoke event note:getAllNotes:done"  
    
    //console.log("ipcMain js - end -- note:getAllNotes");
    // require('./sqlite3/server.js')
    // Still have a reference to addWindow in memory. Need to reclaim memory (Grabage collection)
    //addWindow = null;
});


module.exports=ipcMainControl;