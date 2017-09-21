var myDialog = new Window ("dialog", "LayerRename");
var stxt = myDialog.add ("group");
stxt.add ("statictext", undefined, "Rename layer to file name?");
          
var myButtonGroup = myDialog.add ("group");
var ok = myButtonGroup.add ("button", undefined, "Yes");
var cancel = myButtonGroup.add ("button", undefined, "No");

var docRef = app.activeDocument;
var fileName = docRef.name;
var currentLayer = docRef.layers;
          
ok.onClick = function(){
	docRef.activeLayer.name = fileName;
	myDialog.close()
}
cancel.onClick = function(){
	myDialog.close()
}

//Checks to see if there are more then 1 layer. Nothing happens if there is.
if (currentLayer.length < 2) {
	// Checks to see if the layer is already named. Nothing happens if it is.
	if (docRef.activeLayer.name != fileName) {
    	myDialog.show();
	}
}
