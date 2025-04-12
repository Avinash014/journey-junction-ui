import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";
import { useState, useCallback } from "react";
import { applyEdgeChanges, applyNodeChanges, addEdge } from "reactflow";
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
    data: { label: "hi" },
  },
  {
    id: "4",
    position: { x: 150, y: 200 },
    data: { label: "hi" },
  },
];
const initialEdges = [{ id: "1-2", source: "1", target: "2" }];
function Flow() {
  const [tempNodes, setTempNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const onNodesChange = useCallback(
    (changes) => setTempNodes((nds) => applyNodeChanges(changes, nds)),
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

  const handleSave = () => {
    const flow = { tempNodes, edges };
    localStorage.setItem("flow-data", JSON.stringify(flow));
    alert("Flow saved!");
  };

  const handleReset = () => {
    setNodes([]);
    setEdges([]);
    localStorage.removeItem("flow-data");
  };

  const handleAddNode = () => {
    const newNode = {
      id: `${nodeId++}`,
      data: { label: `Node ${nodeId}` },
      position: { x: Math.random() * 400, y: Math.random() * 400 },
    };
    setNodes((nds) => [...nds, newNode]);
  };
  return (
    <div style={{ height: "100%" }}>
      {/* <div className="w-60 bg-gray-100 p-4 border-r space-y-4">
        <h2 className="text-lg font-bold">Toolbar</h2>
        <button
          onClick={handleAddNode}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          ➕ Add Node
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
      </div> */}

      <ReactFlow
        nodes={tempNodes}
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
