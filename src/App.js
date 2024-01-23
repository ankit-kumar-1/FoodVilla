import React, { Suspense, lazy } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./components/Header";    //default import
// import { IMG_CDN_URL } from "./config";    //NAMED IMPORT
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantsMenu from "./components/RestaurantsMenu";
import Profile from "./components/ProfileClass";
import ShimmerEffect from "./components/ShimmerEffect";

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));

//chunking
//code splitting
//dynamic bundling
//lazy loading 
//on demand loading
//dynamic import

const AppLayout = () => {
    return (
        // <React.Fragment>root</React.Fragment>
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<ShimmerEffect />}> <About /> </Suspense>,
                children: [{
                    path: "profile",
                    element: <Profile />
                }]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantsMenu />
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<ShimmerEffect />}> <Instamart /> </Suspense>
            }
        ]
    },


])
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);


/*
*HMR-hot module reload
*file watcher algorithm c++
*Bundling 
*Minify
*Cleaning our code
*Dev and Production Build
*Super fast build algorithm
*Image Optimization
*Caching while development
*Compression
*Compatible with older version browsers
*HTTPS on Dev
*Port number
*consistent hashing algorithm
*zero config
*/