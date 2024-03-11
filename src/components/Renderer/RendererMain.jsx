import { useCallback, useContext, useEffect, useState } from "react";
import ReactFlow, {
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

const nodeTypes = {
  textUpdater: TextUpdaterNode,
  topic: TopicNode,
  section: SectionNode,
  button: ButtonNode,
  paragraph: ParagraphNode,
  subTopic: SubTopicNode,
  title: TitleNode,
};
export default function Flow() {
  const {
    selectedTool,
    nodes,
    setNodes,
    edges,
    setEdges,
    setShowNodeEditor,
    setCurrentNodeId,
  } = useContext(RendererContext);

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
        },
        type: type,
        data: {
          label: `${type}`,
        },
      };

      setNodes((prevNodes) => [...prevNodes, newNode]);
      setShowNodeEditor(false);
      setCurrentNodeId(null);
    },
    [nodes]
  );
  useEffect(() => toolSelectionHandler(selectedTool), [selectedTool]);

  const onNodesChange = useCallback(
    (changes) => setNodes((prevNodes) => applyNodeChanges(changes, prevNodes)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((prevEdges) => applyEdgeChanges(changes, prevEdges)),
    []
  );
  const onConnect = useCallback(
    (params) => setEdges((prevEdges) => addEdge(params, prevEdges)),
    []
  );

  return (
    <>
      <div style={{ height: "800px" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
        >
          <Controls />
        </ReactFlow>
      </div>
    </>
  );
}
