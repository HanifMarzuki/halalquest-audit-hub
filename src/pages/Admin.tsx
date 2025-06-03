
import React from "react";
import Layout from "@/components/Layout/Layout";
import AdminModule from "@/components/Admin/AdminModule";

const Admin = () => {
  return (
    <Layout>
      <div className="py-6">
        <AdminModule />
      </div>
    </Layout>
  );
};

export default Admin;
