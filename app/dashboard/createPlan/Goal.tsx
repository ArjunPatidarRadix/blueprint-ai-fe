import React, { useState } from "react";
import Statement from "./Statement";
import Button from "@/app/components/Button";

import { GoalProperty } from '../../Enums/PlanPropertyEnums'

const Goal: React.FC = () => {
  const [goalElements, setGoalElements] = useState([
    {
      title: "Culture",
      value: GoalProperty.CULTURE,
    },
    {
      title: "Outcome",
      value: GoalProperty.OUTCOME,
    },
    {
      title: "Position",
      value: GoalProperty.POSITION,
    },
  ]);

  const addStatement = () => {
    setGoalElements([
      ...goalElements,
      {
        title: "Custom Field",
        value: '',
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
    </div>
  );
};

export default Goal;
