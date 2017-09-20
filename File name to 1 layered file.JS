var docRef = app.activeDocument;

var fileName = docRef.name;
var currentLayer = docRef.layers;  

if (currentLayer.length < 2) {
	docRef.activeLayer.name = fileName;
}
