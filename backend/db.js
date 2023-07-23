const mongoose = require("mongoose");
const mongoURl =
  "mongodb+srv://sameer:funbox%40321@cluster0.onkrpld.mongodb.net/gofoodiesmern?retryWrites=true&w=majority";
const mongoDB = async () => {
  mongoose.set("strictQuery", false);
  await mongoose.connect(
    mongoURl,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) console.log("...", err);
      else {
        console.log("Connected to MongoDB");
        const fetched_data = await mongoose.connection.db.collection(
          "food_items"
        );
        fetched_data.find({}).toArray(async function (err, data) {
          const foodCategory = await mongoose.connection.db.collection(
            "foodCategory"
          );

          foodCategory.find({}).toArray(function (err, catData) {
            if (err) console.log(err);
            else {
              global.food_items = data;
              global.foodCategory = catData;
            }
          });
          // if (err) {
          //   console.log(err);
          // } else {
          //   global.food_items = data;
          // }
        });
      }
    }
  );
};

module.exports = mongoDB;

// try {
//   mongoose.set("strictQuery", false);
//   await mongoose.connect(mongoURl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   console.log("MongoDB Connected...");
//   const fetched_data = await mongoose.connection.db.collection("food_items");
//   fetched_data.find({}).toArray(function (err, data) {
//     if (!err && data != null) {
//       return res.json({ status: 200, result: data });
//     } else {
//       throw new Error("Error fetching food items");
//       console.log(data);
//     }
//   });
// } catch (err) {
//   console.error(err.message);
//   // make the process fail
//   process.exit(1);
// }
