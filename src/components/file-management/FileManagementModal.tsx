import React, {useState} from "react";
import {Tooltip} from "../tooltips/Tooltip";

interface Folder {
  id: number;
  name: string;
  images: string[]; // Assume image URLs for simplicity
}

interface Props {
  modalId: string;
}

export const FileManagementModal = ({modalId}: Props) => {
  const [folders, setFolders] = useState<Folder[]>([
    {id: 1, name: "Folder 1", images: ["image1.jpg", "image2.jpg"]},
    {id: 2, name: "Folder 2", images: ["image3.jpg", "image4.jpg"]},
    {id: 3, name: "Folder 2", images: ["image3.jpg", "image4.jpg"]},
    {id: 4, name: "Folder 2", images: ["image3.jpg", "image4.jpg"]},
    {id: 5, name: "Folder 2", images: ["image3.jpg", "image4.jpg"]},
    {id: 6, name: "Folder 2", images: ["image3.jpg", "image4.jpg"]},
    {id: 7, name: "Folder 2", images: ["image3.jpg", "image4.jpg"]},
    {id: 8, name: "Folder 2", images: ["image3.jpg", "image4.jpg"]},
    {id: 13, name: "Folder 2", images: ["image3.jpg", "image4.jpg"]},
    {id: 17, name: "Folder 2", images: ["image3.jpg", "image4.jpg"]},
  ]);
  console.log(folders);

  const handleCreateFolder = () => {
    const newFolder = {
      id: folders.length + 1,
      name: `New Folder ${folders.length + 1}`,
      images: [], // Add an empty array for images
    };

    // Use the functional update form of setFolders to ensure immutability
    setFolders(prevFolders => [...prevFolders, newFolder]);
  };
  handleCreateFolder;

  const toggleModal = (): void => {
    const modal = document.getElementById(modalId);
    modal?.classList.toggle("hidden");
  };

  return (
    <div className="hidden" id={modalId}>
      <div
        tabIndex={-1}
        aria-hidden="true"
        className={`fixed left-0 right-0 top-0 flex h-screen w-screen items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50 md:inset-0`}
        style={{zIndex: 1301}}>
        <div className="relative m-auto max-h-full w-full max-w-4xl p-4">
          {/* <!-- Modal content --> */}
          <div className="relative rounded-lg bg-white shadow">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between shadow-sm rounded-t border-b p-4 md:p-5">
              <h3 className="text-xl font-semibold text-gray-900">
                File Management
              </h3>
              <button
                type="button"
                className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
                onClick={toggleModal}>
                <svg
                  className="h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="grid grid-cols-12 divide-x">
              <div className="col-span-3 h-96 overflow-y-auto overflow-x-hidden">
                <ul>
                  {folders.map((folder, index) => (
                    <li
                      className="w-full text-ellipsis pb-1 pe-1 ps-2 pt-1 hover:cursor-pointer hover:bg-gray-700 hover:text-white"
                      key={index}>
                      <i className="ri-folder-line mr-2"></i>
                      <span className="truncate text-sm">{folder.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-9 h-96 overflow-x-auto overflow-y-auto">
                <div className="max-h-96 overflow-x-auto">
                  <table className="w-full table-auto">
                    <thead className="sticky top-0 bg-white">
                      <tr>
                        <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                          Image
                        </th>
                        <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                          Name
                        </th>
                        <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                          Create Date
                        </th>
                        <th className="bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase">
                          <button
                            className="mb-1 mr-1 rounded bg-blue-500 px-3 py-1 text-xs font-bold uppercase text-white outline-none transition-all duration-150 ease-linear focus:outline-none active:bg-blue-600"
                            type="button">
                            Upload Image
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-2 px-6 align-middle text-xs">
                          <img
                            className="h-20 w-full rounded-sm object-cover"
                            src="https://www.w3schools.com/howto/img_forest.jpg"
                          />
                        </td>
                        <td className=" border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                          <Tooltip
                            text="AAAAAAA BBBBBB CCCCCCCC DDDDDD FFFFFF GGGGGGG
                              HHHHHH JJJJJJJJJ KKKKKKKKKK LLLLLLL ZZZZZZZZZZ
                              BBBBBBBBB NNNNNNNNNNN OOOOOOOOOO">
                            <span className="block w-44 cursor-pointer overflow-x-hidden truncate">
                              AAAAAAA BBBBBB CCCCCCCC DDDDDD FFFFFF GGGGGGG
                              HHHHHH JJJJJJJJJ KKKKKKKKKK LLLLLLL ZZZZZZZZZZ
                              BBBBBBBBB NNNNNNNNNNN OOOOOOOOOO
                            </span>
                          </Tooltip>
                        </td>
                        <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                          01/02/2023
                        </td>
                        <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                          <button
                            className="mb-1 mr-1 rounded bg-blue-500 px-3 py-1 text-xs font-bold uppercase text-white outline-none transition-all duration-150 ease-linear focus:outline-none active:bg-blue-600"
                            type="button">
                            Select
                          </button>
                          <button
                            className="mb-1 mr-1 rounded bg-red-500 px-3 py-1 text-xs font-bold uppercase text-white outline-none transition-all duration-150 ease-linear focus:outline-none active:bg-red-600"
                            type="button">
                            Delete
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                          <img
                            className="h-20 w-full rounded-sm object-cover"
                            src="https://www.w3schools.com/howto/img_forest.jpg"
                          />
                        </td>
                        <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                          <Tooltip text="AAAAAAA BBBBBB CCCCCCCC DDDDDD FFFFFF GGGGGGG">
                            <span className="block w-44 cursor-pointer overflow-x-hidden truncate">
                              AAAAAAA BBBBBB CCCCCCCC DDDDDD FFFFFF GGGGGGG
                            </span>
                          </Tooltip>
                        </td>
                        <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                          01/02/2023
                        </td>
                        <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                          <button
                            className="mb-1 mr-1 rounded bg-blue-500 px-3 py-1 text-xs font-bold uppercase text-white outline-none transition-all duration-150 ease-linear focus:outline-none active:bg-blue-600"
                            type="button">
                            Select
                          </button>
                          <button
                            className="mb-1 mr-1 rounded bg-red-500 px-3 py-1 text-xs font-bold uppercase text-white outline-none transition-all duration-150 ease-linear focus:outline-none active:bg-red-600"
                            type="button">
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
