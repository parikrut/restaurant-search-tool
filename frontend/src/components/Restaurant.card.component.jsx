import React from "react";

const RestaurantCard = ({Restaurant}) => {
  if(!Restaurant){
    return<></>
  }
  return (
    <section class="wrapper">
      <div class="container">
        <div class="row">
          {Restaurant.map((item) => {
            return (
              <>
                <div class="col-md-4 mt-3">
                  <div class="card text-white card-has-bg click-col">
                    <div class="card-img-overlay d-flex flex-column">
                      <div class="card-body">
                        <small class="card-meta mb-2">
                          Permit ID: {item.Permit_ID}
                        </small>
                        <h4 class="card-title mt-0 ">
                          <a class="text-white" herf="#">
                            Name: {item.Name}
                          </a>
                        </h4>
                        <small>
                          <i class="far fa-clock"></i> Address: {item.Address}
                        </small>
                      </div>
                      <div class="card-footer">
                        <div class="media">
                          <div class="media-body">
                            <h6 class="my-0 text-white d-block">
                              Lat : {item.Lattitude}, Long: {item.Longitude}
                            </h6>
                            <small>Distance From Current Location: {item.Distance} KM</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RestaurantCard