import React from "react";
import AdminSideBar from "../adminSidebar";
import AdminHeader from "../adminHeader";
import { Outlet } from "react-router-dom";

const AdminPageLayout = () => {
  return (
    <div className="flex p-[8px] w-full">
      <AdminSideBar />

      <div className="flex flex-col w-full">
        <AdminHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPageLayout;
