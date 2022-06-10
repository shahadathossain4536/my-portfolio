import React from "react";
import TheFinancial360HomeNavarBanner from "../../assets/project/TheFinancial360/TheFinancial360HomeNavarBanner.png";
import TheFinancial360Service from "../../assets/project/TheFinancial360/TheFinancial360Service.png";
import TheFinancial360Footer from "../../assets/project/TheFinancial360/TheFinancial360Footer.png";
import TheFinancial360Login from "../../assets/project/TheFinancial360/TheFinancial360Login.png";
import SignUp from "../../assets/project/TheFinancial360/SignUp.png";

const TheFinancial360 = () => {
  return (
    <div>
      <div className="flex justify-center lg:justify-evenly flex-col lg:flex-row bg-base-200">
        <h2>The Financial 360</h2>
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
      {/* s-1 */}
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <div>
            <div class="carousel w-full">
              <div id="item1" class="carousel-item w-full">
                <img src={TheFinancial360HomeNavarBanner} class="w-full" />
              </div>
              <div id="item2" class="carousel-item w-full">
                <img src={TheFinancial360Service} class="w-full" />
              </div>
              <div id="item3" class="carousel-item w-full">
                <img src={TheFinancial360Footer} class="w-full" />
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
              The home page will have a navbar, banner, services section, and
              footer.
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
                <img src={TheFinancial360Login} class="w-full" />
              </div>
              <div id="items2" class="carousel-item w-full">
                <img src={SignUp} class="w-full" />
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
            <h1 class="text-5xl font-bold">Login Page</h1>
            <p class="py-2">
              User Can log in / Sign Up by Email and Password and Google, GitHub
              Account
            </p>
          </div>
        </div>
      </div>
      {/* s-2 */}

      {/* s-3 */}
      {/* <div>
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row">
            <div>
              <div class="carousel w-full">
                <div id="itemA1" class="carousel-item w-full">
                  <img src={TheFinancial360HomeNavarBanner} class="w-full" />
                </div>
                <div id="itemA2" class="carousel-item w-full">
                  <img src={TheFinancial360HomeNavarBanner} class="w-full" />
                </div>
                <div id="itemA3" class="carousel-item w-full">
                  <img src={TheFinancial360HomeNavarBanner} class="w-full" />
                </div>
                <div id="itemA4" class="carousel-item w-full">
                  <img src={TheFinancial360HomeNavarBanner} class="w-full" />
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
                <a href="#itemA4" class="btn btn-xs">
                  4
                </a>
              </div>
            </div>
            <div>
              <h1 class="text-5xl font-bold">Admin Dashboard</h1>
              <p class="py-2">
                If an admin log in, an admin will see My Profile, Manage All
                Orders, Add A Product, Make Admin, Manage Products.Admin can
                make ‍any user admin. Admin can add/delete product.
              </p>
              <p class="py-2">
                On the Manage All Orders page for the admin, the logged-in admin
                will see the orders placed by every user. If multiple users use
                this website to place orders, everyone's order will be displayed
                here. The orders that are not paid will show unpaid. And the
                orders that are paid, an Admin can update the status of a paid
                order
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* s-3 */}
    </div>
  );
};

export default TheFinancial360;
