import { useCallback, useContext, useEffect, useState } from "react";
import ReactFlow, {
  ReactFlowProvider,
  useReactFlow,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "reactflow";
import { RendererContext } from "../../context/RendererContext";
import TextUpdaterNode from "../Nodes/TextUpdaterNode";
import TopicNode from "../Nodes/TopicNode";
import SectionNode from "../Nodes/SectionNode";
import ButtonNode from "../Nodes/ButtonNode";
import ParagraphNode from "../Nodes/ParagraphNode";
import SubTopicNode from "../Nodes/SubTopicNode";
import TitleNode from "../Nodes/TitleNode";

import "reactflow/dist/style.css";

const edgeOptions = {
  animated: true,
  style: {
    stroke: "white",
  },
};

const connectionLineStyle = { stroke: "white" };

const nodeTypes = {
  textUpdater: TextUpdaterNode,
  topic: TopicNode,
  section: SectionNode,
  button: ButtonNode,
  paragraph: ParagraphNode,
  subTopic: SubTopicNode,
  title: TitleNode,
};
function Flow() {
  const {
    selectedTool,
    nodes,
    setNodes,
    edges,
    setEdges,
    setShowNodeEditor,
    setCurrentNodeId,
  } = useContext(RendererContext);

  const reactFlowInstance = useReactFlow();

  const toolSelectionHandler = useCallback((selectedTool) => {
    if (selectedTool == null) return;
    addNode(selectedTool);
  }, []);

  const addNode = useCallback(
    (type = "output") => {
      const id = Date.now().toString();
      const newNode = {
        id,
        position: {
          x: Math.random() * 500,
          y: Math.random() * 500,
          // x: 0,
          // y: 0,
        },
        type: type,
        data: {
          label: `${type}`,
        },
      };
      console.log("before new node get added");
      console.log(nodes);
      // reactFlowInstance.addNodes(newNode);
      // var updatedNodes = [...nodes, newNode];
      setNodes((prevNodes) => [...prevNodes, newNode]);
      // console.log(updatedNodes);
      setShowNodeEditor(false);
      setCurrentNodeId(null);
    },
    [nodes]
  );
  useEffect(() => toolSelectionHandler(selectedTool), [selectedTool]);
  useEffect(() => console.log(nodes), [nodes]);

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

  return (
    <>
      <div style={{ height: "800px" }}>
        {/* <div>{selectedTool}</div> */}
        {/* <ReactFlow
          defaultNodes={defaultNodes}
          defaultEdges={defaultEdges}
          defaultEdgeOptions={edgeOptions}
          fitView
          style={{
            backgroundColor: "#D3D2E5",
          }}
          connectionLineStyle={connectionLineStyle}
        > */}
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          // nodeOrigin={nodeOrigin}
          fitView
        >
          <Controls />
        </ReactFlow>
      </div>
    </>
  );
}

export default function () {
  return (
    <Flow />
    // </ReactFlowProvider>
  );
}
