import React from "react";

import BuraqBikeWarehouseHomeNavbar from "../../assets/project/BuraqBikeWarehouse/BuraqBikeWarehouseHomeNavbar.png";
import BuraqBikeWarehouseHomeProducts from "../../assets/project/BuraqBikeWarehouse/BuraqBikeWarehouseHomeProducts.png";
import BuraqBikeWarehouseHomeFooter from "../../assets/project/BuraqBikeWarehouse/BuraqBikeWarehouseHomeFooter.png";
import BuraqBikeWarehouseManageOneItem from "../../assets/project/BuraqBikeWarehouse/BuraqBikeWarehouseManageOneItem.png";
import login from "../../assets/project/BuraqBikeWarehouse/login.png";
import BuraqBikeWarehouseAddItem from "../../assets/project/BuraqBikeWarehouse/BuraqBikeWarehouseAddItem.png";
import BuraqBikeWarehouseAddShoroom from "../../assets/project/BuraqBikeWarehouse/BuraqBikeWarehouseAddShoroom.png";

const BuraqBikeWarehouse = () => {
  return (
    <div>
      <div className="flex justify-center lg:justify-evenly flex-col lg:flex-row bg-base-200">
        <h2>Buraq Bike Warehouse</h2>
        <a href="https://warehouse-management-bc46b.web.app" target="_blank">
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
      {/* s-1 */}
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <div>
            <div class="carousel w-full">
              <div id="item1" class="carousel-item w-full">
                <img src={BuraqBikeWarehouseHomeNavbar} class="w-full" />
              </div>
              <div id="item2" class="carousel-item w-full">
                <img src={BuraqBikeWarehouseHomeProducts} class="w-full" />
              </div>
              <div id="item3" class="carousel-item w-full">
                <img src={BuraqBikeWarehouseHomeFooter} class="w-full" />
              </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
              <a href="#item1" class="btn btn-xs">
                1
              </a>
              <a href="#item2" class="btn btn-xs">
                2
              </a>
              <a href="#item3" class="btn btn-xs">
                3
              </a>
            </div>
          </div>
          <div>
            <h1 class="text-4xl font-bold">Home Page</h1>
            <p class="py-6">
              The home page has a navbar, banner, item, and footer.There are six
              items in the Items section. Each item has a name, picture,
              description, price, quantity, supplier name, and an update button.
            </p>
          </div>
        </div>
      </div>
      {/* s-1 */}

      {/* s-2 */}
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div>
            <div class="carousel w-full">
              <div id="items1" class="carousel-item w-full">
                <img src={BuraqBikeWarehouseHomeProducts} class="w-full" />
              </div>
              <div id="items2" class="carousel-item w-full">
                <img src={BuraqBikeWarehouseManageOneItem} class="w-full" />
              </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
              <a href="#items1" class="btn btn-xs">
                1
              </a>
              <a href="#items2" class="btn btn-xs">
                2
              </a>
            </div>
          </div>
          <div>
            <h1 class="text-5xl font-bold">Update Item Page</h1>
            <p class="py-2">
              User Clicking on the Update button will take the user to the
              inventory private route.
            </p>
            <p class="py-2">
              The page displays detailed information about the item name,
              picture, description, price, quantity, supplier name, sale, etc.
              This page has a button called Delivery. Once this button is
              clicked, it decreases the number of items one by one, and the
              change in quantity is displayed on the website.
            </p>
            <p class="py-2">
              There will be a small form on the page. The from will say, restock
              the items. user has an input field where the user can put some
              numbers. And pressing a button increases the number of items.
            </p>
          </div>
        </div>
      </div>
      {/* s-2 */}

      {/* s-3 */}
      <div>
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row">
            <div>
              <div class="carousel w-full">
                <div id="itemA1" class="carousel-item w-full">
                  <img src={login} class="w-full" />
                </div>
                <div id="itemA2" class="carousel-item w-full">
                  <img src={BuraqBikeWarehouseAddItem} class="w-full" />
                </div>
                <div id="itemA3" class="carousel-item w-full">
                  <img src={BuraqBikeWarehouseAddShoroom} class="w-full" />
                </div>
              </div>
              <div class="flex justify-center w-full py-2 gap-2">
                <a href="#itemA1" class="btn btn-xs">
                  1
                </a>
                <a href="#itemA2" class="btn btn-xs">
                  2
                </a>
                <a href="#itemA3" class="btn btn-xs">
                  3
                </a>
              </div>
            </div>
            <div>
              <h1 class="text-5xl font-bold">Other Route</h1>
              <p class="py-2">
                User Login/SignUp Email and Password authentication system.
                Loggin user add any products.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* s-3 */}
    </div>
  );
};

export default BuraqBikeWarehouse;
