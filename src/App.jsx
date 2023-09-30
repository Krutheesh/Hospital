import React from "react";
import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Doctor from "./pages/Doctor";
import Cardiology from "./components/specialities/Cardiology";
import { ContextProvider } from "./context/Context";
import UserProfile from "./pages/UserProfile";
import Slotfix from "./components/Slotfix";
import BookSlot from "./pages/BookSlot";
import Layout from "./Layout";
import TopSection from "./components/speciality/TopSection";
import Videos from "./pages/Videos";
function App() {
  return (
    <div>
      <BrowserRouter>
        <ContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />

              
              <Route path="/:id" element={<UserProfile />} />
              <Route path = '/videos' element={<Videos/>}/>
            </Route>
            <Route path="/doctors" element={<Doctor />} />
            <Route path="/speciality/:id" element={<TopSection />} />
            <Route path="/about" element={<About />} />
            <Route path="/slotbook" element={<BookSlot />} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
