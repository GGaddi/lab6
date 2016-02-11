var palettes = require('../palettes.json');

exports.randomPalette = function(req, res) {
	// get a random palette from the top ones
	var randomPalette = palettes[Math.floor(palettes.length * Math.random())];
	//res.send('Your random palette is called: ' + randomPalette['title']);
	res.json(randomPalette);
}

/*var colors = [
      "#FF4242",
      "#F4FAD2",
      "#D4EE5E",
      "#E1EDB9",
      "#F0F2EB"
    ]; */


/*$('body').css('background-color', colors[0]);
$('.thumbnail').css('background-color', colors[1]);
$('h1, h2, h3, h4, h5, h5').css('color', colors[2]);
$('p').css('color', colors[3]);
$('.project img').css('opacity', .75); */