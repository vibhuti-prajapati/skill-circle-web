// routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import AppLayout from "../Layout/AppLayout";
import PublicLayout from "../Layout/PublicLayout";
import Login from "../Pages/public/Login";
import Home from "../Pages/public/Home";
import Channels from "../Pages/app/Channels";

const AppRoutes = () => (
  <Routes>
    <Route element={<PublicLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      </Route>

    <Route element={<AppLayout />}>
      <Route path="/channels/@me" element={<Channels />} />
    </Route>
  </Routes>
);

export default AppRoutes;
