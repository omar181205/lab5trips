// const {
//     trips,getripswithdailycost
// }=require('../models/trip');

const db_access = require('../db.js');
const db = db_access.db;

const CreateTrip = (req,res) => {
    const {
        destinationname,
        location,
        continent,
        language,
        description,
        flightcost = 0,
        accomadationcost = 0,
        mealcost = 0,
        visacost = 0,
        transportationcost = 0,
        currencycode = 'N/A',

    }=req.body;


    if (!destinationname || !location || ! continent || !language || !description){
        return res.status(400).json({message :' please provide all required fields.'})
    }

    
    
    const retrieveTripById =  (req,res => {
      const id = req.params.id;
      
      const query = ` SELECT * FROM TRIP WHERE ID = ?`;
      
      res.cookie('Tripcreated', `TRIP ID ${id}`,{
     maxAge: 15 * 60 * 1000, //15mins
    httpOnly : true
    });
    
db.get(query,[id],(err,row) => {

    if (err){

        console.log(err);
        return res.status(500).json({message : 'error fetching trip'});
        }
        if (!row) return res.status(404).json({message :'trip not found'})
        
            return res.status(200).json({
                message:'trip retrieved succesfully',
            });

        });
    } );
    
    
    
    const query = `INSERT INTO TRIP ( DESTINATIONNAME , LOCATION,
    CONTINENT , LANGUAGE , DESCRIPTION,
    FLIGHTCOST, ACCOMMODATIONCOST , MEALCOST , VISACOST,
    TRANSPORTATIONCOST,
    CURRENCYCODE) VALUES ( ?,?,?,?,?,?,?,?,?,?,?)` ;

    res.cookie('Tripcreated',destinationname,{
     maxAge: 15 * 60 * 1000, //15mins
    httpOnly : true
    });
    
    db.run(
        query,
        [ destinationname,location,continent,
           language, description , flightcost , accomadationcost,
           mealcost , visacost , transportationcost,currencycode],
           function(err) {
            if (err){
                    console.log(err);
            return res.status(500).json({message :' databasebase error', error : err.message});
            }
        
            
           res.status(201).json({ message : 'trip created successfully'});
        }             
)};

const retreieveALLtrips = (req,res) => {

    db.all('SELECT * FROM TRIP', (err,rows) => {

        if(err) {
            console.log(err);
            return res.status(500).json({message : 'error retrieving trips'});

        }
         res.status(200).json({message :' trips retrieved successfully', data : rows});
    });

};

// const newtrips={
// id:trips.length+1,
// destinationname,
// location,
// continent,
// language,
// description,
// flightcost,
// accomadationcost,
// mealcost,
// visacost,
// transportationcost,
// currencycode,
// dailycost:flightcost+accomadationcost+mealcost+visacost+transportationcost
// };


// trips.push(newtrip);

module.exports = {
    CreateTrip,
    retreieveALLtrips
};