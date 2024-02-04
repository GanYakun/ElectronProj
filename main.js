const { app, BrowserWindow } = require('electron')


const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 800
  })
    win.loadFile('index.html')
    app.on('window-all-closed', () => {
      createWindow2()
    })
}

const createWindow2 = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 800
  })
  win.loadFile('hello.html')
}

app.whenReady().then(() => {
  createWindow()
})




