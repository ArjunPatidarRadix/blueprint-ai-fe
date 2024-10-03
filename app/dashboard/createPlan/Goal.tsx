import React, { useState } from "react";
import Statement from "./Statement";
import Button from "@/app/components/Button";
import Modal from "./StatementModal/Modal";

import { GoalProperty } from "../../Enums/PlanPropertyEnums";

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
      value: GoalProperty.CULTURE,
    },
    {
      title: "Outcome",
      isStatementAvailable: false,
      onViewClick: () => {
        setModalName("outcome");
        setShowModal(true);
      },
      value: GoalProperty.OUTCOME,
    },
    {
      title: "Position",
      isStatementAvailable: true,
      onViewClick: () => {
        setModalName("position");
        setShowModal(true);
      },
      value: GoalProperty.POSITION,
    },
  ]);

  const addStatement = () => {
    setGoalElements([
      ...goalElements,
      {
        title: "Custom Field",
        value: "",
      },
    ]);
  };

  return (
    <div>
      <div className="mb-4 flex justify-end mr-20">
        {goalElements.length < 7 ? (
          <Button label="+ Add" onClick={addStatement} type="button" />
        ) : null}
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {goalElements.map((element, index) => (
          <Statement
            key={index}
            title={element.title}
            value={element.value}
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
