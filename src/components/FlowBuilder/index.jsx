import React from "react";

import Sidebar from "../SideBar";
import Flow from "../../pages/Flow";

export default function FlowBuilder() {
  return (
    <div className="h-full flex">
      <Sidebar />
      <div className="bg-gray-100 flex-1">
        <Flow />
      </div>
    </div>
  );
}
