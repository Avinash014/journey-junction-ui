import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";
import { useState, useEffect, useCallback, useContext } from "react";
import { applyEdgeChanges, applyNodeChanges, addEdge } from "reactflow";
import { RendererContext } from "../context/RendererContext";
const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "Hello" },
    type: "input",
  },
  {
    id: "2",
    position: { x: 100, y: 100 },
    data: { label: "World" },
  },
  {
    id: "3",
    position: { x: 150, y: 150 },
    data: { label: "3rd node" },
  },
  {
    id: "4",
    position: { x: 150, y: 200 },
    data: { label: "4th node" },
  },
];
const initialEdges = [{ id: "1-2", source: "1", target: "2" }];
function Flow() {
  const { nodes, setNodes, edges, setEdges } = useContext(RendererContext);

  useEffect(() => {
    const savedFlow = localStorage.getItem("flow-data");
    if (savedFlow) {
      const { nodes, edges } = JSON.parse(savedFlow);
      setNodes(nodes);
      setEdges(edges);
    }
  }, [setNodes, setEdges]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );
  function generateRandomId() {
    return Math.random().toString(36).substring(2, 9);
  }

  const handleSave = () => {
    const flow = { nodes, edges };
    localStorage.setItem("flow-data", JSON.stringify(flow));
    alert("Flow saved!");
  };

  const handleReset = () => {
    let reset = prompt(
      "Danger, Are you Sure you want to Reset if Yes Type RESET",
      ""
    );
    if (reset === "RESET") {
      setNodes([]);
      setEdges([]);
      localStorage.removeItem("flow-data");
      alert("Reset Successful");
    }
  };

  const handleAddNode = () => {
    console.log("hello");
    const id = generateRandomId();
    const newNode = {
      id,
      data: { label: `Node Label` },
      position: { x: Math.random() * 400, y: Math.random() * 400 },
    };
    setNodes((nds) => [...nds, newNode]);
    console.log(nodes);
  };
  return (
    <div style={{ height: "100%" }}>
      <div
        style={{
          position: "fixed",
          zIndex: 50,
        }}
        className="w-60 bg-gray-100 p-4 border-r space-y-4"
      >
        <h2 className="text-lg font-bold">Toolbar</h2>
        <button
          onClick={handleAddNode}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          ➕ Add Node 1
        </button>
        <button
          onClick={handleSave}
          className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          💾 Save
        </button>
        <button
          onClick={handleReset}
          className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          ♻️ Reset
        </button>
      </div>

      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;
