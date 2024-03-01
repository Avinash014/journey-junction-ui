import React from "react";
import tailwindIntegration from "@astrojs/tailwind";
import "../../styles/global.css";

const RendererMain = () => {
  return <h1 className="text-3xl font-bold underline">renderer</h1>;
};
export default RendererMain;
