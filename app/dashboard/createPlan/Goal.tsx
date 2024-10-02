import React, { useState } from "react";
import Statement from "./Statement";
import Button from "@/app/components/Button";

const Goal: React.FC = () => {
  const [goalElements, setGoalElements] = useState([
    {
      title: "Culture",
      isStatementAvailable: false,
      onViewClick: () => alert("I2"),
    },
    {
      title: "Outcome",
      isStatementAvailable: false,
      onViewClick: () => alert("I2"),
    },
    {
      title: "Position",
      isStatementAvailable: true,
      onViewClick: () => alert("I2"),
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
    </div>
  );
};

export default Goal;
