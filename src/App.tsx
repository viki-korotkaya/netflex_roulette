import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NotFound from "components/NotFound/NotFound";
import AppLayout from "containers/AppLayout/AppLayout";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/search" element={<AppLayout />}></Route>
        <Route path="/" element={<Navigate replace to="/search" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
