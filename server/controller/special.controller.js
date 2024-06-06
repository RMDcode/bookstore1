import Special from "../modal/special.modal.js";

export const getSpecial=async(req,res)=>{
    try {
        const special = await Special.find();
        res.status(200).json(special);
    }catch(error){
        console.log("Error:",error);
        res.status(500).json(error);
    }
};