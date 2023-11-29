import React from "react";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {ProtectedRoute} from "./ProtectedRoute";
import {useAuth} from "../provider/AuthContext";
import {Signin} from "../pages/auth/Signin";
import {Signup} from "../pages/auth/Signup";
import Home from "../pages/home/Home";
import {BlockList} from "../pages/home/block/block-components/BlockList";
import {BlockCreate} from "../pages/home/block/block-components/BlockCreate";
import {BlockDetail} from "../pages/home/block/block-components/BlockDetail";
import {TagList} from "../pages/home/block/tag-components/TagList";
import {CategoryList} from "../pages/home/block/category-components/CategoryList";
import {UserList} from "../pages/home/user/user-components/UserList";
import {GroupList} from "../pages/home/user/group-components/GroupList";

const Routes = () => {
  const {token} = useAuth();

  // Define public routes accessible to all users
  const routesForPublic: [] = [];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/",
          element: <Home />,
          children: [
            {
              path: "/",
              element: <BlockList />,
            },
            {
              path: "block-create",
              element: <BlockCreate />,
            },
            {
              path: "block/:id",
              element: <BlockDetail />,
            },
            {
              path: "tags",
              element: <TagList />,
            },
            {
              path: "categories",
              element: <CategoryList />,
            },
            {
              path: "users",
              element: <UserList />,
            },
            {
              path: "groups",
              element: <GroupList />,
            },
            {
              path: "*",
              element: (
                <div>
                  <h1>Page not found</h1>
                </div>
              ),
            },
          ],
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/login",
      element: <Signin />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
