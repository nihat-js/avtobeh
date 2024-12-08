import React, { useState } from "react";

const UploadImages = () => {
  const [items, setItems] = useState([
    { id: 1, content: "Item 1 (2x1)", span: "row-span-2" },
    { id: 2, content: "Item 2" },
    { id: 3, content: "Item 3" },
    { id: 4, content: "Item 4" },
    { id: 5, content: "Item 5" },
  ]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("draggedItem", index);
  };

  const handleDrop = (e, targetIndex) => {
    const draggedIndex = e.dataTransfer.getData("draggedItem");
    if (draggedIndex === targetIndex) return; // Prevent reordering to the same position

    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(draggedIndex, 1);
    updatedItems.splice(targetIndex, 0, draggedItem);

    setItems(updatedItems); // Reorder items
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Necessary to allow drop
  };

  return (
    <div className="grid grid-cols-5 gap-4">
      {items.map((item, index) => (
        <div
          key={item.id}
          style={{height: "100px"}}
          className={`${
            item.span || "col-span-1"
          } bg-blue-500 border-dotted text-white p-6 flex items-center justify-center cursor-pointer`}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default UploadImages;
