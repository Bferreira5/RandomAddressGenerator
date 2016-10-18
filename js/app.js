

 	
var numberXXX = ['200', '201', '204', '206', '300', '205'];
var addressY = ['Dolphin Street', 'Country Street', 'Zero Street', 'Main Street', 'Harvest Street', 'Infinite Loop'];
var addressYY = ['Dartmouth', 'Boston', 'New Bedford', 'Tuxtla', 'Cancun', 'Java'];
var addressYYY = ['NY', 'LA', 'MA', 'MX', 'CA', 'NC'];
var numberXX = ['44506', '02740', '99999', '02748', '02739', '02345'];


var x = 0

function funnyStartup () {
	var random1 = Math.floor((Math.random() * numberXXX.length)),
	 	random2 = Math.floor((Math.random() * addressY.length)),
	 	random3 = Math.floor((Math.random() * addressYY.length)),
	 	random4 = Math.floor((Math.random() * addressYYY.length)),
	 	random5 = Math.floor((Math.random() * numberXX.length));
	xForY.innerHTML = numberXXX[random1] + " " + addressY[random2] + " " + addressYY[random3] + "," + " "  + addressYYY[random4] + " " + numberXX[random5];
}


var createInput = document.getElementById('create');
	createInput.addEventListener('click', funnyStartup);



