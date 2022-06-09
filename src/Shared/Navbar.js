import React, { Children } from "react";
import resume from "../assets/shahadat-hossain-resume-fornt-end-web-developer.pdf";

const Navbar = ({ children }) => {
  const menuItems = (
    <>
      <li>
        <a className="rounded-lg">Home</a>
      </li>
      <li>
        <a className="rounded-lg" href="#about">
          About
        </a>
      </li>
      <li>
        <a className="rounded-lg">Portfolio</a>
      </li>
      <li>
        <a className="rounded-lg">Blog</a>
      </li>
      <li>
        <a className="rounded-lg">Contact</a>
      </li>
      <li>
        <a href={resume} download className="btn btn-outline rounded-xl">
          Download Resume
        </a>
      </li>
    </>
  );
  return (
    <div class="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div class="w-full navbar">
          <div class="flex-1 px-2 mx-2 ">Shahadat Hossain</div>
          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal">
              {/* <!-- Navbar menu content here --> */}
              {menuItems}
            </ul>
          </div>
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
