import React, { useState } from "react";
import Statement from "./Statement";
import Button from "@/app/components/Button";
import Modal from "./StatementModal/Modal";

const Identity: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalName, setModalName] = useState("");
  const [identityElements, setIdentityElements] = useState([
    {
      title: "Identity",
      isStatementAvailable: false,
      onViewClick: () => {
        setModalName("identity");
        setShowModal(true);
      },
    },
    {
      title: "Vision",
      isStatementAvailable: true,
      onViewClick: () => {
        setModalName("vision");
        setShowModal(true);
      },
    },
    {
      title: "Mission",
      isStatementAvailable: false,
      onViewClick: () => {
        setModalName("mission");
        setShowModal(true);
      },
    },
    {
      title: "Value",
      isStatementAvailable: false,
      onViewClick: () => {
        setModalName("value");
        setShowModal(true);
      },
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
      <Modal
        from={modalName}
        isVisible={showModal}
        setIsVisible={() => {
          setShowModal(false);
          setModalName("");
        }}
      />
    </div>
  );
};

export default Identity;
