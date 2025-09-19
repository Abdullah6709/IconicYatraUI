// src/MainRoutes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Components/Layout';

import Payment from '../Pages/HeaderPages/Payment';
import Service from '../Pages/HeaderPages/Service';
// import News from '../Pages/HeaderPages/News';
// import Admin from '../Pages/HeaderPages/Admin';
import Home from '../Pages/HomePages/Home';
import PackageCard from '../Components/PackageCard';
import Holidays from '../Pages/HomePages/Holidays';
import Testimonial from '../Pages/HomePages/Testimonial';
import Contects from '../Pages/HomePages/Contects';
import FeaturedPackages from '../Components/FeaturedPackages';
import FixDeparture from '../Pages/HomePages/FixDeparture';
import TigerSafari from '../Pages/HomePages/TigerSafari';
import Domestic from '../Pages/HomePages/Domestic';
import International from '../Pages/HomePages/International';
import SpecialPackages from '../Components/SpecialPackages';
import PackageDetails from '../Components/PackageDetails';
import Support from '../Pages/HomePages/Support';
import WhyChooseUs from '../Components/WhyChooseUs';
// import HolidayCarousel from '../Components/HolidayCarousel';
import DomesticPackage from '../Components/DomesticPackage';
import HolidaysPackages from '../Components/HolidaysPackages';
import Gallery from '../Components/Gallery';
import Yatra from '../Pages/HomePages/Yatra';
import AllHolidaysPackages from '../Pages/HomePages/AllHolidaysPackages';
import AllLatestPackages from '../Pages/HomePages/AllLatestPackages';
import Login from "../Pages/HeaderPages/Login";
import About from "../Components/About";
import Gellary from "../Components/GellaryFooter";
import Careers from "../Components/Careers";
import Testimonials from "../Components/Testimonials"

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/payment" element={<Layout><Payment /></Layout>} />
      <Route path="/services" element={<Layout><Service /></Layout>} />
      {/* <Route path="/news" element={<Layout><News /></Layout>} /> */}
      {/* <Route path="/admin" element={<Layout><Admin /></Layout>} /> */}
      <Route path="/package-card" element={<Layout><PackageCard /></Layout>} />
      <Route path="/holidays" element={<Layout><Holidays /></Layout>} />
      <Route path="/testimonial" element={<Layout><Testimonial /></Layout>} />
      <Route path="/contact" element={<Layout><Contects /></Layout>} />
      <Route path="/featured-packages" element={<Layout><FeaturedPackages /></Layout>} />
      <Route path="/all-latest-packages" element={<Layout><AllLatestPackages /></Layout>} />
      <Route path="/special-packages" element={<Layout><SpecialPackages /></Layout>} />
      <Route path="/package-details" element={<Layout><PackageDetails /></Layout>} />
      <Route path="/fixed/:destination" element={<Layout><FixDeparture /></Layout>} />
      <Route path="/safari/:destination" element={<Layout><TigerSafari /></Layout>} />
      <Route path="/domestic/:destination" element={<Layout><Domestic /></Layout>} />
      <Route path="/international/:destination" element={<Layout><International /></Layout>} />
      <Route path="/support" element={<Layout><Support /></Layout>} />
      <Route path="/why-choose-us" element={<Layout><WhyChooseUs /></Layout>} />
      <Route path="/domestic-packages" element={<Layout><DomesticPackage /></Layout>} />
      <Route path="/holiday-packages" element={<Layout><HolidaysPackages /></Layout>} />
      <Route path="/all-packages" element={<Layout><AllHolidaysPackages /></Layout>} />
      <Route path="/yatra" element={<Layout><Yatra /></Layout>} />
      <Route path="/gallary" element={<Layout><Gallery /></Layout>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/aboutus" element={<Layout><About/></Layout>} />
      <Route path="/gallery" element={<Layout><Gellary/></Layout>} />
       <Route path="/careers" element={<Layout><Careers /></Layout>} />
        <Route path="/testimonials" element={<Layout><Testimonials /></Layout>} />
    </Routes>
  );
};

export default MainRoutes;
