import { FoodModel } from "../../modules/food.model.js";
export const createFood = async (req, res) => {
  const { foodName, price, image, ingredients, address, category } = req.body;

  try {
    const Foods = new FoodModel({
      foodName: foodName,
      price: price,
      image: image,
      address: address,
      ingredients: ingredients,
    });
    Foods.save();
    const rawFooddata = await FoodModel.find();

    res.status(200).send(rawFooddata);
  } catch (error) {
    console.error("Error creating Food:", error);
    res.status(500).json({ success: false, message: "Error creating Food" });
  }
};
