function saveDoc (width, height, type) {
    var userFolder = (Folder.myDocuments);
    var folderPath = userFolder + "/" + "name";
    var filePath = folderPath + "/" + width + "x" + height + type +".indd";
    if (Folder(filePath).exists == false) {
        Folder(folderPath).create();
    }
     app.documents.add.label = "name";
     app.activeDocument.save(new File(filePath));   
}


function createDocument(docWidth, docHeight, type){

    var myDocument = app.documents.add();
    type = typeFinder(type);

    with(myDocument.documentPreferences){
        if(type == "mm"){
            documentBleedUniformSize = true;
            documentBleedTopOffset = bleedFinder(docWidth);
        }
        
        pageHeight = docHeight + type;  
        pageWidth = docWidth + type;  
        pagesPerDocument = 1;
        facingPages = false;
    }
}

//type finder
function typeFinder(type){
    if(type == "digital"){
        type = "px";
        return type
    } else {
        type = "mm";
	return type
    }
}

// bleed finder
function bleedFinder(docWidth){
    if (docWidth > 350){
	bleed = 25 + "mm";
    } else {
        bleed = 5 + "mm";
    }
    return bleed;
}


createDocument(400, 100, "print");
saveDoc(400, 100, "print");
