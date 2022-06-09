import React from "react";
import warehousemanagement from "../../assets/project/warehouse-management.png";
import cryptoComputer from "../../assets/project/Crypto-computer.png";

const Projects = () => {
  return (
    <div>
      <h2 className="text-center text-5xl mb-10">My Recent Projects</h2>
      <div className="flex justify-evenly">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Crypto Computer */}
          <div class="card w-96 bg-base-00 shadow-xl">
            <figure>
              <img src={cryptoComputer} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Crypto Computer</h2>
              <p>
                A full-stack responsive website.User buy any products with
                online paying system their credit card, canceled any order
                products, also make a review from the dashboard. Admin can
                add/delete product, make another admin and manage orders.
              </p>
              <div class="flex justify-evenly mt-8">
                <button className="btn btn-xs">Live Site</button>
                <button className="btn btn-xs">Server GitHub</button>
                <button className="btn btn-xs">Client GitHub</button>
              </div>
            </div>
          </div>
          {/* Crypto Computer */}

          {/* Buraq Bike Warehouse */}
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="w-1/6" src={warehousemanagement} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Buraq Bike Warehouse </h2>
              <p>
                A full-stack responsive website.User buy any products with
                online paying system their credit card, canceled any order
                products, also make a review from the dashboard. Admin can
                add/delete product, make another admin and manage orders.
              </p>
              <div class="flex justify-evenly mt-8">
                <button className="btn btn-xs">Live Site</button>
                <button className="btn btn-xs">Server GitHub</button>
                <button className="btn btn-xs">Client GitHub</button>
              </div>
            </div>
          </div>
          {/* Buraq Bike Warehouse */}

          {/* The Financial 360  */}
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="w-1/6" src={warehousemanagement} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">The Financial 360 </h2>
              <p>
                A full-stack responsive website.User buy any products with
                online paying system their credit card, canceled any order
                products, also make a review from the dashboard. Admin can
                add/delete product, make another admin and manage orders.
              </p>
              <div class="flex justify-evenly mt-8">
                <button className="btn btn-xs">Live Site</button>
                <button className="btn btn-xs">Server GitHub</button>
                <button className="btn btn-xs">Client GitHub</button>
              </div>
            </div>
          </div>
          {/* The Financial 360  */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
