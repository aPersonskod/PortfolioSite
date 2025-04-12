import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router";
import Projects from "./Projects.tsx";
import About from "./About.tsx";
import Contacts from "./Contacts.tsx";
import './index.css'
import CurrentProject from "./CurrentProject.tsx";

const router = createBrowserRouter([
    { 
        path: "/PortfolioSite", Component: App, 
        children:[
            { path: "", Component: Projects },
            { path: "project/uploader", Component: CurrentProject },
            { path: "project/site", Component: CurrentProject },
            { path: "project/schedule", Component: CurrentProject },
            { path: "project/avto", Component: CurrentProject },
            { path: "project/puti", Component: CurrentProject },
            { path: "about", Component: About },
            { path: "contacts", Component: Contacts },
        ] 
    },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
