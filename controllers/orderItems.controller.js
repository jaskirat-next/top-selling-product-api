import { OrderItem } from "../models/orderItem.model.js"

export const addOrderItems = async (req, res) => {
    try {
        const data = new OrderItem(req.body);
        const saveData = await data.save(data);
        res.status(200).json({
            msg: "Data Saved",
            saveData
        })
    }catch(error) {
        console.log(error)
    }
}

export const topSelling = async (req, res) => {
    try {
        const product = await OrderItem.aggregate([
            {
                $group: {
                    _id: "$product_id",
                    totalQuantity: {$sum: "$quantity"}
                }
            },
            {$sort: {totalQuantity: -1}},
            {$limit: 3},
            {
                $lookup: {
                    from: "products",
                    localField: "_id",
                    foreignField: "_id",
                    as: "productInfo"
                }
            },
            {$unwind: "$productInfo"},
            {
                $project: {
                    product_id: "$productInfo._id",
                    name: "$productInfo.name",
                    price: "$productInfo.price",
                    image: "$productInfo.image",
                    totalQuantity: 1
                }
            }
        ]);

        res.status(200).json({
            msg: "Top Selling",
            product
        })
    }catch(error) {
        console.error(error)
    }
}