import React from "react";
import Toolbar from "./Toolbar";
import RendererMain from "./RendererMain";
import EditTool from "./EditTool";

const RendererBody = () => {
  return (
    <div style={rendererbody} className="flex flex-row">
      <div className="basis-1/4 border-solid border-r border-black bg-gray-200">
        <Toolbar />
      </div>
      <div className="basis-3/4 border-solid border-l border-black bg-gray-200">
        <RendererMain />
      </div>
      {/* <div className="basis-1/4 bg-gray-400">
        <EditTool />
      </div> */}
    </div>
  );
};

const rendererbody = {
  height: "calc(100vh - 80px)",
};

const toolbarStyle = {
  border: "5px black",
  flex: "0 0 auto", // Toolbar section doesn't grow or shrink
};

const mainStyle = {
  border: "5px black",
  flex: "1", // Main takes 50% of width
};

const edittoolStyle = {
  border: "5px black",
  flex: "0 0 25%", // Edittool takes 25% of width
};

export default RendererBody;
