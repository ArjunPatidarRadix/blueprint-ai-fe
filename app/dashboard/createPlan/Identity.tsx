import React, { useState } from "react";
import Statement from "./Statement";
import Button from "@/app/components/Button";
import Page from "../page";
import { useRouter } from "next/navigation";

const Identity: React.FC = () => {
  const router = useRouter();
  const [identityElements, setIdentityElements] = useState([
    {
      title: "Identity",
      isStatementAvailable: false,
      onViewClick: () => router.push("/StatementDetail?From=Identity"),
    },
    {
      title: "Vision",
      isStatementAvailable: true,
      onViewClick: () => router.push("/StatementDetail?From=Vision"),
    },
    {
      title: "Mission",
      isStatementAvailable: false,
      onViewClick: () => router.push("/StatementDetail?From=Mission"),
    },
    {
      title: "Value",
      isStatementAvailable: false,
      onViewClick: () => router.push("/StatementDetail?From=Value"),
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
