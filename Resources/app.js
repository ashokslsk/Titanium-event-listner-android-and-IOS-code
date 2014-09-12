//window -> view -> label

var win = Titanium.UI.createWindow({
	backgroundColor: 'blue'
});

var view = Titanium.UI.createView();	

// Create a Label.
var aLabel = Ti.UI.createLabel({
	text : 'Hi Dunst',
	color : 'red',
	height : 40,
	width : 150,
	top : 150,
	textAlign : 'center'
});

// Create a Button.
var aButton = Ti.UI.createButton({
	title : 'Press-Me !!',
	height : 35,
	width : 100,
	top : 35,
	color:'yellow'
});

// Listen for click events.
aButton.addEventListener('click', function(e) {
	alert.show();
});
// adding alert 
var alert = Ti.UI.createAlertDialog({
	title:'do you want to really delete this ?',
	message:'you cannot get it it back',
	buttonNames:['ok','cancel','Help!'],
	cancel:1
});

//adding alert event listners()
alert.addEventListener('click',function(e){
	Ti.API.info(e.index);
});

// Add to the parent view.
view.add(aButton);

// Add to the parent view.
view.add(aLabel);

// add view to window
win.add(view);

//open window

win.open();



