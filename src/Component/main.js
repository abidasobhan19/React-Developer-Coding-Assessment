import React from "react";
import Pagination from "./pagination";
import ProfilePage from "./profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Main = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pagination />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Main;
