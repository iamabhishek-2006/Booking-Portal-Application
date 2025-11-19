const {getmeDB} = require("../../service/admin/me.service")
const getme = async (req, res) => {
    const {id} = req.user;
    try {
        const data = await getmeDB(id);
        return res.json({
            success:true,
            message:"Information fetched successfully",
            data:data
        })        
    } catch (error) {
        console.log(error);
        return res.json({
            success:false,
            message:"Something went wrong"
        });
    }
}
module.exports = {getme}