import React, { useContext } from "react";
import RendererContext from "../../context/RendererContext";

const Header = () => {
  const { nodes, edges } = useContext(RendererContext);
  const onClickHandler = () => {
    console.log(nodes);
    console.log(edges);
  };
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <h1 class="text-2xl font-bold">Create Journey</h1>
        <div style={buttonContainerStyle}>
          <button style={buttonStyle} onClick={onClickHandler}>
            Save Journey
          </button>
        </div>
      </div>
    </header>
  );
};

const headerStyle = {
  width: "100%",
  height: "80px", // Adjust height as needed
  backgroundColor: "#333",
  color: "#fff",
  textAlign: "center",
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
};

const buttonContainerStyle = {
  display: "flex",
  alignItems: "center",
};

const buttonStyle = {
  marginLeft: "10px",
  padding: "8px 16px",
  backgroundColor: "#555",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default Header;
