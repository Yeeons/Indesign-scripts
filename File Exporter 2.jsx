#targetengine "Session";

// Rename below to your current PDF profile names
var HR = 'GJ Highres'
var LR = 'GJ Low Res'

var nameLR = "_REF"
var nameHR = "_HR"
var noName = ""

var pdf = "PDF"
var png = "PNG"
var idml ="IDML"

Main(HR, nameHR, pdf)  
Main(LR, nameLR, pdf)
Main(LR, noName, png)
Main(HR, noName, idml)

//===================================== FUNCTIONS  ======================================  
function Main(one, two, type) {
    
    var myDoc = app.activeDocument
    var myDocName = myDoc.name
    var myFolder = myDoc.filePath
 
    var myBaseName=myDocName.split(".indd")[0]

    if (type == "PDF") {
        var myPDFExportPreset = app.pdfExportPresets.item(one)
        myDoc.exportFile(ExportFormat.pdfType, File(myFolder + "/" + myBaseName + two + ".pdf"), false, myPDFExportPreset)
    }
    if (type == "PNG"){
        myDoc.exportFile(ExportFormat.PNG_FORMAT, File(myFolder + "/" + myBaseName + two + ".png"), false)
    }
    if (type == "IDML"){
        myDoc.exportFile(ExportFormat.INDESIGN_MARKUP, File(myFolder + "/" + myBaseName + two + ".idml"), false)
        Done()
    } else {
    }
}

function Done() {
    alert("Complete", "Done")
}
