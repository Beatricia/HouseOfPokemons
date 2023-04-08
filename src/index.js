import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createHashRouter } from "react-router-dom"
import Pokedex from "./Pages/Pokedex";
import Root from "./Pages/Root"
import About from "./Pages/About";

const router = createHashRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Pokedex />,
            },
            {
                path: "/about",
                element: <About/>
            }
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)