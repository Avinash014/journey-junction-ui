import React from "react";
import SimpleButton from "../Buttons/ButtonSimple";
import OutlineButton from "../Buttons/ButtonOutline";

const Toolbar = () => {
  return (
    <div class="p-4">
      <div class="flex flex-col">
        <OutlineButton>Title</OutlineButton>
        <OutlineButton>Topic</OutlineButton>
        <OutlineButton>Sub Topic</OutlineButton>
        <OutlineButton>Paragraph</OutlineButton>
        <OutlineButton>Button</OutlineButton>
        <OutlineButton>Horizontal Line</OutlineButton>
        <OutlineButton>Vertical LIne</OutlineButton>
        <OutlineButton>Section</OutlineButton>
      </div>
    </div>
  );
};
export default Toolbar;
