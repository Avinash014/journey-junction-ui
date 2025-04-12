import { useState } from "react";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";

const components = [
  "Title",
  "Topic",
  "Sub Topic",
  "Paragraph",
  "Label",
  "Button",
  "Legend",
  "Todo",
  "Checklist",
  "Links Group",
  "Horizontal Line",
  "Vertical Line",
  "Resource Button",
  "Section",
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`h-full bg-white border-r transition-all duration-300 ease-in-out ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Toggle button */}
      <div className="flex justify-end p-2">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-500 hover:text-gray-700"
        >
          {collapsed ? (
            <ChevronDoubleRightIcon className="w-5 h-5" />
          ) : (
            <ChevronDoubleLeftIcon className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Component List */}
      {!collapsed && (
        <div className="px-4">
          <h2 className="text-xs text-gray-500 mb-2 uppercase font-semibold">
            Components (Drag & Drop)
          </h2>
          <div className="space-y-2">
            {components.map((item) => (
              <button
                key={item}
                className="w-full text-left px-4 py-2 rounded border text-sm font-medium bg-white hover:bg-gray-100"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
