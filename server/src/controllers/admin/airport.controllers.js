const { addairportDB, getAirportsDB } = require("../../service/admin/airport.service");

const createAirport=async(req,res)=>{
    const {airport_Code,airport_Name,city,country}=req.body;

    if(!airport_Code || !airport_Name || !city || !country){
        return res.json({success:false,error: "all fields are required"});
    }

   try {
     const data = await addairportDB(req.body);
     return res.status(200).json({
       success: true,
       message: "Airport addedd successfully",
       data: data,
     });
   } catch (error) {
    console.log(error);
    return res.status(500).json({
        success:false,
        error:"something went wrong",
    })
   }
}

const getAirports=async(req,res)=>{
  const data=await getAirportsDB();
  return res.json({success:true,data:data})
}


module.exports={createAirport,getAirports}

