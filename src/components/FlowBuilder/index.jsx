import React from "react";

import Sidebar from "../SideBar";
import Flow from "../../pages/Flow";
import RendererProvider from "../../context/RendererProvider";

export default function FlowBuilder() {
  return (
    <RendererProvider>
      <div className="h-full flex">
        <Sidebar />
        <div className="bg-gray-100 flex-1">
          <Flow />
        </div>
      </div>
    </RendererProvider>
  );
}
