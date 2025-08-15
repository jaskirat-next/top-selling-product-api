import { Product } from "../models/product.model.js"


export const addProduct = async (req, res) => {
    try {
        const data = new Product(req.body);
        const saveData = await data.save();
        res.status(200).json({
            msg: "Data Saved",
            saveData
        })
    }catch(error) {
        console.error(error)
    }
}