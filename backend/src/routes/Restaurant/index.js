const { Router } = require("express");
const router = Router();
const RestaurantDataSet = require("../../dataset/restaurant.json");
const turf = require("../../../node_modules/@turf/turf");

const Restaurant = (app) => {
  app.use("/restaurant", router);

  router.get("/", async function (req, res) {
    try {
      const { lat, long } = req.query;
      console.log(req.url);
      // Calculate the Distance from the Lat and Long
      let RefinedRestaurants = RestaurantDataSet;
      if (lat && long && RestaurantDataSet) {
        const UserPoint = turf.point([parseFloat(long), parseFloat(lat)]);

        RefinedRestaurants = RestaurantDataSet.map((item) => {
          if (item.Longitude != "" && item.Lattitude != "") {
            const RestaurantPoint = turf.point([
              parseFloat(item.Longitude),
              parseFloat(item.Lattitude),
            ]);

            const options = { units: "kilometers" };
            const distance = turf.distance(UserPoint, RestaurantPoint, options);
            let NewItem = { ...item, Distance: distance.toFixed(0) };
            return NewItem;
          }
        });

        //Sort the Array According to the Distance
        RefinedRestaurants.sort((a, b) => a.Distance - b.Distance);

        // Remove Null and undefined values in array
        RefinedRestaurants = RefinedRestaurants.filter((item) => {
          if (item != null || item != undefined) {
            return item;
          }
        });
      }

      res.status(200).send({
        Restaurant: RefinedRestaurants,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  });
};

module.exports.Restaurant = Restaurant;
