import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingSpinner from "../components/shared/UI/LoadingSpinner";
import AboutUs from "../Pages/aboutUs";
import { useState } from "react";
import { useEffect } from "react";

const LandingPage = lazy(()=>import("../Pages/landing"));
const ExplorePage = lazy(()=>import("../Pages/explore"));
const Profile = lazy(()=>import("../Pages/profile"));
const Uploads = lazy(()=>import("../Pages/uploads"));
const Shop = lazy(()=>import("../Pages/Shop/Index"));
const Social = lazy(()=>import("../Pages/social"));
const ShopingCart= lazy(()=>import("../Pages/Shop/ShoppingCart/ShoppingCart"));
const Rewards = lazy(()=>import("../Pages/rewards"));



const Routing = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add an event listener to check the screen size when the component mounts
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 600); // Adjust the breakpoint as needed
    };

    // Initial check
    checkScreenSize();

    // Add a listener for screen size changes
    window.addEventListener('resize', checkScreenSize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);


  return (
    <Suspense fallback={
      <LoadingSpinner asOverflow />
    }>
      <Routes>
        <Route path="/" element={!isMobile ? <LandingPage /> : <ExplorePage />} />
        {/* { isMobile && <Route path="/:type" element={!isMobile ? <LandingPage /> : <ExplorePage />} />} */}

        
        <Route path="/profile/:uid" element={<Profile />} />
        
        <Route path="/new-member" element={<LandingPage signup_modal={true} />}/>

        {!isMobile && 
          <>
            <Route path="/explore/" element={<ExplorePage />} /> 
            <Route path="/explore/:type" element={<ExplorePage />} />
          </>
        }
        

        {/* <Route path="/uploads" element={<Uploads />} /> */}
        {/* <Route path="/uploads" element={<LandingPage uploads_modal={true} />} /> */}

        <Route path="/shop" element={<Shop />} />

        <Route path="/social" element={<Social />} />
        <Route path="/rewards" element={<Rewards/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/shopcart" element={<ShopingCart />}/>

        <Route path="*" element={!isMobile ? <LandingPage /> : <ExplorePage />}/>


      </Routes>
    </Suspense>
  );
};

export default Routing;
