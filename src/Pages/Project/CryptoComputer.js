import React from "react";
import CryptoComputerHome from "../../assets/project/Crypto/CryptoComputerHome.png";
import CryptoComputerMyOrder from "../../assets/project/Crypto/CryptoComputerMyOrder.png";
import CryptoComputerReview from "../../assets/project/Crypto/CryptoComputerReview.png";
import CryptoComputerUserProfile from "../../assets/project/Crypto/CryptoComputerUserProfile.png";
import CryptoComputerAdminDashboard from "../../assets/project/Crypto/CryptoComputerAdminDashboard.png";
import CryptoComputerAllUser from "../../assets/project/Crypto/CryptoComputerAllUser.png";
import CryptoComputerAddProducts from "../../assets/project/Crypto/CryptoComputerAddProducts.png";
import CryptoComputerManageAllOrder from "../../assets/project/Crypto/CryptoComputerManageAllOrder.png";
import CryptoComputeNavbarCarolor from "../../assets/project/Crypto/CryptoComputeNavbarCarolor.png";
import producs from "../../assets/project/Crypto/producs.png";
import bounes from "../../assets/project/Crypto/bounes.png";
import footer from "../../assets/project/Crypto/footer.png";

const CryptoComputer = () => {
  return (
    <div>
      <div className="flex justify-center lg:justify-evenly flex-col lg:flex-row bg-base-200">
        <h2>Crypto Computer</h2>
        <a href="https://manufacturer-website-client.web.app" target="_blank">
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
      {/* s-1 */}
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <div>
            <div class="carousel w-full">
              <div id="item1" class="carousel-item w-full">
                <img src={CryptoComputeNavbarCarolor} class="w-full" />
              </div>
              <div id="item2" class="carousel-item w-full">
                <img src={producs} class="w-full" />
              </div>
              <div id="item3" class="carousel-item w-full">
                <img src={bounes} class="w-full" />
              </div>
              <div id="item4" class="carousel-item w-full">
                <img src={footer} class="w-full" />
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
              <a href="#item4" class="btn btn-xs">
                4
              </a>
            </div>
          </div>
          <div>
            <h1 class="text-4xl font-bold">Home Page</h1>
            <p class="py-6">
              Home page will have a Header (simple navbar), Banner, Tools/Parts,
              Business Summary, Reviews, and Footer. Each tool/part should have
              a relevant name, image, short description, minimum order quantity,
              available quantity, price a buy now button. If a user clicks on
              the purchase or buy now button it will take the user to the
              purchase page.
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
                <img src={CryptoComputerUserProfile} class="w-full" />
              </div>
              <div id="items2" class="carousel-item w-full">
                <img src={CryptoComputerMyOrder} class="w-full" />
              </div>
              <div id="items3" class="carousel-item w-full">
                <img src={CryptoComputerReview} class="w-full" />
              </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
              <a href="#items1" class="btn btn-xs">
                1
              </a>
              <a href="#items2" class="btn btn-xs">
                2
              </a>
              <a href="#items3" class="btn btn-xs">
                3
              </a>
            </div>
          </div>
          <div>
            <h1 class="text-5xl font-bold">User Dashboard</h1>
            <p class="py-2">
              My profile route users will see their name and email address on
              this profile at this link. Also, users will be able to update this
              information.
            </p>
            <p class="py-2">
              User My Order, Add a Review, will be my profile. Logged-in users
              will only see their order on my order page. The user wants to be
              able to cancel any order that has not yet been paid.
            </p>
            <p class="py-2">
              On my order page, there is a payment button for each order. The
              user has not yet paid. The pay button will take the user to the
              payment page. The user will be able to pay using a credit card
              here. The Payment page displays the order details. Once payment
              for an order is completed, users will see the transaction ID for
              that order on the My Orders page.
            </p>
            <p class="py-2">
              On the Add a Review page, users can add a review.
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
                  <img src={CryptoComputerAdminDashboard} class="w-full" />
                </div>
                <div id="itemA2" class="carousel-item w-full">
                  <img src={CryptoComputerAllUser} class="w-full" />
                </div>
                <div id="itemA3" class="carousel-item w-full">
                  <img src={CryptoComputerAddProducts} class="w-full" />
                </div>
                <div id="itemA4" class="carousel-item w-full">
                  <img src={CryptoComputerManageAllOrder} class="w-full" />
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
      </div>
      {/* s-3 */}
    </div>
  );
};

export default CryptoComputer;
