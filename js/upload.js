var myDropzone = new Dropzone("div#upload", { 
    thumbnail : function(file, dataUrl){
        chrome.runtime.sendMessage({data: "imgUploaded", imgData: {
            dataURL:file.dataURL,
            width:file.width,
            height:file.height
        }});
        myDropzone.removeAllFiles();
    },
    url:'stub'
});
h2 = document.getElementById('h2');
h2.innerText = chrome.i18n.getMessage("h2_title") + '.';