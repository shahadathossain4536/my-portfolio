import React from "react";
import warehouseManagement from "../../assets/project/warehouse-management.png";
import TheFinancial360 from "../../assets/project/The-Financial-360.png";
import cryptoComputer from "../../assets/project/Crypto-computer.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <h2 className="text-center text-5xl mb-10">My Recent Projects</h2>
      <div className="flex justify-evenly">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Crypto Computer */}
          <div class="card w-80 lg:w-96 bg-base-00 shadow-xl">
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
              <div class="flex justify-between mt-8">
                <a
                  href="https://manufacturer-website-client.web.app"
                  target="_blank"
                >
                  <button className="btn btn-xs">Live Site</button>
                </a>
                <a
                  href="https://github.com/shahadathossain4536/manufacturer-website-server-side"
                  target="_blank"
                >
                  <button className="btn btn-xs">Server GitHub</button>
                </a>
                <a
                  href="https://github.com/shahadathossain4536/manufacturer-website-client-side"
                  target="_blank"
                >
                  <button className="btn btn-xs">Client GitHub</button>
                </a>
              </div>
              <Link to="/cryptoComputer">
                <button className="btn btn-xs w-full max-w-xs">Explore</button>
              </Link>
            </div>
          </div>
          {/* Crypto Computer */}

          {/* Buraq Bike Warehouse */}
          <div class="card w-80 lg:w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="" src={warehouseManagement} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Buraq Bike Warehouse </h2>
              <p>
                This is another full stack responsive web application.Register
                user update stock quantity, Delete any products and add any
                products. Email Password authentication system.JWT authorization
                system.
              </p>
              <div class="flex justify-between mt-8">
                <a
                  href="https://warehouse-management-bc46b.web.app"
                  target="_blank"
                >
                  <button className="btn btn-xs">Live Site</button>
                </a>
                <a
                  href="https://github.com/shahadathossain4536/warehouse-management-server-side"
                  target="_blank"
                >
                  <button className="btn btn-xs">Server GitHub</button>
                </a>
                <a
                  href="https://github.com/shahadathossain4536/warehouse-management-client-side"
                  target="_blank"
                >
                  <button className="btn btn-xs">Client GitHub</button>
                </a>
              </div>
              <Link to="/buraqBikeWarehouse">
                <button className="btn btn-xs w-full max-w-xs">Explore</button>
              </Link>
            </div>
          </div>
          {/* Buraq Bike Warehouse */}

          {/* The Financial 360  */}
          <div class="card w-80 lg:w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="" src={TheFinancial360} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">The Financial 360 </h2>
              <p>
                It is a simple react website with routing and firebase
                authentication. Users can log in using email-password or google
                and Git-Hub.Users cannot access the checkout page without login.
              </p>
              <div class="flex justify-between mt-8">
                <a href="https://assignment-10-1507a.web.app" target="_blank">
                  <button className="btn btn-xs">Live Site</button>
                </a>
                <a
                  href="https://github.com/shahadathossain4536/independent-service-provider"
                  target="_blank"
                >
                  <button className="btn btn-xs">Client GitHub</button>
                </a>
              </div>
              <Link to="/cryptoComputer">
                <button className="btn btn-xs w-full max-w-xs">Explore</button>
              </Link>
            </div>
          </div>
          {/* The Financial 360  */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
