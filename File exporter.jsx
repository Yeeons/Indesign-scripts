var myDoc = app.activeDocument;
var myFile = myDoc.name.split(".");  

// Base settings so nobody over rides.
PdfExportSetting = app.pdfExportPresets.itemByName("test"); 
app.jpegExportPreferences.jpegQuality = JPEGOptionsQuality.low; // low medium high maximum  
app.jpegExportPreferences.exportResolution = 300;  

exporterFormat (ExportFormat.JPG, "APPROVAL/JPEG", ".jpg")
exporterFormat (ExportFormat.PDF_TYPE, "APPROVAL/PDF", ".pdf")

function exporterFormat(filetype, home, extention){
    myDoc.exportFile(filetype, new File( myDoc.filePath + "/" + home + "/" + myFile[0] +extention), false, PdfExportSetting);
}
