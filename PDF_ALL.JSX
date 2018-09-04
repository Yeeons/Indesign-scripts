var i = 0;

PdfExportSetting = app.pdfExportPresets.itemByName("Proof"); 

while (i < app.documents.length){
    var myDoc = app.documents[i];
    var myFile = myDoc.name.split(".");
    myDoc.exportFile(ExportFormat.PDF_TYPE, new File( myDoc.filePath + "/" + "/PDF" + "/" + myFile[0] +".pdf"), false, PdfExportSetting);
    i++;
}
