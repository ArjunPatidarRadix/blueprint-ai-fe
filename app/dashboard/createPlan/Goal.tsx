import React, { useState } from "react";
import Statement from "./Statement";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";

const Goal: React.FC = () => {
  const router = useRouter();
  const [goalElements, setGoalElements] = useState([
    {
      title: "Culture",
      isStatementAvailable: false,
      onViewClick: () => router.push("/StatementDetail?From=Culture"),
    },
    {
      title: "Outcome",
      isStatementAvailable: false,
      onViewClick: () => router.push("/StatementDetail?From=Outcome"),
    },
    {
      title: "Position",
      isStatementAvailable: true,
      onViewClick: () => router.push("/StatementDetail?From=Position"),
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
