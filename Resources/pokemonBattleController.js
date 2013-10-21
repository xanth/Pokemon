// to return to main menue (quite)
  battleDoneButton.addEventListener('click', function(e){
	 switchWin(mainMenuView);
 });
// to return to pokemon picker to chose new pokemon
  battleBackButton.addEventListener('click', function(e){
	 switchWin(pokemonPicker);
 });
 
 //to animate the move buttons
 pokemonMoveTackle.addEventListener('click', function(){
 	animateBox(pokemonMoveTackle);
 });
 pokemonMoveFly.addEventListener('click', function() {
 	animateBox(pokemonMoveFly);
 });
 
 
 
//All of this code moves the next pokemon button view. Drag and drop requirements
var lastTouchPosition;

function set(point) {
		this.x = point.x;
		this.y = point.y;
};

var nextPokemonPosition = {top: nextPokemon.top, left: nextPokemon.left};
 
nextPokemon.addEventListener('touchstart', function(e){
	var touchPosition = {x: e.x, y: e.y};
	lastTouchPosition = nextPokemon.convertPointToView(touchPosition, pokemonBattle);
});
 
nextPokemon.addEventListener('touchmove', function(e){
	var touchPosition = {x:e.x, y: e.y};
	var newTouchPosition = nextPokemon.convertPointToView(touchPosition, pokemonBattle);
	
	nextPokemon.top += newTouchPosition.y - lastTouchPosition.y;
	nextPokemon.left += newTouchPosition.x - lastTouchPosition.x;

});


//Creates alert window if the next pokemon is over the battle window
nextPokemon.addEventListener('touchend', function(e){
	if (nextPokemon.top > 200){
		var alert = Ti.UI.createAlertDialog({
			message: 'Your Pokemon has been changed',
			ok: 'Lets Battle!',
			title: 'Pokemon Changed'
		}).show();
	};
	Ti.API.info(nextPokemon.top);
	nextPokemon.top = 450;
	nextPokemon.left = 250;
});
 
//this function enlarges the move button when it is pressed and
//scales it back down to normal
function animateBox(animationBox) {
	var matrixAnimation = Ti.UI.create2DMatrix();
	matrixAnimation = matrixAnimation.scale(1.5, 1.5);
	
	var animation = Ti.UI.createAnimation({
		transform: matrixAnimation,
		duration: 1000,
		autoreverse: true
	});
	
	animationBox.animate(animation);
};
