import React, { useEffect, useState } from "react";
import Footer from "../components/Footer.component";
import RestaurantCard from "../components/Restaurant.card.component";
import Search from "../components/Search.component";
import Axios from "axios";
import server from "../config/server";

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function errors(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
const Restaurant = () => {
  const [LatAndLong, setLatAndLong] = useState(null);
  const [Restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            //If granted then you can directly call your function here
            const LatAndLong =
              navigator.geolocation.getCurrentPosition(success);


          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(success, errors, options);

            console.log(result.state);
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      alert("Sorry Not available!");
    }
  }, []);

  async function success(pos) {
    var crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    setLatAndLong({
      Latitude: crd.latitude,
      Longitude: crd.longitude,
    });

    if (crd.latitude && crd.longitude) {
      async function GetAllRestaurant({ lat, long }) {
        try {
          await Axios({
            method: "GET",
            url: `${server}/restaurant?lat=${lat}&long=${long}`,
          }).then((res) => {
            if (res.status === 200) {
              const restaurant = res.data.Restaurant;
              setRestaurant(restaurant)
            } else {
              alert("Unknown Error");
            }
          });
        } catch (error) {
          alert(error);
        }
      }

      await GetAllRestaurant({ lat: crd.latitude, long: crd.longitude })
    }
  }

  function HandleUpdate(text){
    console.log('Search')
    const NewRestList = Restaurant.filter(item => {
      if(item.Name.match(text)){
        return item
      }
    })

    setRestaurant(NewRestList)
  }

  if (LatAndLong == null) {
    return <>Please Allow Location</>;
  }

  return (
    <div>
      <Search handleSearch={HandleUpdate}/>
      <RestaurantCard Restaurant={Restaurant}/>
      <Footer lat={LatAndLong.Latitude} long={LatAndLong.Longitude} />
    </div>
  );
};

export default Restaurant;
