import React from "react";
import SimpleButton from "../Buttons/ButtonSimple";
import OutlineButton from "../Buttons/ButtonOutline";
import RendererContext from "../../context/RendererContext";
import { useContext } from "react";

const Toolbar = () => {
  const { setSelectedTool } = useContext(RendererContext);

  return (
    <div class="p-4">
      <div class="flex flex-col">
        <OutlineButton onClick={() => setSelectedTool("title")}>
          Title
        </OutlineButton>
        <OutlineButton onClick={() => setSelectedTool("topic")}>
          Topic
        </OutlineButton>
        <OutlineButton onClick={() => setSelectedTool("subTopic")}>
          Sub Topic
        </OutlineButton>
        <OutlineButton onClick={() => setSelectedTool("paragraph")}>
          Paragraph
        </OutlineButton>
        <OutlineButton onClick={() => setSelectedTool("button")}>
          Button
        </OutlineButton>
        <OutlineButton onClick={() => setSelectedTool("horizontalLine")}>
          Horizontal Line
        </OutlineButton>
        <OutlineButton onClick={() => setSelectedTool("verticalLine")}>
          Vertical Line
        </OutlineButton>
        <OutlineButton onClick={() => setSelectedTool("section")}>
          Section
        </OutlineButton>
      </div>
    </div>
  );
};
export default Toolbar;
