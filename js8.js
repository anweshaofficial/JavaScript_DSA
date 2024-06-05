//Parking Lot Allotment 

class ParkingLot {

    constructor(capacity){
        this.capacity = capacity; 
        this.queue = [];
    }

    parkCar(carId){
        if(this.queue.length < this.capacity){ 

            this.queue.push(carId);
            return 'Car ${carId} has been parked successfully';
        }
        else{
            return 'Parking lot is full';
        }
    }

    releaseCar() {

        if (this.queue.length > 0) {

            const carId = this.queue.shift();
            return 'Car ${carId} has been released successfully';
        }
        else{
            return 'Parking lot is empty';
        }
    }

    listAllCars() {
        return this.queue;
    }
}

//Test Case

// Test ParkingLot
const parkingLot = new ParkingLot(3);
console.log(parkingLot.parkCar("Car1")); // "Car Car1 parked."
console.log(parkingLot.parkCar("Car2")); // "Car Car2 parked."
console.log(parkingLot.parkCar("Car3")); // "Car Car3 parked."
console.log(parkingLot.parkCar("Car4")); // "Parking Lot is full."

console.log(parkingLot.listAllCars()); // Should list ['Car1', 'Car2', 'Car3']

console.log(parkingLot.releaseCar()); // "Car Car1 released."
console.log(parkingLot.releaseCar()); // "Car Car2 released."
console.log(parkingLot.listAllCars()); // Should list ['Car3']

console.log(parkingLot.releaseCar()); // "Car Car3 released."
console.log(parkingLot.releaseCar()); // "Parking Lot is empty."