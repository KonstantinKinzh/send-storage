// Modules react-router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import Layout from "../layout/layout";
import AllFiles from "@/pages/all-files/ui/all-files";
import Subscriptons from "@/pages/subscriptons/ui/subscriptons";

// Routes
const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: '/', element: <AllFiles /> }, // Будут подгружаться при старте страницы вместе с layout
            { path: '/all-files', element: <AllFiles /> },
            { path: '/subscriptons', element: <Subscriptons /> }
        ]
    },
]);

export default function AppRoutes() {
    return (
        <RouterProvider router={routes} />
    );
};