import { useCallback, useContext, useState } from "react";
import ReactFlow, { ReactFlowProvider, useReactFlow } from "reactflow";
import RendererContext from "../../context/RendererContext";

import "reactflow/dist/style.css";

const defaultEdges = [{ id: "ea-b", source: "a", target: "b" }];
const defaultNodes = [
  {
    id: "a",
    type: "input",
    data: { label: "Node A" },
    position: { x: 250, y: 25 },
  },

  {
    id: "b",
    data: { label: "Node B" },
    position: { x: 100, y: 125 },
  },
  {
    id: "c",
    type: "output",
    data: { label: "Node C" },
    position: { x: 250, y: 250 },
  },
];

const edgeOptions = {
  animated: true,
  style: {
    stroke: "white",
  },
};

const connectionLineStyle = { stroke: "white" };

let nodeId = 0;

function Flow() {
  const { selectedTool } = useContext(RendererContext);
  const reactFlowInstance = useReactFlow();
  const onClick = useCallback(() => {
    const id = `${++nodeId}`;
    const newNode = {
      id,
      position: {
        x: Math.random() * 500,
        y: Math.random() * 500,
      },
      data: {
        label: `Node ${id}`,
      },
    };
    reactFlowInstance.addNodes(newNode);
  }, []);

  return (
    <>
      <div style={{ height: "800px", backgroundColor: "pink" }}>
        <button onClick={onClick} className="btn-add">
          add node
        </button>
        <div>{selectedTool}</div>
        <ReactFlow
          defaultNodes={defaultNodes}
          defaultEdges={defaultEdges}
          defaultEdgeOptions={edgeOptions}
          fitView
          style={{
            backgroundColor: "#D3D2E5",
          }}
          connectionLineStyle={connectionLineStyle}
        />
      </div>
    </>
  );
}

export default function () {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
