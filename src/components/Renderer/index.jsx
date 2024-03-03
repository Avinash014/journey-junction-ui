import React from "react";

import RendererHeader from "../../components/Renderer/RendererHeader";
import RendererBody from "../../components/Renderer/RendererBody";
import RendererProvider from "../../context/RendererProvider";

export default function () {
  return (
    <>
      <RendererProvider>
        <RendererHeader />
        <RendererBody />
      </RendererProvider>
    </>
  );
}
