import React, {RefObject, useRef} from "react";
import {NavLink} from "react-router-dom";

export function SideBarComponent() {
  const orederMenuRef = useRef<HTMLLIElement>(null);
  const servicesMenuRef = useRef<HTMLLIElement>(null);

  const onClickOverLay = (): void => {
    const sidebarOverlay = document.querySelector(".sidebar-overlay");
    const sidebarMenu = document.querySelector(".sidebar-menu");
    const main = document.querySelector(".main");
    if (sidebarOverlay && sidebarMenu && main) {
      main.classList.toggle("active");
      sidebarOverlay.classList.toggle("hidden");
      sidebarMenu.classList.toggle("-translate-x-full");
    }
  };

  const onClickDropdown = (event: RefObject<HTMLLIElement> | null): void => {
    if (event?.current) {
      const parent = event.current;
      if (parent.classList.contains("selected")) {
        parent.classList.remove("selected");
      } else {
        const groupDropdown = document.querySelectorAll(
          ".sidebar-dropdown-toggle",
        ) as NodeListOf<HTMLLIElement>;

        groupDropdown.forEach((el: HTMLLIElement) => {
          el.classList.remove("selected");
        });
        parent.classList.add("selected");
      }
    }
  };

  const navDefaultStyle = `py-2 px-2 before:contents-[''] flex items-center text-sm text-gray-300 before:mr-3 before:h-1 before:w-1 before:rounded-full before:bg-gray-300 hover:bg-gray-950 hover:text-gray-100`;

  const navlinkStyle = `${navDefaultStyle}`;
  const activeStyle = `bg-gray-950 ${navDefaultStyle}`;

  return (
    <>
      <div className="sidebar-menu fixed left-0 top-0 z-50 h-full w-64 bg-gray-900 p-4 transition-transform">
        <a
          href="#"
          className="flex items-center border-b border-b-gray-800 pb-4">
          <img
            src="https://placehold.co/32x32"
            alt=""
            className="h-8 w-8 rounded object-cover"
          />
          <span className="ml-3 text-lg font-bold text-white">Logo</span>
        </a>
        <ul className="mt-4">
          <li
            className="sidebar-dropdown-toggle group mb-1"
            ref={orederMenuRef}>
            <a
              onClick={() => {
                onClickDropdown(orederMenuRef);
              }}
              className="flex cursor-pointer items-center rounded-md px-4 py-2 text-gray-300 hover:bg-gray-950 hover:text-gray-100 group-[.active]:bg-gray-800 group-[.selected]:bg-gray-950 group-[.active]:text-white group-[.selected]:text-gray-100">
              <i className="ri-pages-line mr-3 text-lg"></i>
              <span className="text-sm">Block</span>
              <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
            </a>
            <ul className="mt-2 hidden pl-7 group-[.selected]:block">
              <li>
                <NavLink
                  to=""
                  className={({isActive}) => {
                    return isActive ? activeStyle : navlinkStyle;
                  }}>
                  Blocks
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`tags`}
                  className={({isActive}) =>
                    isActive ? activeStyle : navlinkStyle
                  }>
                  Tags
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`categories`}
                  className={({isActive}) =>
                    isActive ? activeStyle : navlinkStyle
                  }>
                  Categories
                </NavLink>
              </li>
            </ul>
          </li>
          <li
            className="sidebar-dropdown-toggle group mb-1"
            ref={servicesMenuRef}>
            <a
              onClick={() => {
                onClickDropdown(servicesMenuRef);
              }}
              className="flex cursor-pointer items-center rounded-md px-4 py-2 text-gray-300 hover:bg-gray-950 hover:text-gray-100 group-[.active]:bg-gray-800 group-[.selected]:bg-gray-950 group-[.active]:text-white group-[.selected]:text-gray-100">
              <i className="ri-user-3-line mr-3 text-lg"></i>
              <span className="text-sm">User</span>
              <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
            </a>
            <ul className="mt-2 hidden pl-7 group-[.selected]:block">
              <li>
                <NavLink
                  to={`users`}
                  className={({isActive}) =>
                    isActive ? activeStyle : navlinkStyle
                  }>
                  User
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`groups`}
                  className={({isActive}) =>
                    isActive ? activeStyle : navlinkStyle
                  }>
                  Group
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="group fixed bottom-0 mb-2">
            <a
              href="#"
              style={{width: 224}}
              className="flex items-center rounded-md px-4 py-2 text-gray-300 hover:bg-gray-950 hover:text-gray-100 group-[.active]:bg-gray-800 group-[.selected]:bg-gray-950 group-[.active]:text-white group-[.selected]:text-gray-100">
              <i className="ri-upload-2-line mr-3 text-lg"></i>
              <span className="text-sm">Upload File Image</span>
            </a>
          </li>
        </ul>
      </div>
      <div
        className="sidebar-overlay fixed left-0 top-0 z-40 h-full w-full bg-black/50 md:hidden"
        onClick={onClickOverLay}></div>
    </>
  );
}

export default SideBarComponent;
