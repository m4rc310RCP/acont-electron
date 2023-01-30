const {ipcRenderer, contextBridge} = require('electron');


contextBridge.exposeInMainWorld('electron', {
    notificationApi: {
        sendNotification(message){
            console.log(message);
            ipcRenderer.send('notification', message)
        }
    },
    batteryApi:{},
    filesApi:{},
});