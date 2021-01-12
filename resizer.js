var desiredTableWidth = 140;


var myDoc = app.activeDocument
//var myPath = myDoc.filePath
var nameDoc = myDoc.name

alert(myDoc.pages[0].textFrames.length)

var scaling = app.transformationMatrices.add()

scaling = scaling.scaleMatrix(0.9,0.9)

for ( var i = 0; i < myDoc.pages.length; i++ ){
  for ( var j = 0; j < myDoc.pages[i].textFrames.length; j++ ){
    myDoc.pages[i].textFrames[j].transform(
      CoordinateSpaces.INNER_COORDINATES,
      AnchorPoint.TOP_LEFT_ANCHOR,
      scaling
    )
  }
}
