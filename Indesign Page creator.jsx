function saveDoc (width, height, type, campaign, asset_no) {
    var userFolder = (Folder.myDocuments);
    var folderPath = userFolder + "/" + "name";
    type = typeFinder(type);

    if (asset_no == ""){
        asset_no = "NoNumber";
    }

    var filePath = folderPath + "/" + asset_no + "_" + campaign + "_" + width + "x" + height + type +".indd";
    
	if (Folder(filePath).exists == false) {
        Folder(folderPath).create();
    }
    
    app.documents.add.label = "name";
    app.activeDocument.save(new File(filePath));
    app.activeDocument.close(); 
}


function createDocument(docWidth, docHeight, type){

    var myDocument = app.documents.add();
    type = typeFinder(type);

    with(myDocument.documentPreferences){
        if(type == "mm"){
            documentBleedUniformSize = true;
            documentBleedTopOffset = bleedFinder(docWidth);
        } else {
            intent = 1768846455;
        }
        pageHeight = docHeight + type;  
        pageWidth = docWidth + type;  
        pagesPerDocument = 1;
        facingPages = false;
    }
}

//type finder - works out if the document is digital or print
function typeFinder(type){
    if(type == "Digital"){
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



// file creator - combines the save and creation part
function fileCreator(width, height, type, campaign, asset_no){
    x = createDocument(width, height, type);
    y = saveDoc(width, height, type, campaign, asset_no);
}

//Content here

fileCreator(531.2, 801.2, "Print", "Monopoly Generic", "AUG_001");
