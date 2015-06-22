function Car (make, model, color) {
	this.make = make;
	this.model = model;
	this.color = color;
}

function CarFactory (make, model, color, numberOfCars ) {
	this.make = make;
	this.model = model;
	this.color = color;
	this.numberOfCars = numberOfCars;
	this.carArray = [];

	this.manufacture = function makeMeCars (){
		for (var i = 0; i < this.numberOfCars; i++){
			var car = new Car(this.make, this.model, this.color);
		
		this.carArray.push(car);
	}
}
};

var audiFactory = new CarFactory("Audi", "R8", "red", 5);
var bmwFactory = new CarFactory("BMW", "325i", "black", 3);

bmwFactory.manufacture();
bmwFactory.numberOfCars = 12;
console.log(bmwFactory.carArray);