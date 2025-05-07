
import React from "react";
import Layout from "@/components/Layout/Layout";
import ChecklistModule from "@/components/Checklist/ChecklistModule";

const Checklist = () => {
  return (
    <Layout>
      <div className="py-6">
        <ChecklistModule />
      </div>
    </Layout>
  );
};

export default Checklist;
