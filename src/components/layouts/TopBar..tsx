import React from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../provider/AuthContext";
import {signout as signoutService} from "../../services/user";

export function TopBarComponent() {
  const {user, setAuthenticated} = useAuth();
  const navigate = useNavigate();
  const signout = async () => {
    try {
      await signoutService(user.id);
    } catch (error) {
      console.log(error);
    } finally {
      await setAuthenticated(false);
      navigate("/", {replace: true});
    }
  };

  const handleLoout = () => {
    signout();
  };

  const sidebarToggle = () => {
    const sidebarOverlay = document.querySelector(".sidebar-overlay");
    const sidebarMenu = document.querySelector(".sidebar-menu");
    const main = document.querySelector(".main");
    if (sidebarOverlay && sidebarMenu && main) {
      main.classList.toggle("active");
      sidebarOverlay.classList.toggle("hidden");
      sidebarMenu.classList.toggle("-translate-x-full");
    }
  };

  return (
    <>
      <div className="sticky left-0 top-0 z-30 flex items-center bg-white px-6 py-2 shadow-md shadow-black/5">
        <button
          type="button"
          className="sidebar-toggle text-lg text-gray-600"
          onClick={sidebarToggle}>
          <i className="ri-menu-line"></i>
        </button>
        <ul className="ml-4 flex items-center text-sm">
          <li className="mr-2">
            <a
              href="#"
              className="font-medium text-gray-400 hover:text-gray-600">
              Dashboard
            </a>
          </li>
          <li className="mr-2 font-medium text-gray-600">/</li>
          <li className="mr-2 font-medium text-gray-600">Analytics</li>
        </ul>
        <ul className="ml-auto flex items-center">
          <li className="dropdown">
            <button
              type="button"
              className="dropdown-toggle flex h-8 w-8 items-center justify-center rounded text-gray-400 hover:bg-gray-50 hover:text-gray-600">
              <i className="ri-notification-3-line"></i>
            </button>
            <div className="dropdown-menu z-30 hidden w-full max-w-xs rounded-md border border-gray-100 bg-white shadow-md shadow-black/5">
              <div className="notification-tab flex items-center border-b border-b-gray-100 px-4 pt-4">
                <button
                  type="button"
                  data-tab="notification"
                  data-tab-page="notifications"
                  className="active mr-4 border-b-2 border-b-transparent pb-1 text-[13px] font-medium text-gray-400 hover:text-gray-600">
                  Notifications
                </button>
                <button
                  type="button"
                  data-tab="notification"
                  data-tab-page="messages"
                  className="mr-4 border-b-2 border-b-transparent pb-1 text-[13px] font-medium text-gray-400 hover:text-gray-600">
                  Messages
                </button>
              </div>
              <div className="my-2">
                <ul
                  className="max-h-64 overflow-y-auto"
                  data-tab-for="notification"
                  data-page="notifications">
                  <li>
                    <a
                      href="#"
                      className="group flex items-center px-4 py-2 hover:bg-gray-50">
                      <img
                        src="https://placehold.co/32x32"
                        alt=""
                        className="block h-8 w-8 rounded object-cover align-middle"
                      />
                      <div className="ml-2">
                        <div className="truncate text-[13px] font-medium text-gray-600 group-hover:text-blue-500">
                          New order
                        </div>
                        <div className="text-[11px] text-gray-400">
                          from a user
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group flex items-center px-4 py-2 hover:bg-gray-50">
                      <img
                        src="https://placehold.co/32x32"
                        alt=""
                        className="block h-8 w-8 rounded object-cover align-middle"
                      />
                      <div className="ml-2">
                        <div className="truncate text-[13px] font-medium text-gray-600 group-hover:text-blue-500">
                          New order
                        </div>
                        <div className="text-[11px] text-gray-400">
                          from a user
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group flex items-center px-4 py-2 hover:bg-gray-50">
                      <img
                        src="https://placehold.co/32x32"
                        alt=""
                        className="block h-8 w-8 rounded object-cover align-middle"
                      />
                      <div className="ml-2">
                        <div className="truncate text-[13px] font-medium text-gray-600 group-hover:text-blue-500">
                          New order
                        </div>
                        <div className="text-[11px] text-gray-400">
                          from a user
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group flex items-center px-4 py-2 hover:bg-gray-50">
                      <img
                        src="https://placehold.co/32x32"
                        alt=""
                        className="block h-8 w-8 rounded object-cover align-middle"
                      />
                      <div className="ml-2">
                        <div className="truncate text-[13px] font-medium text-gray-600 group-hover:text-blue-500">
                          New order
                        </div>
                        <div className="text-[11px] text-gray-400">
                          from a user
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group flex items-center px-4 py-2 hover:bg-gray-50">
                      <img
                        src="https://placehold.co/32x32"
                        alt=""
                        className="block h-8 w-8 rounded object-cover align-middle"
                      />
                      <div className="ml-2">
                        <div className="truncate text-[13px] font-medium text-gray-600 group-hover:text-blue-500">
                          New order
                        </div>
                        <div className="text-[11px] text-gray-400">
                          from a user
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
                <ul
                  className="hidden max-h-64 overflow-y-auto"
                  data-tab-for="notification"
                  data-page="messages">
                  <li>
                    <a
                      href="#"
                      className="group flex items-center px-4 py-2 hover:bg-gray-50">
                      <img
                        src="https://placehold.co/32x32"
                        alt=""
                        className="block h-8 w-8 rounded object-cover align-middle"
                      />
                      <div className="ml-2">
                        <div className="truncate text-[13px] font-medium text-gray-600 group-hover:text-blue-500">
                          John Doe
                        </div>
                        <div className="text-[11px] text-gray-400">
                          Hello there!
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group flex items-center px-4 py-2 hover:bg-gray-50">
                      <img
                        src="https://placehold.co/32x32"
                        alt=""
                        className="block h-8 w-8 rounded object-cover align-middle"
                      />
                      <div className="ml-2">
                        <div className="truncate text-[13px] font-medium text-gray-600 group-hover:text-blue-500">
                          John Doe
                        </div>
                        <div className="text-[11px] text-gray-400">
                          Hello there!
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group flex items-center px-4 py-2 hover:bg-gray-50">
                      <img
                        src="https://placehold.co/32x32"
                        alt=""
                        className="block h-8 w-8 rounded object-cover align-middle"
                      />
                      <div className="ml-2">
                        <div className="truncate text-[13px] font-medium text-gray-600 group-hover:text-blue-500">
                          John Doe
                        </div>
                        <div className="text-[11px] text-gray-400">
                          Hello there!
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group flex items-center px-4 py-2 hover:bg-gray-50">
                      <img
                        src="https://placehold.co/32x32"
                        alt=""
                        className="block h-8 w-8 rounded object-cover align-middle"
                      />
                      <div className="ml-2">
                        <div className="truncate text-[13px] font-medium text-gray-600 group-hover:text-blue-500">
                          John Doe
                        </div>
                        <div className="text-[11px] text-gray-400">
                          Hello there!
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="group flex items-center px-4 py-2 hover:bg-gray-50">
                      <img
                        src="https://placehold.co/32x32"
                        alt=""
                        className="block h-8 w-8 rounded object-cover align-middle"
                      />
                      <div className="ml-2">
                        <div className="truncate text-[13px] font-medium text-gray-600 group-hover:text-blue-500">
                          John Doe
                        </div>
                        <div className="text-[11px] text-gray-400">
                          Hello there!
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="dropdown ml-3">
            <button
              type="button"
              className="dropdown-toggle flex items-center"
              onClick={handleLoout}>
              <i className="ri-login-box-line"></i>
            </button>
            <ul className="dropdown-menu z-30 hidden w-full max-w-[140px] rounded-md border border-gray-100 bg-white py-1.5 shadow-md shadow-black/5">
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-1.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-blue-500">
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-1.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-blue-500">
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-4 py-1.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-blue-500">
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
