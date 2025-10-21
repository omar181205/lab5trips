const {
    trips,getripswithdailycost
}=require('../models/trip');
const CreateTrip = (req,res) => {
    const {
destinationname,
location,
continent,
language,
description,
flightcost,
accomadationcost,
mealcost,
visacost,
transportationcost,
currencycode,


    }=req.body;

const newtrips={
id:trips.length+1,
destinationname,
location,
continent,
language,
description,
flightcost,
accomadationcost,
mealcost,
visacost,
transportationcost,
currencycode,
dailycost:flightcost+accomadationcost+mealcost+visacost+transportationcost
};


trips.push(newtrip);
}
module.exports = {CreateTrip,};