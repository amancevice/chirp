const webview = document.getElementById('twitter')
const { remote, ipcRenderer } = require('electron')
//const Analytics = require('electron-google-analytics')

//new Analytics.default('UA-45226320-3')

const shell = remote.shell

webview.addEventListener('dom-ready', () => {
  // add modified twitter darkmode styles here!
  // https://userstyles.org/styles/152421/dark-mobile-twitter
  webview.insertCSS('[role="main"] span,[role="banner"] span,textarea,[dir="auto"]{color:#eaeaea !important}[role="button"][type="button"] div{color:black !important}[role="main"],[role="main"] div{background-color:#213548 !important}[role="banner"] div,[role="banner"] a{background-color:#21303f !important}[role="article"] a > div,[aria-label^="Timeline"] > div > div > div{border-color:#324e62 !important}')
})

webview.addEventListener('new-window', e => {
  e.preventDefault()
  shell.openExternal(e.url)
})
