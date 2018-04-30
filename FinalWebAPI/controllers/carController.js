var Car = require('../models/car');

// Display list of cars
exports.car_list = function(req, res, next) {

    Car.find({}, function(error, cars) {
        var carArray = [];
        var list = {
        "@context" : "http://schema.org/",
        "@type": "ItemList",
        "name": "List of Cars",
        "url": "http://localhost:8000/",
        "itemListElement": carArray
        }

        for(x = 0; x < cars.length; x++) {
            carArray.push({
            "@type": "Car",
            "model": cars[x].model,
            "url": "http://localhost:8000" + cars[x].url
            })
        }

        res.send(list);
    });
}

exports.car_detail = function(req, res, next) {
    Car.findById(req.params.id, function(error, car_object){
        // This json-ld representation comes from the step 4 as well
        // but it is the one for the individual items in your collection.
        // In my case, it is the 'Person representation' from step 4.
        var car = {
            "@context": "http://schema.org/",
            "@type": "Car",
            "model": car_object.model,
            "url":"http://localhost:8000" + car_object.url,
            "manufacturer" : car_object.manufacturer,
            "modelDate" : car_object.modelDate,
            "bodyType" : car_object.bodyType
            }
        res.send(car);
    });
}