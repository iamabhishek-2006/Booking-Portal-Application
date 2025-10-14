const { addairportDB, getAirportsDB, updateAirPortDB, deleteAirportDB} = require("../../service/admin/airport.service");

const createAirport=async(req,res)=>{
    const {airport_Code,airport_Name,city,country}=req.body;

    if(!airport_Code || !airport_Name || !city || !country){

        return res.json({
          success: false,
          error: "all fields are required",
          require: ["aiport_code", "airport_Name", "city", "country"],
        });
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
        error:"something went wrong ",
    })
   }
}

const deleteAirport=async(req,res)=>{
  const {id}=req.params;
  try {
  const data = await deleteAirportDB(id);
  return res.json({success:true,message:" airport  deleted successfully",data:data})
  } catch (error) {
  console.log(error);
  return res.json({success:false,error:" sorry data not deleted "});
  }
}

const UpdateAirPort=async(req,res)=>{
  const {id}=req.params;
  console.log(id);
  const updateData=req.body;

  try {
  const data=await updateAirPortDB(id,updateData);
  console.log(data);
  return res.status(200).json({success:true,message:"AirPort updated successfully",data:data});
  } catch (error) {
  console.log(error);
  return res.status(500).json({success:false,error:" something went wrong backend error"});
  }


}

const getAirports=async(req,res)=>{
  const data=await getAirportsDB();
  return res.json({success:true,data:data})
}



module.exports={createAirport,getAirports,deleteAirport,UpdateAirPort}

