var desiredTableWidth = 140;
var myDoc = app.activeDocument;

for ( var i = 0; i < myDoc.pages.length; i++ ){
  for ( var j = 0; j < myDoc.pages[i].textFrames.length; j++ ){
    myDoc.pages[i].textFrames[j].tables.everyItem().width = desiredTableWidth;
  }
}
