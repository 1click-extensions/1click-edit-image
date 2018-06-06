chrome.runtime.setUninstallURL("https://1ce.org");

if (!localStorage.created) {
  chrome.tabs.create({ url: "https://1ce.org" });
  var manifest = chrome.runtime.getManifest();
  localStorage.ver = manifest.version;
  localStorage.created = 1;
}
chrome.browserAction.onClicked.addListener(function(tab){
  //console.log('clicke');
  chrome.tabs.create({"url" : chrome.runtime.getURL('pages/upload.html')});  
 });

 chrome.runtime.onMessage.addListener(function (data, sender, callback) {
  //console.log(sender)
  switch (data.data) {
      case 'imgUploaded':
        //console.log(data.imgData);
        screenshot.createBySimpleImg(data.imgData.dataURL, data.imgData.width, data.imgData.height);
        if( sender.tab){
          //console.log('sender.tab.id', sender.tab.id)
          chrome.tabs.remove(sender.tab.id);
        }
        break;
    }
});
