import React, { useState } from "react";
import Statement from "./Statement";
import Button from "@/app/components/Button";
import { IdentityProperty } from '../../Enums/PlanPropertyEnums';

const Identity: React.FC = () => {
  const [identityElements, setIdentityElements] = useState([
    {
      title: 'Identity',
      values: IdentityProperty.IDENTITY,
    },
    {
      title: "Vision",
      values: IdentityProperty.VISION,
    },
    {
      title: "Mission",
      values: IdentityProperty.MISSION,
    },
    {
      title: "Value",
      values: IdentityProperty.VALUE,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");

  const addStatement = () => {
    setIdentityElements([
      ...identityElements,
      {
        title: title || "Custom Field", // Use the provided title or default to "Custom Field"
        values: "", // You can adjust this according to your requirement
      },
    ]);
    setTitle(""); // Reset title after adding
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div>
      <div className="mb-4 flex justify-end mr-20">
        {identityElements.length < 7 ? (
          <Button label="+ Add" onClick={() => setIsModalOpen(true)} type="button" />
        ) : null}
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {identityElements.map((element, index) => (
          <Statement
            key={index} // Ensure to add a unique key
            title={element.title}
            value={element.values}
          />
        ))}
      </div>

      {/* Modal for title input */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-md w-1/3">
            <h2 className="text-xl font-semibold mb-4">Enter Title</h2>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title name"
              className="border border-gray-300 p-2 w-full rounded-md mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded-md"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={addStatement}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Identity;
