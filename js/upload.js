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
