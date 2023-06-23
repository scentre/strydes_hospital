import React from "react";
import AdminSideBar from "../adminSidebar";
import AdminHeader from "../adminHeader";
import { Outlet } from "react-router-dom";

const AdminPageLayout = () => {
  return (
    <div className="flex p-[8px] w-full">
      <AdminSideBar />

      <div className="flex flex-col w-full ">
        <AdminHeader />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminPageLayout;
