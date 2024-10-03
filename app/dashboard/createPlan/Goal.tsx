import React, { useState } from "react";
import Statement from "./Statement";
import Button from "@/app/components/Button";
import Modal from "./StatementModal/Modal";

const Goal: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalName, setModalName] = useState("");
  const [goalElements, setGoalElements] = useState([
    {
      title: "Culture",
      isStatementAvailable: false,
      onViewClick: () => {
        setModalName("culture");
        setShowModal(true);
      },
    },
    {
      title: "Outcome",
      isStatementAvailable: false,
      onViewClick: () => {
        setModalName("outcome");
        setShowModal(true);
      },
    },
    {
      title: "Position",
      isStatementAvailable: true,
      onViewClick: () => {
        setModalName("position");
        setShowModal(true);
      },
    },
  ]);

  const addStatement = () => {
    setGoalElements([
      ...goalElements,
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
        {goalElements.length < 7 ? (
          <Button label="+ Add" onClick={addStatement} type="button" />
        ) : null}
      </div>

      <div>
        {goalElements.map((element, index) => (
          <Statement
            key={index}
            title={element.title}
            isStatementAvailable={element.isStatementAvailable}
            onViewClick={element.onViewClick}
            statementFor="Goal"
          />
        ))}
      </div>
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

export default Goal;
