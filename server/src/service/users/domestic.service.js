const Domestic = require("../../model/Domestic");

const DomesticBookingDB=async({seatsBooked,travelingType},flight,user)=>{
    const BookingData=new Domestic({seatsBooked,travelingType,flight,user});
    return  (await BookingData.save()).populate("flight");
}

const DomesBookCancelDB=()=>{}

module.exports={DomesticBookingDB,DomesBookCancelDB};
