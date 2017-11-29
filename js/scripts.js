var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "triceratops";

var dinosaurUppreCase = dinosaur.toUpperCase();

var textCharsAfter = text.replace("Velociraptor", dinosaurUppreCase);

alert(textCharsAfter.slice(0,textCharsAfter.length/2));
