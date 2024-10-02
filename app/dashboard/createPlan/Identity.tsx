import React, { useState } from "react";
import Statement from "./Statement";
import Button from "@/app/components/Button";

const Identity: React.FC = () => {
  const [identityElements, setIdentityElements] = useState([
    {
      title: "Identity",
      isStatementAvailable: false,
      onViewClick: () => alert("I1"),
    },
    {
      title: "Vision",
      isStatementAvailable: true,
      onViewClick: () => alert("I1"),
    },
    {
      title: "Mission",
      isStatementAvailable: false,
      onViewClick: () => alert("I1"),
    },
    {
      title: "Value",
      isStatementAvailable: false,
      onViewClick: () => alert("I1"),
    },
  ]);

  const addStatement = () => {
    setIdentityElements([
      ...identityElements,
      {
        title: "Custom Field",
        isStatementAvailable: false,
        onViewClick: () => alert(`Customfield clicked`),
      },
    ]);
  };

  return (
    <div>
      <div className="mb-4">
        {identityElements.length < 7 ? (
          <Button label="+ Add" onClick={addStatement} type="button" />
        ) : null}
      </div>
      {identityElements.map((element, index) => (
        <Statement
          key={index} // Ensure to add a unique key
          title={element.title}
          isStatementAvailable={element.isStatementAvailable}
          onViewClick={element.onViewClick}
          statementFor="Identity"
        />
      ))}
    </div>
  );
};

export default Identity;
